var Imported = Imported || {};
Imported.MSEP_X_ActorVariables = true;

var MageStudios = MageStudios || {};
MageStudios.AVar = MageStudios.AVar || {};
MageStudios.AVar.version = 1.0;

/*:
 * @plugindesc (Requires MSEP_StatusMenuCore.js) Allows you to
 * display variables for each actor.
 * @author Mage Studios Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Command Name
 * @parent ---General---
 * @desc This is the text used for the command name in the Status
 * Menu command List
 * @default Variables
 *
 * @param ---Columns---
 * @default
 *
 * @param Global Column 1
 * @parent ---Columns---
 * @desc This is a list of variables that appear for all actors.
 * Separate each variable ID with a space.
 * @default 1 2 3 4
 *
 * @param Global Column 2
 * @parent ---Columns---
 * @desc This is a list of variables that appear for all actors.
 * Separate each variable ID with a space.
 * @default 5 6 7 8
 *
 * @param Global Column 3
 * @parent ---Columns---
 * @desc This is a list of variables that appear for all actors.
 * Separate each variable ID with a space.
 * @default
 *
 * @param Global Column 4
 * @parent ---Columns---
 * @desc This is a list of variables that appear for all actors.
 * Separate each variable ID with a space.
 * @default
 *
 * @param Hidden Variables
 * @parent ---Columns---
 * @desc Hide these variables from the status menu at the start
 * of the game. Separate each variable ID with a space.
 * @default
 *
 * @param ---MV 1.5.0---
 * @default
 *
 * @param Global Column 1 1.5.0
 * @text Global Column 1
 * @parent ---MV 1.5.0---
 * @type variable[]
 * @desc This is a list of variables that appear for all actors.
 * Use with MV 1.5.0+
 * @default ["1","2","3","4"]
 *
 * @param Global Column 2 1.5.0
 * @text Global Column 2
 * @parent ---MV 1.5.0---
 * @type variable[]
 * @desc This is a list of variables that appear for all actors.
 * Use with MV 1.5.0+
 * @default ["5","6","7","8"]
 *
 * @param Global Column 3 1.5.0
 * @text Global Column 3
 * @parent ---MV 1.5.0---
 * @type variable[]
 * @desc This is a list of variables that appear for all actors.
 * Use with MV 1.5.0+
 * @default []
 *
 * @param Global Column 4 1.5.0
 * @text Global Column 4
 * @parent ---MV 1.5.0---
 * @type variable[]
 * @desc This is a list of variables that appear for all actors.
 * Use with MV 1.5.0+
 * @default []
 *
 * @param Hidden Variables 1.5.0
 * @text Hidden Variables
 * @parent ---MV 1.5.0---
 * @type variable[]
 * @desc Hide these variables from the status menu at the start
 * of the game. Use with MV 1.5.0+
 * @default []
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires MSEP_StatusMenuCore.js.
 * Place this plugin under MSEP_StatusMenuCore.js in the Plugin Manager.
 *
 * This plugin lets you place variables into the Status Menu Core in a unique
 * page for display as actor data. These variables can come from a global or
 * individual source per actor. Variables listed in the Global Columns found in
 * the parameters will be listed for all actors. Variables defined in the actor
 * noteboxes will be listed for that actor when displayed.
 *
 * If you wish to place the Actor Variables tab in the Status Menu in a
 * specific spot, place 'Variables' without the quotes in the Status Menu
 * Core's Command Order parameter. If it's not present there, it will
 * automatically order itself in the 'Custom' tab.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Use the following notetags to display variables in your Status Menu.
 *
 * Actor Notetags:
 *   <Column x Variables: y>
 *   <Column x Variables: y, y, y>
 *   <Column x Variables: y to z>
 *   This will display in column x (1 through 4) the variable(s) y. If using
 *   the y to z notetag, this will display all the variables from y to z.
 *
 * ============================================================================
 * Variable Icons and Display
 * ============================================================================
 *
 * To display icons and change the display of your variables, write the name
 * of your variables like text codes in the variable editor.
 *
 * A variable name like this \i[42]Variable Name will show up with an icon.
 *
 * However, if you wish to make notes that do not appear, you can place the
 * notes between << and >>. For example:
 *
 * Hello <<You can't see me>>World!
 *
 * will show up as 'Hello World!' because of the << and >> markers.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * These are plugin commands to allow you to hide/show specific variables
 * throughout your game.
 *
 * Plugin Command:
 *
 * HideActorVariable 1
 * Hides variable 1 from being shown in the actor status menu.
 *
 * ShowActorVariable 2
 * Disables any hidden properties for variable 2 in the actor status menu.
 */

if (Imported.MSEP_StatusMenuCore) {
  MageStudios.Parameters = PluginManager.parameters("MSEP_X_ActorVariables");
  MageStudios.Param = MageStudios.Param || {};

  MageStudios.Param.AVarCmdName = String(
    MageStudios.Parameters["Command Name"]
  );
  MageStudios.Param.AVarColumn1 = String(
    MageStudios.Parameters["Global Column 1"]
  );
  MageStudios.Param.AVarColumn2 = String(
    MageStudios.Parameters["Global Column 2"]
  );
  MageStudios.Param.AVarColumn3 = String(
    MageStudios.Parameters["Global Column 3"]
  );
  MageStudios.Param.AVarColumn4 = String(
    MageStudios.Parameters["Global Column 4"]
  );
  MageStudios.Param.AVarHidden = String(
    MageStudios.Parameters["Hidden Variables"]
  );

  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.5.0") {
    MageStudios.SetupParameters = function () {
      var data = JSON.parse(
        MageStudios.Parameters["Global Column 1 1.5.0"] || "[]"
      );
      for (var i = 0; i < data.length; ++i) {
        var varId = data[i];
        MageStudios.Param.AVarColumn1 += " " + varId;
      }
      MageStudios.Param.AVarColumn1 = MageStudios.Param.AVarColumn1.trim();

      data = JSON.parse(
        MageStudios.Parameters["Global Column 2 1.5.0"] || "[]"
      );
      for (var i = 0; i < data.length; ++i) {
        var varId = data[i];
        MageStudios.Param.AVarColumn2 += " " + varId;
      }
      MageStudios.Param.AVarColumn2 = MageStudios.Param.AVarColumn2.trim();

      data = JSON.parse(
        MageStudios.Parameters["Global Column 3 1.5.0"] || "[]"
      );
      for (var i = 0; i < data.length; ++i) {
        var varId = data[i];
        MageStudios.Param.AVarColumn3 += " " + varId;
      }
      MageStudios.Param.AVarColumn3 = MageStudios.Param.AVarColumn3.trim();

      var data = JSON.parse(
        MageStudios.Parameters["Global Column 4 1.5.0"] || "[]"
      );
      for (var i = 0; i < data.length; ++i) {
        var varId = data[i];
        MageStudios.Param.AVarColumn4 += " " + varId;
      }
      MageStudios.Param.AVarColumn4 = MageStudios.Param.AVarColumn4.trim();

      var data = JSON.parse(
        MageStudios.Parameters["Hidden Variables 1.5.0"] || "[]"
      );
      for (var i = 0; i < data.length; ++i) {
        var varId = data[i];
        MageStudios.Param.AVarHidden += " " + varId;
      }
      MageStudios.Param.AVarHidden = MageStudios.Param.AVarHidden.trim();
    };
    MageStudios.SetupParameters();
  }

  MageStudios.AVar.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
  DataManager.isDatabaseLoaded = function () {
    if (!MageStudios.AVar.DataManager_isDatabaseLoaded.call(this)) return false;
    if (!MageStudios._loaded_MSEP_X_ActorVariables) {
      DataManager.processAVarNotetags($dataActors);
      MageStudios._loaded_MSEP_X_ActorVariables = true;
    }
    return true;
  };

  DataManager.processAVarNotetags = function (group) {
    var note1a = /<(?:COLUMN 1 VARIABLES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note1b = /<(?:COLUMN 1 VARIABLES):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
    var note2a = /<(?:COLUMN 2 VARIABLES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note2b = /<(?:COLUMN 2 VARIABLES):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
    var note3a = /<(?:COLUMN 3 VARIABLES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note3b = /<(?:COLUMN 3 VARIABLES):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
    var note4a = /<(?:COLUMN 4 VARIABLES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note4b = /<(?:COLUMN 4 VARIABLES):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
    for (var n = 1; n < group.length; n++) {
      var obj = group[n];
      var notedata = obj.note.split(/[\r\n]+/);

      obj.varColumn1 = JsonEx.makeDeepCopy(MageStudios.Param.AVarColumn1);
      obj.varColumn2 = JsonEx.makeDeepCopy(MageStudios.Param.AVarColumn2);
      obj.varColumn3 = JsonEx.makeDeepCopy(MageStudios.Param.AVarColumn3);
      obj.varColumn4 = JsonEx.makeDeepCopy(MageStudios.Param.AVarColumn4);

      for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(note1a)) {
          var array = JSON.parse("[" + RegExp.$1.match(/\d+/g) + "]");
          obj.varColumn1 = obj.varColumn1.concat(array);
        } else if (line.match(note1b)) {
          var range = MageStudios.Util.getRange(
            parseInt(RegExp.$1),
            parseInt(RegExp.$2)
          );
          obj.varColumn1 = obj.varColumn1.concat(range);
        } else if (line.match(note2a)) {
          var array = JSON.parse("[" + RegExp.$1.match(/\d+/g) + "]");
          obj.varColumn2 = obj.varColumn2.concat(array);
        } else if (line.match(note2b)) {
          var range = MageStudios.Util.getRange(
            parseInt(RegExp.$1),
            parseInt(RegExp.$2)
          );
          obj.varColumn2 = obj.varColumn2.concat(range);
        } else if (line.match(note3a)) {
          var array = JSON.parse("[" + RegExp.$1.match(/\d+/g) + "]");
          obj.varColumn3 = obj.varColumn3.concat(array);
        } else if (line.match(note3b)) {
          var range = MageStudios.Util.getRange(
            parseInt(RegExp.$1),
            parseInt(RegExp.$2)
          );
          obj.varColumn3 = obj.varColumn3.concat(range);
        } else if (line.match(note4a)) {
          var array = JSON.parse("[" + RegExp.$1.match(/\d+/g) + "]");
          obj.varColumn4 = obj.varColumn4.concat(array);
        } else if (line.match(note4b)) {
          var range = MageStudios.Util.getRange(
            parseInt(RegExp.$1),
            parseInt(RegExp.$2)
          );
          obj.varColumn4 = obj.varColumn4.concat(range);
        }
      }
      if (obj.varColumn1.length <= 0) obj.varColumn1 = [""];
      if (obj.varColumn2.length <= 0) obj.varColumn2 = [""];
      if (obj.varColumn3.length <= 0) obj.varColumn3 = [""];
      if (obj.varColumn4.length <= 0) obj.varColumn4 = [""];
    }
  };

  MageStudios.AVar.Game_System_initialize = Game_System.prototype.initialize;
  Game_System.prototype.initialize = function () {
    MageStudios.AVar.Game_System_initialize.call(this);
    this.initHiddenActorStatusVariables();
  };

  Game_System.prototype.initHiddenActorStatusVariables = function () {
    var arr = MageStudios.Param.AVarHidden.split(" ");
    this._hiddenActorStatusVariables = [];
    for (var i = 0; i < arr.length; ++i) {
      var v = arr[i];
      this._hiddenActorStatusVariables.push(parseInt(v));
    }
  };

  Game_System.prototype.hiddenActorStatusVariables = function () {
    if (this._hiddenActorStatusVariables === undefined) {
      this.initHiddenActorStatusVariables();
    }
    return this._hiddenActorStatusVariables;
  };

  Game_System.prototype.isHiddenActorStatusVariable = function (varId) {
    if (this._hiddenActorStatusVariables === undefined) {
      this.initHiddenActorStatusVariables();
    }
    return this._hiddenActorStatusVariables.contains(varId);
  };

  Game_System.prototype.hideActorStatusVariable = function (varId) {
    if (this._hiddenActorStatusVariables === undefined) {
      this.initHiddenActorStatusVariables();
    }
    this._hiddenActorStatusVariables.push(parseInt(varId));
  };

  Game_System.prototype.showActorStatusVariable = function (varId) {
    if (this._hiddenActorStatusVariables === undefined) {
      this.initHiddenActorStatusVariables();
    }
    for (var i = 0; i < this._hiddenActorStatusVariables.length; ++i) {
      if (this._hiddenActorStatusVariables[i] === varId) {
        this._hiddenActorStatusVariables.splice(i, 1);
        --i;
      }
    }
  };

  Game_Actor.prototype.varColumn1 = function () {
    return this.actor().varColumn1;
  };

  Game_Actor.prototype.varColumn2 = function () {
    return this.actor().varColumn2;
  };

  Game_Actor.prototype.varColumn3 = function () {
    return this.actor().varColumn3;
  };

  Game_Actor.prototype.varColumn4 = function () {
    return this.actor().varColumn4;
  };

  MageStudios.AVar.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    MageStudios.AVar.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === "HideActorVariable") {
      $gameSystem.hideActorStatusVariable(parseInt(args[0]));
    }
    if (command === "ShowActorVariable") {
      $gameSystem.showActorStatusVariable(parseInt(args[0]));
    }
  };

  MageStudios.AVar.Window_StatusCommand_createCommand =
    Window_StatusCommand.prototype.createCommand;
  Window_StatusCommand.prototype.createCommand = function (command) {
    if (command.toUpperCase() === "VARIABLES") {
      var text = MageStudios.Param.AVarCmdName;
      this.addCommand(text, "actorVariables", true);
    } else {
      MageStudios.AVar.Window_StatusCommand_createCommand.call(this, command);
    }
  };

  MageStudios.AVar.Window_StatusCommand_addCustomCommands =
    Window_StatusCommand.prototype.addCustomCommands;
  Window_StatusCommand.prototype.addCustomCommands = function () {
    MageStudios.AVar.Window_StatusCommand_addCustomCommands.call(this);
    if (this.findSymbol("actorVariables") > -1) return;
    var text = MageStudios.Param.AVarCmdName;
    this.addCommand(text, "actorVariables", true);
  };

  MageStudios.AVar.Window_StatusInfo_drawInfoContents =
    Window_StatusInfo.prototype.drawInfoContents;
  Window_StatusInfo.prototype.drawInfoContents = function (symbol) {
    if (symbol === "actorVariables") {
      this.drawActorVariables();
    } else {
      MageStudios.AVar.Window_StatusInfo_drawInfoContents.call(this, symbol);
    }
  };

  Window_StatusInfo.prototype.drawActorVariables = function () {
    this.resetFontSettings();
    this.drawActorVariableColumnRects();
    this.drawActorVariableInfo();
  };

  Window_StatusInfo.prototype.actorVariableArray = function () {
    var array = [
      this._actor.varColumn1(),
      this._actor.varColumn2(),
      this._actor.varColumn3(),
      this._actor.varColumn4(),
    ];
    return array;
  };

  Window_StatusInfo.prototype.drawActorVariableColumnRects = function () {
    var maxCols = this.getMaxArrayCols(this.actorVariableArray());
    var maxRows = this.getMaxArrayRows(this.actorVariableArray());
    if (maxCols <= 0) return;
    var dx = this.getArrayX();
    var dy = this.getArrayY();
    var dw = this.getArrayDW(maxCols);
    for (var i = 0; i < maxCols; ++i) {
      for (var j = 0; j < maxRows; ++j) {
        this.drawDarkRect(dx, dy, dw, this.lineHeight());
        dy += this.lineHeight();
      }
      dx += dw;
      dx += maxCols > 1 ? this.standardPadding() : 0;
      dy = 0;
    }
  };

  Window_StatusInfo.prototype.drawActorVariableInfo = function () {
    var maxCols = this.getMaxArrayCols(this.actorVariableArray());
    var maxRows = this.getMaxArrayRows(this.actorVariableArray());
    if (maxCols <= 0) return;
    var infoArray = this.actorVariableArray();
    var dx = this.getArrayX();
    var dy = this.getArrayY();
    var dw = this.getArrayDW(maxCols);
    for (var i = 0; i < maxCols; ++i) {
      for (var j = 0; j < infoArray[i].length; ++j) {
        var varId = infoArray[i][j];
        if ($gameSystem.isHiddenActorStatusVariable(varId)) continue;
        this.drawActorVarData(varId, dx, dy, dw);
        dy += this.lineHeight();
      }
      dx += dw;
      dx += maxCols > 1 ? this.standardPadding() : 0;
      dy = 0;
    }
  };

  Window_StatusInfo.prototype.drawActorVarData = function (varId, dx, dy, dw) {
    varId = parseInt(varId);
    var name = $dataSystem.variables[varId];
    var value = $gameVariables.value(varId);
    dx += this.textPadding();
    dw -= this.textPadding() * 2;
    this._bypassResetTextColor = true;
    this.changeTextColor(this.systemColor());
    name = name.replace(/<<(.*?)>>/i, "");
    this.drawTextEx(name, dx, dy);
    this._bypassResetTextColor = false;
    this.resetTextColor();
    if (typeof value === "number") value = MageStudios.Util.toGroup(value);
    this.drawText(value, dx, dy, dw, "right");
  };

  MageStudios.Util = MageStudios.Util || {};

  if (!MageStudios.Util.toGroup) {
    MageStudios.Util.toGroup = function (inVal) {
      return inVal;
    };
  }

  MageStudios.Util.splitArray = function (string) {
    if (string === "") {
      return [];
    } else {
      return string.split(" ");
    }
  };

  MageStudios.Util.getRange = function (n, m) {
    var result = [];
    for (var i = n; i <= m; ++i) result.push(i);
    return result;
  };

  MageStudios.Param.AVarColumn1 = MageStudios.Util.splitArray(
    MageStudios.Param.AVarColumn1
  );
  MageStudios.Param.AVarColumn2 = MageStudios.Util.splitArray(
    MageStudios.Param.AVarColumn2
  );
  MageStudios.Param.AVarColumn3 = MageStudios.Util.splitArray(
    MageStudios.Param.AVarColumn3
  );
  MageStudios.Param.AVarColumn4 = MageStudios.Util.splitArray(
    MageStudios.Param.AVarColumn4
  );
}
