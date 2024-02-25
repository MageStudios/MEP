var Imported = Imported || {};
Imported.MSEP_X_VisualATBGauge = true;

var MageStudios = MageStudios || {};
MageStudios.VATB = MageStudios.VATB || {};
MageStudios.VATB.version = 1.0;

/*:
 * @plugindesc (Requires MSEP_BattleSysATB.js) Provides a visible ATB
 * gauge for your enemies!
 * @author Mage Studios Engine Plugins
 *
 * @param Show Gauges
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show individual gauges?
 * NO - false     YES - true
 * @default true
 *
 * @param Minimum Gauge Width
 * @type number
 * @min 1
 * @desc This is the minimum width in pixels for ATB Gauges.
 * @default 144
 *
 * @param Always Show
 * @type boolean
 * @on YES
 * @off NO
 * @desc Always show ATB Gauge or hide them during actions?
 * HIDE - false     SHOW - true
 * @default true
 *
 * @param Gauge Position
 * @type boolean
 * @on Above
 * @off Below
 * @desc Where do you wish to show the ATB gauge?
 * BELOW - false     ABOVE - true
 * @default false
 *
 * @param Y Buffer
 * @type number
 * @min 0
 * @desc How much do you wish to shift the gauge Y position?
 * @default -32
 *
 * @param Use Thick Gauges
 * @type boolean
 * @on Thick
 * @off Normal
 * @desc Use the thick gauges provided by this plugin?
 * Default - false     Thick - true
 * @default true
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires MSEP_BattleEngineCore and MSEP_X_BattleSysATB.
 * Make sure this plugin is located under MSEP_BattleEngineCore and
 * MSEP_X_BattleSysATB in the plugin list.
 *
 * This plugin will show the ATB Gauge for enemies if the current battle system
 * is ATB. The gauges can be shown either below or above the enemies.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are some notetags you can use to adjust the appearance of
 * the enemy's ATB Gauge.
 *
 * Enemy Notetags:
 *   <Show ATB Gauge>
 *   <Hide ATB Gauge>
 *   This will cause the ATB Gauge to be shown or hidden ignoring the default
 *   settings found in the parameters.
 *
 *   <ATB Gauge Width: x>
 *   This allows you to set the enemy's ATB Gauge width to x instead of having
 *   it match the enemy's battler graphic width.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.04:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.03:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.02:
 * - Optimization update.
 *
 * Version 1.01:
 * - Fixed a graphical issue to synchronize the opacity value with battlers!
 *
 * Version 1.00:
 * - Finished Plugin!
 */

if (Imported.MSEP_BattleEngineCore && Imported.MSEP_X_BattleSysATB) {
  MageStudios.Parameters = PluginManager.parameters("MSEP_X_VisualATBGauge");
  MageStudios.Param = MageStudios.Param || {};

  MageStudios.Param.VATBShowGauge = String(
    MageStudios.Parameters["Show Gauges"]
  );
  MageStudios.Param.VATBMinWidth = Number(
    MageStudios.Parameters["Minimum Gauge Width"]
  );
  MageStudios.Param.VATBAlwaysShow = eval(
    String(MageStudios.Parameters["Always Show"])
  );
  MageStudios.Param.VATBGaugePOS = eval(
    String(MageStudios.Parameters["Gauge Position"])
  );
  MageStudios.Param.VATBYBuffer = Number(MageStudios.Parameters["Y Buffer"]);
  MageStudios.Param.VATBThick = eval(
    String(MageStudios.Parameters["Use Thick Gauges"])
  );

  MageStudios.VATB.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
  DataManager.isDatabaseLoaded = function () {
    if (!MageStudios.VATB.DataManager_isDatabaseLoaded.call(this)) return false;
    if (!MageStudios._loaded_MSEP_X_VisualATBGauge) {
      this.processVATBNotetags1($dataEnemies);
      MageStudios._loaded_MSEP_X_VisualATBGauge = true;
    }
    return true;
  };

  DataManager.processVATBNotetags1 = function (group) {
    for (var n = 1; n < group.length; n++) {
      var obj = group[n];
      var notedata = obj.note.split(/[\r\n]+/);

      obj.showATBGauge = eval(MageStudios.Param.VATBShowGauge);
      obj.atbGaugeWidth = 0;

      for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(/<(?:SHOW ATB GAUGE)>/i)) {
          obj.showATBGauge = true;
        } else if (line.match(/<(?:HIDE ATB GAUGE)>/i)) {
          obj.showATBGauge = false;
        } else if (line.match(/<(?:ATB GAUGE WIDTH):[ ](\d+)>/i)) {
          obj.atbGaugeWidth = parseInt(RegExp.$1);
        }
      }
    }
  };

  Game_Enemy.prototype.showATBGauge = function () {
    return this.enemy().showATBGauge;
  };

  Game_Enemy.prototype.atbGaugeWidth = function () {
    if (this.enemy().hpGaugeWidth > 0) {
      var width = this.enemy().hpGaugeWidth;
    } else {
      var width = this.spriteWidth();
    }
    width = Math.max(width, MageStudios.Param.VATBMinWidth);
    return width & 1 ? width + 1 : width;
  };

  MageStudios.VATB.Sprite_Enemy_preSpriteInitialize =
    Sprite_Enemy.prototype.preSpriteInitialize;
  Sprite_Enemy.prototype.preSpriteInitialize = function (battler) {
    MageStudios.VATB.Sprite_Enemy_preSpriteInitialize.call(this, battler);
    this.createVisualATBWindow();
  };

  MageStudios.VATB.Sprite_Enemy_update = Sprite_Enemy.prototype.update;
  Sprite_Enemy.prototype.update = function () {
    MageStudios.VATB.Sprite_Enemy_update.call(this);
    this.addVisualATBWindow();
  };

  Sprite_Enemy.prototype.addVisualATBWindow = function () {
    if (!BattleManager.isATB()) return;
    if (this._addedVisualATB) return;
    this._addedVisualATB = true;
    this.parent.parent.addChild(this._visualATBWindow);
  };

  Sprite_Enemy.prototype.createVisualATBWindow = function () {
    if (!BattleManager.isATB()) return;
    this._visualATBWindow = new Window_EnemyVisualATB();
  };

  MageStudios.VATB.Sprite_Enemy_setBattler = Sprite_Enemy.prototype.setBattler;
  Sprite_Enemy.prototype.setBattler = function (battler) {
    MageStudios.VATB.Sprite_Enemy_setBattler.call(this, battler);
    if (this._visualATBWindow) this._visualATBWindow.setBattler(battler);
  };

  function Window_EnemyVisualATB() {
    this.initialize.apply(this, arguments);
  }

  Window_EnemyVisualATB.prototype = Object.create(Window_Base.prototype);
  Window_EnemyVisualATB.prototype.constructor = Window_EnemyVisualATB;

  Window_EnemyVisualATB.prototype.initialize = function () {
    Window_Base.prototype.initialize.call(this, 0, 0, 1, 1);
    this._battler = null;
    this._requestRefresh = false;
    this._currentATBSpeed = 0;
    this._currentATBCharge = 0;
    this.contentsOpacity = 0;
    this.opacity = 0;
  };

  Window_EnemyVisualATB.prototype.setBattler = function (battler) {
    if (this._battler === battler) return;
    this._battler = battler;
  };

  Window_EnemyVisualATB.prototype.update = function () {
    Window_Base.prototype.update.call(this);
    if (!this._battler) return;
    this.updateWindowAspects();
  };

  Window_EnemyVisualATB.prototype.updateWindowAspects = function () {
    this.updateWindowSize();
    this.updateWindowPosition();
    this.updateOpacity();
    this.updateATBPosition();
    this.updateRefresh();
  };

  Window_EnemyVisualATB.prototype.updateWindowSize = function () {
    var spriteWidth = this._battler.atbGaugeWidth();
    var width = spriteWidth + this.standardPadding() * 2;
    width = Math.min(width, Graphics.boxWidth + this.standardPadding() * 2);
    var height = this.lineHeight() + this.standardPadding() * 2;
    if (width === this.width && height === this.height) return;
    this.width = width;
    this.height = height;
    this.createContents();
    this._requestRefresh = true;
    this.makeWindowBoundaries();
  };

  Window_EnemyVisualATB.prototype.makeWindowBoundaries = function () {
    if (!this._requestRefresh) return;
    this._minX = -1 * this.standardPadding();
    this._maxX = Graphics.boxWidth - this.width + this.standardPadding();
    this._minY = -1 * this.standardPadding();
    this._maxY = Graphics.boxHeight - this.height + this.standardPadding();
    this._maxY -= SceneManager._scene._statusWindow.height;
  };

  Window_EnemyVisualATB.prototype.updateWindowPosition = function () {
    if (!this._battler) return;
    var battler = this._battler;
    this.x = battler.spritePosX();
    this.x -= Math.ceil(this.width / 2);
    this.x = this.x.clamp(this._minX, this._maxX);
    this.y = battler.spritePosY();
    if (MageStudios.Param.VATBGaugePOS) {
      this.y -= battler.spriteHeight();
    } else {
      this.y -= this.standardPadding();
    }
    this.y = this.y.clamp(this._minY, this._maxY);
    this.y += MageStudios.Param.VATBYBuffer;
  };

  Window_EnemyVisualATB.prototype.updateOpacity = function () {
    if (this.isShowWindow()) {
      this.contentsOpacity += 32;
    } else {
      this.contentsOpacity -= 32;
    }
    this.contentsOpacity = this.contentsOpacity.clamp(0, this.maxOpacity());
  };

  Window_EnemyVisualATB.prototype.maxOpacity = function () {
    return this._battler.battler().opacity;
  };

  Window_EnemyVisualATB.prototype.isShowWindow = function () {
    if (!this._battler.isAppeared()) return false;
    if (!this._battler.showATBGauge()) return false;
    if (this._battler.isDead()) return false;
    if (MageStudios.Param.VATBAlwaysShow) return true;
    return ["atb", "input"].contains(BattleManager._phase);
  };

  Window_EnemyVisualATB.prototype.updateATBPosition = function () {
    if (!this._battler) return;
    if (this._currentATBSpeed !== this._battler.atbSpeed()) {
      this._currentATBSpeed = this._battler.atbSpeed();
      this._requestRefresh = true;
    }
    if (this._currentATBSpeed !== this._battler.atbCharge()) {
      this._currentATBSpeed = this._battler.atbCharge();
      this._currentATBCharge = true;
    }
  };

  Window_EnemyVisualATB.prototype.updateRefresh = function () {
    if (this._requestRefresh) this.refresh();
  };

  Window_EnemyVisualATB.prototype.refresh = function () {
    this.contents.clear();
    if (!this._battler) return;
    this._requestRefresh = false;
    var wy = this.contents.height - this.lineHeight();
    var ww = this.contents.width;
    this.drawActorAtbGauge(this._battler, 0, wy, ww);
  };

  if (Imported.MSEP_CoreEngine && MageStudios.Param.VATBThick) {
    Window_EnemyVisualATB.prototype.drawGauge = function (
      dx,
      dy,
      dw,
      rate,
      color1,
      color2
    ) {
      var color3 = this.gaugeBackColor();
      var fillW = Math.floor(dw * rate).clamp(0, dw);
      var gaugeH = this.gaugeHeight();
      var gaugeY = dy + this.lineHeight() - gaugeH - 2;
      if (eval(MageStudios.Param.GaugeOutline)) {
        color3.paintOpacity = this.translucentOpacity();
        this.contents.fillRect(dx, gaugeY, dw, gaugeH, color3);
        dx += 2;
        gaugeY += 2;
        fillW = Math.max(0, fillW - 4);
        gaugeH -= 4;
      } else {
        var fillW = Math.floor(dw * rate);
        var gaugeY = dy + this.lineHeight() - gaugeH - 2;
        this.contents.fillRect(dx, gaugeY, dw, gaugeH, color3);
      }
      this.contents.gradientFillRect(dx, gaugeY, fillW, gaugeH, color1, color2);
    };
  }
}
