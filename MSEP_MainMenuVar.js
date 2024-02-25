//=============================================================================
// Mage Studios Engine Plugins - Main Menu Variable Window
// MSEP_MainMenuVar.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_MainMenuVar = true;

var MageStudios = MageStudios || {};
MageStudios.MMVar = MageStudios.MMVar || {};
MageStudios.MMVar.version = 1.02;

//=============================================================================
 /*:
 * @plugindesc v1.02 Adds a new variable window to your main menu.
 * You can use it to display up to 10 different variables!
 * @author Mage Studios Engine Plugins + Tigress Collaboration
 *
 * @param ---Settings---
 * @default
 *
 * @param Window X
 * @parent ---Settings---
 * @desc This is the x position of your window! Use 'auto' to
 * automate the calculations. This is an eval piece of code.
 * @default auto
 *
 * @param Window Y
 * @parent ---Settings---
 * @desc This is the y position of your window! Use 'auto' to
 * automate the calculations. This is an eval piece of code.
 * @default auto
 *
 * @param Window Width
 * @parent ---Settings---
 * @desc This is the width of your window! Use 'auto' to automate
 * the calculations. This is an eval piece of code.
 * @default auto
 *
 * @param Window Height
 * @parent ---Settings---
 * @desc This is the height of your window! Use 'auto' to automate
 * the calculations. This is an eval piece of code.
 * @default auto
 *
 * @param Font Size
 * @parent ---Settings---
 * @desc This is the font size of the text! Use 'auto' to automate
 * the calculations. This is an eval piece of code.
 * @default 28
 *
 * @param Standard Padding
 * @parent ---Settings---
 * @type number
 * @min 1
 * @decimals 0
 * @desc This is the window padding value!
 * @default 18
 *
 * @param Text Padding
 * @parent ---Settings---
 * @type number
 * @min 1
 * @decimals 0
 * @desc This is the text padding value!
 * @default 6
 *
 * @param Back Opacity
 * @parent ---Settings---
 * @type number
 * @min 0
 * @max 255
 * @decimals 0
 * @desc This is the window's back opacity!
 * @default 192
 *
 * @param Window Opacity
 * @parent ---Settings---
 * @type number
 * @min 0
 * @max 255
 * @decimals 0
 * @desc This is the window's actual opacity!
 * @default 255
 *
 * @param ---Variables---
 * @default
 *
 * @param Displayed Variable 1
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 1st variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 1
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 2
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 2nd variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 2
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 3
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 3rd variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 3
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 4
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 4th variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 4
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 5
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 5th variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 5
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 6
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 6th variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 6
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 7
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 7th variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 7
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 8
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 8th variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 8
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 9
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 9th variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 9
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @param Displayed Variable 10
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc The variable displayed in the 10th variable row.
 * Leave this as 0 to not display a variable.
 * @default 0
 *
 * @param Show Switch Variable 10
 * @parent ---Variables---
 * @type number
 * @min 0
 * @decimals 0
 * @desc This switch needs to be on to show the variable.
 * Leave this as 0 to make the variable not require a switch.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * In RPG Maker MV, the main menu only shows the party's gold as the only 
 * currency in the game. However, some games would prefer to display more than
 * just gold in the main menu, of which, may be possibly found in the form of
 * variables. You can do so using this plugin!
 *
 * This plugin lets you place up to 10 variables of your choice into your
 * game's main menu. It will display the name of the variable and the value of
 * it. If you wish to make certain variables hidden until a certain point, you
 * can attach a switch to it, making the variable show up only if the switch is
 * ON instead of OFF.
 *
 * The Main Menu Variable Window is also customizable, too. You can adjust the
 * x, y, width, height, font settings, and more within the plugin's parameters!
 * This way, you can make it fit your game's main menu however you want!
 *
 * This is a collaboration plugin by Tigress and Mage to ensure compatibility
 * with the Mage Studios Engine Plugins library.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.02:
 * - Compatibility update made with MSEP_X_MoreCurrencies. If a variable has
 * << and >> in its name, it will remove it the text in between like with the
 * MSEP_X_MoreCurrencies plugin.
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

MageStudios.Parameters = PluginManager.parameters('MEP_MainMenuVar');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.MMVarWinX = String(MageStudios.Parameters['Window X']);
MageStudios.Param.MMVarWinY = String(MageStudios.Parameters['Window Y']);
MageStudios.Param.MMVarWinWidth = String(MageStudios.Parameters['Window Width']);
MageStudios.Param.MMVarWinHeight = String(MageStudios.Parameters['Window Height']);
MageStudios.Param.MMVarFontSize = Number(MageStudios.Parameters['Font Size']);
MageStudios.Param.MMVarStandardPad = Number(MageStudios.Parameters['Standard Padding']);
MageStudios.Param.MMVarTextPad = Number(MageStudios.Parameters['Text Padding']);
MageStudios.Param.MMVarBackOpacity = Number(MageStudios.Parameters['Back Opacity']);
MageStudios.Param.MMVarWinOpacity = Number(MageStudios.Parameters['Window Opacity']);

MageStudios.SetupParameters = function() {
  MageStudios.Param.MMVarId = {};
  MageStudios.Param.MMVarSwitch = {};
  for (var i = 1; i <= 10; i++) {
    var key1 = 'Displayed Variable ' + i;
    var key2 = 'Show Switch Variable ' + i;
    MageStudios.Param.MMVarId[i] = Number(MageStudios.Parameters[key1]) || 0;
    MageStudios.Param.MMVarSwitch[i] = Number(MageStudios.Parameters[key2]) || 0;
  }
};
MageStudios.SetupParameters();

//=============================================================================
// Window_MainMenuVariable
//=============================================================================

function Window_MainMenuVariable() {
    this.initialize.apply(this, arguments);
}

Window_MainMenuVariable.prototype = Object.create(Window_Base.prototype);
Window_MainMenuVariable.prototype.constructor = Window_MainMenuVariable;

Window_MainMenuVariable.prototype.initialize = function(x, y, w, h) {
  Window_Base.prototype.initialize.call(this, x, y, w, h);
  this.opacity = MageStudios.Param.MMVarWinOpacity;
  this.refresh();
};

Window_MainMenuVariable.prototype.standardFontSize = function() {
  return MageStudios.Param.MMVarFontSize || 28;
};

Window_MainMenuVariable.prototype.standardPadding = function() {
  return MageStudios.Param.MMVarStandardPad || 18;
};

Window_MainMenuVariable.prototype.textPadding = function() {
  return MageStudios.Param.MMVarTextPad || 6;
};

Window_MainMenuVariable.prototype.standardBackOpacity = function() {
  return MageStudios.Param.MMVarBackOpacity;
};

Window_MainMenuVariable.prototype.refresh = function() {
  this.contents.clear();
  var x = this.textPadding();
  var y = 0;
  for (var i = 1; i <= this.maxVariables(); i++) {
    if (this.showVariableData(i)) {
      this.resetFontSettings();
      y = this.drawVariableData(i, x, y);
    }
  }
};

Window_MainMenuVariable.prototype.maxVariables = function() {
  return 10;
};

Window_MainMenuVariable.prototype.showVariableData = function(i) {
  if (MageStudios.Param.MMVarSwitch[i] <= 0) {
    return true;
  } else {
    return $gameSwitches.value(MageStudios.Param.MMVarSwitch[i]);
  }
};

Window_MainMenuVariable.prototype.drawVariableData = function(i, x, y) {
  if (MageStudios.Param.MMVarId[i] <= 0) {
    return y;
  }
  var varId = MageStudios.Param.MMVarId[i];
  var name = $dataSystem.variables[varId];
  if (Imported.MSEP_X_MoreCurrencies) {
    name = name.replace(/<<(.*?)>>/gi, '');
  }
  this.drawTextEx(name, x, y);
  var value = MageStudios.Util.toGroup($gameVariables.value(varId));
  var width = this.contents.width - this.textPadding() * 2;
  this.drawText(value, x, y, width, 'right');
  return y + this.lineHeight();
};

//=============================================================================
// Scene_Menu
//=============================================================================

MageStudios.MMVar.Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
  MageStudios.MMVar.Scene_Menu_create.call(this);
  this.createVariableWindow();
};

Scene_Menu.prototype.createVariableWindow = function() {
  var x = this.getVariableWindowX();
  var y = this.getVariableWindowY();
  var w = this.getVariableWindowWidth();
  var h = this.getVariableWindowHeight();
  this._variableWindow = new Window_MainMenuVariable(x, y, w, h);
  this.addWindow(this._variableWindow);
};

Scene_Menu.prototype.getVariableWindowX = function() {
  if (MageStudios.Param.MMVarWinX.toUpperCase() === 'AUTO') {
    return this._commandWindow.x;
  } else {
    return eval(MageStudios.Param.MMVarWinX);
  }
};

Scene_Menu.prototype.getVariableWindowY = function() {
  if (MageStudios.Param.MMVarWinY.toUpperCase() === 'AUTO') {
    return this._commandWindow.y + this._commandWindow.height;
  } else {
    return eval(MageStudios.Param.MMVarWinY);
  }
};

Scene_Menu.prototype.getVariableWindowWidth = function() {
  if (MageStudios.Param.MMVarWinWidth.toUpperCase() === 'AUTO') {
    return this._commandWindow.width;
  } else {
    return eval(MageStudios.Param.MMVarWinWidth);
  }
};

Scene_Menu.prototype.getVariableWindowHeight = function() {
  if (MageStudios.Param.MMVarWinHeight.toUpperCase() === 'AUTO') {
    return Graphics.boxHeight - this._commandWindow.height -
      this._goldWindow.height;
  } else {
    return eval(MageStudios.Param.MMVarWinHeight);
  }
};

//=============================================================================
// Utilities
//=============================================================================

MageStudios.Util = MageStudios.Util || {}

if (!MageStudios.Util.toGroup) {

MageStudios.Util.toGroup = function(inVal) {
  return inVal;
}

}; // MageStudios.Util.toGroup

//=============================================================================
// End of File
//=============================================================================