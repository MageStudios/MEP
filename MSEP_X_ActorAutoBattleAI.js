var Imported = Imported || {};
Imported.MSEP_X_ActorAutoBattleAI = true;

var MageStudios = MageStudios || {};
MageStudios.AABAI = MageStudios.AABAI || {};
MageStudios.AABAI.version = 1.0;

/*:
 * @plugindesc (Req MSEP_BattleAICore) Give auto battle actors the same
 * type of A.I. that you can assign using the Battle AI Core's notetags.
 * @author Mage Studios Engine Plugins
 *
 * @param Default AI Level
 * @type number
 * @min 0
 * @max 100
 * @desc This is the default AI level of all actors.
 * Level 0: Very Random     Level 100: Very Strict
 * @default 100
 *
 * @param Bypass Requirement
 * @type skill[]
 * @desc This is a list of the skills that bypass that requirement to
 * have learned the skill in order to use it.
 * @default ["1","2","3","4","5","6","7"]
 *
 * @param Curate Skill List
 * @type boolean
 * @on YES
 * @off NO
 * @desc Skills used for Auto Battle can only be skills accessible
 * through available skill types. YES - true   NO - false
 * @default true
 *
 * @param Undecided AI
 * @type boolean
 * @on YES
 * @off NO
 * @desc If no skill is determined, use the default Auto Battle AI?
 * Otherwise, perform only a basic attack.
 * @default false
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires MSEP_BattleAICore. Make sure this plugin is located
 * under MSEP_BattleAICore in the plugin list.
 *
 * By default, if an actor has the auto battle trait, it will cycle through
 * each one of its learned skills (whether or not it has access to the skill
 * type doesn't matter) and selects the hardest hitting skill of them all. This
 * setup may work for some auto-battlers but not all of them. What this plugin
 * does is it incorporates the A.I. Priority system from the YEP Library's
 * Battle A.I. Core for actor auto-battlers.

 * ============================================================================
 * Plugin Parameters
 * ============================================================================
 *
 * Default AI Level:
 * - See 'Actor AI Level' in the Notetags section below.
 *
 * Bypass Requirement:
 * - This is a list of the skills that bypass that requirement to have learned
 * the skill in order to use it. This is namely for skills like 'Attack' and/or
 * 'Guard' that aren't normally learned by actors, but are available to them
 * through the command window.
 *
 * Curate Skill List:
 * - Skills used for Auto Battle can only be skills accessible through
 * available skill types. This is a selectable option because sometimes, skills
 * that are learned by actors can be used through auto battle despite not
 * having access to that skill type. An example of this would be an actor that
 * has learned skills in the Knight class, but upon switching to the Mage class
 * the actor loses the Knight skill type. Yet, despite that, auto battle would
 * let the Mage class use skills from the Knight skill type if it's a part of
 * the setup. Turning this on to curate the skill list will remove the ability
 * use skills outside of available skill types.
 *
 * Undecided AI:
 * - If no skill is determined through the A.I. Priority list, the actor will
 * use the default Auto Battle AI to determine which skill to use. Otherwise,
 * the actor perform only a basic attack if the setting is false.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The notetags to setup the auto battle A.I. will go into the class noteboxes.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Actor AI Level
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * Actor AI levels do not determine how smart they are. Instead, they determine
 * how strictly they will follow the <AI Priority> lists. An AI Level of 80
 * means it has an 80% chance of following the prioritized action on the AI
 * Priority list before moving onto the next one where there will be another
 * 80% chance and so on. If the AI level is lower, the chance is lower, making
 * the AI to be more random.
 *
 * Class Notetag:
 *
 *   <AI Level: x>
 *   Sets the actor's AI level to x. The lower x, the more random the actor.
 *   The higher for x, the more strict the actor is about following the AI
 *   Priority list found in its notebox, too.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Actor AI Priority
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * If a class has an AI Priority list, the actor will go down that list from
 * top to bottom (giving the actions at the top more priority than the ones at
 * the bottom) looking for any actions whose conditions are fulfilled. If that
 * condition is fulfilled, then that action will be the action the actor will
 * partake in.
 *
 * To set up a Priority List for the actor, you must place inside the class's
 * notebox notetags that match the following format:
 *
 *   <AI Priority>                      <AI Priority>
 *    condition: SKILL x, target   or    condition: skill name, target
 *    condition: SKILL x, target         condition: skill name, target
 *   </AI Priority>                     </AI Priority>
 *
 * Any number of conditions and skills can be placed in between the two
 * <AI Priority> tags. You can choose to use skill ID's or the skill names.
 * However, if you use the skill names, keep in mind that it is not case
 * sensitive and if any skills in your database have matching names, the skill
 * with the larger skill ID will be the action used.
 *
 * ============================================================================
 * Conditions
 * ============================================================================
 *
 * The conditions to be used for the <AI Priority> notetag are the same as the
 * ones from the MSEP_BattleAICore plugin. Please refer to the MSEP_BattleAICore
 * help file for which conditions can be used with the A.I. setups.
 */

if (Imported.MSEP_BattleAICore) {
  MageStudios.Parameters = PluginManager.parameters("MSEP_X_ActorAutoBattleAI");
  MageStudios.Param = MageStudios.Param || {};

  MageStudios.Param.AABAIDefaultLevel = Number(
    MageStudios.Parameters["Default AI Level"]
  );
  MageStudios.Param.AABAIBypassRequirementSkills = JSON.parse(
    MageStudios.Parameters["Bypass Requirement"]
  );
  MageStudios.Param.AABAICurate = eval(
    String(MageStudios.Parameters["Curate Skill List"])
  );
  MageStudios.Param.AABAIUndecided = eval(
    String(MageStudios.Parameters["Undecided AI"])
  );

  MageStudios.SetupParameters = function () {
    var length = MageStudios.Param.AABAIBypassRequirementSkills.length;
    for (var i = 0; i < length; ++i) {
      MageStudios.Param.AABAIBypassRequirementSkills[i] = Number(
        MageStudios.Param.AABAIBypassRequirementSkills[i]
      );
    }
  };
  MageStudios.SetupParameters();

  MageStudios.AABAI.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
  DataManager.isDatabaseLoaded = function () {
    if (!MageStudios.AABAI.DataManager_isDatabaseLoaded.call(this))
      return false;
    if (!MageStudios._loaded_MSEP_X_ActorAutoBattleAI) {
      this.processAABAINotetags1($dataClasses);
      MageStudios._loaded_MSEP_X_ActorAutoBattleAI = true;
    }
    return true;
  };

  DataManager.processAABAINotetags1 = function (group) {
    var note1 = /<(?:AI PRIORITY)>/i;
    var note2 = /<\/(?:AI PRIORITY)>/i;
    var note3 = /<(?:AI CONSIDER TAUNT|ai considers taunts)>/i;
    var note4 = /<(?:AI LEVEL):[ ](\d+)>/i;
    for (var n = 1; n < group.length; n++) {
      var obj = group[n];
      var notedata = obj.note.split(/[\r\n]+/);

      obj.aiPattern = [];
      var aiPatternFlag = false;
      obj.aiConsiderTaunt = false;
      obj.aiLevel = MageStudios.Param.AABAIDefaultLevel * 0.01;

      for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(note1)) {
          aiPatternFlag = true;
        } else if (line.match(note2)) {
          aiPatternFlag = false;
        } else if (aiPatternFlag) {
          obj.aiPattern.push(line);
        } else if (line.match(note3)) {
          obj.aiConsiderTaunt = true;
        } else if (line.match(note4)) {
          obj.aiLevel = parseFloat(RegExp.$1 * 0.01);
        }
      }
    }
  };

  MageStudios.AABAI.AIManager_hasSkill = AIManager.hasSkill;
  AIManager.hasSkill = function (skillId) {
    if (this.battler() && this.battler().isActor()) {
      return this.checkActorHasSkillRequirement(skillId);
    } else {
      return MageStudios.AABAI.AIManager_hasSkill.call(this, skillId);
    }
  };

  AIManager.checkActorHasSkillRequirement = function (skillId) {
    var skill = $dataSkills[skillId];
    if (!skill) return false;
    if (MageStudios.Param.AABAIBypassRequirementSkills.contains(skillId))
      return true;
    if (MageStudios.Param.AABAICurate) {
      var skillTypes = this.battler().addedSkillTypes();
      if (skillTypes && !skillTypes.contains(skill.stypeId)) return false;
    }
    return MageStudios.AABAI.AIManager_hasSkill.call(this, skillId);
  };

  MageStudios.AABAI.Game_Actor_makeAutoBattleActions =
    Game_Actor.prototype.makeAutoBattleActions;
  Game_Actor.prototype.makeAutoBattleActions = function () {
    if (this.isConfused()) {
      this.makeConfusionActions();
    } else if (this.currentClass().aiPattern.length > 0) {
      this.setAIPattern();
      this.setActionState("waiting");
    } else {
      MageStudios.AABAI.Game_Actor_makeAutoBattleActions.call(this);
    }
  };

  Game_Actor.prototype.setAIPattern = function () {
    Game_Battler.prototype.setAIPattern.call(this);
    if (this.numActions() <= 0) return;
    AIManager.setBattler(this);
    for (var i = 0; i < this.currentClass().aiPattern.length; ++i) {
      if (Math.random() > this.aiLevel()) continue;
      var line = this.currentClass().aiPattern[i];
      if (AIManager.isDecidedActionAI(line)) return;
    }
    if (MageStudios.Param.AABAIUndecided) {
      MageStudios.AABAI.Game_Actor_makeAutoBattleActions.call(this);
    } else {
      for (var i = 0; i < this.numActions(); i++) {
        this._actions[i].setAttack();
      }
    }
    this.setActionState("waiting");
  };

  Game_Actor.prototype.aiLevel = function () {
    return this.currentClass().aiLevel;
  };
} else {
  var text = "";
  text += "You are getting this error because you are trying to run ";
  text += "MSEP_X_ActorAutoBattleAI without MSEP_BattleAICore. Please visit ";
  text +=
    "MageStudios.moe and install MSEP_BattleAICore in your game project before ";
  text += "you can use this plugin.";
  console.log(text);
  require("nw.gui").Window.get().showDevTools();
}
