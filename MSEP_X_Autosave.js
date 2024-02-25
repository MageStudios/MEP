//=============================================================================
// Mage Studios Engine Plugins - Save Core Extension - Autosave
// MSEP_X_Autosave.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_X_Autosave = true;

var MageStudios = MageStudios || {};
MageStudios.Autosave = MageStudios.Autosave || {};
MageStudios.Autosave.version = 1.00;

//=============================================================================
 /*:
 * @plugindesc v1.00 (Req MSEP_SaveCore.js) Adds Autosave functionality to your
 * RPG Maker game.
 * @author Mage Studios Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires MSEP_SaveCore. Make sure this plugin is located under
 * MSEP_SaveCore in the plugin list.
 *
 * Autosave is a common feature found in standard RPG's nowadays. Games would
 * save at certain triggers or upon changing maps so that the player won't lose
 * any progress in case they forget to manually save. This plugin adds in an
 * Autosave function to your game(s) and lets you control when to Autosave or
 * set it to do it automatically under certain conditions.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * There are three ways to go about Autosave with this plugin. Please read them
 * carefully and decide which one(s) is best suited for your game.
 *
 * ---
 *
 * Manual:
 * - By default, Autosave does not happen automatically with this plugin. You,
 * as the game dev, need to insert the Plugin Command: Autosave at the various
 * points you want the Autosave to occur. This one gives you the most control
 * over your game.
 *
 * ---
 *
 * Autosave on Map Load:
 * - This is a Plugin Parameter. When it is set to true, the game will Autosave
 * each time the map scene is loaded. This means entering a new map, coming out
 * of a menu, or finishing a battle. All three of those conditions causes the
 * Autosave function to activate.
 *
 * ---
 *
 * Autosave on Main Menu:
 * - This is a Plugin Parameter. When it is set to true, the game will Autosave
 * each time the player enters the Main Menu from the map scene. Autosave will
 * NOT occur any other way regarding the Main Menu, meaning that coming out of
 * the Item scene to the Main Menu will not activate Autosave.
 *
 * ---
 *
 * Autosaving will not occur if the player disables Autosave. If you don't want
 * to give the player the ability to disable Autosave, you can set the Plugin
 * Parameter "Show Option" to false.
 *
 * You can use all three methods of Autosaving together. You can have it done
 * manually, Autosave on loading a map, and Autosave on calling the Main Menu
 * to get the most coverage.
 *
 * *NOTE: Although you can use all three methods together, be mindful of your
 * players. Sometimes, saving a game could induce a bit of lag depending on how
 * big the save files are. Autosaving is no different. This is something that
 * cannot be fixed by plugins.
 *
 * *NOTE: Autosaving will not occur until the player saved manually at least
 * once in-game. After that, Autosave will take the slot that was used to save
 * and continue saving to it or whichever save slot the player moved to later.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * Autosave is manually done by the game developer using plugin commands. There
 * are also other plugin commands that can control autosaving, too.
 *
 *   Plugin Commands:
 *
 *      Autosave
 *      - This will make the game automatically save in the last saved file
 *      slot used by the player. If the player has started a new game and did
 *      not save into a slot yet, nothing will happen. If autosave is disabled
 *      by the player through the Options menu or disabled by the system with
 *      a plugin command, nothing will happen either.
 *
 *      EnableAutosave
 *      DisableAutosave
 *      - This will forcibly enable or disable autosaving done by the game.
 *      This will not bypass the player's option to disable Autosave if trying
 *      to enable it. The player's decision to disable Autosaving will take
 *      priority over the game dev's. If you wish to take this option away from
 *      the player, please change it in the plugin parameters.
 *
 * ============================================================================
 * Options Core Settings - Adding the New Option
 * ============================================================================
 *
 * If you are using MSEP_OptionsCore.js, you can add a new Option using this
 * plugin. Here's the following code/parameter settings you can use with it.
 *
 * ---------
 * Settings:
 * ---------
 * 
 * Name:
 * \i[231]Autosave
 *
 * Help Description:
 * Enables \c[4]Autosaving\c[0] for your game if ON.
 * You can still manually save your game.
 *
 * Symbol:
 * autosave
 *
 * Show/Hide:
 * show = Imported.AutosaveShowOpt;
 *
 * Enable:
 * enabled = true;
 *
 * Ext:
 * ext = 0;
 *
 * ----------
 * Functions:
 * ----------
 * 
 * Make Option Code:
 * this.addCommand(name, symbol, enabled, ext);
 *
 * Draw Option Code:
 * var rect = this.itemRectForText(index);
 * var statusWidth = this.statusWidth();
 * var titleWidth = rect.width - statusWidth;
 * this.resetTextColor();
 * this.changePaintOpacity(this.isCommandEnabled(index));
 * this.drawOptionsName(index);
 * this.drawOptionsOnOff(index);
 *
 * Process OK Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * this.changeValue(symbol, !value);
 *
 * Cursor Right Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * this.changeValue(symbol, true);
 * 
 * Cursor Left Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * this.changeValue(symbol, false);
 *
 * Default Config Code:
 * // Empty. Provided by this plugin.
 *
 * Save Config Code:
 * // Empty. Provided by this plugin.
 *
 * Load Config Code:
 * // Empty. Provided by this plugin.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.00:
 * - Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @param ---Automatic---
 * @default
 *
 * @param OnMapLoad
 * @text Autosave on Map Load
 * @parent ---Automatic---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Autosave whenever the map is loaded.
 * YES - true     NO - false
 * @default false
 *
 * @param OnMainMenu
 * @text Autosave on Main Menu
 * @parent ---Automatic---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Autosave whenever main menu is called.
 * YES - true     NO - false
 * @default false
 *
 * @param ---Option Menu---
 * @default
 *
 * @param Show Option
 * @parent ---Option Menu---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Give player the option to enable or disable Autosave?
 * YES - true     NO - false
 * @default true
 *
 * @param Option Name
 * @parent ---Option Menu---
 * @desc The option command text used in-game.
 * @default Autosave
 *
 * @param Default
 * @text Default Setting
 * @parent ---Option Menu---
 * @desc Do you want Autosaving to be enabled by default?
 * YES - true     NO - false
 * @default true
 *
 * @param ---Visual---
 * @default
 *
 * @param ShowAutosave
 * @text Show Autosave Message
 * @parent ---Visual---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Show a message when Autosave happens?
 * YES - true     NO - false
 * @default true
 *
 * @param AutosaveMsgSave
 * @text Autosave Message On Save
 * @parent ShowAutosave
 * @desc Text used for the auto save message.
 * Can use text codes.
 * @default \i[83]Autosave Complete!
 *
 * @param AutosaveMsgLoad
 * @text Autosave Message On Load
 * @parent ShowAutosave
 * @desc Text used for the auto save message.
 * Can use text codes.
 * @default \i[83]Autosave Loaded!
 *
 * @param MsgGradient1
 * @text Message Gradient 1
 * @parent ShowAutosave
 * @desc Hex color used for the softer gradient color.
 * rgba(0, 0, 0, 0) Reference: Red, Green, Blue, Alpha
 * @default rgba(0, 0, 0, 0)
 *
 * @param MsgGradient2
 * @text Message Gradient 2
 * @parent ShowAutosave
 * @desc Hex color used for the softer gradient color.
 * rgba(0, 0, 0, 0) Reference: Red, Green, Blue, Alpha
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param MsgGradientCode
 * @text Message Gradient Code
 * @parent ShowAutosave
 * @type note
 * @desc JavaScript code for those who would like to tweak
 * how the gradient is drawn.
 * @default "var textWidth = this.textWidthEx(this.message());\nvar half = this.textPadding() + Math.ceil(textWidth / 2);\nvar height = this.lineHeight();\nvar color1 = MageStudios.Param.AutosaveMsgColor1;\nvar color2 = MageStudios.Param.AutosaveMsgColor2;\nthis.contents.gradientFillRect(0, 0, half, height, color1, color2);\nthis.contents.gradientFillRect(half, 0, this.width - half, height, color2, color1);"
 *
 * @param MsgX
 * @text Message X
 * @parent ShowAutosave
 * @desc X position of the message.
 * You can use code here.
 * @default Graphics.boxWidth - 180
 *
 * @param MsgY
 * @text Message Y
 * @parent ShowAutosave
 * @desc Y position of the message.
 * You can use code here.
 * @default Graphics.boxHeight - this.fittingHeight(1) * 2
 *
 * @param MsgDuration
 * @text Message Duration
 * @parent ShowAutosave
 * @type number
 * @desc Duration of the message in frames.
 * @default 120
 *
 * @param FadeSpeed
 * @text Message Fade Speed
 * @parent ShowAutosave
 * @desc Fade speed of the window.
 * Lower - slower     Higher - faster
 * @default 16
 *
 */
//=============================================================================

if (Imported.MSEP_SaveCore) {

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MEP_X_Autosave');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.AutosaveOnMapLoad = eval(String(MageStudios.Parameters['OnMapLoad']));
MageStudios.Param.AutosaveOnMainMenu = eval(String(MageStudios.Parameters['OnMainMenu']));

MageStudios.Param.AutosaveShowOpt = eval(String(MageStudios.Parameters['Show Option']));
MageStudios.Param.AutosaveOptionCmd = String(MageStudios.Parameters['Option Name']);
MageStudios.Param.AutosaveDefault = eval(String(MageStudios.Parameters['Default']));

MageStudios.Param.AutosaveShowMsg = eval(String(MageStudios.Parameters['ShowAutosave']));
MageStudios.Param.AutosaveMsgSave = String(MageStudios.Parameters['AutosaveMsgSave']);
MageStudios.Param.AutosaveMsgLoad = String(MageStudios.Parameters['AutosaveMsgLoad']);
MageStudios.Param.AutosaveMsgColor1 = String(MageStudios.Parameters['MsgGradient1']);
MageStudios.Param.AutosaveMsgColor2 = String(MageStudios.Parameters['MsgGradient2']);
MageStudios.Param.AutosaveMsgCode = JSON.parse(MageStudios.Parameters['MsgGradientCode']);
MageStudios.Param.AutosaveMsgX = String(MageStudios.Parameters['MsgX']);
MageStudios.Param.AutosaveMsgY = String(MageStudios.Parameters['MsgY']);
MageStudios.Param.AutosaveMsgDur = Number(MageStudios.Parameters['MsgDuration']) || 120;
MageStudios.Param.AutosaveMsgFade = Number(MageStudios.Parameters['FadeSpeed']) || 16;

//=============================================================================
// ConfigManager
//=============================================================================

ConfigManager.autosave = MageStudios.Param.AutosaveDefault;

MageStudios.Autosave.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
  var config = MageStudios.Autosave.ConfigManager_makeData.call(this);
  config.autosave = this.autosave;
  return config;
};

MageStudios.Autosave.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
  MageStudios.Autosave.ConfigManager_applyData.call(this, config);
  this.autosave = config['autosave'] || MageStudios.Param.AutosaveDefault;
};

//=============================================================================
// DataManager
//=============================================================================

MageStudios.Autosave.DataManager_setupNewGame = DataManager.setupNewGame;
DataManager.setupNewGame = function() {
  MageStudios.Autosave.DataManager_setupNewGame.call(this);
  StorageManager.setCurrentAutosaveSlot(this._lastAccessedId);
  $gameTemp._autosaveNewGame = true;
  $gameTemp._autosaveLoading = false;
};

MageStudios.Autosave.DataManager_saveGame = DataManager.saveGameWithoutRescue;
DataManager.saveGameWithoutRescue = function(savefileId) {
  var value = MageStudios.Autosave.DataManager_saveGame.call(this, savefileId);
  $gameTemp._autosaveNewGame = false;
  $gameTemp._autosaveLoading = false;
  StorageManager.setCurrentAutosaveSlot(savefileId);
  return value;
};

MageStudios.Autosave.DataManager_loadGame = DataManager.loadGameWithoutRescue;
DataManager.loadGameWithoutRescue = function(savefileId) {
  var value = MageStudios.Autosave.DataManager_loadGame.call(this, savefileId);
  $gameTemp._autosaveNewGame = false;
  $gameTemp._autosaveLoading = true;
  StorageManager.setCurrentAutosaveSlot(savefileId);
  return value;
};

//=============================================================================
// StorageManager
//=============================================================================

StorageManager.getCurrentAutosaveSlot = function() {
  return this._currentAutosaveSlot;
};

StorageManager.setCurrentAutosaveSlot = function(savefileId) {
  this._currentAutosaveSlot = savefileId;
};

StorageManager.performAutosave = function() {
  if ($gameMap.mapId() <= 0) return;
  if ($gameTemp._autosaveNewGame) return;
  if (!$gameSystem.canAutosave()) return;
  SceneManager._scene.performAutosave();
};

//=============================================================================
// Game_System
//=============================================================================

MageStudios.Autosave.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
  MageStudios.Autosave.Game_System_initialize.call(this);
  this.initAutosave();
};

Game_System.prototype.initAutosave = function() {
  this._allowAutosave = true;
};

Game_System.prototype.canAutosave = function() {
  if (this._allowAutosave === undefined) this.initAutosave();
  return this._allowAutosave;
};

Game_System.prototype.setAutosave = function(value) {
  if (this._allowAutosave === undefined) this.initAutosave();
  this._allowAutosave = value;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

MageStudios.Autosave.Game_Interpreter_pluginCommand =
  Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  MageStudios.Autosave.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command.match(/EnableAutosave/i)) {
    $gameSystem.setAutosave(true);
  } else if (command.match(/DisableAutosave/i)) {
    $gameSystem.setAutosave(false);
  } else if (command.match(/Autosave/i)) {
    StorageManager.performAutosave();
  }
};

//=============================================================================
// Window_Options
//=============================================================================

MageStudios.Autosave.Window_Options_addGeneralOptions =
  Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function() {
  MageStudios.Autosave.Window_Options_addGeneralOptions.call(this);
  if (!Imported.MSEP_OptionsCore && MageStudios.Param.AutosaveShowOpt) {
    this.addCommand(MageStudios.Param.AutosaveOptionCmd, 'autosave');
  }
};

//=============================================================================
// Window_Autosave
//=============================================================================

function Window_Autosave() {
  this.initialize.apply(this, arguments);
}

Window_Autosave.prototype = Object.create(Window_Base.prototype);
Window_Autosave.prototype.constructor = Window_Autosave;

Window_Autosave.prototype.initialize = function() {
  var width = this.windowWidth();
  var height = this.windowHeight();
  var x = eval(MageStudios.Param.AutosaveMsgX);
  var y = eval(MageStudios.Param.AutosaveMsgY);
  Window_Base.prototype.initialize.call(this, x, y, width, height);
  this.opacity = 0;
  this.contentsOpacity = 0;
  this._showCount = 0;
  this.refresh();
  if ($gameTemp._autosaveLoading) {
    this.reveal();
    $gameTemp._autosaveLoading = false;
  }
};

Window_Autosave.prototype.standardPadding = function() {
  return 0;
};

Window_Autosave.prototype.windowWidth = function() {
  return Graphics.boxWidth;
};

Window_Autosave.prototype.windowHeight = function() {
  return this.fittingHeight(1);
};

Window_Autosave.prototype.update = function() {
  Window_Base.prototype.update.call(this);
  if (this._showCount > 0) {
    this.updateFadeIn();
    this._showCount--;
  } else {
    this.updateFadeOut();
  }
};

Window_Autosave.prototype.updateFadeIn = function() {
  this.contentsOpacity += MageStudios.Param.AutosaveMsgFade;
};

Window_Autosave.prototype.updateFadeOut = function() {
  this.contentsOpacity -= MageStudios.Param.AutosaveMsgFade;
};

Window_Autosave.prototype.reveal = function() {
  if (!MageStudios.Param.AutosaveShowMsg) return;
  if (this._showCount > 0) return;
  this._showCount = MageStudios.Param.AutosaveMsgDur;
  this.refresh();
};

Window_Autosave.prototype.message = function() {
  if ($gameTemp._autosaveLoading) {
    return MageStudios.Param.AutosaveMsgLoad;
  } else {
    return MageStudios.Param.AutosaveMsgSave;
  }
};

Window_Autosave.prototype.refresh = function() {
  this.contents.clear();
  this.drawGradient();
  this.drawTextEx(this.message(), this.textPadding(), 0);
};

Window_Autosave.prototype.drawGradient = function() {
  eval(MageStudios.Param.AutosaveMsgCode);
};

Window_Autosave.prototype.textWidthEx = function(text) {
  return this.drawTextEx(text, 0, this.contents.height);
};

//=============================================================================
// Scene_Base
//=============================================================================

Scene_Base.prototype.performAutosave = function() {
};

//=============================================================================
// Scene_Map
//=============================================================================

MageStudios.Autosave.Scene_Map_createAllWindows =
  Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function() {
  MageStudios.Autosave.Scene_Map_createAllWindows.call(this);
  this.createAutosaveMessageWindow();
};

Scene_Map.prototype.createAutosaveMessageWindow = function() {
  this._autosaveMsgWindow = new Window_Autosave();
  this.addChild(this._autosaveMsgWindow);
};

MageStudios.Autosave.Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
Scene_Map.prototype.onMapLoaded = function() {
  MageStudios.Autosave.Scene_Map_onMapLoaded.call(this);
  if (MageStudios.Param.AutosaveOnMapLoad) StorageManager.performAutosave();
};

MageStudios.Autosave.Scene_Map_callMenu = Scene_Map.prototype.callMenu;
Scene_Map.prototype.callMenu = function() {
  MageStudios.Autosave.Scene_Map_callMenu.call(this);
  if (MageStudios.Param.AutosaveOnMainMenu) StorageManager.performAutosave();
};

Scene_Map.prototype.performAutosave = function() {
  if ($gameMap.mapId() <= 0) return;
  if ($gameTemp._autosaveNewGame) return;
  if (!$gameSystem.canAutosave()) return;
  $gameSystem.onBeforeSave();
  DataManager.saveGameWithoutRescue(StorageManager.getCurrentAutosaveSlot());
  if (this._autosaveMsgWindow) this._autosaveMsgWindow.reveal();
};

//=============================================================================
// Save Core Check
//=============================================================================
} else {

Imported.MSEP_X_Autosave = false;
var text = '';
text += 'You are getting this error because you are trying to run ';
text += 'MEP_X_Autosave without the required plugins. Please visit ';
text += 'MageStudios.moe and install the required plugins neede for this plugin ';
text += 'found in this plugin\'s help file before you can use it.';
console.log(text);
require('nw.gui').Window.get().showDevTools();

}
//=============================================================================
// End of File
//=============================================================================