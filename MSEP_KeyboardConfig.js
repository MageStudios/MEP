//=============================================================================
// Mage Studios Engine Plugins - Keyboard Configuration
// MSEP_KeyboardConfig.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_KeyboardConfig = true;

var MageStudios = MageStudios || {};
MageStudios.KeyConfig = MageStudios.KeyConfig || {};
MageStudios.KeyConfig.version = 1.04;

//=============================================================================
 /*:
 * @plugindesc v1.04 Allows players to adjust their button configuration
 * for keyboards.
 * @author Mage Studios Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Command Name
 * @parent ---General---
 * @desc This is the option name that appears in the main menu.
 * @default Keyboard Config
 *
 * @param Button Events
 * @parent ---General---
 * @desc Requires MSEP_ButtonCommonEvents. This is a list of common
 * events you can bind to key presses. Separate with a space.
 * @default 1 2 3
 *
 * @param Button Events List
 * @parent ---General---
 * @type number[]
 * @desc Requires MSEP_ButtonCommonEvents. This is a list of common
 * events you can bind to key presses. MV 1.5.0+
 * @default []
 *
 * @param ---Help Text---
 * @default
 *
 * @param Key Help
 * @parent ---Help Text---
 * @desc This is the help message that will display for keys.
 * @default Change the configuration of this key?
 *
 * @param Default Layout
 * @parent ---Help Text---
 * @desc This is the text for switching to the default layout.
 * @default Default Keyboard Layout
 *
 * @param Default Help
 * @parent ---Help Text---
 * @desc This is the help message that will display for keys.
 * @default Reverts your keyboard setting to the default setup.
 *
 * @param WASD Layout
 * @parent ---Help Text---
 * @desc This is the text for switching to the WASD layout.
 * @default WASD Movement Layout
 *
 * @param WASD Help
 * @parent ---Help Text---
 * @desc This is the help message that will display for WASD.
 * @default Changes your keyboard to WASD movement.
 *
 * @param Finish Config
 * @parent ---Help Text---
 * @desc This is the text for finishing with keyboard configuration.
 * @default Finish Configuration
 *
 * @param Finish Help
 * @parent ---Help Text---
 * @desc This is the help message that will display for Finish.
 * @default Are you done configuring your keyboard?
 *
 * @param Assigned Color
 * @parent ---Help Text---
 * @type number
 * @min 0
 * @max 31
 * @desc This is the background color of a key that's assigned.
 * @default 21
 *
 * @param Action Color
 * @parent ---Help Text---
 * @type number
 * @min 0
 * @max 31
 * @desc This is the text color of an assigned action.
 * @default 4
 *
 * @param Clear Text
 * @parent ---Help Text---
 * @desc This is the Clear action will appear for the config text.
 * @default Clear
 *
 * @param ---Key Names---
 * @default
 *
 * @param OK Key
 * @parent ---Key Names---
 * @desc This is the OK action will appear on a key.
 * @default OK
 *
 * @param OK Text
 * @parent ---Key Names---
 * @desc This is the OK action will appear for the config text.
 * @default OK / Talk
 *
 * @param Escape Key
 * @parent ---Key Names---
 * @desc This is the Escape action will appear on a key.
 * @default X
 *
 * @param Escape Text
 * @parent ---Key Names---
 * @desc This is the Escape action will appear for the config text.
 * @default Cancel / Menu
 *
 * @param Cancel Key
 * @parent ---Key Names---
 * @desc This is the Cancel action will appear on a key.
 * @default Cancel
 *
 * @param Cancel Text
 * @parent ---Key Names---
 * @desc This is the Cancel action will appear for the config text.
 * @default Cancel
 *
 * @param Menu Key
 * @parent ---Key Names---
 * @desc This is the Menu action will appear on a key.
 * @default Menu
 *
 * @param Menu Text
 * @parent ---Key Names---
 * @desc This is the Menu action will appear for the config text.
 * @default Menu
 *
 * @param Shift Key
 * @parent ---Key Names---
 * @desc This is the Shift action will appear on a key.
 * @default Dash
 *
 * @param Shift Text
 * @parent ---Key Names---
 * @desc This is the Shift action will appear for the config text.
 * @default Dash
 *
 * @param PageUp Key
 * @parent ---Key Names---
 * @desc This is the PageUp action will appear on a key.
 * @default PgUp
 *
 * @param PageUp Text
 * @parent ---Key Names---
 * @desc This is the PageUp action will appear for the config text.
 * @default Page Up
 *
 * @param PageDown Key
 * @parent ---Key Names---
 * @desc This is the PageUp action will appear on a key.
 * @default PgDn
 *
 * @param PageDown Text
 * @parent ---Key Names---
 * @desc This is the PageUp action will appear for the config text.
 * @default Page Down
 *
 * @param Left Key
 * @parent ---Key Names---
 * @desc This is the Left action will appear on a key.
 * @default ◄
 *
 * @param Left Text
 * @parent ---Key Names---
 * @desc This is the Left action will appear for the config text.
 * @default Move ◄ Left
 *
 * @param Up Key
 * @parent ---Key Names---
 * @desc This is the Up action will appear on a key.
 * @default ▲
 *
 * @param Up Text
 * @parent ---Key Names---
 * @desc This is the Up action will appear for the config text.
 * @default Move ▲ Up
 *
 * @param Right Key
 * @parent ---Key Names---
 * @desc This is the Right action will appear on a key.
 * @default ►
 *
 * @param Right Text
 * @parent ---Key Names---
 * @desc This is the Right action will appear for the config text.
 * @default Move ► Right
 *
 * @param Down Key
 * @parent ---Key Names---
 * @desc This is the Down action will appear on a key.
 * @default ▼
 *
 * @param Down Text
 * @parent ---Key Names---
 * @desc This is the Down action will appear for the config text.
 * @default Move ▼ Down
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows players to change their keyboard configuration from the
 * in-game Options menu provided that they're using a computer to play the
 * game and not from a mobile device. The "Keyboard Config" option will send
 * the player to a different screen where they can assign actions to each of
 * the allowed keys on the keyboard.
 *
 * Certain measures are made to prevent the player from locking himself or
 * herself in the configuration screen. These measures are that the Enter keys
 * and arrow keys cannot be changed. Almost every other key is capable of being
 * changed to something of the player's liking.
 *
 * Note: If you are using Button Common Events, place this plugin beneath
 * Button Common Events in the plugin parameter list.
 *
 * ============================================================================
 * Button Common Event - Comment Tags
 * ============================================================================
 *
 * If you're using Button Common Events, you can make certain Common Events
 * able to be bound to the keyboard using Comment Tags. To make a Comment Tag,
 * use a Comment Event inside of your Common Event, and insert the following to
 * achieve the desired effect:
 *
 * Comment Tag:
 *
 *   <Config Key: text>
 *   This is the text displayed on the keyboard if this common event is bound
 *   to a keyboard key. If this text isn't used, then the text displayed will
 *   be the common event's name.
 *
 *   <Config Text: text>
 *   This is the text displayed when selecting a key to bind for the keyboard
 *   key. This is the text displayed in the selection list. If this text isn't
 *   used, then the text displayed will be the common event's name.
 *
 *   <Config Required>
 *   This makes the common event required to be bound on the keyboard before
 *   the player can exit the configuration menu. In order for this to work
 *   properly, there needs to be a Button Common Event bound for this common
 *   event as well.
 *
 * ============================================================================
 * Options Core Settings - Adding the New Options
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
 * \i[83]Keyboard Config
 *
 * Help Description:
 * Configure the game's keyboard settings.
 *
 * Symbol:
 * keyConfig
 *
 * Show/Hide:
 * if (Imported.MSEP_KeyboardConfig) {
 *   show = !Utils.isMobileDevice();
 * } else {
 *   show = false;
 * }
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
 *
 * Process OK Code:
 * this.playOkSound();
 * SceneManager.push(Scene_KeyConfig);
 *
 * Cursor Right Code:
 * // Empty. Provided by this plugin.
 * 
 * Cursor Left Code:
 * // Empty. Provided by this plugin.
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
 * Version 1.04:
 * - Compatibility update with MSEP_OptionsCore.js.
 *
 * Version 1.03:
 * - Bug fixed that prevented the plugin from working if specific other plugins
 * weren't present.
 *
 * Version 1.02:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.01:
 * - Compatibility update with Button Common Events.
 * - Added <Config Key: text>, <Config Text: text>, and <Config Required>
 * comment tags. These tags work together with Button Common Events.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MEP_KeyboardConfig');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.KeyConfigName = String(MageStudios.Parameters['Command Name']);
MageStudios.SetupParameters = function() {
  if (Imported.MSEP_ButtonCommonEvents) {
    MageStudios.Param.KeyConfigEv = String(MageStudios.Parameters['Button Events']);
    MageStudios.Param.KeyConfigEv = MageStudios.Param.KeyConfigEv.split(' ');
    for (var i = 0; i < MageStudios.Param.KeyConfigEv.length; ++i) {
      MageStudios.Param.KeyConfigEv[i] = 
        parseInt(MageStudios.Param.KeyConfigEv[i]);
    };
    MageStudios.Param.KeyConfigKeys = {};
    for (var key in MageStudios.Param.BCEList) {
      value = MageStudios.Param.BCEList[key];
      MageStudios.Param.KeyConfigKeys[value] = key;
    }
    var array = JSON.parse(MageStudios.Parameters['Button Events List'] || '[]');
    for (var j = 0; j < array.length; ++j) {
      if (MageStudios.Param.KeyConfigEv.contains(array[j])) continue;
      MageStudios.Param.KeyConfigEv.push(parseInt(array[j]));
    }
  } else {
    MageStudios.Param.KeyConfigEv = [];
  };
};
MageStudios.SetupParameters();

MageStudios.Param.KeyConfigKeyHelp = String(MageStudios.Parameters['Key Help']);
MageStudios.Param.KeyConfigDefaultTx = String(MageStudios.Parameters['Default Layout']);
MageStudios.Param.KeyConfigDefaultHelp = String(MageStudios.Parameters['Default Help']);
MageStudios.Param.KeyConfigWasdTx = String(MageStudios.Parameters['WASD Layout']);
MageStudios.Param.KeyConfigWasdHelp = String(MageStudios.Parameters['WASD Help']);
MageStudios.Param.KeyConfigFinishTx = String(MageStudios.Parameters['Finish Config']);
MageStudios.Param.KeyConfigFinishHelp = String(MageStudios.Parameters['Finish Help']);
MageStudios.Param.KeyConfigAssignColor = Number(MageStudios.Parameters['Assigned Color']);
MageStudios.Param.KeyConfigActionColor = Number(MageStudios.Parameters['Action Color']);
MageStudios.Param.KeyConfigClearTx = String(MageStudios.Parameters['Clear Text']);

MageStudios.Param.KeyConfigOkKey = String(MageStudios.Parameters['OK Key']);
MageStudios.Param.KeyConfigOkTx = String(MageStudios.Parameters['OK Text']);
MageStudios.Param.KeyConfigEscKey = String(MageStudios.Parameters['Escape Key']);
MageStudios.Param.KeyConfigEscTx = String(MageStudios.Parameters['Escape Text']);
MageStudios.Param.KeyConfigCancelKey = String(MageStudios.Parameters['Cancel Key']);
MageStudios.Param.KeyConfigCancelTx = String(MageStudios.Parameters['Cancel Text']);
MageStudios.Param.KeyConfigMenuKey = String(MageStudios.Parameters['Menu Key']);
MageStudios.Param.KeyConfigMenuTx = String(MageStudios.Parameters['Menu Text']);
MageStudios.Param.KeyConfigShiftKey = String(MageStudios.Parameters['Shift Key']);
MageStudios.Param.KeyConfigShiftTx = String(MageStudios.Parameters['Shift Text']);
MageStudios.Param.KeyConfigPageUpKey = String(MageStudios.Parameters['PageUp Key']);
MageStudios.Param.KeyConfigPageUpTx = String(MageStudios.Parameters['PageUp Text']);
MageStudios.Param.KeyConfigPageDnKey = String(MageStudios.Parameters['PageDown Key']);
MageStudios.Param.KeyConfigPageDnTx = String(MageStudios.Parameters['PageDown Text']);
MageStudios.Param.KeyConfigLeftKey = String(MageStudios.Parameters['Left Key']);
MageStudios.Param.KeyConfigLeftTx = String(MageStudios.Parameters['Left Text']);
MageStudios.Param.KeyConfigUpKey = String(MageStudios.Parameters['Up Key']);
MageStudios.Param.KeyConfigUpTx = String(MageStudios.Parameters['Up Text']);
MageStudios.Param.KeyConfigRightKey = String(MageStudios.Parameters['Right Key']);
MageStudios.Param.KeyConfigRightTx = String(MageStudios.Parameters['Right Text']);
MageStudios.Param.KeyConfigDownKey = String(MageStudios.Parameters['Down Key']);
MageStudios.Param.KeyConfigDownTx = String(MageStudios.Parameters['Down Text']);

//=============================================================================
// DataManager
//=============================================================================

MageStudios.KeyConfig.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!MageStudios.KeyConfig.DataManager_isDatabaseLoaded.call(this)) return false;
  this.processKeyConfigCommentTags($dataCommonEvents);
  return true;
};

DataManager.processKeyConfigCommentTags = function(group) {
  MageStudios.KeyConfig.RequiredCommonEvents = [];
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var list = obj.list;
    var length = list.length;
    var comment = '';
    for (var i = 0; i < length; ++i) {
      var ev = list[i];
      if ([108, 408].contains(ev.code)) comment += ev.parameters[0] + '\n';
    }
    this.extraKeyConfigCommentTags(obj, comment);
  }
};

DataManager.extraKeyConfigCommentTags = function(obj, comment) {
  obj.configKey = obj.name;
  obj.configText = obj.name;
  obj.configRequired = false;
  if (comment === '') return;
  if (!Imported.MSEP_ButtonCommonEvents) return;
  var notedata = comment.split(/[\r\n]+/);
  for (var i = 0; i < notedata.length; ++i) {
    var line = notedata[i];
    if (line.match(/<(?:CONFIG KEY):[ ](.*)>/i)) {
      obj.configKey = String(RegExp.$1);
    } else if (line.match(/<(?:CONFIG TEXT):[ ](.*)>/i)) {
      obj.configText = String(RegExp.$1);
    } else if (line.match(/<(?:CONFIG REQUIRED)>/i)) {
      obj.configRequired = true;
      MageStudios.KeyConfig.RequiredCommonEvents.push(obj.id);
    }
  }
};

//=============================================================================
// Input
//=============================================================================

if (Imported.MSEP_ButtonCommonEvents) {

Input._revertButton = function(button) {
};

Input._switchButton = function(button) {
};

}; // Imported.MSEP_ButtonCommonEvents

//=============================================================================
// ConfigManager
//=============================================================================

ConfigManager.keyMapper = JSON.parse(JSON.stringify(Input.keyMapper));
ConfigManager.defaultMap = JSON.parse(JSON.stringify(Input.keyMapper));
ConfigManager.wasdMap = {
  9: 'tab', 13: 'ok', 16: 'shift', 17: 'control', 18: 'control', 27: 'escape',
  32: 'ok', 33: 'pageup', 34: 'pagedown', 37: 'left', 38: 'up', 39: 'right',
  40: 'down', 87: 'up', 65: 'left', 83: 'down', 68: 'right', 74: 'ok',
  75: 'escape', 77: 'menu', 219: 'pageup',  221: 'pagedown', 45: 'escape',
  46: 'ok', 35: 'escape', 36: 'menu', 96: 'escape', 98: 'down', 100: 'left',
  102: 'right', 104: 'up', 120: 'debug' 
};

if (Imported.MSEP_ButtonCommonEvents) {
if (MageStudios.Param.BCEList['tilde'] !== 0) ConfigManager.wasdMap[192] = 'tilde';
if (MageStudios.Param.BCEList['1'] !== 0) ConfigManager.wasdMap[49] = '1';
if (MageStudios.Param.BCEList['2'] !== 0) ConfigManager.wasdMap[50] = '2';
if (MageStudios.Param.BCEList['3'] !== 0) ConfigManager.wasdMap[51] = '3';
if (MageStudios.Param.BCEList['4'] !== 0) ConfigManager.wasdMap[52] = '4';
if (MageStudios.Param.BCEList['5'] !== 0) ConfigManager.wasdMap[53] = '5';
if (MageStudios.Param.BCEList['6'] !== 0) ConfigManager.wasdMap[54] = '6';
if (MageStudios.Param.BCEList['7'] !== 0) ConfigManager.wasdMap[55] = '7';
if (MageStudios.Param.BCEList['8'] !== 0) ConfigManager.wasdMap[56] = '8';
if (MageStudios.Param.BCEList['9'] !== 0) ConfigManager.wasdMap[57] = '9';
if (MageStudios.Param.BCEList['0'] !== 0) ConfigManager.wasdMap[48] = '0';
if (MageStudios.Param.BCEList['minus'] !== 0) ConfigManager.wasdMap[189] = 'minus';
if (MageStudios.Param.BCEList['equal'] !== 0) ConfigManager.wasdMap[187] = 'equal';

if (MageStudios.Param.BCEList['q'] !== 0) ConfigManager.wasdMap[81] = 'q';
if (MageStudios.Param.BCEList['w'] !== 0) ConfigManager.wasdMap[87] = 'w';
if (MageStudios.Param.BCEList['e'] !== 0) ConfigManager.wasdMap[69] = 'e';
if (MageStudios.Param.BCEList['r'] !== 0) ConfigManager.wasdMap[82] = 'r';
if (MageStudios.Param.BCEList['t'] !== 0) ConfigManager.wasdMap[84] = 't';
if (MageStudios.Param.BCEList['y'] !== 0) ConfigManager.wasdMap[89] = 'y';
if (MageStudios.Param.BCEList['u'] !== 0) ConfigManager.wasdMap[85] = 'u';
if (MageStudios.Param.BCEList['i'] !== 0) ConfigManager.wasdMap[73] = 'i';
if (MageStudios.Param.BCEList['o'] !== 0) ConfigManager.wasdMap[79] = 'o';
if (MageStudios.Param.BCEList['p'] !== 0) ConfigManager.wasdMap[80] = 'p';
if (MageStudios.Param.BCEList['foreBrack'] !== 0) ConfigManager.wasdMap[219] =
 'foreBrack';
if (MageStudios.Param.BCEList['backBrack'] !== 0) ConfigManager.wasdMap[221] =
 'backBrack';
if (MageStudios.Param.BCEList['backSlash'] !== 0) ConfigManager.wasdMap[220] =
 'backSlash';

if (MageStudios.Param.BCEList['a'] !== 0) ConfigManager.wasdMap[65] = 'a';
if (MageStudios.Param.BCEList['s'] !== 0) ConfigManager.wasdMap[83] = 's';
if (MageStudios.Param.BCEList['d'] !== 0) ConfigManager.wasdMap[68] = 'd';
if (MageStudios.Param.BCEList['f'] !== 0) ConfigManager.wasdMap[70] = 'f';
if (MageStudios.Param.BCEList['g'] !== 0) ConfigManager.wasdMap[71] = 'g';
if (MageStudios.Param.BCEList['h'] !== 0) ConfigManager.wasdMap[72] = 'h';
if (MageStudios.Param.BCEList['j'] !== 0) ConfigManager.wasdMap[74] = 'j';
if (MageStudios.Param.BCEList['k'] !== 0) ConfigManager.wasdMap[75] = 'k';
if (MageStudios.Param.BCEList['l'] !== 0) ConfigManager.wasdMap[76] = 'l';
if (MageStudios.Param.BCEList['semicolon'] !== 0) ConfigManager.wasdMap[186] =
 'semicolon';
if (MageStudios.Param.BCEList['quote'] !== 0) ConfigManager.wasdMap[222] = 'quote';
if (MageStudios.Param.BCEList['enter'] !== 0) ConfigManager.wasdMap[13] = 'enter';

if (MageStudios.Param.BCEList['keyShift'] !== 0) ConfigManager.wasdMap[16] =
 'keyShift';
if (MageStudios.Param.BCEList['z'] !== 0) ConfigManager.wasdMap[90] = 'z';
if (MageStudios.Param.BCEList['x'] !== 0) ConfigManager.wasdMap[88] = 'x';
if (MageStudios.Param.BCEList['c'] !== 0) ConfigManager.wasdMap[67] = 'c';
if (MageStudios.Param.BCEList['v'] !== 0) ConfigManager.wasdMap[86] = 'v';
if (MageStudios.Param.BCEList['b'] !== 0) ConfigManager.wasdMap[66] = 'b';
if (MageStudios.Param.BCEList['n'] !== 0) ConfigManager.wasdMap[78] = 'n';
if (MageStudios.Param.BCEList['m'] !== 0) ConfigManager.wasdMap[77] = 'm';
if (MageStudios.Param.BCEList['comma'] !== 0) ConfigManager.wasdMap[188] = 'comma';
if (MageStudios.Param.BCEList['period'] !== 0) ConfigManager.wasdMap[190] = 'period';
if (MageStudios.Param.BCEList['foreSlash'] !== 0) ConfigManager.wasdMap[191] =
 'foreSlash';

if (MageStudios.Param.BCEList['space'] !== 0) ConfigManager.wasdMap[32] = 'space';
if (MageStudios.Param.BCEList['dirLeft'] !== 0) ConfigManager.wasdMap[37] =
 'dirLeft';
if (MageStudios.Param.BCEList['dirUp'] !== 0) ConfigManager.wasdMap[38] = 'dirUp';
if (MageStudios.Param.BCEList['dirRight'] !== 0) ConfigManager.wasdMap[39] =
 'dirRight';
if (MageStudios.Param.BCEList['dirDown'] !== 0) ConfigManager.wasdMap[40] =
 'dirDown';
if (MageStudios.Param.BCEList['ins'] !== 0) ConfigManager.wasdMap[45] = 'ins';
if (MageStudios.Param.BCEList['del'] !== 0) ConfigManager.wasdMap[46] = 'del';
if (MageStudios.Param.BCEList['home'] !== 0) ConfigManager.wasdMap[36] = 'home';
if (MageStudios.Param.BCEList['end'] !== 0) ConfigManager.wasdMap[35] = 'end';
if (MageStudios.Param.BCEList['pageUp'] !== 0) ConfigManager.wasdMap[33] = 'pageUp';
if (MageStudios.Param.BCEList['pageDown'] !== 0) ConfigManager.wasdMap[34] =
 'pageDown';

if (MageStudios.Param.BCEList['num0'] !== 0) ConfigManager.wasdMap[96] = 'num0';
if (MageStudios.Param.BCEList['num1'] !== 0) ConfigManager.wasdMap[97] = 'num1';
if (MageStudios.Param.BCEList['num2'] !== 0) ConfigManager.wasdMap[98] = 'num2';
if (MageStudios.Param.BCEList['num3'] !== 0) ConfigManager.wasdMap[99] = 'num3';
if (MageStudios.Param.BCEList['num4'] !== 0) ConfigManager.wasdMap[100] = 'num4';
if (MageStudios.Param.BCEList['num5'] !== 0) ConfigManager.wasdMap[101] = 'num5';
if (MageStudios.Param.BCEList['num6'] !== 0) ConfigManager.wasdMap[102] = 'num6';
if (MageStudios.Param.BCEList['num7'] !== 0) ConfigManager.wasdMap[103] = 'num7';
if (MageStudios.Param.BCEList['num8'] !== 0) ConfigManager.wasdMap[104] = 'num8';
if (MageStudios.Param.BCEList['num9'] !== 0) ConfigManager.wasdMap[105] = 'num9';
if (MageStudios.Param.BCEList['numPeriod'] !== 0) ConfigManager.wasdMap[110] =
 'numPeriod';
if (MageStudios.Param.BCEList['numPlus'] !== 0) ConfigManager.wasdMap[107]  =
 'numPlus';
if (MageStudios.Param.BCEList['numMinus'] !== 0) ConfigManager.wasdMap[109] =
 'numMinus';
if (MageStudios.Param.BCEList['numTimes'] !== 0) ConfigManager.wasdMap[106] =
 'numTimes';
if (MageStudios.Param.BCEList['numDivide'] !== 0) ConfigManager.wasdMap[111] =
 'numDivide';
};

MageStudios.KeyConfig.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
  var config = MageStudios.KeyConfig.ConfigManager_makeData.call(this);
	config.keyMapper = this.keyMapper;
	return config;
};

MageStudios.KeyConfig.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
  MageStudios.KeyConfig.ConfigManager_applyData.call(this, config);
	this.keyMapper = this.readKeyConfig(config, 'keyMapper');
	this.applyKeyConfig();
};

ConfigManager.applyKeyConfig = function() {
	Input.keyMapper = this.keyMapper;
	Input.update();
	Input.clear();
};

ConfigManager.readKeyConfig = function(config, name) {
    var value = config[name];
    if (value !== undefined) {
        return value;
    } else {
        return JSON.parse(JSON.stringify(ConfigManager.defaultMap));
    }
};

//=============================================================================
// Window_Options
//=============================================================================

MageStudios.KeyConfig.Window_Options_addGeneralOptions =
	Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function() {
  MageStudios.KeyConfig.Window_Options_addGeneralOptions.call(this);
	if (!Imported.MSEP_OptionsCore) this.addKeyConfigCommand();
};

Window_Options.prototype.addKeyConfigCommand = function() {
	if (Utils.isMobileDevice()) return;
	this.addCommand(MageStudios.Param.KeyConfigName, 'keyConfig', true);
};

if (!Imported.MSEP_OptionsCore) {

MageStudios.KeyConfig.Window_Options_drawItem =
	Window_Options.prototype.drawItem;
Window_Options.prototype.drawItem = function(index) {
    if (this.commandSymbol(index) === 'keyConfig') {
			var rect = this.itemRectForText(index);
			var text = this.commandName(index);
	    this.resetTextColor();
	    this.changePaintOpacity(this.isCommandEnabled(index));
	    this.drawText(text, rect.x, rect.y, rect.width, 'left');
		} else {
			MageStudios.KeyConfig.Window_Options_drawItem.call(this, index);
		}
};

MageStudios.KeyConfig.Window_Options_processOk =
	Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
  if (this.commandSymbol(this.index()) === 'keyConfig') {
		Window_Command.prototype.processOk.call(this);
	} else {
		MageStudios.KeyConfig.Window_Options_processOk.call(this);
	}
};

}; // Imported.MSEP_OptionsCore


//=============================================================================
// Window_KeyConfig
//=============================================================================

function Window_KeyConfig() {
    this.initialize.apply(this, arguments);
};

Window_KeyConfig._keyLayout = [
	'~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', ' ', 'Ins',
	'Home', 'PgUp', ' ', '#pD/', '*', '#pD-', ' ', 'Q', 'W', 'E', 'R', 'T', 'Y',
	'U', 'I', 'O', 'P', '[', ']', '\\', 'Del', 'End', 'PgDn', '#pD7', '#pD8',
	'#pD9', '+', ' ', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'",
	'Enter', 'Enter', ' ', ' ', ' ', '#pD4', '#pD5', '#pD6', '+', 'Shift',
	'Shift', 'Z', 'X', 'C', 'V',	'B', 'N',	'M', ',', '.', '/', 'Shift', 'Shift',
	' ', '↑',	' ', '#pD1', '#pD2', '#pD3', 'En', ' ', ' ', ' ', 'Space', 'Space',
	'Space', 'Space', 'Space', 'Space', 'Space', ' ', ' ', ' ', ' ', '←',	'↓',
	'→', '#pD0', '#pD0',	'#pD.', 'En'
];

Window_KeyConfig._refId = {
	'~':    192, '0':     48, '1':     49, '2':     50, '3':     51, '4':     52,
	'5':     53, '6':     54, '7':     55, '8':     56, '9':     57, '-':    189,
	'=':    187, 'Ins':   45,	'Home':  36, 'PgUp':  33, '#pD/': 111, '*':    106,
	'#pD-': 109, 'Q':     81, 'W':     87, 'E':     69, 'R':     82, 'T':     84,
	'Y':     89, 'U':     85, 'I':     73, 'O':     79, 'P':     80, '[':    219,
	']':    221, '\\':   220, 'Del':   46, 'End':   35, 'PgDn':  34, '#pD7': 103,
	'#pD8': 104, '#pD9': 105, '+':    107, 'A':     65, 'S':     83, 'D':     68,
	'F':     70, 'G':     71, 'H':     72, 'J':     74, 'K':     75, 'L':     76,
	';':    186, "'":    222, 'Enter': 13, '#pD4': 100, '#pD5': 101, '#pD6': 102,
  'Shift': 16, 'Z':     90, 'X':     88, 'C':     67, 'V':     86, 'B':     66,
	'N':     78, 'M':     77, ',':    188, '.':    190, '/':    191, 'Shift': 16,
	'↑':     38, '#pD1':  97, '#pD2':  98, '#pD3':  99, 'En':    13, 'Space': 32,
	'←':     37, '↓':     40, '→':     39, '#pD0':  96, '#pD.': 110
};

Window_KeyConfig.prototype = Object.create(Window_Command.prototype);
Window_KeyConfig.prototype.constructor = Window_KeyConfig;

Window_KeyConfig.prototype.initialize = function(helpWindow) {
	var wy = helpWindow.height;
	Window_Command.prototype.initialize.call(this, 0, wy);
  this.setHelpWindow(helpWindow);
	this.height = Graphics.boxHeight - wy;
	this.refresh();
	this.activate();
	this.select(0);
};

Window_KeyConfig.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};

Window_KeyConfig.prototype.maxCols = function() {
    return 21;
};

Window_KeyConfig.prototype.spacing = function() {
    return 1;
};

Window_KeyConfig.prototype.itemHeight = function() {
    return this.lineHeight() * 2;
};

Window_KeyConfig.prototype.itemTextAlign = function() {
    return 'center';
};

Window_KeyConfig.prototype.makeCommandList = function(index) {
		for (var i = 0; i < Window_KeyConfig._keyLayout.length; ++i) {
			var keyName = Window_KeyConfig._keyLayout[i];
			var enabled = this.isKeyEnabled(keyName);
			this.addCommand(keyName, 'key', enabled);
		}
		this.addCommand(MageStudios.Param.KeyConfigDefaultTx, 'default', true);
		for (var i = 0; i < 6; ++i) this.addCommand(' ', 'default', true);
		this.addCommand(MageStudios.Param.KeyConfigWasdTx, 'wasd', true);
		for (var i = 0; i < 6; ++i) this.addCommand(' ', 'wasd', true);
		this.addCommand(MageStudios.Param.KeyConfigFinishTx, 'cancel', true);
		for (var i = 0; i < 6; ++i) this.addCommand(' ', 'cancel', true);
};

Window_KeyConfig.prototype.isKeyEnabled = function(keyName) {
	return !([' ', 'Enter', 'En', '↑', '←',	'↓', '→'].contains(keyName));
};

Window_KeyConfig.prototype.itemRect = function(index) {
    var rect = Window_Selectable.prototype.itemRect.call(this, index);
		var maxCols = this.maxCols();
    if ([41, 62].contains(index)) {
			rect.y = Math.floor(41 / maxCols) * rect.height - this._scrollY;
			rect.height = this.itemHeight() * 2;
		} else if ([54, 55].contains(index)) {
			rect.x = 54 % maxCols * (rect.width + this.spacing()) - this._scrollX;
			rect.width = (this.itemWidth() + this.spacing()) * 2 - this.spacing();
		} else if ([63, 64].contains(index)) {
			rect.x = 63 % maxCols * (rect.width + this.spacing()) - this._scrollX;
			rect.width = (this.itemWidth() + this.spacing()) * 2 - this.spacing();
		} else if ([75, 76].contains(index)) {
			rect.x = 75 % maxCols * (rect.width + this.spacing()) - this._scrollX;
			rect.width = (this.itemWidth() + this.spacing()) * 2 - this.spacing();
		} else if ([83, 104].contains(index)) {
			rect.y = Math.floor(83 / maxCols) * rect.height - this._scrollY;
			rect.height = this.itemHeight() * 2;
		} else if ([87, 88, 89, 90, 91, 92, 93].contains(index)) {
			rect.x = 87 % maxCols * (rect.width + this.spacing()) - this._scrollX;
			rect.width = (this.itemWidth() + this.spacing()) * 7 - this.spacing();
		} else if ([101, 102].contains(index)) {
			rect.x = 101 % maxCols * (rect.width + this.spacing()) - this._scrollX;
			rect.width = (this.itemWidth() + this.spacing()) * 2 - this.spacing();
		} else if ([105, 106, 107, 108, 109, 110, 111].contains(index)) {
			rect.x = 105 % maxCols * (rect.width + this.spacing()) - this._scrollX;
			rect.width = (this.itemWidth() + this.spacing()) * 7 - this.spacing();
		} else if ([112, 113, 114, 115, 116, 117, 118].contains(index)) {
			rect.x = 112 % maxCols * (rect.width + this.spacing()) - this._scrollX;
			rect.width = (this.itemWidth() + this.spacing()) * 7 - this.spacing();
		} else if ([119, 120, 121, 122, 123, 124, 125].contains(index)) {
			rect.x = 119 % maxCols * (rect.width + this.spacing()) - this._scrollX;
			rect.width = (this.itemWidth() + this.spacing()) * 7 - this.spacing();
		}
		rect.y += Math.max(0, (this.contents.height - this.lineHeight() * 12) / 2);
    return rect;
};

Window_KeyConfig.prototype.leaveEmpty = function(index) {
		return [55, 56, 57, 58, 62, 64, 76, 77, 79, 84, 85, 86, 88, 89, 90, 91,
			92, 93, 94, 95, 96, 97, 102, 104, 106, 107, 108, 109, 110, 111, 113, 114,
			115, 116, 117, 118, 120, 121, 122, 123, 124, 125].contains(index);
};

Window_KeyConfig.prototype.drawItem = function(index) {
    if (this.leaveEmpty(index)) return;
		this.drawItemRect(index);
		this.drawItemKey(index);
		this.drawItemAction(index);
};

Window_KeyConfig.prototype.drawItemRect = function(index) {
		var rect = this.itemRect(index);
		var color = this.getRectColor(index);
		this.drawRect(rect.x+1, rect.y+1, rect.width-2, rect.height-2, color);
};

Window_KeyConfig.prototype.getRectColor = function(index) {
		if (index > 104) return this.gaugeBackColor();
		var key = Window_KeyConfig._refId[this.commandName(index)];
		var action = Input.keyMapper[key];
		if (action !== undefined) {
			return this.textColor(MageStudios.Param.KeyConfigAssignColor);
		} else {
			return this.gaugeBackColor();
		}
};

Window_KeyConfig.prototype.drawRect = function(dx, dy, dw, dh, color) {
    this.changePaintOpacity(false);
    this.contents.fillRect(dx, dy, dw, dh, color);
    this.changePaintOpacity(true);
};

Window_KeyConfig.prototype.drawItemKey = function(index) {
		this.resetFontSettings();
		this.contents.fontSize -= 8;
		this.resetTextColor();
		this.changePaintOpacity(true);
		var rect = this.itemRectForText(index);
		var align = this.itemTextAlign();
		this.drawText(this.visualName(index), rect.x, rect.y, rect.width, align);
};

Window_KeyConfig.prototype.visualName = function(index) {
    var text = this._list[index].name;
		text = text.replace(/#pD/gi, '' );
		return text;
};

Window_KeyConfig.prototype.drawItemAction = function(index) {
		var key = Window_KeyConfig._refId[this.commandName(index)];
		var action = Input.keyMapper[key];
		if (action === undefined) return;
		this.resetFontSettings();
		this.contents.fontSize -= 8;
		var color = this.textColor(MageStudios.Param.KeyConfigActionColor);
		this.changeTextColor(color);
		this.changePaintOpacity(true);
		var rect = this.itemRectForText(index);
		rect.y += this.lineHeight();
		var align = this.itemTextAlign();
		this.drawText(this.actionKey(action), rect.x, rect.y, rect.width, align);
};

Window_KeyConfig.prototype.actionKey = function(action) {
		switch(action) {
		case 'ok':
			return MageStudios.Param.KeyConfigOkKey;
			break;
		case 'escape':
			return MageStudios.Param.KeyConfigEscKey;
			break;
		case 'cancel':
			return MageStudios.Param.KeyConfigCancelKey;
			break;
		case 'menu':
			return MageStudios.Param.KeyConfigMenuKey;
			break;
		case 'shift':
			return MageStudios.Param.KeyConfigShiftKey;
			break;
		case 'pageup':
			return MageStudios.Param.KeyConfigPageUpKey;
			break;
		case 'pagedown':
			return MageStudios.Param.KeyConfigPageDnKey;
			break;
		case 'left':
			return MageStudios.Param.KeyConfigLeftKey;
			break;
		case 'up':
			return MageStudios.Param.KeyConfigUpKey;
			break;
		case 'right':
			return MageStudios.Param.KeyConfigRightKey;
			break;
		case 'down':
			return MageStudios.Param.KeyConfigDownKey;
			break;
    default:
      if (Imported.MSEP_ButtonCommonEvents) {
        if (MageStudios.Param.BCEList[action]) {
          var id = MageStudios.Param.BCEList[action];
          var ev = $dataCommonEvents[id];
          return ev.configKey;
        }
      }
      return '';
      break;
		}
};

Window_KeyConfig.prototype.cursorDown = function(wrap) {
    var index = this.index();
    if (index >= 105) {
			this.select(index - 104);
		}	else if ([41, 62].contains(index)) {
			this.select(83);
		} else if ([83, 104].contains(index)) {
			this.select(125);
		} else {
			Window_Command.prototype.cursorDown.call(this, wrap);
		}
};

Window_KeyConfig.prototype.cursorUp = function(wrap) {
    var index = this.index();
    if (index === 0) {
			this.select(125);
		} else if (index <= 20) {
			this.select(index + 104);
		}	else if ([41, 62].contains(index)) {
			this.select(20);
		} else if ([83, 104].contains(index)) {
			this.select(41);
		} else {
			Window_Command.prototype.cursorUp.call(this, wrap);
		}
};

Window_KeyConfig.prototype.cursorRight = function(wrap) {
		var index = this.index();
		if ([54, 55].contains(index)) {
			this.select(56);
		} else if ([63, 64].contains(index)) {
			this.select(65);
		} else if ([75, 76].contains(index)) {
			this.select(77);
		} else if ([87, 88, 89, 90, 91, 92, 93].contains(index)) {
			this.select(94);
		} else if ([101, 102].contains(index)) {
			this.select(103);
		} else if ([105, 106, 107, 108, 109, 110, 111].contains(index)) {
			this.select(112);
		} else if ([112, 113, 114, 115, 116, 117, 118].contains(index)) {
			this.select(119);
		} else if ([119, 120, 121, 122, 123, 124, 125].contains(index)) {
			this.select(0);
		} else {
			Window_Command.prototype.cursorRight.call(this, wrap);
		}
};

Window_KeyConfig.prototype.cursorLeft = function(wrap) {
		var index = this.index();
		if (index === 0) {
			this.select(125);
		} else if ([54, 55].contains(index)) {
			this.select(53);
		} else if ([63, 64].contains(index)) {
			this.select(62);
		} else if ([75, 76].contains(index)) {
			this.select(74);
		} else if ([87, 88, 89, 90, 91, 92, 93].contains(index)) {
			this.select(86);
		} else if ([101, 102].contains(index)) {
			this.select(100);
		} else if ([105, 106, 107, 108, 109, 110, 111].contains(index)) {
			this.select(104);
		} else if ([112, 113, 114, 115, 116, 117, 118].contains(index)) {
			this.select(111);
		} else if ([119, 120, 121, 122, 123, 124, 125].contains(index)) {
			this.select(118);
		} else {
			Window_Command.prototype.cursorLeft.call(this, wrap);
		}
};

Window_KeyConfig.prototype.updateHelp = function() {
    if (!this._helpWindow) return;
		switch (this.currentSymbol()) {
		case 'key':
			this._helpWindow.setText(MageStudios.Param.KeyConfigKeyHelp);
			break;
		case 'default':
			this._helpWindow.setText(MageStudios.Param.KeyConfigDefaultHelp);
			break;
		case 'wasd':
			this._helpWindow.setText(MageStudios.Param.KeyConfigWasdHelp);
			break;
		case 'cancel':
			this._helpWindow.setText(MageStudios.Param.KeyConfigFinishHelp);
			break;
		default:
			this._helpWindow.clear();
			break;
		}
};

//=============================================================================
// Window_KeyAction
//=============================================================================

function Window_KeyAction() {
    this.initialize.apply(this, arguments);
};

Window_KeyAction.prototype = Object.create(Window_Command.prototype);
Window_KeyAction.prototype.constructor = Window_KeyAction;

Window_KeyAction.prototype.initialize = function() {
	Window_Command.prototype.initialize.call(this, 0, 0);
	this.x = (Graphics.boxWidth - this.width) / 2;
	this.y = (Graphics.boxHeight - this.height) / 2;
	this.openness = 0;
	this.deactivate();
};

Window_KeyAction.prototype.windowWidth = function() {
    return Graphics.boxWidth / 2;
};

Window_KeyAction.prototype.windowHeight = function() {
    var value = this.fittingHeight(this.numVisibleRows())
    return Math.min(value, Graphics.boxHeight);
};

Window_KeyAction.prototype.makeCommandList = function() {
	this.addCommand(MageStudios.Param.KeyConfigClearTx, 'ok', true, 'clear');
	this.addCommand(MageStudios.Param.KeyConfigOkTx, 'ok', true, 'ok');
	this.addCommand(MageStudios.Param.KeyConfigEscTx, 'ok', true, 'escape');
	this.addCommand(MageStudios.Param.KeyConfigCancelTx, 'ok', true, 'cancel');
	this.addCommand(MageStudios.Param.KeyConfigMenuTx, 'ok', true, 'menu');
	this.addCommand(MageStudios.Param.KeyConfigShiftTx, 'ok', true, 'shift');
	this.addCommand(MageStudios.Param.KeyConfigPageUpTx, 'ok', true, 'pageup');
	this.addCommand(MageStudios.Param.KeyConfigPageDnTx, 'ok', true, 'pagedown');
	this.addCommand(MageStudios.Param.KeyConfigLeftTx, 'ok', true, 'left');
	this.addCommand(MageStudios.Param.KeyConfigUpTx, 'ok', true, 'up');
	this.addCommand(MageStudios.Param.KeyConfigRightTx, 'ok', true, 'right');
	this.addCommand(MageStudios.Param.KeyConfigDownTx, 'ok', true, 'down');
  if (Imported.MSEP_ButtonCommonEvents) this.addButtonCommonEvents();
};

Window_KeyAction.prototype.addButtonCommonEvents = function() {
  var length = MageStudios.Param.KeyConfigEv.length;
  for (var i = 0 ; i < length; ++i) {
    var eventId = MageStudios.Param.KeyConfigEv[i];
    if (MageStudios.Param.KeyConfigKeys[eventId]) {
      var ev = $dataCommonEvents[eventId];
      var key = MageStudios.Param.KeyConfigKeys[eventId];
      var text = ev.configText;
      this.addCommand(text, 'ok', true, key);
    }
  }
};

//=============================================================================
// Scene_Options
//=============================================================================

MageStudios.KeyConfig.Scene_Options_createOptionsWindow =
	Scene_Options.prototype.createOptionsWindow;
Scene_Options.prototype.createOptionsWindow = function() {
  MageStudios.KeyConfig.Scene_Options_createOptionsWindow.call(this);
	this._optionsWindow.setHandler('keyConfig', this.commandKeyConfig.bind(this));
};

Scene_Options.prototype.commandKeyConfig = function() {
	SceneManager.push(Scene_KeyConfig);
};

//=============================================================================
// Scene_KeyConfig
//=============================================================================

function Scene_KeyConfig() {
  this.initialize.apply(this, arguments);
}

Scene_KeyConfig.prototype = Object.create(Scene_MenuBase.prototype);
Scene_KeyConfig.prototype.constructor = Scene_KeyConfig;

Scene_KeyConfig.prototype.initialize = function() {
  Scene_MenuBase.prototype.initialize.call(this);
};

Scene_KeyConfig.prototype.create = function() {
  Scene_MenuBase.prototype.create.call(this);
  this.createHelpWindow();
	this.createKeyConfigWindow();
	this.createKeyActionWindow();
};

Scene_KeyConfig.prototype.terminate = function() {
  Scene_MenuBase.prototype.terminate.call(this);
  ConfigManager.save();
};

Scene_KeyConfig.prototype.refreshWindows = function() {
	this._configWindow.refresh();
	this._configWindow.activate();
	ConfigManager.save();
};

Scene_KeyConfig.prototype.createKeyConfigWindow = function() {
	this._configWindow = new Window_KeyConfig(this._helpWindow);
	this._configWindow.setHandler('default', this.commandDefault.bind(this));
	this._configWindow.setHandler('wasd', this.commandWasd.bind(this));
	this._configWindow.setHandler('cancel', this.commandExit.bind(this));
	this._configWindow.setHandler('key', this.commandKey.bind(this));
	this.addWindow(this._configWindow);
};

Scene_KeyConfig.prototype.createKeyActionWindow = function() {
	this._actionWindow = new Window_KeyAction();
	this._actionWindow.setHandler('ok', this.onActionOk.bind(this));
	this._actionWindow.setHandler('cancel', this.onActionCancel.bind(this));
	this.addWindow(this._actionWindow);
};

Scene_KeyConfig.prototype.commandDefault = function() {
	ConfigManager.keyMapper = 
    JSON.parse(JSON.stringify(ConfigManager.defaultMap));
	ConfigManager.applyKeyConfig();
	this.refreshWindows();
};

Scene_KeyConfig.prototype.commandWasd = function() {
	ConfigManager.keyMapper = JSON.parse(JSON.stringify(ConfigManager.wasdMap));
	ConfigManager.applyKeyConfig();
	this.refreshWindows();
};

Scene_KeyConfig.prototype.commandKey = function() {
	this._actionWindow.select(0);
	this._actionWindow.open();
	this._actionWindow.activate();
};

Scene_KeyConfig.prototype.onActionCancel = function() {
	this._actionWindow.close();
	this._actionWindow.deactivate();
	this._configWindow.activate();
};

Scene_KeyConfig.prototype.onActionOk = function() {
	var action = this._actionWindow.currentExt();
	var name = this._configWindow.commandName(this._configWindow.index());
	var key = Window_KeyConfig._refId[name];
	if (action === 'clear') {
		ConfigManager.keyMapper[key] = undefined;
	} else {
		ConfigManager.keyMapper[key] = action;
	}
	SoundManager.playEquip();
	ConfigManager.applyKeyConfig();
	this.onActionCancel();
	this.refreshWindows();
};

Scene_KeyConfig.prototype.commandExit = function() {
  if (!this.canExit()) {
    SoundManager.playBuzzer();
    this._configWindow.activate();
    return;
  }
  this.popScene();
};

Scene_KeyConfig.prototype.canExit = function() {
  if (!Imported.MSEP_ButtonCommonEvents) return true;
  for (var i = 0; i < MageStudios.KeyConfig.RequiredCommonEvents.length; ++i) {
    var commonEventId = MageStudios.KeyConfig.RequiredCommonEvents[i];
    if (!this.isCommonEventBound(commonEventId)) return false;
  }
  return true;
};

Scene_KeyConfig.prototype.isCommonEventBound = function(id) {
  var length = Window_KeyConfig._keyLayout.length;
  for (var i = 0; i < length; ++i) {
    var key = Window_KeyConfig._refId[this._configWindow.commandName(i)];
    var action = Input.keyMapper[key];
    if (MageStudios.Param.BCEList[action] === id) return true;
  }
  return false;
};

//=============================================================================
// End of File
//=============================================================================
