//=============================================================================
// Mage Studios Engine Plugins - Job Points
// MSEP_JobPoints.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_JobPoints = true;

var MageStudios = MageStudios || {};
MageStudios.JP = MageStudios.JP || {};
MageStudios.JP.version = 1.10;

//=============================================================================
 /*:
 * @plugindesc v1.10 This plugin by itself doesn't do much, but it enables
 * actors to acquire JP (job points) used for other plugins.
 * @author Mage Studios Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param JP Text
 * @parent ---General---
 * @desc This changes how you want JP to appear in the game.
 * @default JP
 *
 * @param JP Icon
 * @parent ---General---
 * @type number
 * @min 0
 * @desc This is the icon used for JP.
 * Use 0 if you wish to use no icon.
 * @default 188
 *
 * @param Max JP
 * @parent ---General---
 * @type number
 * @min 0
 * @desc This is the maximum JP an actor can have per class.
 * Use 0 if you wish to have no limit.
 * @default 0
 *
 * @param JP Per Action
 * @parent ---General---
 * @desc This is the amount of JP an actor gains for his/her
 * current class whenever he/she performs an action.
 * @default 10 + Math.randomInt(10)
 *
 * @param JP Per Level
 * @parent ---General---
 * @desc This is the amount of JP an actor gains per level up.
 * @default 100 + Math.randomInt(100)
 *
 * @param JP Per Enemy
 * @parent ---General---
 * @desc This is the amount of JP given per defeated enemy.
 * @default 50 + Math.randomInt(10)
 *
 * @param Show Results
 * @parent ---General---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Upon winning, show how much JP is earned for default?
 * NO - false     YES - true
 * @default true
 *
 * @param JP Gained in Battle
 * @parent ---General---
 * @desc Adjusts how the gained JP text is shown after battle.
 * %1 - Actor     %2 Value     %3 JP
 * @default %1 gains %2%3!
 *
 * @param Alive Actors
 * @parent ---General---
 * @type boolean
 * @on Alive Requirement
 * @off No Requirement
 * @desc Actors must be alive to receive JP earned from enemies.
 * NO - false     YES - true
 * @default true
 *
 * @param ---Menu---
 * @default
 *
 * @param Show In Menu
 * @parent ---Menu---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Display JP in the main menu?
 * NO - false     YES - true
 * @default true
 *
 * @param Menu Format
 * @parent ---Menu---
 * @desc How the JP text format in the menu appears.
 * %1 - Value     %2 - Amount     %3 - Icon
 * @default %1\c[4]%2\c[0]%3
 *
 * @param ---Victory Aftermath---
 * @default
 *
 * @param Enable Aftermath
 * @parent ---Victory Aftermath---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables Victory Aftermath windows.
 * NO - false     YES - true
 * @default true
 *
 * @param Aftermath Text
 * @parent ---Victory Aftermath---
 * @desc Text used to describe how much JP is earned.
 * @default JP Earned
 *
 * @param Aftermath Format
 * @parent ---Victory Aftermath---
 * @desc How the JP text format in the aftermath appears.
 * %1 - Value     %2 - Amount     %3 - Icon
 * @default +%1\c[4]%2\c[0]%3
 *
 * @param Aftermath JP Earned
 * @parent ---Victory Aftermath---
 * @desc Describes how much JP is earned per actor.
 * @default JP Earned in Battle
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin by itself will not change any major game functions, but instead,
 * it works in combination with other plugins that make use of this plugin's
 * functions should you decide to incorporate Job Points into your game.
 *
 * When Job Points are earned, they are given to the actor's current class. If
 * the actor were to switch classes, then the Job Points will be changed to
 * that class's Job Points until reverted back.
 *
 * ============================================================================
 * Victory Aftermath Compatibility
 * ============================================================================
 *
 * If you have the MSEP_VictoryAftermath plugin installed and wish to make use
 * of the JP windows, position this plugin lower than MSEP_VictoryAftermath in
 * the Plugin Manager.
 *
 * After that, if you wish to define the timing of the JP window to appear at
 * a certain point instead of the plugin doing it automatically, insert "JP" in
 * the "Victory Order" parameter within Victory Aftermath where you want the
 * JP window to appear.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Here are some notetags related to Job Points.
 *
 * Actor Notetags
 *   <Starting JP: x>
 *   Sets the actor's starting JP value to be x for the actor's initial class.
 *
 *   <Class x Starting JP: y>
 *   Sets the actor's starting JP value for class x to be y.
 *
 *   <JP Rate: x%>
 *   This changes the rate of JP gained by x%. By default, all objects have a
 *   default rate of 100%. Increasing this to 200% will increase JP gained by
 *   twice as much while 50% will halve the amount of JP gained.
 *
 * Skill and Item Notetags
 *   <JP Gain: x>
 *   This makes it so that the actor using this skill or item will gain x
 *   amount of JP instead of the default amount of JP found in the parameters.
 *
 *   <Target JP Gain: x>
 *   This makes it so that the target actor affected by this skill or item will
 *   gain x amount of JP.
 *
 * Class, Weapon, Armor, and State Notetag
 *   <JP Rate: x%>
 *   This changes the rate of JP gained by x%. By default, all objects have a
 *   default rate of 100%. Increasing this to 200% will increase JP gained by
 *   twice as much while 50% will halve the amount of JP gained.
 *
 * Enemy Notetag
 *   <JP: x>
 *   When the enemy is defeated, the party members present will gain x JP each.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * For those wondering how to manually give, remove, or set JP for an actor,
 * you can use the following Plugin Commands.
 *
 * Plugin Commands:
 *
 *   gainJp actorId jp
 *   gainJp actorId jp classId
 *   Replace 'actorId' with the ID of the actor you wish to change the JP of.
 *   Replace 'jp' with the amount of JP you wish to alter. If you are using
 *   'classId', replace it with the ID of the actor's class you wish to alter.
 *   This command will let the actor gain JP.
 *
 *   loseJp actorId jp
 *   loseJp actorId jp classId
 *   Replace 'actorId' with the ID of the actor you wish to change the JP of.
 *   Replace 'jp' with the amount of JP you wish to alter. If you are using
 *   'classId', replace it with the ID of the actor's class you wish to alter.
 *   This command will cause the actor to lose JP.
 *
 *   setJp actorId jp
 *   setJp actorId jp classId
 *   Replace 'actorId' with the ID of the actor you wish to change the JP of.
 *   Replace 'jp' with the amount of JP you wish to alter. If you are using
 *   'classId', replace it with the ID of the actor's class you wish to alter.
 *   This command will set the actor's JP to a particular value.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.10:
 * - Bypass the isDevToolsOpen() error when bad code is inserted into a script
 * call or custom Lunatic Mode code segment due to updating to MV 1.6.1.
 *
 * Version 1.09:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.08:
 * - Lunatic Mode fail safes added.
 *
 * Version 1.07:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.06:
 * - Added 'Alive Actors' plugin parameter to prevent dead actors from gaining
 * JP from enemies. Any JP that currently dead actors earned in battle from
 * actions will still be 'earned' at the end of battle.
 *
 * Version 1.05:
 * - Updated compatibility for Subclasses gaining JP.
 *
 * Version 1.04a:
 * - Added failsafes to prevent JP from turning into NaN midbattle.
 * - Added failsafes to prevent no-target scopes from crashing the game.
 *
 * Version 1.03:
 * - Added 'Show Results' parameter to show/hide JP earned after battle for
 * those who aren't using the Victory Aftermath plugin.
 *
 * Version 1.02:
 * - Fixed a bug that would gain JP for changing classes of a higher level.
 *
 * Version 1.01:
 * - Added failsafes to prevent JP from turning into NaN.
 * 
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MEP_JobPoints');
MageStudios.Param = MageStudios.Param || {};
MageStudios.Icon = MageStudios.Icon || {};

MageStudios.Param.Jp = String(MageStudios.Parameters['JP Text']);
MageStudios.Icon.Jp = Number(MageStudios.Parameters['JP Icon']);
MageStudios.Param.JpMax = Number(MageStudios.Parameters['Max JP']);
MageStudios.Param.JpPerAction = String(MageStudios.Parameters['JP Per Action']);
MageStudios.Param.JpPerEnemy = String(MageStudios.Parameters['JP Per Enemy']);
MageStudios.Param.JpShowResults = eval(String(MageStudios.Parameters['Show Results']));
MageStudios.Param.JpTextFormat = String(MageStudios.Parameters['JP Gained in Battle']);
MageStudios.Param.JpAliveActors = eval(String(MageStudios.Parameters['Alive Actors']));

MageStudios.Param.JpShowMenu = String(MageStudios.Parameters['Show In Menu']);
MageStudios.Param.JpShowMenu = eval(MageStudios.Param.JpShowMenu);
MageStudios.Param.JpMenuFormat = String(MageStudios.Parameters['Menu Format']);

MageStudios.Param.JpPerLevel = String(MageStudios.Parameters['JP Per Level']);
MageStudios.Param.JpEnableAftermath = String(MageStudios.Parameters['Enable Aftermath']);
MageStudios.Param.JpAftermathText = String(MageStudios.Parameters['Aftermath Text']);
MageStudios.Param.JpAftermathFmt = String(MageStudios.Parameters['Aftermath Format']);
MageStudios.Param.JpAftermathEarn = String(MageStudios.Parameters['Aftermath JP Earned']);

//=============================================================================
// DataManager
//=============================================================================

MageStudios.JP.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!MageStudios.JP.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!MageStudios._loaded_MSEP_JobPoints) {
  	this.processJPNotetags1($dataActors);
    this.processJPNotetags2($dataSkills);
    this.processJPNotetags2($dataItems);
  	this.processJPNotetags3($dataEnemies);
  	this.processJPNotetags4($dataClasses);
  	this.processJPNotetags4($dataWeapons);
  	this.processJPNotetags4($dataArmors);
  	this.processJPNotetags4($dataStates);
    MageStudios._loaded_MSEP_JobPoints = true;
  }
	return true;
};

DataManager.processJPNotetags1 = function(group) {
  var note1 = /<(?:STARTING JP):[ ](\d+)>/i;
  var note2 = /<(?:CLASS)[ ](\d+)[ ](?:STARTING JP):[ ](\d+)>/i;
	var note3 = /<(?:JP RATE):[ ](\d+)([%％])>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.startingJp = {};
		obj.jpRate = 1.0;

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
				obj.startingJp[obj.classId] = parseInt(RegExp.$1);
			} else if (line.match(note2)) {
        obj.startingJp[parseInt(RegExp.$1)] = parseInt(RegExp.$2);
      } else if (line.match(note3)) {
				obj.jpRate = parseFloat(RegExp.$1 * 0.01);
			}
		}
	}
};

DataManager.processJPNotetags2 = function(group) {
  var note1 = /<(?:GAIN JP|JP GAIN):[ ](\d+)>/i;
  var note2 = /<(?:TARGET GAIN JP|TARGET JP GAIN):[ ](\d+)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.gainJp = MageStudios.Param.JpPerAction;
    obj.targetGainJp = 0;

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
				obj.gainJp = parseInt(RegExp.$1);
			} else if (line.match(note2)) {
				obj.targetGainJp = parseInt(RegExp.$1);
			}
		}
	}
};

DataManager.processJPNotetags3 = function(group) {
  var note1 = /<(?:JP):[ ](\d+)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.jp = MageStudios.Param.JpPerEnemy;

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
				obj.jp = parseInt(RegExp.$1);
			}
		}
	}
};

DataManager.processJPNotetags4 = function(group) {
  var note1 = /<(?:JP RATE):[ ](\d+)([%％])>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.jpRate = 1.0;

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
				obj.jpRate = parseFloat(RegExp.$1 * 0.01);
			}
		}
	}
};

//=============================================================================
// BattleManager
//=============================================================================

MageStudios.JP.BattleManager_makeRewards = BattleManager.makeRewards;
BattleManager.makeRewards = function() {
    MageStudios.JP.BattleManager_makeRewards.call(this);
    this._rewards.jp = $gameTroop.jpTotal();
    this.gainJp();
};

BattleManager.gainJp = function() {
		var jp = $gameTroop.jpTotal();
		$gameMessage.newPage();
    if (MageStudios.Param.JpAliveActors) {
      var members = $gameParty.aliveMembers();
    } else {
      var members = $gameParty.members();
    }
		members.forEach(function(actor) {
			actor.gainJp(jp);
		});
};

MageStudios.JP.BattleManager_displayRewards = BattleManager.displayRewards;
BattleManager.displayRewards = function() {
    MageStudios.JP.BattleManager_displayRewards.call(this);
		this.displayJpGain();
};

BattleManager.displayJpGain = function() {
    if (!MageStudios.Param.JpShowResults) return;
    var jp = $gameTroop.jpTotal();
    $gameMessage.newPage();
    $gameParty.members().forEach(function(actor) {
			var fmt = MageStudios.Param.JpTextFormat;
			var text = fmt.format(actor.name(), MageStudios.Util.toGroup(actor.battleJp()),
				MageStudios.Param.Jp);
			$gameMessage.add('\\.' + text);
		});
};

//=============================================================================
// Game_Battler
//=============================================================================

MageStudios.JP.Game_Battler_useItem = Game_Battler.prototype.useItem;
Game_Battler.prototype.useItem = function(item) {
    MageStudios.JP.Game_Battler_useItem.call(this, item);
    if (!$gameParty.inBattle()) return;
    if (this.isActor()) this.gainJp(eval(item.gainJp), this.currentClass().id);
};

MageStudios.JP.Game_Battler_onBattleStart = Game_Battler.prototype.onBattleStart;
Game_Battler.prototype.onBattleStart = function() {
    MageStudios.JP.Game_Battler_onBattleStart.call(this);
		this._battleJp = 0;
};

MageStudios.JP.Game_Battler_onBattleEnd = Game_Battler.prototype.onBattleEnd;
Game_Battler.prototype.onBattleEnd = function() {
    MageStudios.JP.Game_Battler_onBattleEnd.call(this);
    this._battleJp = 0;
};

//=============================================================================
// Game_Actor
//=============================================================================

MageStudios.JP.Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
    MageStudios.JP.Game_Actor_setup.call(this, actorId);
    this.initJp();
};

Game_Actor.prototype.jp = function(classId) {
    if (!this._jp) this.initJp();
		if (!this._jp) return 0;
    if (classId === undefined) classId = this.currentClass().id;
    if (!this._jp[classId]) this._jp[classId] = 0;
    return this._jp[classId];
};

Game_Actor.prototype.initJp = function() {
    var actor = this.actor();
    for (var i = 0; i < $dataClasses.length; i++) {
			if (actor.startingJp) {
				var jp = actor.startingJp[i] || 0;
				this.setJp(jp, i);
			}
    }
};

Game_Actor.prototype.setJp = function(value, classId) {
    value = parseInt(value);
    if (value === NaN) value = 0;
    classId = classId || this.currentClass().id;
		if (!this._jp) this._jp = {};
    if (!this._jp[classId]) this._jp[classId] = 0;
    this._jp[classId] = Math.max(0, value);
    if (MageStudios.Param.JpMax > 0) {
      this._jp[classId] = Math.min(MageStudios.Param.JpMax, value);
    }
};

Game_Actor.prototype.jpRate = function() {
		var rate = 1.0;
		rate *= this.actor().jpRate;
		rate *= this.currentClass().jpRate;
		var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (item) rate *= item.jpRate;
    }
		var states = this.states();
    for (var i = 0; i < states.length; i++) {
        var state = states[i];
        if (state) rate *= state.jpRate;
    }
		return rate;
};

Game_Actor.prototype.gainJp = function(value, classId) {
    value = parseInt(value);
    if (value === NaN) value = 0;
		classId = classId || this.currentClass().id;
		value = Math.floor(value * this.jpRate());
		if ($gameParty.inBattle()) {
      this._battleJp = this._battleJp || 0;
			this._battleJp += value;
		}
		this.setJp(this.jp(classId) + value, classId);
    if (classId === this.currentClass().id && this.isSublcassEarnJp()) {
      this.gainJpSubclass(value);
    }
};

Game_Actor.prototype.isSublcassEarnJp = function() {
    if (!Imported.MSEP_X_Subclass) return false;
    if (!this.subclass()) return false;
    return MageStudios.Param.SubclassJp;
};

Game_Actor.prototype.gainJpSubclass = function(value) {
    var classId = this.subclass().id;
    value = Math.round(value * MageStudios.Param.SubclassJp);
    this.setJp(this.jp(classId) + value, classId);
};

Game_Actor.prototype.loseJp = function(value, classId) {
		classId = classId || this.currentClass().id;
		this.setJp(this.jp(classId) - value, classId);
};

Game_Actor.prototype.battleJp = function() {
    this._battleJp = this._battleJp || 0;
		return this._battleJp;
};

MageStudios.JP.Game_Actor_changeClass = Game_Actor.prototype.changeClass;
Game_Actor.prototype.changeClass = function(classId, keepExp) {
    this._preventJpLevelUpGain = true;
    MageStudios.JP.Game_Actor_changeClass.call(this, classId, keepExp);
    this._preventJpLevelUpGain = false;
};

MageStudios.JP.Game_Actor_levelUp = Game_Actor.prototype.levelUp;
Game_Actor.prototype.levelUp = function() {
    MageStudios.JP.Game_Actor_levelUp.call(this);
    if (this._preventJpLevelUpGain) return;
    var user = this;
    var target = this;
    var a = this;
    var b = this;
    var level = this.level;
    var code = MageStudios.Param.JpPerLevel;
    try {
      var value = eval(code)
    } catch (e) {
      var value = 0;
      MageStudios.Util.displayError(e, code, 'LEVEL UP JP FORMULA ERROR');
    }
		this.gainJp(value, this.currentClass().id);
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.jp = function() {
    var user = this;
    var target = this;
    var a = this;
    var b = this;
    var code = this.enemy().jp;
    try {
      return eval(code);
    } catch (e) {
      MageStudios.Util.displayError(e, code, 'ENEMY JP FORMULA ERROR');
      return 0;
    }
};

//=============================================================================
// Game_Action
//=============================================================================

MageStudios.JP.Game_Action_applyItemUserEffect =
    Game_Action.prototype.applyItemUserEffect;
Game_Action.prototype.applyItemUserEffect = function(target) {
    MageStudios.JP.Game_Action_applyItemUserEffect.call(this, target);
    if (target) this.applyItemJpEffect(target);
};

Game_Action.prototype.applyItemJpEffect = function(target) {
    var item = this.item();
    if (!item) return;
    if (target.isActor()) target.gainJp(item.targetGainJp);
};

MageStudios.JP.Game_Action_hasItemAnyValidEffects =
    Game_Action.prototype.hasItemAnyValidEffects;
Game_Action.prototype.hasItemAnyValidEffects = function(target) {
    var item = this.item();
    if (!item) return;
    if (target.isActor() && item.targetGainJp !== 0) return true;
    return MageStudios.JP.Game_Action_hasItemAnyValidEffects.call(this, target);
};

//=============================================================================
// Game_Troop
//=============================================================================

Game_Troop.prototype.jpTotal = function() {
    return this.deadMembers().reduce(function(r, enemy) {
        return r + enemy.jp();
    }, 0);
};

//=============================================================================
// Game_Interpreter
//=============================================================================

MageStudios.JP.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    MageStudios.JP.Game_Interpreter_pluginCommand.call(this, command, args)
  	if (command === 'gainJp') this.modifyJp('gain', args);
    if (command === 'loseJp') this.modifyJp('lose', args);
    if (command === 'setJp') this.modifyJp('set', args);
};

Game_Interpreter.prototype.modifyJp = function(type, args) {
    if (!args) return;
    var actorId = parseInt(args[0]);
    var actor = $gameActors.actor(actorId);
    var jpValue = args[1] || 0;
    jpValue = parseInt(jpValue);
    var classId = args[2] || 0;
    classId = parseInt(classId);
    if (jpValue <= 0) return;
    if (classId <= 0) classId = actor.currentClass().id;
    if (type === 'gain') {
      actor.gainJp(jpValue, classId);
    } else if (type === 'lose') {
      actor.loseJp(jpValue, classId);
    } else if (type === 'set') {
      actor.setJp(jpValue, classId);
    }
};

//=============================================================================
// Window_Base
//=============================================================================

MageStudios.JP.Window_Base_dASS = Window_Base.prototype.drawActorSimpleStatus;
Window_Base.prototype.drawActorSimpleStatus = function(actor, wx, wy, ww) {
    this._drawMenuJP = MageStudios.Param.JpShowMenu;
    MageStudios.JP.Window_Base_dASS.call(this, actor, wx, wy, ww);
    this._drawMenuJP = undefined;
};

MageStudios.JP.Window_Base_drawActorClass = Window_Base.prototype.drawActorClass;
Window_Base.prototype.drawActorClass = function(actor, wx, wy, ww) {
    ww = ww || 168;
    MageStudios.JP.Window_Base_drawActorClass.call(this, actor, wx, wy, ww);
    if (!this._drawMenuJP) return;
    var classId = actor.currentClass().id;
    this.drawActorJp(actor, classId, wx, wy, ww, 'right');
};

Window_Base.prototype.drawActorJp = function(actor, id, wx, wy, ww, align) {
    var jp = actor.jp(id);
    var icon = '\\i[' + MageStudios.Icon.Jp + ']';
    var fmt = MageStudios.Param.JpMenuFormat;
    var text = fmt.format(MageStudios.Util.toGroup(jp), MageStudios.Param.Jp, icon);
    if (align === 'left') {
      wx = 0;
    } else if (align === 'center') {
      wx += (ww - this.textWidthEx(text)) / 2;
    } else {
      wx += ww - this.textWidthEx(text);
    }
    this.drawTextEx(text, wx, wy);
};

Window_Base.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height);
};

//=============================================================================
// Window_VictoryJp
//=============================================================================

if (Imported.MSEP_VictoryAftermath && MageStudios.Param.JpEnableAftermath) {

function Window_VictoryJp() {
    this.initialize.apply(this, arguments);
}

Window_VictoryJp.prototype = Object.create(Window_VictoryExp.prototype);
Window_VictoryJp.prototype.constructor = Window_VictoryJp;

Window_VictoryJp.prototype.drawActorGauge = function(actor, index) {
    this.clearGaugeRect(index);
    var rect = this.gaugeRect(index);
    this.changeTextColor(this.normalColor());
    this.drawActorName(actor, rect.x + 2, rect.y);
    this.drawLevel(actor, rect);
    this.drawJpGained(actor, rect);
};

Window_VictoryJp.prototype.drawJpGained = function(actor, rect) {
    var wy = rect.y + this.lineHeight() * 1;
    this.changeTextColor(this.systemColor());
    this.drawText(MageStudios.Param.JpAftermathEarn, rect.x + 2, wy, rect.width - 4,
      'left');
    var bonusJp = 1.0 * actor.battleJp() * this._tick /
      MageStudios.Param.VAGaugeTicks;
    var value = MageStudios.Util.toGroup(parseInt(bonusJp));
    var fmt = MageStudios.Param.JpAftermathFmt;
    var icon = '\\i[' + MageStudios.Icon.Jp + ']';
    var JpText = fmt.format(value, MageStudios.Param.Jp, icon);
    this.changeTextColor(this.normalColor());
    wx = rect.x + rect.width - this.textWidthEx(JpText);
    this.drawTextEx(JpText, wx, wy);
};

//=============================================================================
// Scene_Battle
//=============================================================================

MageStudios.JP.Scene_Battle_addCustomVictorySteps =
    Scene_Battle.prototype.addCustomVictorySteps;
Scene_Battle.prototype.addCustomVictorySteps = function(array) {
    array = MageStudios.JP.Scene_Battle_addCustomVictorySteps.call(this, array);
    if (!array.contains('JP')) array.push('JP');
    return array;
};

MageStudios.JP.Scene_Battle_updateVictorySteps =
    Scene_Battle.prototype.updateVictorySteps;
Scene_Battle.prototype.updateVictorySteps = function() {
    MageStudios.JP.Scene_Battle_updateVictorySteps.call(this);
    if (this.isVictoryStep('JP')) this.updateVictoryJp();
};

Scene_Battle.prototype.updateVictoryJp = function() {
    if (!this._victoryJpWindow) {
      this.createVictoryJp();
    } else if (this._victoryJpWindow.isReady()) {
      if (this.victoryTriggerContinue()) this.finishVictoryJp();
    }
};

Scene_Battle.prototype.createVictoryJp = function() {
    this._victoryTitleWindow.refresh(MageStudios.Param.JpAftermathText);
    this._victoryJpWindow = new Window_VictoryJp();
    this.addWindow(this._victoryJpWindow);
    this._victoryJpWindow.open();
};

Scene_Battle.prototype.finishVictoryJp = function() {
    SoundManager.playOk();
    this._victoryJpWindow.close();
    this.processNextVictoryStep();
};

}; // Imported.MSEP_VictoryAftermath

//=============================================================================
// Utilities
//=============================================================================

MageStudios.Util = MageStudios.Util || {};

if (!MageStudios.Util.toGroup) {
		MageStudios.Util.toGroup = function(inVal) {
				return inVal;
		}
};

MageStudios.Util.displayError = function(e, code, message) {
  console.log(message);
  console.log(code || 'NON-EXISTENT');
  console.error(e);
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    if (!require('nw.gui').Window.get().isDevToolsOpen()) {
      require('nw.gui').Window.get().showDevTools();
    }
  }
};

//=============================================================================
// End of File
//=============================================================================
