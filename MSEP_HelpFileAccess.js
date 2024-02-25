//=============================================================================
// Mage Studios Engine Plugins - Help File Access
// MSEP_HelpFileAccess.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_HelpFileAccess = true;

var MageStudios = MageStudios || {};
MageStudios.Help = MageStudios.Help || {};
MageStudios.Help.version = 1.00;

//=============================================================================
 /*:
 * @plugindesc v1.00 Set the F1 key to open up an HTML help file when
 * pressued during your game.
 * @author Mage Studios Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Help File Path
 * @parent ---General---
 * @desc Path to the help file. Use a local path to an HTML file or
 * a URL for an online website.
 * @default /help/index.htm
 *
 * @param Enable F1 Key
 * @parent ---General---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the F1 key to open the help file?
 * ON - true     OFF - false
 * @default true
 *
 * @param ---Menu---
 * @default
 *
 * @param Help Command
 * @parent ---Menu---
 * @desc This is the text used for the menu command.
 * @default Help
 *
 * @param Auto Add Menu
 * @parent ---Menu---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Automatically add the 'Help' command to the main menu?
 * NO - false     YES - true
 * @default true
 *
 * @param Show Command
 * @parent ---Menu---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the Help command in the main menu by default?
 * NO - false     YES - true
 * @default true
 *
 * @param Auto Place Command
 * @parent ---Menu---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow this plugin to decide the menu placement position?
 * NO - false     YES - true
 * @default true
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * It's not surprising for streamlined games nowadays to have their own help
 * manuals included with the game or accessible within the game. RPG Maker MV
 * doesn't provide anything like that by default, unfortunately. However, using
 * this plugin, you can create ways to access the helpfile from within your
 * game through either the F1 key or an in-game menu.
 *
 * This helpfile can be linked to a local HTML file within the directory or to
 * a website URL online, such as a wiki page. This setting has to be changed in
 * the 'Help File Path' plugin parameters.
 *
 * ============================================================================
 * Main Menu Manager - Positioning the Help Command
 * ============================================================================
 *
 * For those using the Main Menu Manager and would like to position the Help
 * command in a place you'd like, use the following format:
 *
 *       Name: MageStudios.Param.HelpCmd
 *     Symbol: help
 *       Show: $gameSystem.isShowHelpCommand()
 *    Enabled: true
 *        Ext: 
 *  Main Bind: this.commandHelp.bind(this)
 * Actor Bind: 
 *
 * Insert the above setup within a Main Menu Manager slot. Provided you copy
 * the exact settings to where you need it, it will appear there while using
 * all of the naming, enabling, disabling, hiding, and showing effects done by
 * the plugin parameters.
 *
 * Remember to turn off 'Auto Add Menu' from the plugin parameters.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * You can use the following plugin commands to adjust how accessing the help
 * file is done for your game.
 *
 * Plugin Commands
 *
 *   OpenHelp
 *   - This will open up the help file or URL for your game.
 *
 *   ShowMenuHelpCommand
 *   - Will make the 'Help' command show up in the main menu.
 *
 *   HideMenuHelpCommand
 *   - Will make the 'Help' command hidden in the main menu.
 */
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MEP_HelpFileAccess');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.HelpFilePath = String(MageStudios.Parameters['Help File Path']);
MageStudios.Param.HelpF1Key = eval(String(MageStudios.Parameters['Enable F1 Key']));

MageStudios.Param.HelpCmd = String(MageStudios.Parameters['Help Command']);
MageStudios.Param.HelpAutoAdd = eval(String(MageStudios.Parameters['Auto Add Menu']));
MageStudios.Param.HelpShow = eval(String(MageStudios.Parameters['Show Command']));
MageStudios.Param.HelpAutoPlace = String(MageStudios.Parameters['Auto Place Command']);
MageStudios.Param.HelpAutoPlace = eval(MageStudios.Param.HelpAutoPlace);

//=============================================================================
// Graphics
//=============================================================================

if (MageStudios.Param.HelpF1Key) {

MageStudios.Help.Graphics_onKeyDown = Graphics._onKeyDown;
Graphics._onKeyDown = function(event) {
  MageStudios.Help.Graphics_onKeyDown.call(this, event);
  if (!event.ctrlKey && !event.altKey && event.keyCode === 112) {
    MageStudios.AccessHelpFile();
  };
};

}; // MageStudios.Param.HelpF1Key

//=============================================================================
// Game_System
//=============================================================================

MageStudios.Help.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
  MageStudios.Help.Game_System_initialize.call(this);
  this.initHelp();
};

Game_System.prototype.initHelp = function() {
  this._helpCommandShow = MageStudios.Param.HelpShow;
};

Game_System.prototype.isShowHelpCommand = function() {
  if (this._helpCommandShow === undefined) this.initHelp();
  return this._helpCommandShow;
};

Game_System.prototype.setShowHelpCommand = function(value) {
  if (this._helpCommandShow === undefined) this.initHelp();
  this._helpCommandShow = value;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

MageStudios.Help.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  MageStudios.Help.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'OpenHelp') {
    MageStudios.AccessHelpFile();
  } else if (command === 'ShowMenuHelpCommand') {
    $gameSystem.setShowHelpCommand(true);
  } else if (command === 'HideMenuHelpCommand') {
    $gameSystem.setShowHelpCommand(false);
  }
};

//=============================================================================
// Window_MenuCommand
//=============================================================================

MageStudios.Help.Window_MenuCommand_addOriginalCommands =
  Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
  MageStudios.Help.Window_MenuCommand_addOriginalCommands.call(this);
  if (MageStudios.Param.HelpAutoAdd) this.addHelpCommand();
};

Window_MenuCommand.prototype.addHelpCommand = function() {
  if (!MageStudios.Param.HelpAutoPlace) return;
  if (!$gameSystem.isShowHelpCommand()) return;
  if (this.findSymbol('help') > -1) return;
  var text = MageStudios.Param.HelpCmd;
  this.addCommand(text, 'help', true);
};

//=============================================================================
// Scene_Menu
//=============================================================================

MageStudios.Help.Scene_Menu_createCommandWindow =
  Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
  MageStudios.Help.Scene_Menu_createCommandWindow.call(this);
  this._commandWindow.setHandler('help', this.commandHelp.bind(this));
};

Scene_Menu.prototype.commandHelp = function() {
  MageStudios.AccessHelpFile();
  this._commandWindow.activate();
};

//=============================================================================
// Utilities
//=============================================================================

MageStudios.AccessHelpFile = function() {
  if ($gameTemp.isPlaytest()) console.log('Opening Help File...');
  TouchInput.clear();
  Input.clear();
  var url = this.getHelpFileUrl();
  var win = window.open(url);
  if (win) {
    win.focus();
  } else if (Imported.MSEP_ExternalLinks) {
    SceneManager.openPopupBlockerMessage();
  }
};

MageStudios.getHelpFileUrl = function() {
  var url = MageStudios.Param.HelpFilePath;
  if (url.match(/http/i)) {
    return url;
  } else {
    var path = window.location.pathname.replace(/(\/www|)\/[^\/]*$/,
    '/' + MageStudios.Param.HelpFilePath);
    if (path.match(/^\/([A-Z]\:)/)) path = path.slice(1);
    path = decodeURI(path);
    return path;
  }
};

//=============================================================================
// End of File
//=============================================================================