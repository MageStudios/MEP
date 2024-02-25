//=============================================================================
// Mage Studios Engine Plugins - Message Core Extension - Message Speed Option
// MSEP_X_MessageSpeedOpt.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_X_MessageSpeedOpt = true;

var MageStudios = MageStudios || {};
MageStudios.MsgSpdOpt = MageStudios.MsgSpdOpt || {};
MageStudios.MsgSpdOpt.version = 1.00;

//=============================================================================
 /*:
 * @plugindesc v1.00 (Requires MSEP_MessageCore.js) Let your places adjust the
 * speed the message window displays text.
 * @author Mage Studios Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires MSEP_MessageCore.
 * Make sure this plugin is located under MSEP_MessageCore in the plugin list.
 *
 * The option to control the message speed is quite common in RPG's nowadays.
 * Players can put in whatever option they feel like for the text to go at, or
 * if they wish, to have the text display instantly! This plugin will add in
 * the 'Message Speed' option into your Options Menu for players to adjust! It
 * comes with speeds from 0 (slowest) to 10 (fastest) and even an "11th" speed
 * of being instant!
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
 * \i[87]Message Speed
 *
 * Help Description:
 * Changes the speed text is displayed during messages.
 *
 * Symbol:
 * messageSpeed
 *
 * Show/Hide:
 * show = Imported.MSEP_X_MessageSpeedOpt;
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
 * var value = this.getConfigValue(symbol);
 * var rate = ((value) / 10).clamp(0, 1);
 * if (value > 10) {
 *   var gaugeColor1 = this.textColor(14);
 *   var gaugeColor2 = this.textColor(6);
 * } else {
 *   var gaugeColor1 = this.textColor(20);
 *   var gaugeColor2 = this.textColor(21);
 * }
 * this.drawOptionsGauge(index, rate, gaugeColor1, gaugeColor2);
 * this.drawText(this.statusText(index), titleWidth, rect.y, statusWidth, 'center');
 *
 * Process OK Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * value += 1;
 * if (value > 11) value = 0;
 * value = value.clamp(0, 11);
 * this.changeValue(symbol, value);
 *
 * Cursor Right Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * value += 1;
 * value = value.clamp(0, 11);
 * this.changeValue(symbol, value);
 * 
 * Cursor Left Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * value -= 1;
 * value = value.clamp(0, 11);
 * this.changeValue(symbol, value);
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
 * Version BETA:
 * - Started Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @param OptionsCommand
 * @text Options Command
 * @desc The name of the option to be used.
 * @default Message Speed
 *
 * @param DefaultSpeed
 * @text Default Speed
 * @type number
 * @min 0
 * @max 11
 * @desc Default speed used by text messages. Use a number betwee
 * 0 - Slowest, 10 - Fastest, 11 - Instant
 * @default 8
 *
 * @param InstantText
 * @text Instant Text
 * @desc The text to display to show the speed is instant.
 * @default Instant
 *
 */
//=============================================================================

if (Imported.MSEP_MessageCore) {

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MEP_X_MessageSpeedOpt');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.MsgSpeedOptCmd = String(MageStudios.Parameters['OptionsCommand']);
MageStudios.Param.MsgSpeedOptDefault = Number(MageStudios.Parameters['DefaultSpeed']);
MageStudios.Param.MsgSpeedOptInstant = String(MageStudios.Parameters['InstantText']);

//=============================================================================
// ConfigManager
//=============================================================================

ConfigManager.messageSpeed = MageStudios.Param.MsgSpeedOptDefault;

MageStudios.MsgSpdOpt.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
  var config = MageStudios.MsgSpdOpt.ConfigManager_makeData.call(this);
  config.messageSpeed = this.messageSpeed;
  return config;
};

MageStudios.MsgSpdOpt.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
  MageStudios.MsgSpdOpt.ConfigManager_applyData.call(this, config);
  this.messageSpeed = this.readConfigMessageSpeed(config, 'messageSpeed');
};

ConfigManager.readConfigMessageSpeed = function(config, name) {
  var value = config[name];
  if (value !== undefined) {
      return value;
  } else {
      return MageStudios.Param.MsgSpeedOptDefault;
  }
};

//=============================================================================
// Window_Message
//=============================================================================

MageStudios.MsgSpdOpt.Window_Message_newPage = Window_Message.prototype.newPage;
Window_Message.prototype.newPage = function(textState) {
  MageStudios.MsgSpdOpt.Window_Message_newPage.call(this, textState);
  this._textDelay = 0;
};

MageStudios.MsgSpdOpt.Window_Message_updateShowFast =
  Window_Message.prototype.updateShowFast;
Window_Message.prototype.updateShowFast = function() {
  MageStudios.MsgSpdOpt.Window_Message_updateShowFast.call(this);
  if (this.messageSpeed() < 0) this._showFast = true;
};

Window_Message.prototype.messageSpeed = function() {
  return 10 - (ConfigManager.messageSpeed.clamp(0, 11));
};

Window_Message.prototype.updateMessage = function() {
  if (this._textState) {
    while (!this.isEndOfText(this._textState)) {
      if (this.needsNewPage(this._textState)) {
          this.newPage(this._textState);
      }
      this.updateShowFast();
      if (this._textDelay <= 0 || this._showFast || this._lineShowFast) {
        this.processCharacter(this._textState);
        this._textDelay = this.messageSpeed();
      } else {
        this._textDelay -= 1;
        break;
      }
      if (!this._showFast && !this._lineShowFast) {
        break;
      }
      if (this.pause || this._waitCount > 0) {
        break;
      }
    }
    if (this.isEndOfText(this._textState)) {
      this.onEndOfText();
    }
    return true;
  } else {
    return false;
  }
};

if (Imported.MSEP_X_ExtMesPack1) {

MageStudios.EMP1.Window_Message_updateMessage =
  Window_Message.prototype.updateMessage;
Window_Message.prototype.updateMessage = function() {
  var state = MageStudios.EMP1.Window_Message_updateMessage.call(this);
  if (state) {
    this._soundCount = this._soundCount || 0;
    if (this._soundCount-- <= 0) {
      this._soundCount = $gameSystem.messageSoundInterval();
      if ($gameSystem.isMessageSoundEnabled()) SoundManager.playMessageSound();
    }
  }
  return state;
}

}; // Imported.MSEP_X_ExtMesPack1

MageStudios.MsgSpdOpt.Window_Message_updateWait =
  Window_Message.prototype.updateWait;
Window_Message.prototype.updateWait = function() {
  if (this.messageSpeed() < 0) {
    this._waitCount = 0;
    this._lineShowFast = true;
    this._showFast = true;
  }
  return MageStudios.MsgSpdOpt.Window_Message_updateWait.call(this);
};

//=============================================================================
// Window_Options
//=============================================================================

MageStudios.MsgSpdOpt.Window_Options_addGeneralOptions =
  Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function() {
  MageStudios.MsgSpdOpt.Window_Options_addGeneralOptions.call(this);
  if (Imported.MSEP_OptionsCore) return;
  this.addMessageSpeedOptions();
};

Window_Options.prototype.addMessageSpeedOptions = function() {
  this.addCommand(MageStudios.Param.MsgSpeedOptCmd, 'messageSpeed');
};

MageStudios.MsgSpdOpt.Window_Options_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
  var symbol = this.commandSymbol(index);
  var value = this.getConfigValue(symbol);
  if (symbol === 'messageSpeed') {
    if (value > 10) return MageStudios.Param.MsgSpeedOptInstant;
    return MageStudios.Util.toGroup(value);
  } else {
    return MageStudios.MsgSpdOpt.Window_Options_statusText.call(this, index);
  }
};

if (!Imported.MSEP_OptionsCore) {

MageStudios.MsgSpdOpt.Window_Options_processOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
  var index = this.index();
  var symbol = this.commandSymbol(index);
  if (symbol === 'messageSpeed') {
    var value = this.getConfigValue(symbol);
    value += 1;
    if (value > 11) value = 0;
    value = value.clamp(0, 11);
    this.changeValue(symbol, value);
  } else {
    MageStudios.MsgSpdOpt.Window_Options_processOk.call(this);
  }
};

MageStudios.MsgSpdOpt.Window_Options_cursorRight = 
  Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function(wrap) {
  var index = this.index();
  var symbol = this.commandSymbol(index);
  if (symbol === 'messageSpeed') {
    var value = this.getConfigValue(symbol);
    value += 1;
    value = value.clamp(0, 11);
    this.changeValue(symbol, value);
  } else {
    MageStudios.MsgSpdOpt.Window_Options_cursorRight.call(this, wrap);
  }
};

MageStudios.MsgSpdOpt.Window_Options_cursorLeft = 
  Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function(wrap) {
  var index = this.index();
  var symbol = this.commandSymbol(index);
  if (symbol === 'messageSpeed') {
    var value = this.getConfigValue(symbol);
    value -= 1;
    value = value.clamp(0, 11);
    this.changeValue(symbol, value);
  } else {
    MageStudios.MsgSpdOpt.Window_Options_cursorLeft.call(this, wrap);
  }
};

}; // Imported.MSEP_OptionsCore

//=============================================================================
// End of File
//=============================================================================
} else {

var text = '';
text += 'You are getting this error because you are trying to run ';
text += 'MEP_X_MessageSpeedOpt without the required plugins. Please visit ';
text += 'MageStudios.moe and install the required plugins neede for this plugin ';
text += 'found in this plugin\'s help file before you can use it.';
console.log(text);
require('nw.gui').Window.get().showDevTools();

}; // Imported.MSEP_MessageCore