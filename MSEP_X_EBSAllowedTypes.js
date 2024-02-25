//=============================================================================
// Mage Studios Engine Plugins - Equip Battle Skills Extension - Allowed Types
// MSEP_X_EBSAllowedTypes.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_X_EBSAllowedTypes = true;

var MageStudios = MageStudios || {};
MageStudios.EBSAT = MageStudios.EBSAT || {};
MageStudios.EBSAT.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc v1.01 (Requires MSEP_EquipBattleSkills.js) For those who
 * wish to use Equip Battle Skills and still have skill types.
 * @author Mage Studios Engine Plugins
 *
 * @param Allowed Skill Types
 * @desc List here the skill type ID's you wish to retain in the
 * battle command skill type list.
 * @default 0
 *
 * @param Allowed Skill Types List
 * @type number[]
 * @desc List here the skill type ID's you wish to retain in the
 * battle command skill type list. Requires MV 1.5.0+
 * @default []
 *
 * @help
 * ============================================================================
 * Introduction and Instructions
 * ============================================================================
 *
 * This plugin requires MSEP_EquipBattleSkills. Make sure this plugin is located
 * under MSEP_EquipBattleSkills in the plugin list.
 *
 * For those who are using the Equip Battle Skills plugin, you may have noticed
 * that the 'Skills' command replaces all skill types in the battle command
 * window. For those who'd like to have certain skill types continue working,
 * you can use this plugin to create an exception for it. The skill types found
 * listed in the plugin parameters will be given an exception and will be shown
 * in battle. Any skill that contains the skill type also cannot be equipped in
 * a battle skill slot.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.01:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

if (Imported.MSEP_EquipBattleSkills) {

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.setupParameters = function() {
  MageStudios.Param = MageStudios.Param || {};
  var parameters = PluginManager.parameters('MEP_X_EBSAllowedTypes');
  MageStudios.Param.EBSATTypes = String(parameters['Allowed Skill Types']);
  MageStudios.Param.EBSATTypes = MageStudios.Param.EBSATTypes.split(',');
  var length = MageStudios.Param.EBSATTypes.length;
  for (var i = 0; i < length; ++i) {
    var value = MageStudios.Param.EBSATTypes[i];
    MageStudios.Param.EBSATTypes[i] = parseInt(value.trim());
  }
  var data = JSON.parse(parameters['Allowed Skill Types List'] || '[]');
  for (var i = 0; i < data.length; ++i) {
    var type = parseInt(data[i]);
    if (MageStudios.Param.EBSATTypes.contains(type)) continue;
    MageStudios.Param.EBSATTypes.push(type);
  }
};

MageStudios.setupParameters();

//=============================================================================
// DataManager
//=============================================================================

MageStudios.EBSAT.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!MageStudios.EBSAT.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!MageStudios._loaded_MSEP_X_EBSAllowedTypes) {
    this.processEBSATNotetags($dataSkills);
    MageStudios._loaded_MSEP_X_EBSAllowedTypes = true;
  }
  
  return true;
};

DataManager.processEBSATNotetags = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    if (MageStudios.Param.EBSATTypes.contains(obj.stypeId)) {
      obj.equippable = false;
    }
  }
};

//=============================================================================
// Parameter Window_ActorCommand
//=============================================================================

MageStudios.EBSAT.Window_ActorCommand_addSkillCommands =
  Window_ActorCommand.prototype.addSkillCommands;
Window_ActorCommand.prototype.addSkillCommands = function() {
  MageStudios.EBSAT.Window_ActorCommand_addSkillCommands.call(this);
  if (DataManager.isBattleTest()) return;
  this.addAllowedEBSTypes();
};

Window_ActorCommand.prototype.addAllowedEBSTypes = function() {
  var skillTypes = this._actor.addedSkillTypes();
  skillTypes.sort(function(a, b) {
    return a - b;
  });
  var length = skillTypes.length;
  for (var i = 0; i < length; ++i) {
    var stypeId = skillTypes[i];
    if (!MageStudios.Param.EBSATTypes.contains(stypeId)) continue;
    var name = $dataSystem.skillTypes[stypeId];
    this.addCommand(name, 'skill', true, stypeId);
  }
};

//=============================================================================
// End of File
//=============================================================================
};