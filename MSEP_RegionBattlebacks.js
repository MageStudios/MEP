var Imported = Imported || {};
Imported.MSEP_RegionBattlebacks = true;

var MageStudios = MageStudios || {};
MageStudios.RBB = MageStudios.RBB || {};
MageStudios.RBB.version = 1.0;

/*:
 * @plugindesc This lets you assign certain battlebacks to specific
 * region ID's when entering battle in that region.
 * @author Mage Studios Engine Plugins
 *
 * @param ---Default---
 * @default
 *
 * @param Default 1
 * @type file
 * @dir img/battlebacks1
 * @require 1
 * @parent ---Default---
 * @desc The filename used by default for battleback1.
 * Default: Grassland
 * @default Grassland
 *
 * @param Default 2
 * @type file
 * @dir img/battlebacks2
 * @require 1
 * @parent ---Default---
 * @desc The filename used by default for battleback2.
 * Default: Grassland
 * @default Grassland
 *
 * @param ---Ship---
 * @default
 *
 * @param Ship 1
 * @type file
 * @dir img/battlebacks1
 * @require 1
 * @parent ---Ship---
 * @desc The filename used by ships for battleback1.
 * Default: Ship
 * @default Ship
 *
 * @param Ship 2
 * @type file
 * @dir img/battlebacks2
 * @require 1
 * @parent ---Ship---
 * @desc The filename used by ships for battleback2.
 * Default: Ship
 * @default Ship
 *
 * @param ---Forest---
 * @default
 *
 * @param Forest 1
 * @type file
 * @dir img/battlebacks1
 * @require 1
 * @parent ---Forest---
 * @desc The filename used by forests for battleback1.
 * Default: There is none.
 * @default There is none.
 *
 * @param Forest 2
 * @type file
 * @dir img/battlebacks2
 * @require 1
 * @parent ---Forest---
 * @desc The filename used by forests for battleback2.
 * Default: Forest
 * @default Forest
 *
 * @param ---Cliff---
 * @default
 *
 * @param Cliff 1
 * @type file
 * @dir img/battlebacks1
 * @require 1
 * @parent ---Cliff---
 * @desc The filename used by cliffs for battleback1.
 * Default: There is none.
 * @default There is none.
 *
 * @param Cliff 2
 * @type file
 * @dir img/battlebacks2
 * @require 1
 * @parent ---Cliff---
 * @desc The filename used by cliffs for battleback2.
 * Default: Cliff
 * @default Cliff
 *
 * @param ---Wasteland---
 * @default
 *
 * @param Wasteland 1
 * @type file
 * @dir img/battlebacks1
 * @require 1
 * @parent ---Wasteland---
 * @desc The filename used by wastelands for battleback1.
 * Default: Wasteland
 * @default Wasteland
 *
 * @param Wasteland 2
 * @type file
 * @dir img/battlebacks2
 * @require 1
 * @parent ---Wasteland---
 * @desc The filename used by wastelands for battleback2.
 * Default: Wasteland
 * @default Wasteland
 *
 * @param ---Dirtfield---
 * @default
 *
 * @param Dirtfield 1
 * @type file
 * @dir img/battlebacks1
 * @require 1
 * @parent ---Dirtfield---
 * @desc The filename used by dirt fields for battleback1.
 * Default: Wasteland
 * @default Wasteland
 *
 * @param Dirtfield 2
 * @type file
 * @dir img/battlebacks2
 * @require 1
 * @parent ---Dirtfield---
 * @desc The filename used by dirt fields for battleback2.
 * Default: There is none.
 * @default There is none.
 *
 * @param ---Desert---
 * @default
 *
 * @param Desert 1
 * @type file
 * @dir img/battlebacks1
 * @require 1
 * @parent ---Desert---
 * @desc The filename used by deserts for battleback1.
 * Default: Desert
 * @default Desert
 *
 * @param Desert 2
 * @type file
 * @dir img/battlebacks2
 * @require 1
 * @parent ---Desert---
 * @desc The filename used by deserts for battleback2.
 * Default: Desert
 * @default Desert
 *
 * @param ---Lava1---
 * @default
 *
 * @param Lava1 1
 * @type file
 * @dir img/battlebacks1
 * @require 1
 * @parent ---Lava1---
 * @desc The filename used by lava type 1 for battleback1.
 * Default: Lava1
 * @default Lava1
 *
 * @param Lava1 2
 * @type file
 * @dir img/battlebacks2
 * @require 1
 * @parent ---Lava1---
 * @desc The filename used by lava type 1 for battleback2.
 * Default: Lava
 * @default Lava
 *
 * @param ---Lava2---
 * @default
 *
 * @param Lava2 1
 * @type file
 * @dir img/battlebacks1
 * @require 1
 * @parent ---Lava2---
 * @desc The filename used by lava type 2 for battleback1.
 * Default: Lava2
 * @default Lava2
 *
 * @param Lava2 2
 * @type file
 * @dir img/battlebacks2
 * @require 1
 * @parent ---Lava2---
 * @desc The filename used by lava type 2 for battleback2.
 * Default: Lava
 * @default Lava
 *
 * @param ---Snowfield---
 * @default
 *
 * @param Snowfield 1
 * @type file
 * @dir img/battlebacks1
 * @require 1
 * @parent ---Snowfield---
 * @desc The filename used by snow fields for battleback1.
 * Default: Snowfield
 * @default Snowfield
 *
 * @param Snowfield 2
 * @type file
 * @dir img/battlebacks2
 * @require 1
 * @parent ---Snowfield---
 * @desc The filename used by snow fields for battleback2.
 * Default: Snowfield
 * @default Snowfield
 *
 * @param ---Clouds---
 * @default
 *
 * @param Clouds 1
 * @type file
 * @dir img/battlebacks1
 * @require 1
 * @parent ---Clouds---
 * @desc The filename used by clouds for battleback1.
 * Default: Clouds
 * @default Clouds
 *
 * @param Clouds 2
 * @type file
 * @dir img/battlebacks2
 * @require 1
 * @parent ---Clouds---
 * @desc The filename used by clouds for battleback2.
 * Default: Clouds
 * @default Clouds
 *
 * @param ---PoisonSwamp---
 * @default
 *
 * @param PoisonSwamp 1
 * @type file
 * @dir img/battlebacks1
 * @require 1
 * @parent ---PoisonSwamp---
 * @desc The filename used by poison swamps for battleback1.
 * Default: PoisonSwamp
 * @default PoisonSwamp
 *
 * @param PoisonSwamp 2
 * @type file
 * @dir img/battlebacks2
 * @require 1
 * @parent ---PoisonSwamp---
 * @desc The filename used by poison swamps for battleback2.
 * Default: PoisonSwamp
 * @default PoisonSwamp
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * When using an overworld map, you actually have no control over any of the
 * battlebacks used for the region you're in. Although they sometimes make
 * sense if you're using the default RTP graphics, other parts of the terrain
 * do not translate well if you're using custom graphics with different names.
 * As a result, this can result in certain images not loading and promptly
 * crashing the game.
 *
 * This plugin will allow you to alter the battlebacks used by default for the
 * overworld in addition to bind specific battlebacks to specific tiles on the
 * map through usage of regions.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * To bind specific battlebacks to certain region ID's, you can use these
 * following notetags:
 *
 * Map Notetags:
 *
 *   <Region x Battleback1: filename>
 *   <Region x Battleback2: filename>
 *   This will change the battleback1 or battleback2 for region x to use
 *   the battleback image with the matching filename. When writing out the
 *   filename, it is case sensitive. Do not insert the file extension.
 *
 *   For example:
 *
 *   If you want Region 5 to use battleback1 Dirt2.png and battleback2 as
 *   Forest.png, you would use these two notetags:
 *
 *   <Region 5 Battleback1: Dirt2>
 *   <Region 5 Battleback2: Forest>
 *
 *   Insert these combinations into the noteboxes of the maps you wish to use
 *   specific battlebacks per region for.
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

MageStudios.Parameters = PluginManager.parameters("MSEP_RegionBattlebacks");
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.RBBDefault1 = String(MageStudios.Parameters["Default 1"]);
MageStudios.Param.RBBDefault2 = String(MageStudios.Parameters["Default 2"]);
MageStudios.Param.RBBShip1 = String(MageStudios.Parameters["Ship 1"]);
MageStudios.Param.RBBShip2 = String(MageStudios.Parameters["Ship 2"]);
MageStudios.Param.RBBForest2 = String(MageStudios.Parameters["Forest 2"]);
MageStudios.Param.RBBCliff2 = String(MageStudios.Parameters["Cliff 2"]);
MageStudios.Param.RBBWasteland1 = String(MageStudios.Parameters["Wasteland 1"]);
MageStudios.Param.RBBWasteland2 = String(MageStudios.Parameters["Wasteland 2"]);
MageStudios.Param.RBBDirtField1 = String(MageStudios.Parameters["Dirtfield 1"]);
MageStudios.Param.RBBDesert1 = String(MageStudios.Parameters["Desert 1"]);
MageStudios.Param.RBBDesert2 = String(MageStudios.Parameters["Desert 2"]);
MageStudios.Param.RBBLaval11 = String(MageStudios.Parameters["Lava1 1"]);
MageStudios.Param.RBBLaval12 = String(MageStudios.Parameters["Lava1 2"]);
MageStudios.Param.RBBLaval21 = String(MageStudios.Parameters["Lava2 1"]);
MageStudios.Param.RBBLaval22 = String(MageStudios.Parameters["Lava2 2"]);
MageStudios.Param.RBBSnowfield1 = String(MageStudios.Parameters["Snowfield 1"]);
MageStudios.Param.RBBSnowfield2 = String(MageStudios.Parameters["Snowfield 2"]);
MageStudios.Param.RBBClouds1 = String(MageStudios.Parameters["Clouds 1"]);
MageStudios.Param.RBBClouds2 = String(MageStudios.Parameters["Clouds 2"]);
MageStudios.Param.RBBPoisonSwamp1 = String(
  MageStudios.Parameters["PoisonSwamp 1"]
);
MageStudios.Param.RBBPoisonSwamp2 = String(
  MageStudios.Parameters["PoisonSwamp 2"]
);

DataManager.getBattlebackName = function (regionId, type) {
  if (!$dataMap) return "";
  var notedata = $dataMap.note.split(/[\r\n]+/);
  for (var i = 0; i < notedata.length; i++) {
    var line = notedata[i];
    if (line.match(/<REGION[ ](\d+)[ ]BATTLEBACK(\d+):[ ](.*)>/i)) {
      var id = parseInt(RegExp.$1);
      var typeId = parseInt(RegExp.$2);
      var name = String(RegExp.$3);
      if (id === regionId && typeId === type) return name;
    }
  }
  return "";
};

MageStudios.RBB.Game_Map_battleback1Name = Game_Map.prototype.battleback1Name;
Game_Map.prototype.battleback1Name = function () {
  var battlebackName = this.getRegionBattlebackName(1);
  if (battlebackName !== "") return battlebackName;
  return MageStudios.RBB.Game_Map_battleback1Name.call(this);
};

MageStudios.RBB.Game_Map_battleback2Name = Game_Map.prototype.battleback2Name;
Game_Map.prototype.battleback2Name = function () {
  var battlebackName = this.getRegionBattlebackName(2);
  if (battlebackName !== "") return battlebackName;
  return MageStudios.RBB.Game_Map_battleback2Name.call(this);
};

Game_Map.prototype.getRegionBattlebackName = function (type) {
  if (!$dataMap) return "";
  return DataManager.getBattlebackName($gamePlayer.regionId(), type);
};

Spriteset_Battle.prototype.terrainBattleback1Name = function (type) {
  switch (type) {
    case 24:
    case 25:
      return MageStudios.Param.RBBWasteland1;
    case 26:
    case 27:
      return MageStudios.Param.RBBDirtField1;
    case 32:
    case 33:
      return MageStudios.Param.RBBDesert1;
    case 34:
      return MageStudios.Param.RBBLaval11;
    case 35:
      return MageStudios.Param.RBBLaval21;
    case 40:
    case 41:
      return MageStudios.Param.RBBSnowfield1;
    case 42:
      return MageStudios.Param.RBBClouds1;
    case 4:
    case 5:
      return MageStudios.Param.RBBPoisonSwamp1;
    default:
      return null;
  }
};

Spriteset_Battle.prototype.terrainBattleback2Name = function (type) {
  switch (type) {
    case 20:
    case 21:
      return MageStudios.Param.RBBForest2;
    case 22:
    case 30:
    case 38:
      return MageStudios.Param.RBBCliff2;
    case 24:
    case 25:
    case 26:
    case 27:
      return MageStudios.Param.RBBWasteland2;
    case 32:
    case 33:
      return MageStudios.Param.RBBDesert2;
    case 34:
      return MageStudios.Param.RBBLaval12;
    case 35:
      return MageStudios.Param.RBBLaval22;
    case 40:
    case 41:
      return MageStudios.Param.RBBSnowfield2;
    case 42:
      return MageStudios.Param.RBBClouds2;
    case 4:
    case 5:
      return MageStudios.Param.RBBPoisonSwamp2;
  }
};

Spriteset_Battle.prototype.defaultBattleback1Name = function () {
  return MageStudios.Param.RBBDefault1;
};

Spriteset_Battle.prototype.defaultBattleback2Name = function () {
  return MageStudios.Param.RBBDefault2;
};

Spriteset_Battle.prototype.shipBattleback1Name = function () {
  return MageStudios.Param.RBBShip1;
};

Spriteset_Battle.prototype.shipBattleback2Name = function () {
  return MageStudios.Param.RBBShip2;
};
