//=============================================================================
// Mage Studios Engine Plugins - Equip Battle Skills Extension - Tiers
// MSEP_X_EquipSkillTiers.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_X_EquipSkillTiers = true;

var MageStudios = MageStudios || {};
MageStudios.ESTier = MageStudios.ESTier || {};
MageStudios.ESTier.version = 1.00

//=============================================================================
 /*:
 * @plugindesc (Requires MSEP_EquipBattleSkills.js) Places equippable
 * skills in tiers to limit what players can equip.
 * @author Mage Studios Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Sort by Tier?
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Sort equippable skills by tier?
 * NO - false     YES - true
 * @default true
 *
 * @param ---Tier 1---
 * @default
 *
 * @param Tier 1 Enabled
 * @parent ---Tier 1---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Is tier 1 enabled?
 * NO - false     YES - true
 * @default true
 *
 * @param Tier 1 Name
 * @parent ---Tier 1---
 * @desc This is the name of tier 1 skills.
 * @default Common
 *
 * @param Tier 1 Icon
 * @parent ---Tier 1---
 * @type number
 * @min 0
 * @desc This is the icon used for tier 1 skills.
 * @default 307
 *
 * @param Tier 1 Maximum
 * @parent ---Tier 1---
 * @type number
 * @min 1
 * @desc The maximum number of equipped skills for tier 1.
 * @default 8
 *
 * @param ---Tier 2---
 * @default
 *
 * @param Tier 2 Enabled
 * @parent ---Tier 2---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Is tier 2 enabled?
 * NO - false     YES - true
 * @default true
 *
 * @param Tier 2 Name
 * @parent ---Tier 2---
 * @desc This is the name of tier 2 skills.
 * @default Uncommon
 *
 * @param Tier 2 Icon
 * @parent ---Tier 2---
 * @type number
 * @min 0
 * @desc This is the icon used for tier 2 skills.
 * @default 309
 *
 * @param Tier 2 Maximum
 * @parent ---Tier 2---
 * @type number
 * @min 1
 * @desc The maximum number of equipped skills for tier 2.
 * @default 6
 *
 * @param ---Tier 3---
 * @default
 *
 * @param Tier 3 Enabled
 * @parent ---Tier 3---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Is tier 3 enabled?
 * NO - false     YES - true
 * @default true
 *
 * @param Tier 3 Name
 * @parent ---Tier 3---
 * @desc This is the name of tier 3 skills.
 * @default Rare
 *
 * @param Tier 3 Icon
 * @parent ---Tier 3---
 * @type number
 * @min 0
 * @desc This is the icon used for tier 3 skills.
 * @default 310
 *
 * @param Tier 3 Maximum
 * @parent ---Tier 3---
 * @type number
 * @min 1
 * @desc The maximum number of equipped skills for tier 3.
 * @default 4
 *
 * @param ---Tier 4---
 * @default
 *
 * @param Tier 4 Enabled
 * @parent ---Tier 4---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Is tier 4 enabled?
 * NO - false     YES - true
 * @default true
 *
 * @param Tier 4 Name
 * @parent ---Tier 4---
 * @desc This is the name of tier 4 skills.
 * @default Epic
 *
 * @param Tier 4 Icon
 * @parent ---Tier 4---
 * @type number
 * @min 0
 * @desc This is the icon used for tier 4 skills.
 * @default 311
 *
 * @param Tier 4 Maximum
 * @parent ---Tier 4---
 * @type number
 * @min 1
 * @desc The maximum number of equipped skills for tier 4.
 * @default 3
 *
 * @param ---Tier 5---
 * @default
 *
 * @param Tier 5 Enabled
 * @parent ---Tier 5---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Is tier 5 enabled?
 * NO - false     YES - true
 * @default true
 *
 * @param Tier 5 Name
 * @parent ---Tier 5---
 * @desc This is the name of tier 5 skills.
 * @default Legendary
 *
 * @param Tier 5 Icon
 * @parent ---Tier 5---
 * @type number
 * @min 0
 * @desc This is the icon used for tier 5 skills.
 * @default 312
 *
 * @param Tier 5 Maximum
 * @parent ---Tier 5---
 * @type number
 * @min 1
 * @desc The maximum number of equipped skills for tier 5.
 * @default 2
 *
 * @param ---Tier 6---
 * @default
 *
 * @param Tier 6 Enabled
 * @parent ---Tier 6---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Is tier 6 enabled?
 * NO - false     YES - true
 * @default true
 *
 * @param Tier 6 Name
 * @parent ---Tier 6---
 * @desc This is the name of tier 6 skills.
 * @default Ultimate
 *
 * @param Tier 6 Icon
 * @parent ---Tier 6---
 * @type number
 * @min 0
 * @desc This is the icon used for tier 6 skills.
 * @default 308
 *
 * @param Tier 6 Maximum
 * @parent ---Tier 6---
 * @type number
 * @min 1
 * @desc The maximum number of equipped skills for tier 6.
 * @default 1
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires MSEP_EquipBattleSkills. Make sure this plugin is located
 * under MSEP_EquipBattleSkills in the plugin list.
 *
 * This plugin imposes a limit upon actors to limit what skills can be equipped
 * based on tiers. The player must abide by the limits before being able to
 * exit the menu allowing for better control over gameplay balance.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that alter the tier settings of skills.
 *
 * Skill Notetag
 *   <Skill Tier: x>
 *   Sets the skill's tier to x, making it limited by the restrictions applied
 *   by the actor.
 *
 * Actor, Class, Skill, Weapon, Armor, and State Notetags
 *   <Skill Tier x Slots: +y>
 *   <Skill Tier x Slots: -y>
 *   Increases or decreases the skill tier for tier x by y slots. The changes
 *   made here do not go under 0 nor do they bypass the maximum battle skills
 *   equip limit.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.03:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.02:
 * - Updated for RPG Maker MV version 1.3.2.
 *
 * Version 1.01:
 * - Added anti-crash measures when equipping skills.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

if (Imported.MSEP_EquipBattleSkills) {

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MSEP_X_EquipSkillTiers');
MageStudios.Param = MageStudios.Param || {};
MageStudios.Icon = MageStudios.Icon || {};

MageStudios.Param.ESTSort = eval(String(MageStudios.Parameters['Sort by Tier?']));

MageStudios.Param.ESTierEnabled = {};
MageStudios.Param.ESTierName = {};
MageStudios.Icon.ESTier = {};
MageStudios.Param.ESTierMaximum = {};
for (MageStudios.i = 1; MageStudios.i <= 6; ++MageStudios.i) {
  MageStudios.line = "String(MageStudios.Parameters['Tier " + MageStudios.i + " Enabled'])";
  MageStudios.Param.ESTierEnabled[MageStudios.i] = eval(eval(MageStudios.line));
  MageStudios.line = "String(MageStudios.Parameters['Tier " + MageStudios.i + " Name'])";
  MageStudios.Param.ESTierName[MageStudios.i] = eval(MageStudios.line);
  MageStudios.line = "Number(MageStudios.Parameters['Tier " + MageStudios.i + " Icon'])";
  MageStudios.Icon.ESTier[MageStudios.i] = eval(MageStudios.line);
  MageStudios.line = "Number(MageStudios.Parameters['Tier " + MageStudios.i + " Maximum'])";
  MageStudios.Param.ESTierMaximum[MageStudios.i] = eval(MageStudios.line);
};

//=============================================================================
// DataManager
//=============================================================================

MageStudios.ESTier.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!MageStudios.ESTier.DataManager_isDatabaseLoaded.call(this)) return false;

    if (!MageStudios._loaded_MSEP_X_EquipSkillTiers) {
  		this.processESTierNotetags1($dataSkills);
      this.processESTierNotetags2($dataActors);
      this.processESTierNotetags2($dataClasses);
      this.processESTierNotetags2($dataSkills);
      this.processESTierNotetags2($dataWeapons);
      this.processESTierNotetags2($dataArmors);
      this.processESTierNotetags2($dataStates);
      MageStudios._loaded_MSEP_X_EquipSkillTiers = true;
    }

		return true;
};

DataManager.processESTierNotetags1 = function(group) {
	var note1 = /<(?:SKILL TIER):[ ](\d+)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.equipTier = 1;

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
        var value = parseInt(RegExp.$1).clamp(1, 6);
        if (MageStudios.Param.ESTierEnabled[value]) obj.equipTier = value;
			}
		}
	}
};

DataManager.processESTierNotetags2 = function(group) {
	var note1 = /<(?:SKILL TIER)[ ](\d+)[ ](?:SLOTS|SLOT):[ ]([\+\-]\d+)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.equipTierSlot = {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0
    };

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
				var tier = parseInt(RegExp.$1).clamp(1, 6);
        obj.equipTierSlot[tier] = parseInt(RegExp.$2);
			}
		}
	}
};

//=============================================================================
// Game_System
//=============================================================================

Game_System.prototype.usedSkillTiers = function() {
    var tiers = [];
    for (var i = 1; i <= 6; ++i) {
      if (MageStudios.Param.ESTierEnabled[i]) tiers.push(i);
    }
    return tiers;
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.getEquipSkillTierCount = function(tier) {
    var value = 0;
    for (var i = 0; i < this.battleSkillsRaw().length; ++i) {
      if (this.battleSkillsRaw()[i] === 0) continue;
      var skill = $dataSkills[this.battleSkillsRaw()[i]];
      if (skill.equipTier === tier) value += 1;
    }
    return value;
};

Game_Actor.prototype.getEquipSkillTierMax = function(tier) {
    var value = MageStudios.Param.ESTierMaximum[tier];
    value = value.clamp(0, this.maxBattleSkills());
    value += this.actor().equipTierSlot[tier];
    value += this.currentClass().equipTierSlot[tier];
    for (var i = 0; i < this.battleSkillsRaw().length; ++i) {
      var skill = $dataSkills[this.battleSkillsRaw()[i]];
      if (skill) value += skill.equipTierSlot[tier];
    }
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (state) value += state.equipTierSlot[tier];
    }
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (equip) value += equip.equipTierSlot[tier];
    }
    return value.clamp(0, MageStudios.Param.EBSMaxSlots);
};

Game_Actor.prototype.equipSkillTiersOk = function() {
    var tiers = $gameSystem.usedSkillTiers();
    for (var i = 0; i < tiers.length; ++i) {
      var tier = tiers[i];
      var cur = this.getEquipSkillTierCount(tier);
      var max = this.getEquipSkillTierMax(tier);
      if (cur > max) return false;
    }
    return true;
};

MageStudios.ESTier.Game_Actor_learnSkill = Game_Actor.prototype.learnSkill;
Game_Actor.prototype.learnSkill = function(skillId) {
    var hasLearnedSkill = this.isLearnedSkillRaw(skillId);
    if (!hasLearnedSkill) this._learningSkill = true;
    MageStudios.ESTier.Game_Actor_learnSkill.call(this, skillId);
    if (!hasLearnedSkill) this._learningSkill = undefined;
};

Game_Actor.prototype.isLearnedSkillRaw = function(skillId) {
  return this._skills.contains(skillId);
};

MageStudios.ESTier.Game_Actor_equipSkill = Game_Actor.prototype.equipSkill;
Game_Actor.prototype.equipSkill = function(skillId, slotId) {
    if (this._learningSkill) {
      var skill = $dataSkills[skillId]; 
      if (skill) {
        var tier = skill.equipTier;
        var cur = this.getEquipSkillTierCount(tier);
        var max = this.getEquipSkillTierMax(tier);
        if (cur >= max) return;
      }
    }
    MageStudios.ESTier.Game_Actor_equipSkill.call(this, skillId, slotId);
};

//=============================================================================
// Window_SkillList
//=============================================================================

MageStudios.ESTier.Window_SkillList_isCancelEnabled =
    Window_SkillList.prototype.isCancelEnabled;
Window_SkillList.prototype.isCancelEnabled = function() {
    if (this._actor && this._stypeId === 'battleSkills') {
      if (!this._actor.equipSkillTiersOk()) return false;
    }
    return MageStudios.ESTier.Window_SkillList_isCancelEnabled.call(this);
};

//=============================================================================
// Window_SkillEquip
//=============================================================================

if (MageStudios.Param.ESTSort) {

MageStudios.ESTier.Window_SkillEquip_getSkills = 
    Window_SkillEquip.prototype.getSkills;
Window_SkillEquip.prototype.getSkills = function() {
    MageStudios.ESTier.Window_SkillEquip_getSkills.call(this);
    this._skillList.sort(function(a, b) {
      var t1 = a.equipTier;
      var t2 = b.equipTier;
      if (t1 !== t2) {
        return t1 - t2;
      }
      return a.name === b.name ? 0 : +(a.name > b.name) || -1;
    });
    return this._skillList;
};

}; // MageStudios.Param.ESTSort

MageStudios.ESTier.Window_SkillEquip_drawSkill =
    Window_SkillEquip.prototype.drawSkill;
Window_SkillEquip.prototype.drawSkill = function(skill, rect) {
    MageStudios.ESTier.Window_SkillEquip_drawSkill.call(this, skill, rect);
    this.drawSkillTierIcon(skill, rect);
};

Window_SkillEquip.prototype.drawSkillTierIcon = function(skill, rect) {
    this.resetFontSettings();
    this.resetTextColor();
    var tier = skill.equipTier;
    var icon = MageStudios.Icon.ESTier[tier];
    this.drawIcon(icon, rect.width - 4 - Window_Base._iconWidth, rect.y + 2);
};

//=============================================================================
// Window_SkillEquipStatus
//=============================================================================

function Window_SkillEquipStatus() {
    this.initialize.apply(this, arguments);
}

Window_SkillEquipStatus.prototype = Object.create(Window_Base.prototype);
Window_SkillEquipStatus.prototype.constructor = Window_SkillEquipStatus;

Window_SkillEquipStatus.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._actor = null;
};

Window_SkillEquipStatus.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

Window_SkillEquipStatus.prototype.refresh = function() {
    this.contents.clear();
    if (!this._actor) return;
    var dw = Window_Base._faceWidth;
    var dh = Window_Base._faceHeight;
    var x = dw + this.standardPadding();
    var x2 = x + Window_Base._faceWidth + (2 * this.textPadding());
    this.drawActorFace(this._actor, 0, 0, dw, dh);
    this.drawActorName(this._actor, x, 0);
    this.drawActorClass(this._actor, x2, 0);
    this.drawTiers();
};

Window_SkillEquipStatus.prototype.drawTiers = function() {
    var tiers = $gameSystem.usedSkillTiers();
    var dx = Window_Base._faceWidth + this.standardPadding();
    var dy = this.lineHeight();
    var dw = this.contents.width - dx;
    if (tiers.length > 3) {
      dw -= this.textPadding() * 2;
      dw /= 2;
    }
    for (var j = 0; j < tiers.length; ++j) {
      var tier = tiers[j];
      this.drawTierInfo(tier, dx, dy, dw);
      if (tier % 3 === 0) {
        dy = this.lineHeight();
        dx += dw + this.textPadding();
      } else {
        dy += this.lineHeight();
      }
    }
};

Window_SkillEquipStatus.prototype.drawTierInfo = function(tier, dx, dy, dw) {
    var icon = MageStudios.Icon.ESTier[tier];
    var name = MageStudios.Param.ESTierName[tier];
    var ibw = Window_Base._iconWidth + 4;
    this.resetTextColor();
    this.drawIcon(icon, dx + 2, dy + 2);
    this.drawText(name, dx + ibw, dy, dw - ibw);
    var cur = this._actor.getEquipSkillTierCount(tier);
    var max = this._actor.getEquipSkillTierMax(tier);
    var text = cur + '/' + max;
    if (cur > max) {
      this.changeTextColor(this.powerDownColor());
    } else if (cur === max) {
      this.changeTextColor(this.crisisColor());
    } else {
      this.changeTextColor(this.normalColor());
    }
    this.drawText(text, dx + ibw, dy, dw - ibw, 'right');
};

//=============================================================================
// Scene_Skill
//=============================================================================

MageStudios.ESTier.Scene_Skill_createStatusWindow =
    Scene_Skill.prototype.createStatusWindow;
Scene_Skill.prototype.createStatusWindow = function() {
    MageStudios.ESTier.Scene_Skill_createStatusWindow.call(this);
    var wx = this._skillTypeWindow.width;
    var wy = this._helpWindow.height;
    var ww = Graphics.boxWidth - wx;
    var wh = this._skillTypeWindow.height;
    this._statusEquipWindow = new Window_SkillEquipStatus(wx, wy, ww, wh);
    this._statusEquipWindow.hide();
    this.addWindow(this._statusEquipWindow);
};

MageStudios.ESTier.Scene_Skill_refreshActor = Scene_Skill.prototype.refreshActor;
Scene_Skill.prototype.refreshActor = function() {
    MageStudios.ESTier.Scene_Skill_refreshActor.call(this);
    var actor = this.actor();
    if (this._statusEquipWindow) this._statusEquipWindow.setActor(actor);
};

MageStudios.ESTier.Scene_Skill_commandSkill = Scene_Skill.prototype.commandSkill;
Scene_Skill.prototype.commandSkill = function() {
    MageStudios.ESTier.Scene_Skill_commandSkill.call(this);
    if (this._skillTypeWindow.currentExt() === 'battleSkills') {
      this._statusWindow.hide();
      this._statusEquipWindow.show();
      this._statusEquipWindow.refresh();
    };
};

MageStudios.ESTier.Scene_Skill_onItemCancel = Scene_Skill.prototype.onItemCancel;
Scene_Skill.prototype.onItemCancel = function() {
    MageStudios.ESTier.Scene_Skill_onItemCancel.call(this);
    if (this._skillTypeWindow.currentExt() === 'battleSkills') {
      this._statusWindow.show();
      this._statusEquipWindow.hide();
      this._statusEquipWindow.refresh();
    }
};

MageStudios.ESTier.Scene_Skill_onSkillEqOk = Scene_Skill.prototype.onSkillEqOk;
Scene_Skill.prototype.onSkillEqOk = function() {
    MageStudios.ESTier.Scene_Skill_onSkillEqOk.call(this);
    this._statusEquipWindow.refresh();
};

MageStudios.ESTier.Scene_Skill_onSkillEqCancel =
    Scene_Skill.prototype.onSkillEqCancel;
Scene_Skill.prototype.onSkillEqCancel = function() {
    MageStudios.ESTier.Scene_Skill_onSkillEqCancel.call(this);
    this._statusEquipWindow.refresh();
};

//=============================================================================
// Utilities
//=============================================================================

MageStudios.Util = MageStudios.Util || {};

if (!MageStudios.Util.toGroup) {
		MageStudios.Util.toGroup = function(inVal) {
				return inVal;
		}
};

MageStudios.Util.getRange = function(n, m) {
    var result = [];
    for (var i = n; i <= m; ++i) result.push(i);
    return result;
};

//=============================================================================
// End of File
//=============================================================================
};
