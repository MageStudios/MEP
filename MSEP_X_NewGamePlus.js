var Imported = Imported || {};
Imported.MSEP_X_NewGamePlus = true;

var MageStudios = MageStudios || {};
MageStudios.NGP = MageStudios.NGP || {};
MageStudios.NGP.version = 1.0;

/*:
 * @plugindesc (Requires MSEP_SaveCore.js) Allow your players to have
 * a New Game+ mode that allows carrying over save data.
 * @author Mage Studios Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Command Text
 * @parent ---General---
 * @desc The command text that appears on the save menu for
 * the New Game+ option.
 * @default New Game+
 *
 * @param Command Help
 * @parent ---General---
 * @desc The help text that appears on the save menu for
 * the New Game+ option.
 * @default Start a new game carrying over data from this saved game.
 *
 * @param ---New Game+ Data---
 * @default
 *
 * @param Carried Switches
 * @parent ---New Game+ Data---
 * @desc This is a list of the switch data that's carried over.
 * Separate each switch ID with a comma.
 * @default 0
 *
 * @param Carried Variables
 * @parent ---New Game+ Data---
 * @desc This is a list of the switch data that's carried over.
 * Separate each switch ID with a comma.
 * @default 0
 *
 * @param Playtime
 * @parent ---New Game+ Data---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over the playtime for the New Game+?
 * NO - false     YES - true
 * @default true
 *
 * @param Save Count
 * @parent ---New Game+ Data---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over the save count for the New Game+?
 * NO - false     YES - true
 * @default true
 *
 * @param Step Count
 * @parent ---New Game+ Data---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over the step count for the New Game+?
 * NO - false     YES - true
 * @default true
 *
 * @param Battle Count
 * @parent ---New Game+ Data---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over the battle count for the New Game+?
 * NO - false     YES - true
 * @default true
 *
 * @param Victory Count
 * @parent ---New Game+ Data---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over the victory count for the New Game+?
 * NO - false     YES - true
 * @default true
 *
 * @param Escape Count
 * @parent ---New Game+ Data---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over the escape count for the New Game+?
 * NO - false     YES - true
 * @default true
 *
 * @param ---New Game+ Actors---
 * @default
 *
 * @param Copy Actor
 * @parent ---New Game+ Actors---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over all of the actor's settings?
 * NO - false   YES - true
 * @default true
 *
 * @param EXP
 * @parent ---New Game+ Actors---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over each actor's exp?
 * NO - false     YES - true
 * @default true
 *
 * @param JP
 * @parent ---New Game+ Actors---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Requires MSEP_JobPoints.js: Carry over each actor's JP?
 * NO - false     YES - true
 * @default true
 *
 * @param Skills
 * @parent ---New Game+ Actors---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over each actor's skills?
 * NO - false     YES - true
 * @default true
 *
 * @param ---New Game+ Party---
 * @default
 *
 * @param Gold
 * @parent ---New Game+ Party---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over the party's gold?
 * NO - false     YES - true
 * @default true
 *
 * @param Items
 * @parent ---New Game+ Party---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over the party's items?
 * NO - false     YES - true
 * @default true
 *
 * @param Weapons
 * @parent ---New Game+ Party---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over the party's weapons?
 * NO - false     YES - true
 * @default true
 *
 * @param Armors
 * @parent ---New Game+ Party---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over the party's armors?
 * NO - false     YES - true
 * @default true
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires MSEP_SaveCore. Make sure this plugin is located under
 * MSEP_SaveCore in the plugin list.
 *
 * New Game+ is a great way to provide replay value for your game. It lets the
 * player re-experience the game in a different way with either carried over
 * items, to carried over party members, to carried over skills, switches, and
 * variables even. There exists many options to change how New Game+ will work
 * for your game.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * There are some notetags you can utilize with a few database objects.
 *
 * Actor, Item, Weapon, Armor Notetag
 *
 *   <No New Game+ Carry Over>
 *   - This will prevent the item, weapon, or armor from being carried over to
 *   New Game+. If this is used on an actor, the actor will be in its default
 *   state as if a new game started.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * To set the current save to have New Game+ settings, you'll need to use these
 * plugin commands to alter the settings:
 *
 * Plugin Commands:
 *
 *   EnableNewGamePlus
 *   - This will cause any save after this has been enabled to have a New Game+
 *   option instead of the "Load" command on the loading screen.
 *
 *   DisableNewGamePlus
 *   - This will disable the New Game+ option for saves made after this plugin
 *   command has run. The "Load" option will appear instead of "New Game+".
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.02:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.01:
 * - Bug fixed where the DisableNewGamePlus plugin command didn't work.
 *
 * Version 1.00:
 * - Finished Plugin!
 */

if (Imported.MSEP_SaveCore) {
  MageStudios.Parameters = PluginManager.parameters("MSEP_X_NewGamePlus");
  MageStudios.Param = MageStudios.Param || {};

  MageStudios.Param.NGPCmdText = String(MageStudios.Parameters["Command Text"]);
  MageStudios.Param.NGPCmdHelp = String(MageStudios.Parameters["Command Help"]);

  MageStudios.NGP.ConvertArray = function (str) {
    var data = str.split(",");
    var result = [];
    var length = data.length;
    for (var i = 0; i < length; ++i) {
      var line = data[i].trim();
      if (line.match(/(\d+)[ ](?:THROUGH|to)[ ](\d+)/i)) {
        var range = MageStudios.Util.getRange(
          parseInt(RegExp.$1),
          parseInt(RegExp.$2)
        );
        result = result.concat(range);
      } else if (line.match(/(\d+)/i)) {
        result.push(parseInt(RegExp.$1));
      }
    }
    return result;
  };

  MageStudios.Param.NGPSwitches = String(
    MageStudios.Parameters["Carried Switches"]
  );
  MageStudios.Param.NGPSwitches = MageStudios.NGP.ConvertArray(
    MageStudios.Param.NGPSwitches
  );
  MageStudios.Param.NGPVariables = String(
    MageStudios.Parameters["Carried Variables"]
  );
  MageStudios.Param.NGPVariables = MageStudios.NGP.ConvertArray(
    MageStudios.Param.NGPVariables
  );
  MageStudios.Param.NGPPlaytime = eval(
    String(MageStudios.Parameters["Playtime"])
  );
  MageStudios.Param.NGPSaveCnt = eval(
    String(MageStudios.Parameters["Save Count"])
  );
  MageStudios.Param.NGPStepCnt = eval(
    String(MageStudios.Parameters["Step Count"])
  );
  MageStudios.Param.NGPBattleCnt = eval(
    String(MageStudios.Parameters["Battle Count"])
  );
  MageStudios.Param.NGPVictoryCnt = eval(
    String(MageStudios.Parameters["Victory Count"])
  );
  MageStudios.Param.NGPEscapeCnt = eval(
    String(MageStudios.Parameters["Escape Count"])
  );

  MageStudios.Param.NGPActorWhole = eval(
    String(MageStudios.Parameters["Copy Actor"])
  );
  MageStudios.Param.NGPActorExp = eval(String(MageStudios.Parameters["EXP"]));
  MageStudios.Param.NGPActorJp = eval(String(MageStudios.Parameters["JP"]));
  MageStudios.Param.NGPActorSkills = eval(
    String(MageStudios.Parameters["Skills"])
  );

  MageStudios.Param.NGPPartyGold = eval(String(MageStudios.Parameters["Gold"]));
  MageStudios.Param.NGPPartyItems = eval(
    String(MageStudios.Parameters["Items"])
  );
  MageStudios.Param.NGPPartyWeapons = eval(
    String(MageStudios.Parameters["Weapons"])
  );
  MageStudios.Param.NGPPartyArmors = eval(
    String(MageStudios.Parameters["Armors"])
  );

  MageStudios.NGP.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
  DataManager.isDatabaseLoaded = function () {
    if (!MageStudios.NGP.DataManager_isDatabaseLoaded.call(this)) return false;

    if (!MageStudios._loaded_MSEP_X_NewGamePlus) {
      this.processNGPNotetags1($dataActors);
      this.processNGPNotetags1($dataItems);
      this.processNGPNotetags1($dataWeapons);
      this.processNGPNotetags1($dataArmors);
      MageStudios._loaded_MSEP_X_NewGamePlus = true;
    }

    return true;
  };

  DataManager.processNGPNotetags1 = function (group) {
    for (var n = 1; n < group.length; n++) {
      var obj = group[n];
      var notedata = obj.note.split(/[\r\n]+/);

      obj.newGamePlusCarryOver = true;

      for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(/<NO NEW GAME\+ CARRY OVER>/i)) {
          obj.newGamePlusCarryOver = false;
        }
      }
    }
  };

  MageStudios.NGP.DataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
  DataManager.makeSavefileInfo = function () {
    var info = MageStudios.NGP.DataManager_makeSavefileInfo.call(this);
    info.newGamePlus = $gameSystem.isNewGamePlusEnabled();
    return info;
  };

  DataManager.startNewGamePlus = function () {
    this.prepareNewGamePlusData();
    this.setupNewGame();
    this.carryOverNewGamePlusData();
  };

  DataManager.prepareNewGamePlusData = function () {
    var length = $gameActors._data.length;
    for (var i = 0; i < length; ++i) {
      var actor = $gameActors._data[i];
      if (actor) actor.clearEquipments();
    }
    this._ngpData = {
      switches: JsonEx.makeDeepCopy($gameSwitches._data),
      variables: JsonEx.makeDeepCopy($gameVariables._data),
      loops: $gameSystem.getNewGamePlusLoops(),
      playtime: $gameSystem._framesOnSave,
      savecount: $gameSystem.saveCount(),
      stepcount: $gameParty.steps(),
      battlecount: $gameSystem._battleCount,
      victorycount: $gameSystem._winCount,
      escapecount: $gameSystem._escapeCount,
      actors: JsonEx.makeDeepCopy($gameActors._data),
      gold: $gameParty._gold,
      items: JsonEx.makeDeepCopy($gameParty._items),
      weapons: JsonEx.makeDeepCopy($gameParty._weapons),
      armors: JsonEx.makeDeepCopy($gameParty._armors),
    };
    if (Imported.MSEP_ItemCore) {
      if (MageStudios.Param.ItemMaxItems > 0) {
        this._ngpData.dataItems = JsonEx.makeDeepCopy($dataItems);
      }
      if (MageStudios.Param.ItemMaxWeapons > 0) {
        this._ngpData.dataWeapons = JsonEx.makeDeepCopy($dataWeapons);
      }
      if (MageStudios.Param.ItemMaxArmors > 0) {
        this._ngpData.dataArmors = JsonEx.makeDeepCopy($dataArmors);
      }
      this._ngpData.dmItems = JsonEx.makeDeepCopy(this._independentItems);
      this._ngpData.dmWeapons = JsonEx.makeDeepCopy(this._independentWeapons);
      this._ngpData.dmArmors = JsonEx.makeDeepCopy(this._independentArmors);
    }
  };

  DataManager.carryOverNewGamePlusData = function () {
    this.carryOverNewGamePlusSwitches();
    this.carryOverNewGamePlusVariables();
    this.carryOverNewGamePlusSystemData();
    this.carryOverNewGamePlusActors();
    this.carryOverNewGamePlusPartyData();
  };

  DataManager.carryOverNewGamePlusSwitches = function () {
    var length = MageStudios.Param.NGPSwitches.length;
    for (var i = 0; i < length; ++i) {
      var id = MageStudios.Param.NGPSwitches[i];
      if (id <= 0) continue;
      $gameSwitches.setValue(id, this._ngpData.switches[id]);
    }
  };

  DataManager.carryOverNewGamePlusVariables = function () {
    var length = MageStudios.Param.NGPVariables.length;
    for (var i = 0; i < length; ++i) {
      var id = MageStudios.Param.NGPVariables[i];
      if (id <= 0) continue;
      $gameVariables.setValue(id, this._ngpData.variables[id]);
    }
  };

  DataManager.carryOverNewGamePlusSystemData = function () {
    $gameSystem.setNewGamePlusLoops(this._ngpData.loops + 1);
    $gameSystem.setNewGamePlusLoaded(true);

    if (MageStudios.Param.NGPPlaytime) {
      $gameSystem._framesOnSave = this._ngpData.playtime;
      Graphics.frameCount = this._ngpData.playtime;
    }

    if (MageStudios.Param.NGPSaveCnt) {
      $gameSystem._saveCount = this._ngpData.savecount;
    }

    if (MageStudios.Param.NGPStepCnt) {
      $gameParty._steps = this._ngpData.stepcount;
    }

    if (MageStudios.Param.NGPBattleCnt) {
      $gameSystem._battleCount = this._ngpData.battlecount;
    }

    if (MageStudios.Param.NGPVictoryCnt) {
      $gameSystem._winCount = this._ngpData.victorycount;
    }

    if (MageStudios.Param.NGPEscapeCnt) {
      $gameSystem._escapeCount = this._ngpData.escapecount;
    }
  };

  DataManager.carryOverNewGamePlusActors = function () {
    var length = $gameActors._data.length;
    for (var id = 0; id < length; ++id) {
      var actor = $gameActors.actor(id);
      if (actor) {
        actor = this.copyNewGamePlusActorData(actor, id);
        actor.newGamePlusRefresh();
      }
    }
  };

  DataManager.copyNewGamePlusActorData = function (actor, id) {
    if (!actor.actor().newGamePlusCarryOver) return actor;

    if (MageStudios.Param.NGPActorWhole) {
      $gameActors._data[id] = JsonEx.makeDeepCopy(this._ngpData.actors[id]);
      actor = $gameActors._data[id];
    }

    if (MageStudios.Param.NGPActorExp) {
      actor._exp = JsonEx.makeDeepCopy(this._ngpData.actors[id]._exp);
      actor.newGamePlusAdjustLevel();
    } else {
      actor._exp = {};
      actor.initExp();
    }

    if (Imported.MSEP_JobPoints) {
      if (MageStudios.Param.NGPActorJp) {
        actor._jp = JsonEx.makeDeepCopy(this._ngpData.actors[id]._jp);
      } else {
        actor.initJp();
      }
    }

    if (MageStudios.Param.NGPActorSkills) {
      actor._skills = JsonEx.makeDeepCopy(this._ngpData.actors[id]._skills);
    } else {
      actor.initSkills();
    }
    return actor;
  };

  DataManager.carryOverNewGamePlusPartyData = function () {
    if (MageStudios.Param.NGPPartyGold) {
      $gameParty._gold = this._ngpData.gold;
    }

    if (MageStudios.Param.NGPPartyItems) {
      $gameParty._items = this._ngpData.items;
    }

    if (MageStudios.Param.NGPPartyWeapons) {
      $gameParty._weapons = this._ngpData.weapons;
    }

    if (MageStudios.Param.NGPPartyArmors) {
      $gameParty._armors = this._ngpData.armors;
    }

    if (Imported.MSEP_ItemCore) {
      if (MageStudios.Param.ItemMaxItems > 0) {
        $dataItems = JsonEx.makeDeepCopy(this._ngpData.dataItems);
      }
      if (MageStudios.Param.ItemMaxWeapons > 0) {
        $dataWeapons = JsonEx.makeDeepCopy(this._ngpData.dataWeapons);
      }
      if (MageStudios.Param.ItemMaxArmors > 0) {
        $dataArmors = JsonEx.makeDeepCopy(this._ngpData.dataArmors);
      }
      this._independentItems = JsonEx.makeDeepCopy(this._ngpData.dmItems);
      this._independentWeapons = JsonEx.makeDeepCopy(this._ngpData.dmWeapons);
      this._independentArmors = JsonEx.makeDeepCopy(this._ngpData.dmArmors);
    }
    $gameParty.removeNewGamePlusNoCarryOverItems();
  };

  MageStudios.NGP.Game_System_initialize = Game_System.prototype.initialize;
  Game_System.prototype.initialize = function () {
    MageStudios.NGP.Game_System_initialize.call(this);
    this.initNewGamePlusSettings();
  };

  Game_System.prototype.initNewGamePlusSettings = function () {
    this._newGamePlusEnabled = false;
    this._newGamePlusLoops = 0;
    this._newGamePlusLoaded = false;
  };

  Game_System.prototype.isNewGamePlusEnabled = function () {
    if (this._newGamePlusEnabled === undefined) this.initNewGamePlusSettings();
    return this._newGamePlusEnabled;
  };

  Game_System.prototype.setNewGamePlusEnabled = function (value) {
    if (this._newGamePlusEnabled === undefined) this.initNewGamePlusSettings();
    this._newGamePlusEnabled = value;
  };

  Game_System.prototype.getNewGamePlusLoops = function () {
    if (this._newGamePlusLoops === undefined) this.initNewGamePlusSettings();
    return this._newGamePlusLoops;
  };

  Game_System.prototype.setNewGamePlusLoops = function (value) {
    if (this._newGamePlusLoops === undefined) this.initNewGamePlusSettings();
    this._newGamePlusLoops = value;
  };

  Game_System.prototype.isNewGamePlusLoaded = function () {
    if (this._newGamePlusLoaded === undefined) this.initNewGamePlusSettings();
    return this._newGamePlusLoaded;
  };

  Game_System.prototype.setNewGamePlusLoaded = function (value) {
    if (this._newGamePlusLoaded === undefined) this.initNewGamePlusSettings();
    this._newGamePlusLoaded = value;
  };

  Game_Actor.prototype.newGamePlusAdjustLevel = function () {
    while (!this.isMaxLevel() && this.currentExp() >= this.nextLevelExp()) {
      this.levelUp();
    }
    while (this.currentExp() < this.currentLevelExp()) {
      this.levelDown();
    }
  };

  Game_Actor.prototype.newGamePlusRefresh = function () {
    var actor = $dataActors[this._actorId];
    this._classId = actor.classId;
    this.initEquips(actor.equips);
    this.refresh();
    this.recoverAll();
  };

  Game_Party.prototype.removeNewGamePlusNoCarryOverItems = function () {
    var group = $gameParty.allItems();
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var item = group[i];
      if (!item) continue;
      if (item.newGamePlusCarryOver === undefined && item.baseItemId) {
        var baseItem = DataManager.getBaseItem(item);
        item.newGamePlusCarryOver = baseItem.newGamePlusCarryOver;
      }
      if (item.newGamePlusCarryOver) continue;
      var num = $gameParty.numItems(item);
      $gameParty.loseItem(item, num);
    }
  };

  MageStudios.NGP.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    MageStudios.NGP.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === "EnableNewGamePlus") {
      $gameSystem.setNewGamePlusEnabled(true);
    } else if (command === "DisableNewGamePlus") {
      $gameSystem.setNewGamePlusEnabled(false);
    }
  };

  MageStudios.NGP.Window_SaveAction_getCommandName =
    Window_SaveAction.prototype.getCommandName;
  Window_SaveAction.prototype.getCommandName = function (type) {
    if (type === "load" && this.isNewGamePlus()) {
      return MageStudios.Param.NGPCmdText;
    }
    return MageStudios.NGP.Window_SaveAction_getCommandName.call(this, type);
  };

  MageStudios.NGP.Window_SaveAction_updateHelp =
    Window_SaveAction.prototype.updateHelp;
  Window_SaveAction.prototype.updateHelp = function () {
    if (this.currentSymbol() === "load" && this.isNewGamePlus()) {
      var text = MageStudios.Param.NGPCmdHelp;
      this._helpWindow.setText(text);
    } else {
      MageStudios.NGP.Window_SaveAction_updateHelp.call(this);
    }
  };

  Window_SaveAction.prototype.isNewGamePlus = function () {
    var id = this.savefileId();
    var data = DataManager.loadSavefileInfo(id);
    return data && data.newGamePlus;
  };

  MageStudios.NGP.Scene_File_onLoadSuccess = Scene_File.prototype.onLoadSuccess;
  Scene_File.prototype.onLoadSuccess = function () {
    if (this._actionWindow.isNewGamePlus()) {
      this.startNewGamePlus();
    } else {
      MageStudios.NGP.Scene_File_onLoadSuccess.call(this);
    }
  };

  Scene_File.prototype.startNewGamePlus = function () {
    SoundManager.playLoad();
    DataManager.startNewGamePlus();
    this.fadeOutAll();
    SceneManager.goto(Scene_Map);
  };

  MageStudios.Util = MageStudios.Util || {};

  MageStudios.Util.getRange = function (n, m) {
    var result = [];
    for (var i = n; i <= m; ++i) result.push(i);
    return result;
  };
}
