var Imported = Imported || {};
Imported.MSEP_X_Subclass = true;

var MageStudios = MageStudios || {};
MageStudios.Subclass = MageStudios.Subclass || {};
MageStudios.Subclass.version = 1.0;

/*:
 * @plugindesc (Requires MSEP_ClassChangeCore.js) Allow your actors
 * to subclass into a secondary class!
 * @author Mage Studios Engine Plugins
 *
 * @param ---Class Menu---
 * @default
 *
 * @param Subclass Command
 * @parent ---Class Menu---
 * @desc The text used for 'Subclass' command.
 * @default Subclass
 *
 * @param Show Command
 * @parent ---Class Menu---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the Subclass command by default?
 * NO - false     YES - true
 * @default true
 *
 * @param Enable Command
 * @parent ---Class Menu---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the Subclass command by default?
 * NO - false     YES - true
 * @default true
 *
 * @param Name Format
 * @parent ---Class Menu---
 * @desc How do you wish to display the class/subclass text?
 * %1 - Current Class     %2 - Subclass
 * @default %1/%2
 *
 * @param Subclass Color
 * @parent ---Class Menu---
 * @type number
 * @min 0
 * @max 31
 * @desc This is the text color used for the actor's subclass.
 * @default 5
 *
 * @param ---Parameters---
 * @default
 *
 * @param MaxHP
 * @parent ---Parameters---
 * @type number
 * @decimals 2
 * @min 0
 * @desc What rate of the Subclass MaxHP should be added?
 * @default 0.10
 *
 * @param MaxMP
 * @parent ---Parameters---
 * @type number
 * @decimals 2
 * @min 0
 * @desc What rate of the Subclass MaxMP should be added?
 * @default 0.10
 *
 * @param ATK
 * @parent ---Parameters---
 * @type number
 * @decimals 2
 * @min 0
 * @desc What rate of the Subclass ATK should be added?
 * @default 0.20
 *
 * @param DEF
 * @parent ---Parameters---
 * @type number
 * @decimals 2
 * @min 0
 * @desc What rate of the Subclass DEF should be added?
 * @default 0.20
 *
 * @param MAT
 * @parent ---Parameters---
 * @type number
 * @decimals 2
 * @min 0
 * @desc What rate of the Subclass MAT should be added?
 * @default 0.20
 *
 * @param MDF
 * @parent ---Parameters---
 * @type number
 * @decimals 2
 * @min 0
 * @desc What rate of the Subclass MDF should be added?
 * @default 0.20
 *
 * @param AGI
 * @parent ---Parameters---
 * @type number
 * @decimals 2
 * @min 0
 * @desc What rate of the Subclass AGI should be added?
 * @default 0.20
 *
 * @param LUK
 * @parent ---Parameters---
 * @type number
 * @decimals 2
 * @min 0
 * @desc What rate of the Subclass LUK should be added?
 * @default 0.20
 *
 * @param EXP
 * @parent ---Parameters---
 * @type number
 * @decimals 2
 * @min 0
 * @desc When gaining EXP, how much should subclasses earn?
 * @default 0.25
 *
 * @param JP
 * @parent ---Parameters---
 * @type number
 * @decimals 2
 * @min 0
 * @desc When gaining JP, how much should subclasses earn?
 * @default 0.25
 *
 * @param ---Traits---
 * @default
 *
 * @param Skill Types
 * @parent ---Traits---
 * @type boolean
 * @on YES
 * @off NO
 * @desc User can use skill types owned by the subclass?
 * NO - false     YES - true
 * @default true
 *
 * @param Added Skills
 * @parent ---Traits---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over added skills from subclass?
 * NO - false     YES - true
 * @default true
 *
 * @param Param Rates
 * @parent ---Traits---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over parameter rates from subclass?
 * NO - false     YES - true
 * @default false
 *
 * @param X-Param Values
 * @parent ---Traits---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over x-parameter values from subclass?
 * NO - false     YES - true
 * @default false
 *
 * @param S-Param Rates
 * @parent ---Traits---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over s-parameter rates from subclass?
 * NO - false     YES - true
 * @default false
 *
 * @param Element Rates
 * @parent ---Traits---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over element rates from subclass?
 * NO - false     YES - true
 * @default false
 *
 * @param Debuff Rates
 * @parent ---Traits---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over debuff rates from subclass?
 * NO - false     YES - true
 * @default false
 *
 * @param State Rates
 * @parent ---Traits---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over parameter rates from subclass?
 * NO - false     YES - true
 * @default false
 *
 * @param State Resist
 * @parent ---Traits---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over state resistances from subclass?
 * NO - false     YES - true
 * @default false
 *
 * @param Attack Element
 * @parent ---Traits---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over attack elements from subclass?
 * NO - false     YES - true
 * @default false
 *
 * @param Attack State
 * @parent ---Traits---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over attack states from subclass?
 * NO - false     YES - true
 * @default false
 *
 * @param Weapons
 * @parent ---Traits---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over equippable weapons from subclass?
 * NO - false     YES - true
 * @default false
 *
 * @param Armors
 * @parent ---Traits---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Carry over equippable armors from subclass?
 * NO - false     YES - true
 * @default false
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires MSEP_ClassChangeCore. Make sure this plugin is located
 * under MSEP_ClassChangeCore in the plugin list.
 *
 * This class enables subclassing for your actors. Actors, when subclassing,
 * can gain the benefits of the subclass, usually either by having access to
 * the subclass skill set, weapons, and armor options. Also with this plugin,
 * you can enable what kind of stat bonuses you can get by having a particular
 * subclass enabled for the actor.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * You can use the following notetags to modify subclassing aspects.
 *
 * Actor Notetag:
 *   <Subclass: x>
 *   Sets the actor's default subclass to x.
 *
 *   <Cannot Change Subclass>
 *   This prevents this actor from being able to change subclasses. This could
 *   be reversed from plugin commands, however.
 *
 *   <Restrict Class: x>
 *   <Restrict Class: x, x, x>
 *   <Restrict Class: x to y>
 *   This particular actor cannot switch his or her primary class to class(es)
 *   x (to y). This does not apply to the subclass. The actor can still change
 *   to this class via event.
 *
 *   <Restrict Subclass: x>
 *   <Restrict Subclass: x, x, x>
 *   <Restrict Subclass: x to y>
 *   This particular actor cannot switch his or her subclass to class(es)
 *   x (to y). This does not apply to the primary class.  The actor can still
 *   change to this subclass via event.
 *
 * Class Notetags:
 *   <Primary Only>
 *   This class can only be class changed to a primary class and nothing more.
 *   Actors can still change to this class via event.
 *
 *   <Subclass Only>
 *   This class can only be class changed to a subclass and nothing more.
 *   Actors can still change to this subclass via event.
 *
 *   <Subclass x Combo Name: text>
 *   If this class is the primary and the subclass is class ID x, then the
 *   class name displayed will be 'text'. For example, if the class combination
 *   is Warrior/Wizard, the name can appear as Spellblade.
 *
 *   <Hero Combo Name: text>
 *   <Warrior Combo Name: text>
 *   If you choose to use the class's name instead, you can write out the name
 *   of the class in place of Subclass x. If you have multiple classes with the
 *   same name, priority will be given to the class with the highest ID.
 *
 * Skill and Item Notetags:
 *   <Require Class: x>
 *   <Require Class: x, x, x>
 *   <Require Class: x to y>
 *   Replace x with the class's ID. This skill/item can only be used by the
 *   listed class(es) x. This does not apply to enemies.
 *
 *   <Require Subclass: x>
 *   <Require Subclass: x, x, x>
 *   <Require Subclass: x to y>
 *   Replace x with the class's ID. This skill/item can only be used by the
 *   listed subclass(es) x. This does not apply to enemies.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * You can use these following plugin commands to change subclassing throughout
 * the game!
 *
 * Plugin Command:
 *
 *   ShowSubclass
 *   HideSubclass
 *   - Shows/Hides the Subclass command in the Class Change Menu.
 *
 *   EnableSubclass
 *   DisableSubclass
 *   - Enables/Disables the Subclass command in the Class Change Menu.
 *
 *   ChangeSubclass x y
 *   - Changes actor x's subclass to y. Replace y with 0 to remove a subclass.
 *
 *   EnableSubclassChange 5
 *   DisableSubclassChange 5
 *   - This enables/disables subclass changing for actor 5.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.11:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.10:
 * - Compatibility update with Class Change Core's <Use Nickname> notetag.
 *
 * Version 1.09:
 * - Added <Cannot Change Subclass> notetag for actors. Added plugin commands:
 * EnableSubclassChange and DisableSubclassChange for actors.
 *
 * Version 1.08:
 * - Compatibility update with other plugins.
 *
 * Version 1.07:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.06:
 * - Added 'EXP' plugin parameter. This determines the rate the equipped
 * subclass will earn EXP.
 * - Added 'JP' plugin parameter. This determines the rate the equipped
 * subclass will earn JP.
 *
 * Version 1.05:
 * - Fixed a bug where changing a dead actor's subclass would revive them.
 *
 * Version 1.04:
 * - Fixed an issue that would turn the ATB gauge in battle a different color.
 *
 * Version 1.03:
 * - Fixed a bug that would duplicate non-independent items.
 *
 * Version 1.02:
 * - Fixed a bug that would heal an actor's HP to full by switching subclasses.
 *
 * Version 1.01:
 * - Fixed a bug that added maximum rate for certain subclass inheritances.
 * - Added a failsafe for undefined subclasses due to MV's database not
 * updating the Classes.JSON file properly.
 *
 * Version 1.00:
 * - Finished Plugin!
 */

if (Imported.MSEP_ClassChangeCore) {
  MageStudios.Parameters = PluginManager.parameters("MSEP_X_Subclass");
  MageStudios.Param = MageStudios.Param || {};

  MageStudios.Param.SubclassCmd = String(
    MageStudios.Parameters["Subclass Command"]
  );
  MageStudios.Param.SubclassShowCmd = String(
    MageStudios.Parameters["Show Command"]
  );
  MageStudios.Param.SubclassEnableCmd = String(
    MageStudios.Parameters["Enable Command"]
  );
  MageStudios.Param.SubclassFmt = String(MageStudios.Parameters["Name Format"]);
  MageStudios.Param.SubclassColor = Number(
    MageStudios.Parameters["Subclass Color"]
  );

  MageStudios.Subclass.Param = {};
  MageStudios.Subclass.Param[0] = Number(MageStudios.Parameters["MaxHP"]);
  MageStudios.Subclass.Param[1] = Number(MageStudios.Parameters["MaxMP"]);
  MageStudios.Subclass.Param[2] = Number(MageStudios.Parameters["ATK"]);
  MageStudios.Subclass.Param[3] = Number(MageStudios.Parameters["DEF"]);
  MageStudios.Subclass.Param[4] = Number(MageStudios.Parameters["MAT"]);
  MageStudios.Subclass.Param[5] = Number(MageStudios.Parameters["MDF"]);
  MageStudios.Subclass.Param[6] = Number(MageStudios.Parameters["AGI"]);
  MageStudios.Subclass.Param[7] = Number(MageStudios.Parameters["LUK"]);
  MageStudios.Param.SubclassExp = Number(MageStudios.Parameters["EXP"]);
  MageStudios.Param.SubclassJp = Number(MageStudios.Parameters["JP"]);

  MageStudios.Param.SubclassSType = eval(
    String(MageStudios.Parameters["Skill Types"])
  );
  MageStudios.Param.SubParamRates = eval(
    String(MageStudios.Parameters["Param Rates"])
  );
  MageStudios.Param.SubXParamVal = eval(
    String(MageStudios.Parameters["X-Param Values"])
  );
  MageStudios.Param.SubSParamRates = eval(
    String(MageStudios.Parameters["S-Param Rates"])
  );
  MageStudios.Param.SubSEleRates = eval(
    String(MageStudios.Parameters["Element Rates"])
  );
  MageStudios.Param.SubDebuffRates = eval(
    String(MageStudios.Parameters["Debuff Rates"])
  );
  MageStudios.Param.SubStateRates = eval(
    String(MageStudios.Parameters["Debuff Rates"])
  );
  MageStudios.Param.SubStateRes = eval(
    String(MageStudios.Parameters["State Resist"])
  );
  MageStudios.Param.SubAttackEle = eval(
    String(MageStudios.Parameters["Attack Element"])
  );
  MageStudios.Param.SubAttackState = eval(
    String(MageStudios.Parameters["Attack State"])
  );
  MageStudios.Param.SubAddedSkills = eval(
    String(MageStudios.Parameters["Added Skills"])
  );
  MageStudios.Param.SubclassWeapons = eval(
    String(MageStudios.Parameters["Weapons"])
  );
  MageStudios.Param.SubclassArmors = eval(
    String(MageStudios.Parameters["Armors"])
  );

  MageStudios.Subclass.DataManager_isDatabaseLoaded =
    DataManager.isDatabaseLoaded;
  DataManager.isDatabaseLoaded = function () {
    if (!MageStudios.Subclass.DataManager_isDatabaseLoaded.call(this))
      return false;
    if (!MageStudios._loaded_MSEP_X_Subclass) {
      DataManager.processSubclassNotetags1($dataActors);
      DataManager.processSubclassNotetags2($dataClasses);
      DataManager.processSubclassNotetags3($dataSkills);
      DataManager.processSubclassNotetags3($dataItems);
      MageStudios._loaded_MSEP_X_Subclass = true;
    }
    return true;
  };

  DataManager.processSubclassNotetags1 = function (group) {
    var note1a = /<(?:RESTRICT CLASS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note1b = /<(?:RESTRICT CLASS):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
    var note2a = /<(?:RESTRICT SUBCLASS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note2b = /<(?:RESTRICT SUBCLASS):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
    var note3 = /<(?:CANNOT CHANGE SUBCLASS|CANT CHANGE SUBCLASS)>/i;
    for (var n = 1; n < group.length; n++) {
      var obj = group[n];
      var notedata = obj.note.split(/[\r\n]+/);

      obj.subclassId = 0;
      obj.restrictClassChange = [];
      obj.restrictSubclassChange = [];
      obj.canChangeSubclass = true;

      for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(/<(?:SUBCLASS):[ ](\d+)>/i)) {
          obj.subclassId = parseInt(RegExp.$1);
        } else if (line.match(note1a)) {
          var array = JSON.parse("[" + RegExp.$1.match(/\d+/g) + "]");
          obj.restrictClassChange = obj.restrictClassChange.concat(array);
        } else if (line.match(note1b)) {
          var range = MageStudios.Util.getRange(
            parseInt(RegExp.$1),
            parseInt(RegExp.$2)
          );
          obj.restrictClassChange = obj.restrictClassChange.concat(range);
        } else if (line.match(note2a)) {
          var array = JSON.parse("[" + RegExp.$1.match(/\d+/g) + "]");
          obj.restrictSubclassChange = obj.restrictSubclassChange.concat(array);
        } else if (line.match(note2b)) {
          var range = MageStudios.Util.getRange(
            parseInt(RegExp.$1),
            parseInt(RegExp.$2)
          );
          obj.restrictSubclassChange = obj.restrictSubclassChange.concat(range);
        } else if (line.match(note3)) {
          obj.canChangeSubclass = false;
        }
      }
    }
  };

  DataManager.processSubclassNotetags2 = function (group) {
    var note1a = /<(?:SUBCLASS)[ ](\d+)[ ](?:COMBO NAME):[ ](.*)>/i;
    var note1b = /<(.*)[ ](?:COMBO NAME):[ ](.*)>/i;
    for (var n = 1; n < group.length; n++) {
      var obj = group[n];
      var notedata = obj.note.split(/[\r\n]+/);

      obj.primaryAllowed = true;
      obj.subclassAllowed = true;
      obj.subclassComboName = {};

      for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(/<(?:PRIMARY ONLY)>/i)) {
          obj.primaryAllowed = true;
          obj.subclassAllowed = false;
        } else if (line.match(/<(?:SUBCLASS ONLY)>/i)) {
          obj.primaryAllowed = false;
          obj.subclassAllowed = true;
        } else if (line.match(note1a)) {
          var classId = parseInt(RegExp.$1);
          var className = String(RegExp.$2);
          obj.subclassComboName[classId] = className;
        } else if (line.match(note1b)) {
          var name = String(RegExp.$1).toUpperCase();
          var className = String(RegExp.$2);
          var classId = MageStudios.ClassIdRef[name];
          if (classId) obj.subclassComboName[classId] = className;
        }
      }
    }
  };

  DataManager.processSubclassNotetags3 = function (group) {
    var note1a = /<(?:REQUIRE CLASS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note1b = /<(?:REQUIRE CLASS):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
    var note2a = /<(?:REQUIRE SUBCLASS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note2b = /<(?:REQUIRE SUBCLASS):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
    for (var n = 1; n < group.length; n++) {
      var obj = group[n];
      var notedata = obj.note.split(/[\r\n]+/);

      obj.requiredClasses = [];
      obj.requiredSubclasses = [];

      for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(note1a)) {
          var array = JSON.parse("[" + RegExp.$1.match(/\d+/g) + "]");
          obj.requiredClasses = obj.requiredClasses.concat(array);
        } else if (line.match(note1b)) {
          var range = MageStudios.Util.getRange(
            parseInt(RegExp.$1),
            parseInt(RegExp.$2)
          );
          obj.requiredClasses = obj.requiredClasses.concat(range);
        } else if (line.match(note2a)) {
          var array = JSON.parse("[" + RegExp.$1.match(/\d+/g) + "]");
          obj.requiredSubclasses = obj.requiredSubclasses.concat(array);
        } else if (line.match(note2b)) {
          var range = MageStudios.Util.getRange(
            parseInt(RegExp.$1),
            parseInt(RegExp.$2)
          );
          obj.requiredSubclasses = obj.requiredSubclasses.concat(range);
        }
      }
    }
  };

  MageStudios.Subclass.Game_System_initialize =
    Game_System.prototype.initialize;
  Game_System.prototype.initialize = function () {
    MageStudios.Subclass.Game_System_initialize.call(this);
    this.initSubclasses();
  };

  Game_System.prototype.initSubclasses = function () {
    this._showSubclass = eval(MageStudios.Param.SubclassShowCmd);
    this._enableSubclass = eval(MageStudios.Param.SubclassEnableCmd);
  };

  Game_System.prototype.isShowSubclass = function () {
    if (this._showSubclass === undefined) this.initSubClasses();
    return this._showSubclass;
  };

  Game_System.prototype.isEnableSubclass = function () {
    if (this._enableSubclass === undefined) this.initSubClasses();
    return this._enableSubclass;
  };

  Game_BattlerBase.prototype.piSubclassTraits = function (code, id) {
    if (!this.subclass()) return 1;
    var r = 1;
    for (var i = 0; i < this.subclass().traits.length; ++i) {
      var trait = this.subclass().traits[i];
      if (trait.code !== code) continue;
      if (trait.dataId !== id) continue;
      r *= trait.value;
    }
    return r;
  };

  Game_BattlerBase.prototype.sumSubclassTraits = function (code, id) {
    if (!this.subclass()) return 0;
    var r = 0;
    for (var i = 0; i < this.subclass().traits.length; ++i) {
      var trait = this.subclass().traits[i];
      if (trait.code !== code) continue;
      if (trait.dataId !== id) continue;
      r += trait.value;
    }
    return r;
  };

  Game_BattlerBase.prototype.addSubclassTraitSet = function (array, code) {
    if (!this.subclass()) return array;
    for (var i = 0; i < this.subclass().traits.length; ++i) {
      var trait = this.subclass().traits[i];
      if (trait.code === code) array.push(trait.dataId);
    }
    return array;
  };

  MageStudios.Subclass.Game_BattlerBase_addedSkillTypes =
    Game_BattlerBase.prototype.addedSkillTypes;
  Game_BattlerBase.prototype.addedSkillTypes = function () {
    var array =
      MageStudios.Subclass.Game_BattlerBase_addedSkillTypes.call(this);
    if (this.isActor() && MageStudios.Param.SubclassSType) {
      this.addSubclassTraitSet(array, Game_BattlerBase.TRAIT_STYPE_ADD);
    }
    return array.filter(MageStudios.Util.onlyUnique);
  };

  MageStudios.Subclass.Game_BattlerBase_paramRate =
    Game_BattlerBase.prototype.paramRate;
  Game_BattlerBase.prototype.paramRate = function (paramId) {
    var rate = MageStudios.Subclass.Game_BattlerBase_paramRate.call(
      this,
      paramId
    );
    if (this.isActor() && MageStudios.Param.SubParamRates) {
      rate *= this.piSubclassTraits(Game_BattlerBase.TRAIT_PARAM, paramId);
    }
    return rate;
  };

  MageStudios.Subclass.Game_BattlerBase_xparam =
    Game_BattlerBase.prototype.xparam;
  Game_BattlerBase.prototype.xparam = function (xparamId) {
    var value = MageStudios.Subclass.Game_BattlerBase_xparam.call(
      this,
      xparamId
    );
    if (this.isActor() && MageStudios.Param.SubXParamVal) {
      value += this.sumSubclassTraits(Game_BattlerBase.TRAIT_XPARAM, xparamId);
    }
    return value;
  };

  MageStudios.Subclass.Game_BattlerBase_sparam =
    Game_BattlerBase.prototype.sparam;
  Game_BattlerBase.prototype.sparam = function (sparamId) {
    var rate = MageStudios.Subclass.Game_BattlerBase_sparam.call(
      this,
      sparamId
    );
    if (this.isActor() && MageStudios.Param.SubSParamRates) {
      rate *= this.piSubclassTraits(Game_BattlerBase.TRAIT_SPARAM, sparamId);
    }
    return rate;
  };

  MageStudios.Subclass.Game_BattlerBase_elementRate =
    Game_BattlerBase.prototype.elementRate;
  Game_BattlerBase.prototype.elementRate = function (eleId) {
    var rate = MageStudios.Subclass.Game_BattlerBase_elementRate.call(
      this,
      eleId
    );
    if (this.isActor() && MageStudios.Param.SubSEleRates) {
      rate *= this.piSubclassTraits(Game_BattlerBase.TRAIT_ELEMENT_RATE, eleId);
    }
    return rate;
  };

  MageStudios.Subclass.Game_BattlerBase_debuffRate =
    Game_BattlerBase.prototype.debuffRate;
  Game_BattlerBase.prototype.debuffRate = function (paramId) {
    var rate = MageStudios.Subclass.Game_BattlerBase_debuffRate.call(
      this,
      paramId
    );
    if (this.isActor() && MageStudios.Param.SubDebuffRates) {
      rate *= this.piSubclassTraits(
        Game_BattlerBase.TRAIT_DEBUFF_RATE,
        paramId
      );
    }
    return rate;
  };

  MageStudios.Subclass.Game_BattlerBase_stateRate =
    Game_BattlerBase.prototype.stateRate;
  Game_BattlerBase.prototype.stateRate = function (stateId) {
    var rate = MageStudios.Subclass.Game_BattlerBase_stateRate.call(
      this,
      stateId
    );
    if (this.isActor() && MageStudios.Param.SubStateRates) {
      rate *= this.piSubclassTraits(Game_BattlerBase.TRAIT_STATE_RATE, stateId);
    }
    return rate;
  };

  MageStudios.Subclass.Game_BattlerBase_stateResistSet =
    Game_BattlerBase.prototype.stateResistSet;
  Game_BattlerBase.prototype.stateResistSet = function () {
    var array = MageStudios.Subclass.Game_BattlerBase_stateResistSet.call(this);
    if (this.isActor() && MageStudios.Param.SubStateRes) {
      this.addSubclassTraitSet(array, Game_BattlerBase.TRAIT_STATE_RESIST);
    }
    return array;
  };

  MageStudios.Subclass.Game_BattlerBase_attackElements =
    Game_BattlerBase.prototype.attackElements;
  Game_BattlerBase.prototype.attackElements = function () {
    var array = MageStudios.Subclass.Game_BattlerBase_attackElements.call(this);
    if (this.isActor() && MageStudios.Param.SubAttackEle) {
      this.addSubclassTraitSet(array, Game_BattlerBase.TRAIT_ATTACK_ELEMENT);
    }
    return array;
  };

  MageStudios.Subclass.Game_BattlerBase_attackStates =
    Game_BattlerBase.prototype.attackStates;
  Game_BattlerBase.prototype.attackStates = function () {
    var array = MageStudios.Subclass.Game_BattlerBase_attackStates.call(this);
    if (this.isActor() && MageStudios.Param.SubAttackState) {
      this.addSubclassTraitSet(array, Game_BattlerBase.TRAIT_ATTACK_STATE);
    }
    return array;
  };

  MageStudios.Subclass.Game_BattlerBase_addedSkills =
    Game_BattlerBase.prototype.addedSkills;
  Game_BattlerBase.prototype.addedSkills = function () {
    var array = MageStudios.Subclass.Game_BattlerBase_addedSkills.call(this);
    if (this.isActor() && MageStudios.Param.SubAddedSkills) {
      this.addSubclassTraitSet(array, Game_BattlerBase.TRAIT_SKILL_ADD);
    }
    return array;
  };

  MageStudios.Subclass.Game_BattlerBase_Wtype =
    Game_BattlerBase.prototype.isEquipWtypeOk;
  Game_BattlerBase.prototype.isEquipWtypeOk = function (wtypeId) {
    var value = MageStudios.Subclass.Game_BattlerBase_Wtype.call(this, wtypeId);
    if (value) return true;
    var array = [];
    if (this.isActor() && MageStudios.Param.SubclassWeapons) {
      this.addSubclassTraitSet(array, Game_BattlerBase.TRAIT_EQUIP_WTYPE);
    }
    return array.contains(wtypeId);
  };

  MageStudios.Subclass.Game_BattlerBase_Atype =
    Game_BattlerBase.prototype.isEquipAtypeOk;
  Game_BattlerBase.prototype.isEquipAtypeOk = function (atypeId) {
    var value = MageStudios.Subclass.Game_BattlerBase_Atype.call(this, atypeId);
    if (value) return true;
    var array = [];
    if (this.isActor() && MageStudios.Param.SubclassArmors) {
      this.addSubclassTraitSet(array, Game_BattlerBase.TRAIT_EQUIP_ATYPE);
    }
    return array.contains(atypeId);
  };

  MageStudios.Game_BattlerBase_canUse = Game_BattlerBase.prototype.canUse;
  Game_BattlerBase.prototype.canUse = function (item) {
    if (!item) return false;
    if (this.isActor()) {
      if (!this.meetsClassCanUseRequirements(item)) return false;
    }
    return MageStudios.Game_BattlerBase_canUse.call(this, item);
  };

  Game_BattlerBase.prototype.meetsClassCanUseRequirements = function (item) {
    if (item.requiredClasses && item.requiredClasses.length > 0) {
      if (!item.requiredClasses.contains(this._classId)) return false;
    }
    if (item.requiredSubclasses && item.requiredSubclasses.length > 0) {
      if (!this.subclass()) return false;
      if (!item.requiredSubclasses.contains(this._subclassId)) return false;
    }
    return true;
  };

  MageStudios.Subclass.Game_Actor_setup = Game_Actor.prototype.setup;
  Game_Actor.prototype.setup = function (actorId) {
    MageStudios.Subclass.Game_Actor_setup.call(this, actorId);
    this.initSubclasses();
  };

  Game_Actor.prototype.initSubclasses = function () {
    if (this.actor().subclassId === this._classId) return;
    this.setSubclass(this.actor().subclassId);
    if (this._subclassId > 0) this.unlockClass(this._subclassId);
  };

  Game_Actor.prototype.subclass = function () {
    if (this._subclassId === undefined) this.initSubclasses();
    return $dataClasses[this._subclassId];
  };

  Game_Actor.prototype.className = function () {
    if (!this.subclass()) {
      if (this.currentClass().useNickname) {
        return this.nickname();
      } else {
        return this.currentClass().name;
      }
    }
    if (this.currentClass().subclassComboName[this._subclassId]) {
      var text = this.currentClass().subclassComboName[this._subclassId];
    } else {
      var name1 = this.currentClass().name;
      if (this.currentClass().useNickname) {
        name1 = this.nickname();
      }
      var name2 = this.subclass().name;
      if (this.subclass().useNickname) {
        name2 = this.nickname();
      }
      var fmt = MageStudios.Param.SubclassFmt;
      var text = fmt.format(name1, name2);
    }
    return text;
  };

  MageStudios.Subclass.Game_Actor_changeClass =
    Game_Actor.prototype.changeClass;
  Game_Actor.prototype.changeClass = function (classId, keepExp) {
    if (this._subclassId === classId) this._subclassId = 0;
    MageStudios.Subclass.Game_Actor_changeClass.call(this, classId, keepExp);
  };

  Game_Actor.prototype.setSubclass = function (classId) {
    if (this._classId === classId) return;
    this.unlockClass(classId);
    this._subclassId = classId;
    this.refresh();
  };

  Game_Actor.prototype.changeSubclass = function (classId) {
    if (this._classId === classId) return;
    this.unlockClass(classId);
    if (this._subclassId === classId) classId = 0;
    this.setSubclass(classId);
  };

  MageStudios.Subclass.Game_Actor_paramBase = Game_Actor.prototype.paramBase;
  Game_Actor.prototype.paramBase = function (paramId) {
    var value = MageStudios.Subclass.Game_Actor_paramBase.call(this, paramId);
    value += Math.floor(this.subclassParamBase(paramId));
    return value;
  };

  Game_Actor.prototype.subclassParamBase = function (paramId) {
    if (!this.subclass()) return 0;
    var rate = MageStudios.Subclass.Param[paramId];
    if (!rate) return 0;
    if (this.subclass().baseParamFormula) {
      var formula = this.subclass().baseParamFormula[paramId];
      if (formula !== "") {
        return this.classBaseParamFormula(formula, paramId) * rate;
      }
    }
    var level = this.classLevel(this._subclassId);
    if (level > 99) {
      var i = this.subclass().params[paramId][99];
      var j = this.subclass().params[paramId][98];
      i += (i - j) * (level - 99);
      var value = i;
    } else {
      var value = this.subclass().params[paramId][level];
    }
    return value * rate;
  };

  Game_Actor.prototype.restrictClassChange = function (classId) {
    return this.actor().restrictClassChange.contains(classId);
  };

  Game_Actor.prototype.restrictSubclassChange = function (classId) {
    return this.actor().restrictSubclassChange.contains(classId);
  };

  MageStudios.Subclass.Game_Actor_gainExp = Game_Actor.prototype.gainExp;
  Game_Actor.prototype.gainExp = function (exp) {
    this.gainExpSubclass(exp);
    MageStudios.Subclass.Game_Actor_gainExp.call(this, exp);
  };

  Game_Actor.prototype.gainExpSubclass = function (exp) {
    if (!this.subclass()) return;
    exp *= MageStudios.Param.SubclassExp;
    var curExp = this._exp[this._subclassId] || 0;
    var newExp = curExp + Math.round(exp * this.finalExpRate());
    this._exp[this._subclassId] = Math.max(newExp, 0);
  };

  Game_Actor.prototype.canChangeSubclass = function () {
    if (this._canChangeSubclass) return this._canChangeSubclass;
    this._canChangeSubclass = this.actor().canChangeSubclass;
    return this._canChangeSubclass;
  };

  Game_Actor.prototype.setCanChangeSubclass = function (value) {
    this._canChangeSubclass = value;
  };

  MageStudios.Subclass.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    MageStudios.Subclass.Game_Interpreter_pluginCommand.call(
      this,
      command,
      args
    );
    if (command === "ShowSubclass") {
      $gameSystem._showSubclass = true;
    } else if (command === "HideSubclass") {
      $gameSystem._showSubclass = false;
    } else if (command === "EnableSubclass") {
      $gameSystem._enableSubclass = true;
    } else if (command === "DisableSubclass") {
      $gameSystem._enableSubclass = false;
    } else if (command === "ChangeSubclass") {
      this.changeSubclass(args);
    } else if (command === "EnableSubclassChange") {
      this.setSubclassChange(args, true);
    } else if (command === "DisableSubclassChange") {
      this.setSubclassChange(args, false);
    }
  };

  Game_Interpreter.prototype.changeSubclass = function (args) {
    if (!args) return;
    var actorId = parseInt(args[0]);
    var subclassId = parseInt(args[1]);
    var actor = $gameActors.actor(actorId);
    if (actor) actor.setSubclass(subclassId);
  };

  MageStudios.Subclass.Game_Interpreter_command315 =
    Game_Interpreter.prototype.command315;
  Game_Interpreter.prototype.command315 = function () {
    var value = this.operateValue(
      this._params[2],
      this._params[3],
      this._params[4]
    );
    this.iterateActorEx(
      this._params[0],
      this._params[1],
      function (actor) {
        actor.gainExpSubclass(value);
      }.bind(this)
    );
    return MageStudios.Subclass.Game_Interpreter_command315.call(this);
  };

  Game_Interpreter.prototype.setSubclassChange = function (args, enable) {
    var actorId = parseInt(args[0]);
    var actor = $gameActors.actor(actorId);
    if (!actor) return;
    actor.setCanChangeSubclass(enable);
  };

  Window_Base.prototype.drawActorClass = function (actor, x, y, width) {
    width = width || 168;
    this.resetTextColor();
    this.drawText(actor.className(), x, y, width);
  };

  MageStudios.Subclass.Window_ClassCommand_addClassCommand =
    Window_ClassCommand.prototype.addClassCommand;
  Window_ClassCommand.prototype.addClassCommand = function () {
    MageStudios.Subclass.Window_ClassCommand_addClassCommand.call(this);
    this.addSubclassCommand();
  };

  Window_ClassCommand.prototype.addSubclassCommand = function () {
    if (!$gameSystem.isShowSubclass()) return;
    var enabled = this.isSubclassEnabled();
    this.addCommand(MageStudios.Param.SubclassCmd, "subclass", enabled);
  };

  Window_ClassCommand.prototype.isSubclassEnabled = function () {
    var actor = SceneManager._scene.actor();
    if (actor && !actor.canChangeSubclass()) return false;
    return $gameSystem.isEnableSubclass();
  };

  MageStudios.Subclass.Window_ClassList_isEnabled =
    Window_ClassList.prototype.isEnabled;
  Window_ClassList.prototype.isEnabled = function (item) {
    if (!this.checkSubclassEnabled(item)) return false;
    return MageStudios.Subclass.Window_ClassList_isEnabled.call(this, item);
  };

  Window_ClassList.prototype.checkSubclassEnabled = function (item) {
    if (SceneManager._scene instanceof Scene_Class) {
      var win = SceneManager._scene._commandWindow;
      if (!win) return true;
      if (!this.active) return true;
      if (win.currentSymbol() === "class") {
        if ($dataClasses[item]) {
          if (!$dataClasses[item].primaryAllowed) return false;
        }
        if (this._actor.restrictClassChange(item)) return false;
      } else if (win.currentSymbol() === "subclass") {
        if (item === this._actor.currentClass().id) return false;
        if ($dataClasses[item]) {
          if (!$dataClasses[item].subclassAllowed) return false;
        }
        if (this._actor.restrictSubclassChange(item)) return false;
      }
    }
    return true;
  };

  MageStudios.Subclass.Window_ClassList_changeClassNameColor =
    Window_ClassList.prototype.changeClassNameColor;
  Window_ClassList.prototype.changeClassNameColor = function (item) {
    if (item === this._actor.subclass()) {
      this.changeTextColor(this.textColor(MageStudios.Param.SubclassColor));
    } else {
      MageStudios.Subclass.Window_ClassList_changeClassNameColor.call(
        this,
        item
      );
    }
  };

  MageStudios.Subclass.Window_ClassList_selectLast =
    Window_ClassList.prototype.selectLast;
  Window_ClassList.prototype.selectLast = function () {
    var win = SceneManager._scene._commandWindow;
    if (win && win.currentSymbol() === "subclass" && this._actor.subclass()) {
      this.selectLastSubclass();
    } else {
      MageStudios.Subclass.Window_ClassList_selectLast.call(this);
    }
  };

  Window_ClassList.prototype.selectLastSubclass = function () {
    this._index = this._data.indexOf(this._actor._subclassId);
    this.select(this._index);
  };

  MageStudios.Subclass.Window_ClassList_updateCompare =
    Window_ClassList.prototype.updateCompare;
  Window_ClassList.prototype.updateCompare = function () {
    var win = SceneManager._scene._commandWindow;
    if (win && win.currentSymbol() === "subclass") {
      this.updateSubclassCompare();
    } else {
      MageStudios.Subclass.Window_ClassList_updateCompare.call(this);
    }
  };

  Window_ClassList.prototype.updateSubclassCompare = function () {
    if (this._actor && this.item() && this._statusWindow) {
      var actor = JsonEx.makeDeepCopy(this._actor);
      if (this.isEnabled(this.item())) {
        MageStudios.CCC.PreventReleaseItem = true;
        actor.changeSubclass(this.item());
        MageStudios.CCC.PreventReleaseItem = undefined;
      }
      this._statusWindow.setTempActor(actor);
    }
  };

  MageStudios.Subclass.Scene_Class_createCommandWindow =
    Scene_Class.prototype.createCommandWindow;
  Scene_Class.prototype.createCommandWindow = function () {
    MageStudios.Subclass.Scene_Class_createCommandWindow.call(this);
    var win = this._commandWindow;
    win.setHandler("subclass", this.commandClass.bind(this));
  };

  MageStudios.Subclass.Scene_Class_onItemOk = Scene_Class.prototype.onItemOk;
  Scene_Class.prototype.onItemOk = function () {
    if (this._commandWindow.currentSymbol() === "class") {
      MageStudios.Subclass.Scene_Class_onItemOk.call(this);
    } else {
      this.onSubclassOk();
    }
  };

  Scene_Class.prototype.onSubclassOk = function () {
    SoundManager.playEquip();
    var classId = this._itemWindow.item();
    var hpRate = this.actor().hp / this.actor().mhp;
    var mpRate = this.actor().mp / Math.max(1, this.actor().mmp);
    this.actor().changeSubclass(classId);
    var max = this.actor().isDead() ? 0 : 1;
    var hpAmount = Math.max(max, parseInt(this.actor().mhp * hpRate));
    this.actor().setHp(hpAmount);
    this.actor().setMp(parseInt(this.actor().mmp * mpRate));
    this._itemWindow.activate();
    this.refreshWindows();
  };

  MageStudios.Util = MageStudios.Util || {};

  MageStudios.Util.getRange = function (n, m) {
    var result = [];
    for (var i = n; i <= m; ++i) result.push(i);
    return result;
  };

  MageStudios.Util.onlyUnique = function (value, index, self) {
    return self.indexOf(value) === index;
  };
}
