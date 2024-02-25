var Imported = Imported || {};
Imported.MSEP_BaseTroopEvents = true;

var MageStudios = MageStudios || {};
MageStudios.BTE = MageStudios.BTE || {};
MageStudios.BTE.version = 1.0;

/*:
 * @plugindesc Enabling this plugin will cause all troops to have
 * events occur in every fight.
 * @author Mage Studios Engine Plugins
 *
 * @param Base Troop ID
 * @type troop
 * @desc Change this value to the Troop ID you want all of the recurring
 * troop events to draw from.
 * @default 1
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * For all the eventers out there who love to customize their battles through
 * custom event pages, you can now save yourself some time by drawing all the
 * event pages from a base troop event to occur in every fight. All of the
 * events will be present in every single battle.
 */

MageStudios.Parameters = PluginManager.parameters("MSEP_BaseTroopEvents");
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.BaseTroopID = Number(MageStudios.Parameters["Base Troop ID"]);

MageStudios.BTE.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function () {
  if (!MageStudios.BTE.DataManager_isDatabaseLoaded.call(this)) return false;
  this.processBTEPages();
  return true;
};

DataManager.processBTEPages = function () {
  for (var n = 1; n < $dataTroops.length; n++) {
    var base_troop = $dataTroops[MageStudios.Param.BaseTroopID];
    var troop = $dataTroops[n];
    if (
      n !== MageStudios.Param.BaseTroopID &&
      MageStudios.Param.BaseTroopID > 0
    ) {
      if (troop._baseTroopEventsMade) continue;
      MageStudios.Util.extend(troop.pages, base_troop.pages);
      troop._baseTroopEventsMade = true;
    }
  }
};

MageStudios.Util = MageStudios.Util || {};

MageStudios.Util.extend = function (mainArray, otherArray) {
  otherArray.forEach(function (i) {
    mainArray.push(i);
  }, this);
};
