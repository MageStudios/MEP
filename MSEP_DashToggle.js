//=============================================================================
// Mage Studios Engine Plugins - Dash Toggle
// MSEP_DashToggle.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_DashToggle = true;

var MageStudios = MageStudios || {};
MageStudios.Dash = MageStudios.Dash || {};
MageStudios.Dash.version = 1.00

//=============================================================================
 /*:
 * @plugindesc RPG Maker MV lacks the ability to toggle dashing
 * on and off. This plugin will let you do so~
 * @author Mage Studios Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MV lacks the ability to toggle dashing on and off. This plugin
 * will enable you to toggle dashing on and off as well as provide certain
 * traits that will inhibit the party leader from being able to dash (such as
 * an extra heavy weapon).
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * You can use these notetags to add a disabled dashing trait. If the leading
 * party member has a trait that disables dashing, then the player cannot dash
 * while that actor is in the lead.
 *
 * Actor, Class, Weapon, Armor, and State Notetag:
 *
 *   <Disable Dashing>
 *   If the leading party member has a trait with this notetag, then the player
 *   cannot dash while that actor is in the lead.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * You can use these plugin commands to enable or disable dashing mid-game!
 *
 * Plugin Command
 *
 *   EnableDashing
 *   - Enables the player to be able to dash. However, this will not take
 *   priority in maps that disable dashing altogether.
 *
 *   DisableDashing
 *   - Disables the player from being able to dash.
 *
 *   ToggleDashing
 *   - This will enable/disable dashing. This will not take priority in maps
 *   that disable dashing altogether.
 *
 */
//=============================================================================

//=============================================================================
// DataManager
//=============================================================================

MageStudios.Dash.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!MageStudios.Dash.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!MageStudios._loaded_MSEP_DashToggle) {
    this.processDashNotetags1($dataActors);
    this.processDashNotetags1($dataClasses);
    this.processDashNotetags1($dataWeapons);
    this.processDashNotetags1($dataArmors);
    this.processDashNotetags1($dataStates);
    MageStudios._loaded_MSEP_DashToggle = true;
  }
  return true;
};

DataManager.processDashNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.disableDashing = false;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:DISABLE DASHING|DISABLE DASH)>/i)) {
        obj.disableDashing = true;
      }
    }
  }
};

//=============================================================================
// Game_System
//=============================================================================

MageStudios.Dash.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    MageStudios.Dash.Game_System_initialize.call(this);
    this.initDashToggle();
};

Game_System.prototype.initDashToggle = function() {
    this._disableDashing = false;
};

Game_System.prototype.isDashDisabled = function() {
    if (this._disableDashing === undefined) this.initDashToggle();
    return this._disableDashing;
};

Game_System.prototype.setDashDisabled = function(value) {
    if (this._disableDashing === undefined) this.initDashToggle();
    this._disableDashing = value;
};

//=============================================================================
// Game_Actor
//=============================================================================

MageStudios.Dash.Game_Actor_refresh = Game_Actor.prototype.refresh;
Game_Actor.prototype.refresh = function() {
    this._disableDashing = undefined;
    MageStudios.Dash.Game_Actor_refresh.call(this);
};

Game_Actor.prototype.isDashDisabled = function() {
    if (this._disableDashing !== undefined) return this._disableDashing;
    if (this.actor().disableDashing) {
      this._disableDashing = true;
      return this._disableDashing;
    }
    if (this.currentClass().disableDashing) {
      this._disableDashing = true;
      return this._disableDashing;
    }
    var length = this.equips().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.equips()[i];
      if (obj && obj.disableDashing) {
        this._disableDashing = true;
        return this._disableDashing;
      }
    }
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.disableDashing) {
        this._disableDashing = true;
        return this._disableDashing;
      }
    }
    this._disableDashing = false;
    return this._disableDashing;
};

//=============================================================================
// Game_Map
//=============================================================================

MageStudios.Dash.Game_Map_isDashDisabled = Game_Map.prototype.isDashDisabled;
Game_Map.prototype.isDashDisabled = function() {
    if ($gameSystem.isDashDisabled()) return true;
    if ($gameParty.members()[0]) {
      if ($gameParty.members()[0].isDashDisabled()) return true;
    }
    return MageStudios.Dash.Game_Map_isDashDisabled.call(this);
};

//=============================================================================
// Game_Interpreter
//=============================================================================

MageStudios.Dash.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  MageStudios.Dash.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'EnableDashing') {
    $gameSystem.setDashDisabled(false);
  } else if (command === 'DisableDashing') {
    $gameSystem.setDashDisabled(true);
  } else if (command === 'ToggleDashing') {
    $gameSystem.setDashDisabled(!$gameSystem.isDashDisabled());
  }
};

//=============================================================================
// End of File
//=============================================================================
