//=============================================================================
// Mage Studios Engine Plugins - Utility Common Events
// MSEP_UtilityCommonEvents.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_UtilityCommonEvents = true;

var MageStudios = MageStudios || {};
MageStudios.UCE = MageStudios.UCE || {};
MageStudios.UCE.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc v1.01 Make common events occur at specific gameplay points
 * such as on loading, after battles, etc.
 * @author Mage Studios Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Load Game Event
 * @parent ---General---
 * @type common_event
 * @desc Run this common event each time the player loads a game.
 * Set as 0 if you do not wish to run a common event.
 * @default 0
 *
 * @param Battle Won Event
 * @parent ---General---
 * @type common_event
 * @desc Run this common event each time the player wins a battle.
 * Set as 0 if you do not wish to run a common event.
 * @default 0
 *
 * @param Escape Battle Event
 * @parent ---General---
 * @type common_event
 * @desc Run this common event each time the player wins a battle.
 * Set as 0 if you do not wish to run a common event.
 * @default 0
 *
 * @param Close Menu Event
 * @parent ---General---
 * @type common_event
 * @desc Run this common event each time the player closes main menu.
 * Set as 0 if you do not wish to run a common event.
 * @default 0

 * @param ---Vehicles---
 * @default
 *
 * @param Boat Enter Event
 * @parent ---Vehicles---
 * @type common_event
 * @desc Run this common event each time the player enters a boat.
 * Set as 0 if you do not wish to run a common event.
 * @default 0
 *
 * @param Boat Exit Event
 * @parent ---Vehicles---
 * @type common_event
 * @desc Run this common event each time the player exits a boat.
 * Set as 0 if you do not wish to run a common event.
 * @default 0
 *
 * @param Ship Enter Event
 * @parent ---Vehicles---
 * @type common_event
 * @desc Run this common event each time the player enters a ship.
 * Set as 0 if you do not wish to run a common event.
 * @default 0
 *
 * @param Ship Exit Event
 * @parent ---Vehicles---
 * @type common_event
 * @desc Run this common event each time the player exits a ship.
 * Set as 0 if you do not wish to run a common event.
 * @default 0
 *
 * @param Airship Enter Event
 * @parent ---Vehicles---
 * @type common_event
 * @desc Run this common event each time the player enters airship.
 * Set as 0 if you do not wish to run a common event.
 * @default 0
 *
 * @param Airship Exit Event
 * @parent ---Vehicles---
 * @type common_event
 * @desc Run this common event each time the player exits airship.
 * Set as 0 if you do not wish to run a common event.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Sometimes, we'd like a little bit more control over the kinds of things that
 * occur during certain aspects of our RPG Maker projects. What could have been
 * easily done through common events is made more difficult because there are
 * no proper triggers to activate those common events. This plugin enables
 * certain triggers to occur from loading a game, winning a battle, escaping a
 * battle, and more.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * Change the plugin parameters for each of the triggers you want tied to a
 * common event to reflect the ID of that common event. The triggers will be
 * the following along with some examples of how they can be used:
 *
 * - Load Game -
 * Will occur whenever the game is loaded. This can be used for things like
 * story recaps, adjusting in-game timers, or checking for updates.
 *
 * - Battle Won -
 * Will proc whenever a battle is won and the player returns to the map. Can be
 * used for things like updating certain variables or statistics after battle.
 *
 * - Escape Battle -
 * Like the previous but will occur whenever the player escapes battle instead.
 * This can be used for things such as events where the player would have to be
 * on a stealth mission or whatever and escaping can bring them back into a
 * certain spot.
 *
 * - Close Menu -
 * Occurs when the player exits the main menu and returns to the map scene. Can
 * be used for recalibrating equipment, making checks, custom events, and more.
 *
 * - Vehicle Enter -
 * - Vehicle Exit -
 * These events will occur whenever the player will enter/exit the specific
 * vehicle. This can be used to enable/disable certain HUD's while in specific
 * vehicles to give a more immersive feeling.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
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

MageStudios.Parameters = PluginManager.parameters('MEP_UtilityCommonEvents');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.UtilCommonEvents = {
  load: Number(MageStudios.Parameters['Load Game Event']) || 0,
  battleWon: Number(MageStudios.Parameters['Battle Won Event']) || 0,
  battleEscape: Number(MageStudios.Parameters['Battle Escape Event']) || 0,
  closeMenu: Number(MageStudios.Parameters['Close Menu Event']) || 0,

  boatEnter: Number(MageStudios.Parameters['Boat Enter Event']) || 0,
  boatExit: Number(MageStudios.Parameters['Boat Exit Event']) || 0,
  shipEnter: Number(MageStudios.Parameters['Ship Enter Event']) || 0,
  shipExit: Number(MageStudios.Parameters['Ship Exit Event']) || 0,
  airshipEnter: Number(MageStudios.Parameters['Airship Enter Event']) || 0,
  airshipExit: Number(MageStudios.Parameters['Airship Exit Event']) || 0,
};

//=============================================================================
// DataManager
//=============================================================================

MageStudios.UCE.DataManager_loadGame = DataManager.loadGame;
DataManager.loadGame = function(savefileId) {
  var flag = MageStudios.UCE.DataManager_loadGame.call(this, savefileId);
  if (flag && MageStudios.Param.UtilCommonEvents['load'] > 0) {
    $gameTemp.reserveCommonEvent(MageStudios.Param.UtilCommonEvents['load']);
  }
  return flag;
};

//=============================================================================
// Game_System
//=============================================================================

MageStudios.UCE.Game_System_onBattleWin = Game_System.prototype.onBattleWin;
Game_System.prototype.onBattleWin = function() {
  MageStudios.UCE.Game_System_onBattleWin.call(this);
  if (MageStudios.Param.UtilCommonEvents['battleWon'] > 0) {
    $gameTemp.reserveCommonEvent(MageStudios.Param.UtilCommonEvents['battleWon']);
  }
};

MageStudios.UCE.Game_System_onBattleEscape = Game_System.prototype.onBattleEscape;
Game_System.prototype.onBattleEscape = function() {
  MageStudios.UCE.Game_System_onBattleEscape.call(this);
  if (MageStudios.Param.UtilCommonEvents['battleEscape'] > 0) {
    $gameTemp.reserveCommonEvent(MageStudios.Param.UtilCommonEvents['battleEscape']);
  }
};

//=============================================================================
// Game_Player
//=============================================================================

MageStudios.UCE.Game_Player_getOnVehicle = Game_Player.prototype.getOnVehicle;
Game_Player.prototype.getOnVehicle = function() {
  var success = MageStudios.UCE.Game_Player_getOnVehicle.call(this);
  if (success) {
    var events = MageStudios.Param.UtilCommonEvents;
    if (this._vehicleType === 'airship' && events.airshipEnter > 0) {
      $gameTemp.reserveCommonEvent(events.airshipEnter);
    } else if (this._vehicleType === 'ship' && events.shipEnter > 0) {
      $gameTemp.reserveCommonEvent(events.shipEnter);
    } else if (this._vehicleType === 'boat' && events.boatEnter > 0) {
      $gameTemp.reserveCommonEvent(events.boatEnter);
    }
  }
  return success;
};

MageStudios.UCE.Game_Player_getOffVehicle = Game_Player.prototype.getOffVehicle;
Game_Player.prototype.getOffVehicle = function() {
  var success = MageStudios.UCE.Game_Player_getOffVehicle.call(this);
  if (success) {
    var events = MageStudios.Param.UtilCommonEvents;
    if (this._vehicleType === 'airship' && events.airshipExit > 0) {
      $gameTemp.reserveCommonEvent(events.airshipExit);
    } else if (this._vehicleType === 'ship' && events.shipExit > 0) {
      $gameTemp.reserveCommonEvent(events.shipExit);
    } else if (this._vehicleType === 'boat' && events.boatExit > 0) {
      $gameTemp.reserveCommonEvent(events.boatExit);
    }
  }
  return success;
};

//=============================================================================
// Scene_Menu
//=============================================================================

MageStudios.UCE.Scene_Menu_createCommandWindow =
  Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
  MageStudios.UCE.Scene_Menu_createCommandWindow.call(this);
  this._commandWindow.setHandler('cancel', this.closeMainMenu.bind(this));
};

Scene_Menu.prototype.closeMainMenu = function() {
  this.popScene();
  if (MageStudios.Param.UtilCommonEvents['closeMenu'] > 0) {
    $gameTemp.reserveCommonEvent(MageStudios.Param.UtilCommonEvents['closeMenu']);
  }
};

//=============================================================================
// End of File
//=============================================================================