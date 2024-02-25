var Imported = Imported || {};
Imported.MSEP_SectionedGauges = true;

var MageStudios = MageStudios || {};
MageStudios.SecGauge = MageStudios.SecGauge || {};
MageStudios.SecGauge.version = 1.0;

/*:
 * @plugindesc Section up your gauges to make them easier to read.
 * @author Mage Studios Engine Plugins + Tigress Collaboration
 *
 * @param ---Sections---
 * @default
 *
 * @param HP Gauge Sections
 * @parent ---Sections---
 * @type Number
 * @min 1
 * @desc How many sections do you want for your HP gauges?
 * @default 10
 *
 * @param MP Gauge Sections
 * @parent ---Sections---
 * @type Number
 * @min 1
 * @desc How many sections do you want for your MP gauges?
 * @default 4
 *
 * @param TP Gauge Sections
 * @parent ---Sections---
 * @type Number
 * @min 1
 * @desc How many sections do you want for your TP gauges?
 * @default 4
 *
 * @param ---Status Menu Core---
 * @default
 *
 * @param EXP Gauge Sections
 * @parent ---Status Menu Core---
 * @type Number
 * @min 1
 * @desc How many sections do you want for your EXP gauges?
 * @default 10
 *
 * @param Param Gauge Sections
 * @parent ---Status Menu Core---
 * @type Number
 * @min 1
 * @desc How many sections do you want for your Param gauges?
 * @default 10
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Plain old gauges can be kind of hard to read when they're a bit too long.
 * Make them more visually friendly by sectioning them up so the player has a
 * better idea of how much of a battler's HP, MP, or TP is left. You can set
 * how many sections you want for the gauges, too.
 *
 * This plugin is plug and play, but you can adjust the plugin parameters to
 * fit the settings and needs of your game. Adjust the values found in the
 * plugin's parameters to adjust the mentioned aspect to change up the sections
 * found in a gauge's HP, MP, or TP. Sections are divided up into percentile
 * parts of the gauge allowing for the player to easily read the percentile
 * value of an HP, MP, or TP gauge.
 *
 * The Status Menu Core also has compatibility with this plugin to display
 * sectioned gauges for the EXP gauges and the parameter gauges. Like with the
 * other plugin parameters, you can adjust the amount of sections added per
 * gauge with them to separate them for easier viewing.
 *
 * This is a collaboration plugin by Tigress and Mage to ensure compatibility
 * with the Mage Studios Engine Plugins library.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.03:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.02:
 * - Bug fix: adjusted gauge positioning issues courtesy of Fragrarch.
 *
 * Version 1.01:
 * - Bug fix: Was missing a compatibility check.
 *
 * Version 1.00:
 * - Finished Plugin!
 */

if (Imported.MSEP_SegmentedGauges) {
  var text =
    "================================================================\n";
  text +=
    "You are trying to use MSEP_SectionedGauges with MSEP_SegmentedGauges.\n";
  text += "These two plugins cannot be used with each other. Please disable\n";
  text += "one or the other.\n";
  text += "================================================================\n";
  console.log(text);
  require("nw.gui").Window.get().showDevTools();
} else {
  MageStudios.Parameters = PluginManager.parameters("MSEP_SectionedGauges");
  MageStudios.Param = MageStudios.Param || {};

  MageStudios.Param.SectionGaugesHp = Number(
    MageStudios.Parameters["HP Gauge Sections"]
  );
  MageStudios.Param.SectionGaugesMp = Number(
    MageStudios.Parameters["MP Gauge Sections"]
  );
  MageStudios.Param.SectionGaugesTp = Number(
    MageStudios.Parameters["TP Gauge Sections"]
  );

  MageStudios.Param.SectionGaugesExp = Number(
    MageStudios.Parameters["EXP Gauge Sections"]
  );
  MageStudios.Param.SectionGaugesParam = Number(
    MageStudios.Parameters["Param Gauge Sections"]
  );

  MageStudios.SecGauge.Window_Base_initialize =
    Window_Base.prototype.initialize;
  Window_Base.prototype.initialize = function (x, y, width, height) {
    this.clearGaugeSections();
    MageStudios.SecGauge.Window_Base_initialize.call(this, x, y, width, height);
  };

  MageStudios.SecGauge.Window_Base_drawActorHp =
    Window_Base.prototype.drawActorHp;
  Window_Base.prototype.drawActorHp = function (actor, x, y, width) {
    this.setGaugeSections(MageStudios.Param.SectionGaugesHp);
    MageStudios.SecGauge.Window_Base_drawActorHp.call(this, actor, x, y, width);
    this.clearGaugeSections();
  };

  MageStudios.SecGauge.Window_Base_drawActorMp =
    Window_Base.prototype.drawActorMp;
  Window_Base.prototype.drawActorMp = function (actor, x, y, width) {
    this.setGaugeSections(MageStudios.Param.SectionGaugesMp);
    MageStudios.SecGauge.Window_Base_drawActorMp.call(this, actor, x, y, width);
    this.clearGaugeSections();
  };

  MageStudios.SecGauge.Window_Base_drawActorTp =
    Window_Base.prototype.drawActorTp;
  Window_Base.prototype.drawActorTp = function (actor, x, y, width) {
    this.setGaugeSections(MageStudios.Param.SectionGaugesTp);
    MageStudios.SecGauge.Window_Base_drawActorTp.call(this, actor, x, y, width);
    this.clearGaugeSections();
  };

  Window_Base.prototype.setGaugeSections = function (sections) {
    this._gaugeSections = sections;
  };

  Window_Base.prototype.clearGaugeSections = function () {
    this._gaugeSections = 0;
  };

  MageStudios.SecGauge.Window_Base_drawGauge = Window_Base.prototype.drawGauge;
  Window_Base.prototype.drawGauge = function (
    dx,
    dy,
    dw,
    rate,
    color1,
    color2
  ) {
    MageStudios.SecGauge.Window_Base_drawGauge.call(
      this,
      dx,
      dy,
      dw,
      rate,
      color1,
      color2
    );
    this.drawGaugeSections(dx, dy, dw, 0, 0);
  };

  Window_Base.prototype.drawGaugeSections = function (dx, dy, dw, xB, yB) {
    var sections = this._gaugeSections;
    if (sections) {
      var gaugeH = this.gaugeHeight() - 2;
      var gaugeY = dy + this.lineHeight() - gaugeH - 2 + yB;
      if (this.isGaugeOutline()) {
        dx += 1;
        dw -= 2;
        gaugeY -= 2;
      }
      dx += xB;
      var sectionWidth = dw / sections;
      if (sectionWidth > 0) {
        var color = this.gaugeBackColor();
        for (var i = 1; i < sections; ++i) {
          dx += sectionWidth;
          this.contents.fillRect(dx, gaugeY, 1, gaugeH, color);
        }
      }
    }
  };

  if (!Imported.MSEP_CoreEngine) {
    Window_Base.prototype.gaugeHeight = function () {
      return 6;
    };
  }

  Window_Base.prototype.isGaugeOutline = function () {
    if (this._isGaugeOutline === undefined) {
      if (Imported.MSEP_CoreEngine) {
        this._isGaugeOutline = eval(MageStudios.Param.GaugeOutline);
      } else {
        this._isGaugeOutline = false;
      }
    }
    return this._isGaugeOutline;
  };

  if (Imported.MSEP_X_VisualHpGauge) {
    MageStudios.SecGauge.Window_VisualHPGauge_drawActorHp =
      Window_VisualHPGauge.prototype.drawActorHp;
    Window_VisualHPGauge.prototype.drawActorHp = function (actor, x, y, w) {
      this.setGaugeSections(MageStudios.Param.SectionGaugesHp);
      MageStudios.SecGauge.Window_VisualHPGauge_drawActorHp.call(
        this,
        actor,
        x,
        y,
        w
      );
      this.clearGaugeSections();
    };

    MageStudios.SecGauge.Window_VisualHPGauge_drawGauge =
      Window_VisualHPGauge.prototype.drawGauge;
    Window_VisualHPGauge.prototype.drawGauge = function (
      dx,
      dy,
      dw,
      rate,
      color1,
      color2
    ) {
      MageStudios.SecGauge.Window_VisualHPGauge_drawGauge.call(
        this,
        dx,
        dy,
        dw,
        rate,
        color1,
        color2
      );
      this.drawGaugeSections(dx, dy, dw, 0, 1);
    };
  }

  if (Imported.MSEP_StatusMenuCore) {
    MageStudios.SecGauge.Window_StatusInfo_drawExpGauge =
      Window_StatusInfo.prototype.drawExpGauge;
    Window_StatusInfo.prototype.drawExpGauge = function (actor, rate, rect) {
      this.setGaugeSections(MageStudios.Param.SectionGaugesExp);
      MageStudios.SecGauge.Window_StatusInfo_drawExpGauge.call(
        this,
        actor,
        rate,
        rect
      );
      this.clearGaugeSections();
    };

    MageStudios.SecGauge.Window_StatusInfo_drawParamGauge =
      Window_StatusInfo.prototype.drawParamGauge;
    Window_StatusInfo.prototype.drawParamGauge = function (
      dx,
      dy,
      dw,
      paramId
    ) {
      this.setGaugeSections(MageStudios.Param.SectionGaugesParam);
      var rate = MageStudios.SecGauge.Window_StatusInfo_drawParamGauge.call(
        this,
        dx,
        dy,
        dw,
        paramId
      );
      this.clearGaugeSections();
      return rate;
    };
  }
}
