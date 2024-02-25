//=============================================================================
// Mage Studios Engine Plugins - Auto Passive States
// MSEP_AutoPassiveStates.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_AutoPassiveStates = true;

var MageStudios = MageStudios || {};
MageStudios.APS = MageStudios.APS || {};
MageStudios.APS.version = 1.00;

//=============================================================================
 /*:
 * @plugindesc This plugin allows for some states to function as
 * passives for actors, enemies, skills, and equips.
 * @author Mage Studios Engine Plugins
 *
 * @param ---Basic---
 * @default
 *
 * @param Actor Passives
 * @parent ---Basic---
 * @desc These states will always appear on actors as passives.
 * Place a space in between each state ID.
 * @default 0
 *
 * @param Enemy Passives
 * @parent ---Basic---
 * @desc These states will always appear on enemies as passives.
 * Place a space in between each state ID.
 * @default 0
 *
 * @param Global Passives
 * @parent ---Basic---
 * @desc These states will always appear on all battlers as passives.
 * Place a space in between each state ID.
 * @default 0
 *
 * @param ---List---
 * @default ...Requires RPG Maker MV 1.5.0+...
 *
 * @param Actor Passives List
 * @parent ---List---
 * @type state[]
 * @desc These states will always appear on actors as passives.
 * Use with RPG Maker MV 1.5.0+.
 * @default []
 *
 * @param Enemy Passives List
 * @parent ---List---
 * @type state[]
 * @desc These states will always appear on enemies as passives.
 * Use with RPG Maker MV 1.5.0+.
 * @default []
 *
 * @param Global Passives List
 * @parent ---List---
 * @type state[]
 * @desc These states will always appear on all battlers as passives.
 * Use with RPG Maker MV 1.5.0+.
 * @default []
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Passive states are states that are automatically active. You can think of
 * them as an extension of traits but with more flexibility. They will always
 * be there as long as the actor or enemy has auto passive state notetags.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * For those who would like to allocate passive states to your battlers, use
 * the notetags below:
 *
 * Actor, Class, Skills, Weapon, Armor, Enemy Notetags:
 *   <Passive State: x>
 *   <Passive State: x, x, x>
 *   This will allow the actor or enemy to have state x as a passive state.
 *   If placed inside a weapon or armor notebox, the user will have that
 *   passive state.
 *
 *   <Passive State: x to y>
 *   This will add the states x through y (in a sequence) for the actor or
 *   enemy to have as a passive state. If placed inside a weapon or armor
 *   notebox, the user will have that passive state.
 *
 * For those who don't want their passive states to always be on, you can use
 * the following notetags to introduce conditions for your passive states. All
 * conditions must be fulfilled in order for the passive state to appear.
 *
 * State Notetags:
 *   <Passive Condition: HP Above x%>
 *   <Passive Condition: HP Below x%>
 *   <Passive Condition: MP Above x%>
 *   <Passive Condition: MP Below x%>
 *   If the user's HP or MP is above/below x% of the MaxHP or MaxMP, this
 *   condition will be met for the passive state to appear.
 *
 *   <Passive Condition: Stat Above x>
 *   <Passive Condition: Stat Below x>
 *   Replace 'stat' with 'HP', 'MP', 'TP', 'MAXHP', 'MAXMP', 'ATK', 'DEF',
 *   'MAT', 'MDF', 'AGI', 'LUK'. If the above stat is above/below x, then the
 *   condition is met for the passive state to appear.
 *
 *   <Passive Condition: Switch x ON>
 *   <Passive Condition: Switch x OFF>
 *   If switch x is either ON/OFF, then the condition is met for the passive
 *   state to appear.
 *
 *   <Passive Condition: Variable x Above y>
 *   <Passive Condition: Variable x Below y>
 *   Replace x with the variable you wish to check to see if it's above/below
 *   y, then the condition is met for the passive state to appear.
 *
 * ============================================================================
 * Lunatic Mode - Conditional Passives
 * ============================================================================
 *
 * For those who understand a bit of JavaScript and would like for their
 * passive states to appear under specific conditions, you can use this notetag
 * to accomplish conditional factors.
 *
 * State Notetags:
 *   <Custom Passive Condition>
 *   if (user.hp / user.mhp <= 0.25) {
 *     condition = true;
 *   } else {
 *     condition = false;
 *   }
 *   </Custom Passive Condition>
 *   This enables you to input conditions to be met in order for the passive
 *   state to appear. If the 'condition' variable returns true, the passive
 *   state will appear. If the 'condition' returns false, it won't appear. If
 *   condition is not defined, it will return true and the passive state will
 *   appear on the battler.
 *   * Note: All non-custom passive conditions must be met before this one can
 *   be fulfilled and allow the custom condition to appear.
 *   * Note: If you decide to use a condition that requires the actor to have a
 *   particular state, it cannot be a passive state to prevent infinite loops.
 *
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.SetupParameters = function() {
  MageStudios.Parameters = PluginManager.parameters('MSEP_AutoPassiveStates');
  MageStudios.Param = MageStudios.Param || {};
  MageStudios.Param.APSActorPas = String(MageStudios.Parameters['Actor Passives']);
  MageStudios.Param.APSActorPas = MageStudios.Param.APSActorPas.split(' ');
  for (var i = 0; i < MageStudios.Param.APSActorPas.length; ++i) {
    MageStudios.Param.APSActorPas[i] = parseInt(MageStudios.Param.APSActorPas[i]);
    MageStudios.Param.APSActorPas[i] = MageStudios.Param.APSActorPas[i] || 0;
  }
  var data = JSON.parse(MageStudios.Parameters['Actor Passives List']);
  for (var i = 0; i < data.length; ++i) {
    var stateId = parseInt(data[i]);
    if (stateId <= 0) continue;
    if (MageStudios.Param.APSActorPas.contains(stateId)) continue;
    MageStudios.Param.APSActorPas.push(stateId);
  }
  MageStudios.Param.APSEnemyPas = String(MageStudios.Parameters['Enemy Passives']);
  MageStudios.Param.APSEnemyPas = MageStudios.Param.APSEnemyPas.split(' ');
  for (var i = 0; i < MageStudios.Param.APSEnemyPas.length; ++i) {
    MageStudios.Param.APSEnemyPas[i] = parseInt(MageStudios.Param.APSEnemyPas[i]);
    MageStudios.Param.APSEnemyPas[i] = MageStudios.Param.APSEnemyPas[i] || 0;
  }
  var data = JSON.parse(MageStudios.Parameters['Enemy Passives List']);
  for (var i = 0; i < data.length; ++i) {
    var stateId = parseInt(data[i]);
    if (stateId <= 0) continue;
    if (MageStudios.Param.APSEnemyPas.contains(stateId)) continue;
    MageStudios.Param.APSEnemyPas.push(stateId);
  }
  MageStudios.Param.APSGlobalPas = String(MageStudios.Parameters['Global Passives']);
  MageStudios.Param.APSGlobalPas = MageStudios.Param.APSGlobalPas.split(' ');
  for (var i = 0; i < MageStudios.Param.APSGlobalPas.length; ++i) {
    id = parseInt(MageStudios.Param.APSGlobalPas[i]);
    MageStudios.Param.APSActorPas.push(id);
    MageStudios.Param.APSEnemyPas.push(id);
  }
  var data = JSON.parse(MageStudios.Parameters['Global Passives List']);
  for (var i = 0; i < data.length; ++i) {
    var stateId = parseInt(data[i]);
    if (stateId <= 0) continue;
    if (!MageStudios.Param.APSActorPas.contains(stateId)) {
      MageStudios.Param.APSActorPas.push(stateId);
    }
    if (!MageStudios.Param.APSEnemyPas.contains(stateId)) {
      MageStudios.Param.APSEnemyPas.push(stateId);
    }
  }
};
MageStudios.SetupParameters();

//=============================================================================
// DataManager
//=============================================================================

MageStudios.APS.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!MageStudios.APS.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!MageStudios._loaded_MSEP_AutoPassiveStates) {
    this.processAPSNotetags1($dataActors, MageStudios.Param.APSActorPas);
    this.processAPSNotetags1($dataClasses);
    this.processAPSNotetags1($dataEnemies, MageStudios.Param.APSEnemyPas);
    this.processAPSNotetags1($dataSkills);
    this.processAPSNotetags1($dataWeapons);
    this.processAPSNotetags1($dataArmors);
    this.processAPSNotetags2($dataStates);
    MageStudios._loaded_MSEP_AutoPassiveStates = true;
  }
  return true;
};

DataManager.processAPSNotetags1 = function(group, inheritArray) {
  var note1 = /<(?:PASSIVE STATE):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note2 = /<(?:PASSIVE STATE):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.passiveStates = [];
    if (inheritArray) {
      obj.passiveStates = obj.passiveStates.concat(inheritArray);
    }

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(note1)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.passiveStates = obj.passiveStates.concat(array);
      } else if (line.match(note2)) {
        var range = MageStudios.Util.getRange(parseInt(RegExp.$1),
          parseInt(RegExp.$2));
        obj.passiveStates = obj.passiveStates.concat(range);
      }
    }
  }
};

DataManager.processAPSNotetags2 = function(group) {
  var note1a = /<(?:PASSIVE CONDITION):[ ](.*)[ ](?:ABOVE)[ ](\d+)([%％])>/i;
  var note1b = /<(?:PASSIVE CONDITION):[ ](.*)[ ](?:BELOW)[ ](\d+)([%％])>/i;
  var note2a = /<(?:PASSIVE CONDITION):[ ](.*)[ ](?:ABOVE)[ ](\d+)>/i;
  var note2b = /<(?:PASSIVE CONDITION):[ ](.*)[ ](?:BELOW)[ ](\d+)>/i;
  var note3a = /<(?:PASSIVE CONDITION):[ ]SWITCH[ ](\d+)[ ](.*)>/i;
  var notez1 = /<(?:CUSTOM PASSIVE CONDITION)>/i;
  var notez2 = /<\/(?:CUSTOM PASSIVE CONDITION)>/i;
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.passiveCondition = '';
    obj.passiveConditionEval = '';
    var evalMode = 'none';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(note1a)) {
        var rate = parseFloat(RegExp.$2) * 0.01;
        var param = this.getPassiveConditionParamRate(String(RegExp.$1));
        var pass = 'if (' + param + ' <= ' + rate + ') condition = false;';
        obj.passiveCondition = obj.passiveCondition + pass + '\n';
      } else if (line.match(note1b)) {
        var rate = parseFloat(RegExp.$2) * 0.01;
        var param = this.getPassiveConditionParamRate(String(RegExp.$1));
        var pass = 'if (' + param + ' >= ' + rate + ') condition = false;';
        obj.passiveCondition = obj.passiveCondition + pass + '\n';
      } else if (line.match(note2a)) {
        var rate = parseInt(RegExp.$2);
        var param = this.getPassiveConditionParam(String(RegExp.$1));
        var pass = 'if (' + param + ' <= ' + rate + ') condition = false;';
        obj.passiveCondition = obj.passiveCondition + pass + '\n';
      } else if (line.match(note2b)) {
        var rate = parseInt(RegExp.$2);
        var param = this.getPassiveConditionParam(String(RegExp.$1));
        var pass = 'if (' + param + ' >= ' + rate + ') condition = false;';
        obj.passiveCondition = obj.passiveCondition + pass + '\n';
      } else if (line.match(note3a)) {
        var id = parseInt(RegExp.$1);
        var value = String(RegExp.$2).toUpperCase();
        var pass = ''
        if (['ON', 'TRUE', 'ENABLE', 'ENABLED'].contains(value)) {
          pass = 'if (!$gameSwitches.value(' + id + ')) condition = false;'
        }
        if (['OFF', 'FALSE', 'DISABLE', 'DISABLED'].contains(value)) {
          pass = 'if ($gameSwitches.value(' + id + ')) condition = false;'
        }
        if (pass === '') continue;
        obj.passiveCondition = obj.passiveCondition + pass + '\n';
      } else if (line.match(notez1)) {
        evalMode = 'custom passive condition';
      } else if (line.match(notez2)) {
        evalMode = 'none';
      } else if (evalMode === 'custom passive condition') {
        obj.passiveConditionEval = obj.passiveConditionEval + line + '\n';
      }
    }

    obj.passiveCondition = new Function('condition','a','user','subject','b',
      'target','s','v', obj.passiveCondition + '\nreturn condition;');
    obj.passiveConditionEval = new Function('condition','a','user','subject',
      'b','target','s','v', obj.passiveConditionEval + '\nreturn condition;');
  }
};

DataManager.getPassiveConditionParam = function(string) {
    string = string.toUpperCase();
    var text = 'user.';
    if (['HP'].contains(string)) text += 'hp';
    if (['MP', 'SP'].contains(string)) text += 'mp';
    if (['TP'].contains(string)) text += 'tp';
    if (['ATK'].contains(string)) text += 'param(2)';
    if (['DEF'].contains(string)) text += 'param(3)';
    if (['MAT', 'INT'].contains(string)) text += 'param(4)';
    if (['MDF', 'RES'].contains(string)) text += 'param(5)';
    if (['AGI'].contains(string)) text += 'param(6)';
    if (['LUK'].contains(string)) text += 'param(7)';
    if (['MAX HP', 'MAXHP'].contains(string)) text += 'mhp';
    if (['MAX MP', 'MAX SP', 'MAXMP', 'MAXSP'].contains(string)) text += 'mmp';
    if (string.match(/VARIABLE[ ](\d+)/i)) {
      text = '$gameVariables.value(' + parseInt(RegExp.$1) + ')';
    }
    return text;
};

DataManager.getPassiveConditionParamRate = function(string) {
    string = string.toUpperCase();
    var text = '0';
    if (['HP'].contains(string)) return 'user.hpRate()';
    if (['MP'].contains(string)) return 'user.mpRate()';
    return text;
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

MageStudios.APS.Game_BattlerBase_refresh = Game_BattlerBase.prototype.refresh;
Game_BattlerBase.prototype.refresh = function() {
    this._passiveStatesRaw = undefined;
    MageStudios.APS.Game_BattlerBase_refresh.call(this);
};

MageStudios.APS.Game_BattlerBase_states = Game_BattlerBase.prototype.states;
Game_BattlerBase.prototype.states = function() {
    var array = MageStudios.APS.Game_BattlerBase_states.call(this);
    array = array.concat(this.passiveStates());
    this.sortPassiveStates(array);
    return array;
};

MageStudios.APS.Game_BattlerBase_isStateAffected =
    Game_BattlerBase.prototype.isStateAffected;
Game_BattlerBase.prototype.isStateAffected = function(stateId) {
    if (this.isPassiveStateAffected(stateId)) return true;
    return MageStudios.APS.Game_BattlerBase_isStateAffected.call(this, stateId);
};

Game_BattlerBase.prototype.passiveStates = function() {
    var array = [];
    var raw = this.passiveStatesRaw();
    for (var i = 0; i < raw.length; ++i) {
      var state = $dataStates[raw[i]];
      if (state && array.contains(state)) continue;
      array.push(state);
    }
    return array;
};

Game_BattlerBase.prototype.passiveStatesRaw = function() {
    var array = [];
    return array.filter(MageStudios.Util.onlyUnique);
};

Game_BattlerBase.prototype.getPassiveStateData = function(obj) {
    if (!obj) return [];
    if (!obj.passiveStates) return [];
    var array = [];
    for (var i = 0; i < obj.passiveStates.length; ++i) {
      var stateId = obj.passiveStates[i];
      if (!this.meetPassiveStateCondition(stateId)) continue;
      array.push(stateId);
    }
    var added = this.addEquipBattleTestSkillPassives(obj);
    if (added.length > 0) {
      for (var i = 0; i < added.length; ++i) {
        var stateId = added[i];
        if (!this.meetPassiveStateCondition(stateId)) continue;
        array.push(stateId);
      }
    }
    return array;
};

Game_BattlerBase.prototype.addEquipBattleTestSkillPassives = function(obj) {
  if (!Imported.MSEP_EquipBattleSkills) return [];
  if (!DataManager.isBattleTest()) return [];
  if (!DataManager.isSkill(obj)) return [];
  return obj.equipStates;
};

Game_BattlerBase.prototype.meetPassiveStateCondition = function(stateId) {
    this._checkPassiveStateCondition = this._checkPassiveStateCondition || [];
    if (this._checkPassiveStateCondition.contains(stateId)) return false;
    var state = $dataStates[stateId];
    if (!state) return false;
    if (state.passiveCondition !== '') {
      if (!this.passiveStateConditions(state)) return false;
    }
    if (state.passiveConditionEval === '') return true;
    return this.passiveStateConditionEval(state);
};

Game_BattlerBase.prototype.passiveStateConditions = function(state) {
  this._checkPassiveStateCondition = this._checkPassiveStateCondition || [];
  this._checkPassiveStateCondition.push(state.id);
  var condition = true;
  var a = this;
  var user = this;
  var subject = this;
  var b = this;
  var target = this;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  var code = state.passiveCondition;
  try {
    condition = state.passiveCondition.call(this, condition, a, user, subject,
      b, target, s, v);
  } catch (e) {
    MageStudios.Util.displayError(e, code, 'PASSIVE STATE CUSTOM CONDITION ERROR');
  }
  var index = this._checkPassiveStateCondition.indexOf(state.id);
  this._checkPassiveStateCondition.splice(index, 1);
  return condition;
};

Game_BattlerBase.prototype.passiveStateConditionEval = function(state) {
  this._checkPassiveStateCondition = this._checkPassiveStateCondition || [];
  this._checkPassiveStateCondition.push(state.id);
  var condition = true;
  var a = this;
  var user = this;
  var subject = this;
  var b = this;
  var target = this;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  var code = state.passiveConditionEval;
  try {
    condition = state.passiveConditionEval.call(this, condition, a, user,
      subject, b, target, s, v);
  } catch (e) {
    MageStudios.Util.displayError(e, code, 'PASSIVE STATE CUSTOM CONDITION ERROR');
  }
  var index = this._checkPassiveStateCondition.indexOf(state.id);
  this._checkPassiveStateCondition.splice(index, 1);
  return condition;
};

Game_BattlerBase.prototype.sortPassiveStates = function(array) {
    array.sort(function(a, b) {
      var p1 = a.priority;
      var p2 = b.priority;
      if (p1 !== p2) return p2 - p1;
      return a - b;
    });
};

Game_BattlerBase.prototype.isPassiveStateAffected = function(stateId) {
    return this.passiveStatesRaw().contains(stateId);
};

//=============================================================================
// Game_Battler
//=============================================================================

MageStudios.APS.Game_Battler_isStateAddable = Game_Battler.prototype.isStateAddable;
Game_Battler.prototype.isStateAddable = function(stateId) {
    if (this.isPassiveStateAffected(stateId)) return false;
    return MageStudios.APS.Game_Battler_isStateAddable.call(this, stateId);
};

MageStudios.APS.Game_Battler_removeState = Game_Battler.prototype.removeState;
Game_Battler.prototype.removeState = function(stateId) {
    if (this.isPassiveStateAffected(stateId)) return;
    MageStudios.APS.Game_Battler_removeState.call(this, stateId);
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.passiveStatesRaw = function() {
    if (this._passiveStatesRaw !== undefined) return this._passiveStatesRaw;
    var array = Game_BattlerBase.prototype.passiveStatesRaw.call(this);
    array = array.concat(this.getPassiveStateData(this.actor()));
    array = array.concat(this.getPassiveStateData(this.currentClass()));
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      array = array.concat(this.getPassiveStateData(equip));
    }
    for (var i = 0; i < this._skills.length; ++i) {
      var skill = $dataSkills[this._skills[i]];
      array = array.concat(this.getPassiveStateData(skill));
    }
    this._passiveStatesRaw = array.filter(MageStudios.Util.onlyUnique)
    return this._passiveStatesRaw;
};

MageStudios.APS.Game_Actor_learnSkill = Game_Actor.prototype.learnSkill;
Game_Actor.prototype.learnSkill = function(skillId) {
    MageStudios.APS.Game_Actor_learnSkill.call(this, skillId);
    this._passiveStatesRaw = undefined;
};

MageStudios.APS.Game_Actor_forgetSkill = Game_Actor.prototype.forgetSkill;
Game_Actor.prototype.forgetSkill = function(skillId) {
    MageStudios.APS.Game_Actor_forgetSkill.call(this, skillId);
    this._passiveStatesRaw = undefined;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.passiveStatesRaw = function() {
    if (this._passiveStatesRaw !== undefined) return this._passiveStatesRaw;
    var array = Game_BattlerBase.prototype.passiveStatesRaw.call(this);
    array = array.concat(this.getPassiveStateData(this.enemy()));
    for (var i = 0; i < this.skills().length; ++i) {
      var skill = this.skills()[i];
      array = array.concat(this.getPassiveStateData(skill));
    }
    this._passiveStatesRaw = array.filter(MageStudios.Util.onlyUnique)
    return this._passiveStatesRaw;
};

if (!Game_Enemy.prototype.skills) {
    Game_Enemy.prototype.skills = function() {
      var skills = []
      for (var i = 0; i < this.enemy().actions.length; ++i) {
        var skill = $dataSkills[this.enemy().actions[i].skillId];
        if (skill) skills.push(skill);
      }
      return skills;
    }
};

//=============================================================================
// Game_Unit
//=============================================================================

Game_Unit.prototype.refreshMembers = function() {
    var group = this.allMembers();
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var member = group[i];
      if (member) member.refresh();
    }
};

Game_Unit.prototype.allMembers = function() {
    return this.members();
};

//=============================================================================
// Game_Player
//=============================================================================

MageStudios.APS.Game_Player_refresh = Game_Player.prototype.refresh;
Game_Player.prototype.refresh = function() {
    $gameParty.refreshMembers();
    MageStudios.APS.Game_Player_refresh.call(this);
};

//=============================================================================
// Utilities
//=============================================================================

MageStudios.Util = MageStudios.Util || {};

MageStudios.Util.displayError = function(e, code, message) {
  console.log(message);
  console.log(code || 'NON-EXISTENT');
  console.error(e);
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    if (!require('nw.gui').Window.get().isDevToolsOpen()) {
      require('nw.gui').Window.get().showDevTools();
    }
  }
};

MageStudios.Util.getRange = function(n, m) {
    var result = [];
    for (var i = n; i <= m; ++i) result.push(i);
    return result;
};

MageStudios.Util.onlyUnique = function(value, index, self) {
    return self.indexOf(value) === index;
};

//=============================================================================
// End of File
//=============================================================================
