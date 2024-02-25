//=============================================================================
// Mage Studios Engine Plugins - Map Gold Window
// MSEP_MapGoldWindow.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_MapGoldWindow = true;

var MageStudios = MageStudios || {};
MageStudios.MGW = MageStudios.MGW || {};
MageStudios.MGW.version = 1.00

//=============================================================================
 /*:
 * @plugindesc Allows you to display the gold window on your map.
 * @author Mage Studios Engine Plugins
 *
 * @param Automatic Open
 * @type boolean
 * @on YES
 * @off NO
 * @desc Automatically open the map window by default?
 * NO - false     YES - true
 * @default true
 *
 * @param Default Position
 * @type number
 * @min 1
 * @max 9
 * @desc The default position of the gold window.
 * Refer to the numbers on the NumPad for screen position.
 * @default 9
 *
 * @param Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc The opacity value used for the gold window.
 * Default: 255
 * @default 255
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Ever wanted to display the gold window and leave it on the map screen for a
 * bit? This plugin will allow you to do that with just a few plugin commands.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * Use the following plugin commands to control the gold window.
 *
 * Plugin Command:
 *
 *   OpenMapGoldWindow
 *   Opens the map gold window.
 *
 *   CloseMapGoldWindow
 *   Closes the map gold window.
 *
 *   MapGoldWindowPosition x
 *   Changes the screen position of the map gold window to x. Refer to the
 *   NumPad for the screen position like below:
 *
 *   7   8   9
 *   4   5   6
 *   1   2   3
 *
 *   If you set the value to 0, it will maintain its current position but will
 *   automatically move itself to a different location if it intrudes on the
 *   message window.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.02:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.01:
 * - Fixed a bug where a finished message in battle would open up the gold
 * window if it is set to automatically open.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MSEP_MapGoldWindow');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.MGWAutomatic = eval(String(MageStudios.Parameters['Automatic Open']));
MageStudios.Param.MGWPosition = Number(MageStudios.Parameters['Default Position']);
MageStudios.Param.MGWOpacity = Number(MageStudios.Parameters['Opacity']);

//=============================================================================
// Game_System
//=============================================================================

MageStudios.MGW.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    MageStudios.MGW.Game_System_initialize.call(this);
    this.initMapGoldWindow();
};

Game_System.prototype.initMapGoldWindow = function() {
    this._mapGoldWindowAutoOpen = MageStudios.Param.MGWAutomatic;
    this._mapGoldWindowPosition = MageStudios.Param.MGWPosition;
};

Game_System.prototype.setMapGoldWindowAutoOpen = function(value) {
    this._mapGoldWindowAutoOpen = value;
};

Game_System.prototype.isMapGoldWindowAutoOpen = function() {
    if (this._mapGoldWindowAutoOpen === undefined) this.initMapGoldWindow();
    return this._mapGoldWindowAutoOpen;
};

Game_System.prototype.setMapGoldWindowPosition = function(value) {
    this._mapGoldWindowPosition = parseInt(value);
};

Game_System.prototype.getMapGoldWindowPosition = function() {
    if (this._mapGoldWindowPosition === undefined) this.initMapGoldWindow();
    return this._mapGoldWindowPosition;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

MageStudios.MGW.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  MageStudios.MGW.Game_Interpreter_pluginCommand.call(this, command, args)
  if (command === 'OpenMapGoldWindow') {
    $gameSystem.setMapGoldWindowAutoOpen(true);
  }
  if (command === 'CloseMapGoldWindow') {
    $gameSystem.setMapGoldWindowAutoOpen(false);
  }
  if (command === 'MapGoldWindowPosition') {
    $gameSystem.setMapGoldWindowPosition(args[0]);
  }
};

//=============================================================================
// Scene_Map
//=============================================================================

MageStudios.MGW.Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
    MageStudios.MGW.Scene_Map_update.call(this);
    this.updateGoldWindow();
};

Scene_Map.prototype.updateGoldWindow = function() {
    if (!this._messageWindow) return;
    if (!this._messageWindow._goldWindow) return;
    this.updateGoldWindowOpenness();
    this.updateGoldWindowPosition();
    this.updateGoldWindowOpacity();
};

Scene_Map.prototype.updateGoldWindowOpenness = function() {
    var win = this._messageWindow._goldWindow;
    if (SceneManager.isSceneChanging() && !win.isClosing()) {
      win.openness = 0;
    } else if (this.checkOpenMapGoldWindow()) {
      if (win.isOpening() || win.isOpen()) {
        this.updateGoldRefresh();
      } else {
        win.open();
      }
    } else {
      win.close();
    }
};

Scene_Map.prototype.checkOpenMapGoldWindow = function() {
    if ($gameSystem.isMapGoldWindowAutoOpen()) return true;
    if (this._messageWindow._goldWindowOpened) return true;
    return false;
};

Scene_Map.prototype.updateGoldRefresh = function() {
    if (this._goldWindowValue === $gameParty.gold()) return;
    this._goldWindowValue = $gameParty.gold();
    this._messageWindow._goldWindow.refresh();
};

Scene_Map.prototype.updateGoldWindowPosition = function() {
    var win = this._messageWindow._goldWindow;
    var pos = $gameSystem.getMapGoldWindowPosition();
    switch (pos) {
    case 1:
      win.x = 0;
      win.y = Graphics.boxHeight - win.height;
      break;
    case 2:
      win.x = (Graphics.boxWidth - win.width) / 2;
      win.y = Graphics.boxHeight - win.height;
      break;
    case 3:
      win.x = Graphics.boxWidth - win.width;
      win.y = Graphics.boxHeight - win.height;
      break;
    case 4:
      win.x = 0;
      win.y = (Graphics.boxHeight - win.height) / 2;
      break;
    case 5:
      win.x = (Graphics.boxWidth - win.width) / 2;
      win.y = (Graphics.boxHeight - win.height) / 2;
      break;
    case 6:
      win.x = Graphics.boxWidth - win.width;
      win.y = (Graphics.boxHeight - win.height) / 2;
      break;
    case 7:
      win.x = 0;
      win.y = 0;
      break;
    case 8:
      win.x = (Graphics.boxWidth - win.width) / 2;
      win.y = 0;
      break;
    case 9:
      win.x = Graphics.boxWidth - win.width;
      win.y = 0;
      break;
    }
};

Scene_Map.prototype.updateGoldWindowOpacity = function() {
    this._messageWindow._goldWindow.opacity = MageStudios.Param.MGWOpacity;
};

//=============================================================================
// Window_Message
//=============================================================================

MageStudios.MGW.Window_Message_processNewPage =
    Window_Message.prototype.processNewPage;
Window_Message.prototype.processNewPage = function(textState) {
    MageStudios.MGW.Window_Message_processNewPage.call(this, textState);
    this._goldWindowOpened = false;
};

MageStudios.MGW.Window_Message_pEC = Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
    if (code === '$') {
      this._goldWindow.open();
      this._goldWindowOpened = true;
    } else {
      MageStudios.MGW.Window_Message_pEC.call(this, code, textState);
    }
};

MageStudios.MGW.Window_Message_terminateMessage =
    Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function() {
    MageStudios.MGW.Window_Message_terminateMessage.call(this);
    if ($gameSystem.isMapGoldWindowAutoOpen() && !$gameParty.inBattle()) {
      this._goldWindow.open();
    }
    this._goldWindowOpened = false;
};

//=============================================================================
// End of File
//=============================================================================
