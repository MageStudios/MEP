var Imported = Imported || {};
Imported.MSEP_X_VehicleRestrict = true;

var MageStudios = MageStudios || {};
MageStudios.VR = MageStudios.VR || {};
MageStudios.VR.version = 1.0;

/*:
 * @plugindesc (Req MSEP_RegionRestrictions.js) This plugin allows you
 * to control where vehicles can move and can land.
 * @author Mage Studios Engine Plugins
 *
 * @param ---Boat---
 * @default
 *
 * @param Boat Restrict
 * @parent ---Boat---
 * @desc This region ID will restrict boats from entering.
 * To use multiple regions, separate them by spaces.
 * @default 0
 *
 * @param Boat Allow
 * @parent ---Boat---
 * @desc This region ID will always allow boats to pass.
 * To use multiple regions, separate them by spaces.
 * @default 0
 *
 * @param Boat Land
 * @parent ---Boat---
 * @desc This region ID is a place a boat can land. If this is
 * left as only 0, then all regions can be landed on.
 * @default 0
 *
 * @param ---Ship---
 * @default
 *
 * @param Ship Restrict
 * @parent ---Ship---
 * @desc This region ID will restrict ships from entering.
 * To use multiple regions, separate them by spaces.
 * @default 0
 *
 * @param Ship Allow
 * @parent ---Ship---
 * @desc This region ID will always allow ships to pass.
 * To use multiple regions, separate them by spaces.
 * @default 0
 *
 * @param Ship Land
 * @parent ---Ship---
 * @desc This region ID is a place a ship can land. If this is
 * left as only 0, then all regions can be landed on.
 * @default 0
 *
 * @param ---Airship---
 * @default
 *
 * @param Airship Restrict
 * @parent ---Airship---
 * @desc This region ID will restrict airships from entering.
 * To use multiple regions, separate them by spaces.
 * @default 0
 *
 * @param Airship Allow
 * @parent ---Airship---
 * @desc This region ID will always allow airships to pass.
 * To use multiple regions, separate them by spaces.
 * @default 0
 *
 * @param Airship Land
 * @parent ---Airship---
 * @desc This region ID is a place an airship can land. If this is
 * left as only 0, then all regions can be landed on.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires MSEP_RegionRestrictions. Make sure this plugin is
 * located under MSEP_RegionRestrictions in the plugin list.
 *
 * This plugin expands region restrictions (and allowed regions) to vehicles.
 * On top of that, you can designate specific regions for vehicles to land in.
 * This way, you can make it so that small boats cannot traverse certain bodies
 * of water, land in only certain spots, etc. that ships can or vice versa!
 * Add a bit more variety to the way vehicles are handled for your game!
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert these notetags into the map noteboxes to allow for custom settings
 * for vehicles on that map only.
 *
 * Map Noteboxes:
 *
 *   <Boat Restrict Region: x>
 *   <Boat Restrict Region: x, x, x>
 *   <Boat Restrict Region: x to y>
 *   <Ship Restrict Region: x>
 *   <Ship Restrict Region: x, x, x>
 *   <Ship Restrict Region: x to y>
 *   <Airship Restrict Region: x>
 *   <Airship Restrict Region: x, x, x>
 *   <Airship Restrict Region: x to y>
 *   - These notetags will caused the vehicles to be unable to move past
 *   region(s) marked with x (to y) unless the player character is given the
 *   Through ON movement flag. These regions will be combined with the regions
 *   flagged by the plugin parameters.
 *
 *   <Boat Allow Region: x>
 *   <Boat Allow Region: x, x, x>
 *   <Boat Allow Region: x to y>
 *   <Ship Allow Region: x>
 *   <Ship Allow Region: x, x, x>
 *   <Ship Allow Region: x to y>
 *   <Airship Allow Region: x>
 *   <Airship Allow Region: x, x, x>
 *   <Airship Allow Region: x to y>
 *   - These notetags will cause the vehicles to be able to move through these
 *   region(s) marked with x (to y). These regions will be combined with the
 *   regions flagged by the plugin parameters.
 *
 *   <Boat Land Region: x>
 *   <Boat Land Region: x, x, x>
 *   <Boat Land Region: x to y>
 *   <Ship Land Region: x>
 *   <Ship Land Region: x, x, x>
 *   <Ship Land Region: x to y>
 *   <Airship Land Region: x>
 *   <Airship Land Region: x, x, x>
 *   <Airship Land Region: x to y>
 *   - These notetags will enforce vehicles to only able to land on region(s)
 *   marked by x (to y). They cannot land anywhere else. These regions will be
 *   combined with the regions flagged by the plugin parameters.
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

if (Imported.MSEP_RegionRestrictions) {
  MageStudios.Param = MageStudios.Param || {};

  MageStudios.SetupParameters = function () {
    var parameters = PluginManager.parameters("MSEP_X_VehicleRestrict");
    MageStudios.Param.VRBoatRestrict = String(parameters["Boat Restrict"]);
    MageStudios.Param.VRBoatRestrict =
      MageStudios.Param.VRBoatRestrict.split(" ");
    for (var i = 0; i < MageStudios.Param.VRBoatRestrict.length; ++i) {
      MageStudios.Param.VRBoatRestrict[i] = Number(
        MageStudios.Param.VRBoatRestrict[i]
      );
    }
    MageStudios.Param.VRBoatAllow = String(parameters["Boat Allow"]);
    MageStudios.Param.VRBoatAllow = MageStudios.Param.VRBoatAllow.split(" ");
    for (var i = 0; i < MageStudios.Param.VRBoatAllow.length; ++i) {
      MageStudios.Param.VRBoatAllow[i] = Number(
        MageStudios.Param.VRBoatAllow[i]
      );
    }
    MageStudios.Param.VRBoatLand = String(parameters["Boat Land"]);
    MageStudios.Param.VRBoatLand = MageStudios.Param.VRBoatLand.split(" ");
    for (var i = 0; i < MageStudios.Param.VRBoatLand.length; ++i) {
      MageStudios.Param.VRBoatLand[i] = Number(MageStudios.Param.VRBoatLand[i]);
    }
    MageStudios.Param.VRShipRestrict = String(parameters["Ship Restrict"]);
    MageStudios.Param.VRShipRestrict =
      MageStudios.Param.VRShipRestrict.split(" ");
    for (var i = 0; i < MageStudios.Param.VRShipRestrict.length; ++i) {
      MageStudios.Param.VRShipRestrict[i] = Number(
        MageStudios.Param.VRShipRestrict[i]
      );
    }
    MageStudios.Param.VRShipAllow = String(parameters["Ship Allow"]);
    MageStudios.Param.VRShipAllow = MageStudios.Param.VRShipAllow.split(" ");
    for (var i = 0; i < MageStudios.Param.VRShipAllow.length; ++i) {
      MageStudios.Param.VRShipAllow[i] = Number(
        MageStudios.Param.VRShipAllow[i]
      );
    }
    MageStudios.Param.VRShipLand = String(parameters["Ship Land"]);
    MageStudios.Param.VRShipLand = MageStudios.Param.VRShipLand.split(" ");
    for (var i = 0; i < MageStudios.Param.VRShipLand.length; ++i) {
      MageStudios.Param.VRShipLand[i] = Number(MageStudios.Param.VRShipLand[i]);
    }
    MageStudios.Param.VRAirRestrict = String(parameters["Airship Restrict"]);
    MageStudios.Param.VRAirRestrict =
      MageStudios.Param.VRAirRestrict.split(" ");
    for (var i = 0; i < MageStudios.Param.VRAirRestrict.length; ++i) {
      MageStudios.Param.VRAirRestrict[i] = Number(
        MageStudios.Param.VRAirRestrict[i]
      );
    }
    MageStudios.Param.VRAirAllow = String(parameters["Airship Allow"]);
    MageStudios.Param.VRAirAllow = MageStudios.Param.VRAirAllow.split(" ");
    for (var i = 0; i < MageStudios.Param.VRAirAllow.length; ++i) {
      MageStudios.Param.VRAirAllow[i] = Number(MageStudios.Param.VRAirAllow[i]);
    }
    MageStudios.Param.VRAirLand = String(parameters["Airship Land"]);
    MageStudios.Param.VRAirLand = MageStudios.Param.VRAirLand.split(" ");
    for (var i = 0; i < MageStudios.Param.VRAirLand.length; ++i) {
      MageStudios.Param.VRAirLand[i] = Number(MageStudios.Param.VRAirLand[i]);
    }
  };
  MageStudios.SetupParameters();

  DataManager.processVRNotetags = function () {
    if (!$dataMap) return;

    $dataMap.vehicleRestrictions = {
      boatRestrict: MageStudios.Param.VRBoatRestrict.slice(),
      shipRestrict: MageStudios.Param.VRShipRestrict.slice(),
      airshipRestrict: MageStudios.Param.VRAirRestrict.slice(),

      boatAllow: MageStudios.Param.VRBoatAllow.slice(),
      shipAllow: MageStudios.Param.VRShipAllow.slice(),
      airshipAllow: MageStudios.Param.VRAirAllow.slice(),

      boatLand: MageStudios.Param.VRBoatLand.slice(),
      shipLand: MageStudios.Param.VRShipLand.slice(),
      airshipLand: MageStudios.Param.VRAirLand.slice(),
    };

    var note1 = /<(.*)[ ](?:RESTRICT REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note2 = /<(.*)[ ](?:RESTRICT REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;
    var note3 = /<(.*)[ ](?:ALLOW REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note4 = /<(.*)[ ](?:ALLOW REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;
    var note5 = /<(.*)[ ](?:LAND REGION):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note6 = /<(.*)[ ](?:LAND REGION):[ ](\d+)[ ](?:TO)[ ](\d+)>/i;

    var notedata = $dataMap.note.split(/[\r\n]+/);

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(note1)) {
        var vehicle = String(RegExp.$1).toLowerCase();
        var key = vehicle + "Restrict";
        if ($dataMap.vehicleRestrictions[key]) {
          array = JSON.parse("[" + RegExp.$2.match(/\d+/g) + "]");
          $dataMap.vehicleRestrictions[key] =
            $dataMap.vehicleRestrictions[key].concat(array);
        }
      } else if (line.match(note2)) {
        var vehicle = String(RegExp.$1).toLowerCase();
        var key = vehicle + "Restrict";
        if ($dataMap.vehicleRestrictions[key]) {
          var range = MageStudios.Util.getRange(
            Number(RegExp.$2),
            Number(RegExp.$3)
          );
          $dataMap.vehicleRestrictions[key] =
            $dataMap.vehicleRestrictions[key].concat(range);
        }
      } else if (line.match(note3)) {
        var vehicle = String(RegExp.$1).toLowerCase();
        var key = vehicle + "Allow";
        if ($dataMap.vehicleRestrictions[key]) {
          array = JSON.parse("[" + RegExp.$2.match(/\d+/g) + "]");
          $dataMap.vehicleRestrictions[key] =
            $dataMap.vehicleRestrictions[key].concat(array);
        }
      } else if (line.match(note4)) {
        var vehicle = String(RegExp.$1).toLowerCase();
        var key = vehicle + "Allow";
        if ($dataMap.vehicleRestrictions[key]) {
          var range = MageStudios.Util.getRange(
            Number(RegExp.$2),
            Number(RegExp.$3)
          );
          $dataMap.vehicleRestrictions[key] =
            $dataMap.vehicleRestrictions[key].concat(range);
        }
      } else if (line.match(note5)) {
        var vehicle = String(RegExp.$1).toLowerCase();
        var key = vehicle + "Land";
        if ($dataMap.vehicleRestrictions[key]) {
          array = JSON.parse("[" + RegExp.$2.match(/\d+/g) + "]");
          $dataMap.vehicleRestrictions[key] =
            $dataMap.vehicleRestrictions[key].concat(array);
        }
      } else if (line.match(note6)) {
        var vehicle = String(RegExp.$1).toLowerCase();
        var key = vehicle + "Land";
        if ($dataMap.vehicleRestrictions[key]) {
          var range = MageStudios.Util.getRange(
            Number(RegExp.$2),
            Number(RegExp.$3)
          );
          $dataMap.vehicleRestrictions[key] =
            $dataMap.vehicleRestrictions[key].concat(range);
        }
      }
    }
  };

  MageStudios.VR.Game_Map_isBoatPassable = Game_Map.prototype.isBoatPassable;
  Game_Map.prototype.isBoatPassable = function (x, y) {
    if ($gamePlayer.isThrough()) return true;
    if (this.isPassableVehicleRegionForbid(x, y, "boat")) return false;
    if (this.isPassableVehicleRegionAllow(x, y, "boat")) return true;
    return MageStudios.VR.Game_Map_isBoatPassable.call(this, x, y);
  };

  MageStudios.VR.Game_Map_isShipPassable = Game_Map.prototype.isShipPassable;
  Game_Map.prototype.isShipPassable = function (x, y) {
    if ($gamePlayer.isThrough()) return true;
    if (this.isPassableVehicleRegionForbid(x, y, "ship")) return false;
    if (this.isPassableVehicleRegionAllow(x, y, "ship")) return true;
    return MageStudios.VR.Game_Map_isShipPassable.call(this, x, y);
  };

  Game_Map.prototype.isAirshipPassable = function (x, y) {
    if (this.isPassableVehicleRegionForbid(x, y, "airship")) return false;
    if (this.isPassableVehicleRegionAllow(x, y, "airship")) return true;
    if ($gamePlayer.isThrough()) return true;
    return true;
  };

  Game_Map.prototype.processVehicleRestrictionNotetags = function () {
    if ($dataMap.vehicleRestrictions === undefined) {
      DataManager.processVRNotetags();
    }
  };

  Game_Map.prototype.isPassableVehicleRegionForbid = function (x, y, vehicle) {
    var regionId = this.regionId(x, y);
    if (regionId === 0) return false;
    this.processVehicleRestrictionNotetags();
    var regions = [];
    switch (vehicle) {
      case "boat":
        regions = $dataMap.vehicleRestrictions.boatRestrict || regions;
        break;
      case "ship":
        regions = $dataMap.vehicleRestrictions.shipRestrict || regions;
        break;
      case "airship":
        regions = $dataMap.vehicleRestrictions.airshipRestrict || regions;
        break;
    }
    return regions.contains(regionId);
  };

  Game_Map.prototype.isPassableVehicleRegionAllow = function (x, y, vehicle) {
    var regionId = this.regionId(x, y);
    if (regionId === 0) return false;
    this.processVehicleRestrictionNotetags();
    var regions = [];
    switch (vehicle) {
      case "boat":
        regions = $dataMap.vehicleRestrictions.boatAllow || regions;
        break;
      case "ship":
        regions = $dataMap.vehicleRestrictions.shipAllow || regions;
        break;
      case "airship":
        regions = $dataMap.vehicleRestrictions.airshipAllow || regions;
        break;
    }
    return regions.contains(regionId);
  };

  Game_Map.prototype.isVehicleRegionLandSpecific = function (vehicle) {
    this.processVehicleRestrictionNotetags();
    var regions = [];
    switch (vehicle) {
      case "boat":
        regions = $dataMap.vehicleRestrictions.boatLand || regions;
        break;
      case "ship":
        regions = $dataMap.vehicleRestrictions.shipLand || regions;
        break;
      case "airship":
        regions = $dataMap.vehicleRestrictions.airshipLand || regions;
        break;
    }
    if (regions.length <= 0) return false;
    if (regions.length <= 1 && regions[0] === 0) return false;
    return true;
  };

  Game_Map.prototype.isVehicleRegionLandOk = function (regionId, vehicle) {
    this.processVehicleRestrictionNotetags();
    var regions = [];
    switch (vehicle) {
      case "boat":
        regions = $dataMap.vehicleRestrictions.boatLand || regions;
        break;
      case "ship":
        regions = $dataMap.vehicleRestrictions.shipLand || regions;
        break;
      case "airship":
        regions = $dataMap.vehicleRestrictions.airshipLand || regions;
        break;
    }
    return regions.contains(regionId);
  };

  MageStudios.VR.Game_CharacterBase_canPass =
    Game_CharacterBase.prototype.canPass;
  Game_CharacterBase.prototype.canPass = function (x, y, d) {
    if (this._vehicleType === "airship") {
      var x2 = $gameMap.roundXWithDirection(x, d);
      var y2 = $gameMap.roundYWithDirection(y, d);
      return $gameMap.isAirshipPassable(x2, y2);
    }
    return MageStudios.VR.Game_CharacterBase_canPass.call(this, x, y, d);
  };

  MageStudios.VR.Game_Vehicle_isMapPassable =
    Game_Vehicle.prototype.isMapPassable;
  Game_Vehicle.prototype.isMapPassable = function (x, y, d) {
    if (this.isAirship()) {
      var x2 = $gameMap.roundXWithDirection(x, d);
      var y2 = $gameMap.roundYWithDirection(y, d);
      return $gameMap.isAirshipPassable(x2, y2);
    } else {
      return MageStudios.VR.Game_Vehicle_isMapPassable.call(this, x, y, d);
    }
  };

  MageStudios.VR.Game_Vehicle_isLandOk = Game_Vehicle.prototype.isLandOk;
  Game_Vehicle.prototype.isLandOk = function (x, y, d) {
    var vehicle = this._type;
    if (this.isAirship()) {
      var regionId = $gameMap.regionId(x, y);
    } else {
      var regionId = $gamePlayer.getRegionId(x, y, d);
    }
    if ($gameMap.isVehicleRegionLandSpecific(vehicle)) {
      if (!$gameMap.isVehicleRegionLandOk(regionId, vehicle)) return false;
    }
    return MageStudios.VR.Game_Vehicle_isLandOk.call(this, x, y, d);
  };
}
