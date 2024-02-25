//=============================================================================
// Mage Studios Engine Plugins - Overkill Bonus
// MSEP_OverkillBonus.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_OverkillBonus = true;

var MageStudios = MageStudios || {};
MageStudios.OKB = MageStudios.OKB || {};
MageStudios.OKB.version = 1.02;

//=============================================================================
 /*:
 * @plugindesc v1.02 Extra rewards (EXP, Gold, Items) for overkilling
 * enemies in battle.
 * @author Mage Studios Engine Plugins + Tigress Collaboration
 *
 * @param Overkill Formula
 * @desc The default formula used for each enemy and how much DMG needs
 * to be dealt in a single hit on the killing blow.
 * @default 0.5 * enemy.mhp
 *
 * @param Overkill Animation
 * @type animation
 * @desc This animation will play on the enemy if the enemy is overkilled.
 * Leave this at 0 if you do not want to play any animations.
 * @default 13
 *
 * @param EXP Bonus Rate
 * @type number
 * @decimals 2
 * @min 0
 * @desc This is the bonus EXP modified when an enemy is ovekilled.
 * This is a rate. 0 is 0%. 1.00 is 100%. 0.50 is 50%.
 * @default 2.00
 *
 * @param EXP Bonus Flat
 * @type number
 * @min 0
 * @desc This is the bonus EXP given out when an enemy is ovekilled.
 * This is a flat amount.
 * @default 0
 *
 * @param Gold Bonus Rate
 * @type number
 * @decimals 2
 * @min 0
 * @desc This is the bonus Gold modified when an enemy is ovekilled.
 * This is a rate. 0 is 0%. 1.00 is 100%. 0.50 is 50%.
 * @default 2.00
 *
 * @param Gold Bonus Flat
 * @type number
 * @min 0
 * @desc This is the bonus Gold given out when an enemy is ovekilled.
 * This is a flat amount.
 * @default 0
 *
 * @param Drop Bonus Rate
 * @type number
 * @decimals 2
 * @min 0
 * @desc This is the bonus drop modified when an enemy is ovekilled.
 * This is a rate. 0 is 0%. 1.00 is 100%. 0.50 is 50%.
 * @default 2.00
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Overkill occurs when an actor defeats an enemy with excessive daMageStudios. All
 * enemies have an Overkill damage requirement and if a battler lands a killing
 * blow dealing damage equal to or greater than this number, an animation is
 * played on the enemy before the enemy collapses. When an enemy is overkilled,
 * that enemy will reward the player with more EXP, more gold, a higher drop
 * rate, and if MSEP_ExtraEnemyDrops is installed, more possibilities for extra
 * items under the condition of being Overkilled.
 *
 * This is a collaboration plugin by Tigress and Mage to ensure compatibility
 * with the Mage Studios Engine Plugins library.
 *
 * If you are using MSEP_ExtraEnemyDrops, place this plugin underneath that
 * plugin in the plugin manager list to get access to the Overkill condition
 * that is provided within this plugin.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert the following notetags into the enemy noteboxes you wish to alter the
 * overkill requirements for.
 *
 * Enemy Notetags
 *
 *   <Overkill Requirement: x>
 *   - Changes the enemy's overkill requirement to X. This is how much damage
 *   needs to be dealt minimum on the killing blow. You can use JS code here if
 *   you can fit it all on one line. Otherwise, use the notetag setup below in
 *   the Lunatic Mode section.
 *
 *   <Overkill Animation: x>
 *   - This is the animation played when the enemy is overkilled. Replace x
 *   with an animation ID from the database.
 *
 *   <Overkill EXP Rate: x%>
 *   <Overkill EXP Flat: x>
 *   - This is the bonus EXP gained when the enemy is overkilled. Replace x
 *   with a number value. This EXP gained from overkilling will be added on top
 *   of the already gained EXP.
 *
 *   <Overkill Gold Rate: x%>
 *   <Overkill Gold Flat: x>
 *   - This is the bonus gold gained when the enemy is overkilled. Replace x
 *   with a number value. This gold gained from overkilling will be added on
 *   top of the already gained gold.
 *
 *   <Overkill Drop Rate: x%>
 *   - This is the bonus drop rate gained when the enemy is overkilled. Replace
 *   x with the percent rate increase.
 *
 * ============================================================================
 * Extra Enemy Drops Compatibility - Conditional Drop - Overkill
 * ============================================================================
 *
 * To be used together with the MSEP_ExtraEnemyDrops plugin. Place this plugin
 * underneath MSEP_ExtraEnemyDrops in the plugin manager list for compatibility.
 * Then, you can use the following condition:
 *
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 * IS OVERKILLED
 *- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * This condition will pass only if the enemy is overkilled. If the overkill
 * requirement isn't met, there will be no additional changes to the drop rate.
 *- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Example:   Is Overkilled: +100%
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 *
 * One thing you can do to make Overkill only items is using something like the
 * following setup:
 *
 * <Conditional Potion Drop>
 *  is overkilled: +100%
 * </Conditional Potion Drop>
 *
 * This notetag setup will make the 'Potion' item only drop if the enemy has
 * been overkilled. Otherwise, nothing will come out of it.
 *
 * ============================================================================
 * Lunatic Mode - Custom Overkill Settings
 * ============================================================================
 *
 * This section is for those who wish to dabble with JavaScript a bit more to
 * make certain overkill aspects more customized.
 *
 * Enemy Notetags
 *
 *   --------------------------------------------------------------------------
 *
 *   <Overkill Requirement Formula>
 *    requirement = x;
 *   <Overkill Requirement Formula>
 *
 *   - Changes the enemy's overkill requirement to X. This is how much damage
 *   needs to be dealt minimum on the killing blow. You can use JS code here if
 *   you know how to code. The 'requirement' variable is the value that will be
 *   used to check if overkill is achieved.
 *
 *   --------------------------------------------------------------------------
 *
 *   <Custom Overkill Effect>
 *    // Insert any code you want here
 *   </Custom Overkill Effect>
 *
 *   - This code will run when the enemy is overkilled and collapses. The
 *   'enemy' variable used here will refer to the enemy itself. The JS code you
 *   can use here can be anything you want, including turning on switches,
 *   setting variables, anything that comes to mind.
 *
 *   --------------------------------------------------------------------------
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.02:
 * - Bypass the isDevToolsOpen() error when bad code is inserted into a script
 * call or custom Lunatic Mode code segment due to updating to MV 1.6.1.
 *
 * Version 1.01:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.setupParameters = function() {
  var parameters = PluginManager.parameters('MEP_OverkillBonus');
  this.Param = this.Param || {};
  this.Param.OverkillFormula = String(parameters['Overkill Formula']);
  this.Param.OverkillAniId = Number(parameters['Overkill Animation']);
  this.Param.OverkillExpRate = Number(parameters['EXP Bonus Rate']);
  this.Param.OverkillExpFlat = Number(parameters['EXP Bonus Flat']);
  this.Param.OverkillGoldRate = Number(parameters['Gold Bonus Rate']);
  this.Param.OverkillGoldFlat = Number(parameters['Gold Bonus Flat']);
  this.Param.OverkillDropRate = Number(parameters['Drop Bonus Rate']);
};

MageStudios.setupParameters(); // Setup Parameters

//=============================================================================
// DataManager
// ----------------------------------------------------------------------------
// Notetags added by Mage
//=============================================================================

MageStudios.OKB.DataManager_isDatabaseLoaded = 
  DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!MageStudios.OKB.DataManager_isDatabaseLoaded.call(this)) 
    return false;

  if (!MageStudios._loaded_MSEP_OverkillBonus) {
    this.processOverkillBonusNotetags1($dataEnemies);
    MageStudios._loaded_MSEP_OverkillBonus = true;
  }
  
  return true;
};

DataManager.processOverkillBonusNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.overkillFormula = 'requirement = ' + MageStudios.Param.OverkillFormula;
    obj.overkillAnimationId = MageStudios.Param.OverkillAniId;
    obj.overkillExpRate = MageStudios.Param.OverkillExpRate;
    obj.overkillExpFlat = MageStudios.Param.OverkillExpFlat;
    obj.overkillGoldRate = MageStudios.Param.OverkillGoldRate;
    obj.overkillGoldFlat = MageStudios.Param.OverkillGoldFlat;
    obj.overkillDropRate = MageStudios.Param.OverkillDropRate;
    obj.overkillEffect = '';
    var evalMode = 'none';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<OVERKILL REQUIREMENT:[ ](.*)>/i)) {
        obj.overkillFormula = 'requirement = ' + String(RegExp.$1);
      } else if (line.match(/<OVERKILL REQUIREMENT FORMULA>/i)) {
        evalMode = 'overkill formula';
        obj.overkillFormula = '';
      } else if (line.match(/<\/OVERKILL REQUIREMENT FORMULA>/i)) {
        evalMode = 'none';
      } else if (evalMode === 'overkill formula') {
        obj.overkillFormula += line + '\n';
      } else if (line.match(/<OVERKILL ANIMATION:[ ](\d+)>/i)) {
        obj.overkillAnimationId = parseInt(RegExp.$1);
      } else if (line.match(/<OVERKILL EXP RATE:[ ](\d+)([%％])>/i)) {
        obj.overkillExpRate = parseFloat(RegExp.$1) * 0.01;
      } else if (line.match(/<OVERKILL EXP FLAT:[ ](\d+)>/i)) {
        obj.overkillExpFlat = parseInt(RegExp.$1);
      } else if (line.match(/<OVERKILL GOLD RATE:[ ](\d+)([%％])>/i)) {
        obj.overkillGoldRate = parseFloat(RegExp.$1) * 0.01;
      } else if (line.match(/<OVERKILL GOLD FLAT:[ ](\d+)>/i)) {
        obj.overkillGoldFlat = parseInt(RegExp.$1);
      } else if (line.match(/<OVERKILL DROP RATE:[ ](\d+)([%％])>/i)) {
        obj.overkillDropRate = parseFloat(RegExp.$1) * 0.01;
      } else if (line.match(/<CUSTOM OVERKILL EFFECT>/i)) {
        evalMode = 'custom overkill effect';
      } else if (line.match(/<\/CUSTOM OVERKILL EFFECT>/i)) {
        evalMode = 'none';
      } else if (evalMode === 'custom overkill effect') {
        obj.overkillEffect += line + '\n';
      }
    }
  }
};

//=============================================================================
// Game_Action
//=============================================================================

MageStudios.OKB.Game_Action_executeHpDamage = Game_Action.prototype.executeHpDamage;
Game_Action.prototype.executeHpDamage = function(target, value) {
  MageStudios.OKB.Game_Action_executeHpDaMageStudios.call(this, target, value);
  if (target.isEnemy() && (target.hp < 1 || target.isDead())) {
    target.checkOverkill();
  }
};

//=============================================================================
// Game_Enemy
//=============================================================================

MageStudios.OKB.Game_Enemy_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y) {
  MageStudios.OKB.Game_Enemy_setup.call(this, enemyId, x, y);
  this.setOverkill(false);
};

Game_Enemy.prototype.checkOverkill = function() {
  var result = this._result;
  if (result) {
    var dmg = this._result.hpDamage;
    var requirement = this.overkillRequirement();
    if (dmg >= requirement) {
      this.setOverkill(true);
    }
  }
};

Game_Enemy.prototype.overkillRequirement = function() {
  if (this._overkillRequirement) {
    return this._overkillRequirement;
  }
  var user = this;
  var a = this;
  var b = this;
  var target = this;
  var enemy = this;
  var subject = this;
  var b = target;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  var requirement = 0;

  var code = this.enemy().overkillFormula;
  try {
    eval(code);
  } catch (e) {
    MageStudios.Util.displayError(e, code, 'OVERKILL FORMULA ERROR');
  }

  this._overkillRequirement = requirement;
  return this._overkillRequirement;
};

Game_Enemy.prototype.setOverkill = function(status) {
  this._overkill = status;
};

MageStudios.OKB.Game_Enemy_performCollapse = Game_Enemy.prototype.performCollapse;
Game_Enemy.prototype.performCollapse = function() {
  if (this.isOverkilled()) {
    this.performOverkillCollapse();
  }
  MageStudios.OKB.Game_Enemy_performCollapse.call(this);
  if (this.isOverkilled()) {
    this.performOverkillEffect();
  }
};

Game_Enemy.prototype.overkillAnimationId = function() {
  return this.enemy().overkillAnimationId;
};

Game_Enemy.prototype.performOverkillCollapse = function() {
  this.startAnimation(this.overkillAnimationId());
};

Game_Enemy.prototype.performOverkillEffect = function() {
  var user = this;
  var a = this;
  var b = this;
  var target = this;
  var enemy = this;
  var subject = this;
  var b = target;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  var code = this.enemy().overkillEffect;
  try {
    eval(code);
  } catch (e) {
    MageStudios.Util.displayError(e, code, 'OVERKILL EFFECT ERROR');
  }
};

Game_Enemy.prototype.isOverkilled = function() {
  return this._overkill;
};

MageStudios.OKB.Game_Enemy_exp = Game_Enemy.prototype.exp;
Game_Enemy.prototype.exp = function() {
  var exp = MageStudios.OKB.Game_Enemy_exp.call(this);
  if (this.isOverkilled()) {
    exp *= this.enemy().overkillExpRate;
    exp += this.enemy().overkillExpFlat;
  }
  return Math.round(exp);
};

MageStudios.OKB.Game_Enemy_gold = Game_Enemy.prototype.gold;
Game_Enemy.prototype.gold = function() {
  var gold = MageStudios.OKB.Game_Enemy_gold.call(this);
  if (this.isOverkilled()) {
    gold *= this.enemy().overkillGoldRate;
    gold += this.enemy().overkillGoldFlat;
  }
  return Math.round(gold);
};

MageStudios.OKB.Game_Enemy_dropItemRate = Game_Enemy.prototype.dropItemRate;
Game_Enemy.prototype.dropItemRate = function() {
  var dropRate = MageStudios.OKB.Game_Enemy_dropItemRate.call(this);
  if (this.isOverkilled()) {
    dropRate *= this.enemy().overkillDropRate;
  }
  return dropRate;
};

//=============================================================================
// Compatibility Stuff
// ----------------------------------------------------------------------------
// MSEP_ExtraEnemyDrops
//=============================================================================

if (Imported.MSEP_ExtraEnemyDrops) {

MageStudios.OKB.DropManager_meetsLineCondition = DropManager.meetsLineCondition;
DropManager.meetsLineCondition = function(line) {
  // IS OVERKILL
  if (line.match(/IS OVERKILL/i)) {
    return this.conditionIsOverkilled(line);
  }
  return MageStudios.OKB.DropManager_meetsLineCondition.call(this, line);
};

DropManager.conditionIsOverkilled = function(line) {
  return this._enemy.isOverkilled();
};

}; // Imported.MSEP_ExtraEnemyDrops

//=============================================================================
// Utilities
//=============================================================================

MageStudios.Util = MageStudios.Util || {};

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