var Imported = Imported || {};
Imported.MSEP_RepelEncounters = true;

var MageStudios = MageStudios || {};
MageStudios.RepelLure = MageStudios.RepelLure || {};
MageStudios.RepelLure.version = 1.0;

/*:
 * @plugindesc Tie in the variables that modify the encounter rate
 * by either making them repel or lure battles.
 * @author Mage Studios Engine Plugins
 *
 * @param ---Repel---
 * @default
 *
 * @param Repel Variables
 * @parent ---Repel---
 * @desc This is the variable used to prevent encounter rates.
 * Leave at 0 to not use. Insert spaces for multiple variables.
 * @default 0
 *
 * @param Repel Variables List
 * @parent ---Repel---
 * @type variable[]
 * @desc This is the variable used to prevent encounter rates.
 * Requires MV 1.5.0+ to use.
 * @default []
 *
 * @param Repel Expire Event
 * @parent ---Repel---
 * @type common_event
 * @desc This is the ID of the common event to run when repel wears
 * off. Leave at 0 to not run a common event.
 * @default 0
 *
 * @param ---Lure---
 * @default
 *
 * @param Lure Variables
 * @parent ---Lure---
 * @desc This is the variable used to double encounter rates.
 * Leave at 0 to not use. Insert spaces for multiple variables.
 * @default 0
 *
 * @param Lure Variables List
 * @parent ---Lure---
 * @type variable[]
 * @desc This is the variable used to double encounter rates.
 * Leave at 0 to not use. Insert spaces for multiple variables.
 * @default []
 *
 * @param Lure Expire Event
 * @parent ---Lure---
 * @type common_event
 * @desc This is the ID of the common event to run when lure wears
 * off. Leave at 0 to not run a common event.
 * @default 0
 *
 * @param Lure Rate
 * @parent ---Lure---
 * @type number
 * @decimals 2
 * @min 0
 * @desc This is the rate used to inflate the encounter steps by
 * if under the effects of lure.
 * @default 2.00
 *
 * @param Lure Flat
 * @parent ---Lure---
 * @type number
 * @min 0
 * @desc This is the flat value used to decrease the encounter steps
 * if under the effects of lure.
 * @default 1
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * In RPG Maker MV, you can either choose to enable encounters or disable them
 * completely. However, making a system that repels encounters for a certain
 * amount of steps or increase the encounter rate for a certain amount of steps
 * is a whole different matter. This plugin allows you to create ways to repel
 * encounters, generate lures, and the rate at which lures are done.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * In the plugin parameters, the Repel Variables and Lure Variables parameters
 * are tied to. When the variables for those are adjusted in game, then the
 * effects for those will also be adjusted. When the variable values are above
 * a zero value, they will be in effect and decrease by 1 per step.
 *
 * ---
 *
 * For example, to make a Repel effect work from an item:
 *
 *   1. Set the Repel Variable in the plugin parameter to variable 50.
 *   2. Create an item in the database.
 *   3. Have the item run a common event.
 *   4. Have this common event adjust variable 50 to a value of 100.
 *
 * Now, the player will be able to walk 100 steps without encountering a battle
 * unless it is an evented battle.
 *
 * ---
 *
 * To make a Lure effect work from an item:
 *
 *   1. Set the Lure Variable in the plugin parameter to variable 60.
 *   2. Create an item in the database.
 *   3. Have the item run a common event.
 *   4. Have this common event adjust variable 60 to a value of 100.
 *   5. Optionally, use plugin commands to adjust the rate of the lure.
 *
 * Now, for 100 steps, the player will encounter battles more often than if the
 * lure wasn't present.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * For those who would like to adjust the lure rates and lure flat values
 * mid-game, you can use the following plugin commands.
 *
 * Plugin Commands:
 *
 *   SetLureRate x
 *   - Sets the lure rate for encounters to x when the Lure Variable is active.
 *   You can use JavaScript code for x if you are familiar with JavaScript.
 *
 *   SetLureFlat x
 *   - Sets the flat value for encounters to x when the Lure Variable is active.
 *   You can use JavaScript code for x if you are familiar with JavaScript.
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
 * - Added new parameters: 'Repel Variables List' and 'Lure Variables List'
 *
 * Version 1.00:
 * - Finished Plugin!
 */

MageStudios.Parameters = PluginManager.parameters("MSEP_RepelLureEncounters");
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.RepelExpireEvent = Number(
  MageStudios.Parameters["Repel Expire Event"]
);
MageStudios.Param.LureExpireEvent = Number(
  MageStudios.Parameters["Lure Expire Event"]
);

MageStudios.SetupParameters = function () {
  MageStudios.Param.RepelLureVariables = {};

  var arr = String(MageStudios.Parameters["Repel Variables"]).split(" ");
  for (var i = 0; i < arr.length; ++i) {
    arr[i] = parseInt(arr[i]);
  }
  MageStudios.Param.RepelLureVariables["repel"] = arr;

  var data = JSON.parse(MageStudios.Parameters["Repel Variables List"] || "[]");
  for (var i = 0; i < data.length; ++i) {
    var varId = parseInt(data[i]);
    if (MageStudios.Param.RepelLureVariables.contains(varId)) continue;
    MageStudios.Param.RepelLureVariables.push(varId);
  }

  var arr = String(MageStudios.Parameters["Lure Variables"]).split(" ");
  for (var i = 0; i < arr.length; ++i) {
    arr[i] = parseInt(arr[i]);
  }
  MageStudios.Param.RepelLureVariables["lure"] = arr;
  MageStudios.Param.RepelLureVariables["lureRate"] = Number(
    MageStudios.Parameters["Lure Rate"]
  );
  MageStudios.Param.RepelLureVariables["lureFlat"] = Number(
    MageStudios.Parameters["Lure Flat"]
  );

  var data = JSON.parse(MageStudios.Parameters["Lure Variables List"] || "[]");
  for (var i = 0; i < data.length; ++i) {
    var varId = parseInt(data[i]);
    if (MageStudios.Param.RepelLureVariables.contains(varId)) continue;
    MageStudios.Param.RepelLureVariables.push(varId);
  }
};
MageStudios.SetupParameters();

MageStudios.RepelLure.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
  MageStudios.RepelLure.Game_System_initialize.call(this);
  this.initRepelSettings();
};

Game_System.prototype.initRepelSettings = function () {
  this._lureEncounterRate = MageStudios.Param.RepelLureVariables.lureRate;
  this._lureEncounterFlat = MageStudios.Param.RepelLureVariables.lureFlat;
};

Game_System.prototype.lureEncounterRate = function () {
  if (this._lureEncounterRate === undefined) this.initRepelSettings();
  return this._lureEncounterRate;
};

Game_System.prototype.setLureEncounterRate = function (value) {
  if (this._lureEncounterRate === undefined) this.initRepelSettings();
  try {
    this._lureEncounterRate = eval(value);
  } catch (e) {
    this._lureEncounterRate = 1;
    MageStudios.Util.displayError(e, value, "SET LURE ENCOUNTER RATE ERROR");
  }
};

Game_System.prototype.lureEncounterFlat = function () {
  if (this._lureEncounterFlat === undefined) this.initRepelSettings();
  return this._lureEncounterFlat;
};

Game_System.prototype.setLureEncounterFlat = function (value) {
  if (this._lureEncounterFlat === undefined) this.initRepelSettings();
  try {
    this._lureEncounterFlat = eval(value);
  } catch (e) {
    this._lureEncounterFlat = 1;
    MageStudios.Util.displayError(e, value, "SET LURE ENCOUNTER FLAT ERROR");
  }
};

MageStudios.RepelLure.Game_Interpreter_pluginCommand =
  Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
  MageStudios.RepelLure.Game_Interpreter_pluginCommand.call(
    this,
    command,
    args
  );
  if (command === "SetLureRate") {
    $gameSystem.setLureEncounterRate(this.argsToString(args));
  } else if (command === "SetLureFlat") {
    $gameSystem.setLureEncounterFlat(this.argsToString(args));
  }
};

Game_Interpreter.prototype.argsToString = function (args) {
  var str = "";
  var length = args.length;
  for (var i = 0; i < length; ++i) {
    str += args[i] + " ";
  }
  return str.trim();
};

MageStudios.RepelLure.Game_Player_encounterProgressValue =
  Game_Player.prototype.encounterProgressValue;
Game_Player.prototype.encounterProgressValue = function () {
  var value =
    MageStudios.RepelLure.Game_Player_encounterProgressValue.call(this);
  if (this.isLureEncounters()) {
    value *= $gameSystem.lureEncounterRate();
    value += $gameSystem.lureEncounterFlat();
  }
  if (this.isRepelEncounters()) value *= 0;
  return value;
};

Game_Player.prototype.isLureEncounters = function () {
  var value = false;
  var arr = MageStudios.Param.RepelLureVariables.lure;
  var total = 0;
  for (var i = 0; i < arr.length; ++i) {
    var varId = arr[i];
    if (varId > 0 && $gameVariables.value(varId) !== undefined) {
      if ($gameVariables.value(varId) > 0) {
        value = true;
        $gameVariables.setValue(varId, $gameVariables.value(varId) - 1);
      }
      if ($gameVariables.value(varId) <= 0) {
        total += 1;
      }
    }
  }
  if (value && total >= arr.length && MageStudios.Param.LureExpireEvent > 0) {
    $gameTemp.reserveCommonEvent(MageStudios.Param.LureExpireEvent);
  }
  return value;
};

Game_Player.prototype.isRepelEncounters = function () {
  var value = false;
  var arr = MageStudios.Param.RepelLureVariables.repel;
  var total = 0;
  for (var i = 0; i < arr.length; ++i) {
    var varId = arr[i];
    if (varId > 0 && $gameVariables.value(varId) !== undefined) {
      if ($gameVariables.value(varId) > 0) {
        $gameVariables.setValue(varId, $gameVariables.value(varId) - 1);
        value = true;
      }
      if ($gameVariables.value(varId) <= 0) {
        total += 1;
      }
    }
  }
  if (value && total >= arr.length && MageStudios.Param.RepelExpireEvent > 0) {
    $gameTemp.reserveCommonEvent(MageStudios.Param.RepelExpireEvent);
  }
  return value;
};

MageStudios.Util = MageStudios.Util || {};

MageStudios.Util.displayError = function (e, code, message) {
  console.log(message);
  console.log(code || "NON-EXISTENT");
  console.error(e);
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
  if (Utils.isNwjs() && Utils.isOptionValid("test")) {
    if (!require("nw.gui").Window.get().isDevToolsOpen()) {
      require("nw.gui").Window.get().showDevTools();
    }
  }
};
