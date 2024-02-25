//=============================================================================
// Mage Studios Engine Plugins - Slippery Tiles
// MSEP_SlipperyTiles.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_SlipperyTiles = true;

var MageStudios = MageStudios || {};
MageStudios.Slip = MageStudios.Slip || {};
MageStudios.Slip.version = 1.00

//=============================================================================
 /*:
 * @plugindesc You can create slippery tiles by marking them with
 * either a terrain tag or a region number.
 * @author Mage Studios Engine Plugins
 *
 * @param Slippery Frame
 * @type number
 * @min 0
 * @desc This is the frame used while characters are sliding.
 * @default 2
 *
 * @param Slippery Region
 * @type number
 * @min 0
 * @max 255
 * @desc Any tile marked with this region is a slippery tile
 * regardless of terrain tag. Use 0 to ignore.
 * @default 0
 *
 * @param Slippery Speed
 * @type number
 * @min 0
 * @desc Change the speed of the player while on a slippery tile to
 * this speed instead. Leave at 0 to keep current speed.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin enables you to set which tiles are slippery tiles through either
 * regions or notetags. To use regions, change the parameter setting to which
 * region ID you would like to associate with a slippery tile.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * You can use these notetags to add slippery tiles to your tilesets.
 *
 * Tileset Notetag:
 *   <Slippery Tile: x>
 *   <Slippery Tile: x, x, x>
 *   Tiles with terrain ID x will be designated as slippery tiles.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.05:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.04:
 * - Added 'Slippery Speed' plugin parameter to let you change the speed of
 * a character when its on a slippery tile.
 *
 * Version 1.03:
 * - Added anti-crash for switch checks from battle tests.
 *
 * Version 1.02:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.01:
 * - Added failsafe for people who aren't using tilesets 
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MSEP_SlipperyTiles');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.SlipRegion = Number(MageStudios.Parameters['Slippery Region']);
MageStudios.Param.SlipFrame = Number(MageStudios.Parameters['Slippery Frame']);
MageStudios.Param.SlipSpeed = Number(MageStudios.Parameters['Slippery Speed']);

//=============================================================================
// DataManager
//=============================================================================

MageStudios.Slip.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!MageStudios.Slip.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!MageStudios._loaded_MSEP_SlipperyTiles) {
	  this.processSlipNotetags($dataTilesets);
    MageStudios._loaded_MSEP_SlipperyTiles = true;
  }
	return true;
};

DataManager.processSlipNotetags = function(group) {
  var regexp1 = /<(?:SLIPPERY|slippery tile):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.slippery = [];

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(regexp1)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.slippery = obj.slippery.concat(array);
      }
		}
	}
};

//=============================================================================
// Game_Map
//=============================================================================

Game_Map.prototype.isSlippery = function(mx, my) {
    if ($gameParty.inBattle()) return false;
    if (this.isValid(mx, my) && this.tileset()) {
      if (MageStudios.Param.SlipRegion !== 0 &&
        this.regionId(mx, my) === MageStudios.Param.SlipRegion) return true;
      var tagId = this.terrainTag(mx, my);
      var slipTiles = this.tileset().slippery;
      return slipTiles.contains(tagId);
    }
    return false;
};

//=============================================================================
// Game_CharacterBase
//=============================================================================

Game_CharacterBase.prototype.onSlipperyFloor = function() {
    return $gameMap.isSlippery(this._x, this._y);
};

Game_CharacterBase.prototype.slipperyPose = function() {
    if (!this.onSlipperyFloor()) return false;
    if (this._stepAnime) return false;
    return true;
};

MageStudios.Slip.Game_CharacterBase_pattern = Game_CharacterBase.prototype.pattern;
Game_CharacterBase.prototype.pattern = function() {
    if (this.slipperyPose()) return MageStudios.Param.SlipFrame;
    return MageStudios.Slip.Game_CharacterBase_pattern.call(this);
};

MageStudios.Slip.Game_CharacterBase_realMoveSpeed =
  Game_CharacterBase.prototype.realMoveSpeed;
Game_CharacterBase.prototype.realMoveSpeed = function() {
    if (this.onSlipperyFloor() && MageStudios.Param.SlipSpeed > 0) {
      return MageStudios.Param.SlipSpeed;
    }
    return MageStudios.Slip.Game_CharacterBase_realMoveSpeed.call(this);
};

//=============================================================================
// Game_Player
//=============================================================================

MageStudios.Slip.Game_Player_isDashing = Game_Player.prototype.isDashing;
Game_Player.prototype.isDashing = function() {
    if (this.onSlipperyFloor()) return false;
    return MageStudios.Slip.Game_Player_isDashing.call(this);
};

MageStudios.Slip.Game_Player_update = Game_Player.prototype.update;
Game_Player.prototype.update = function(sceneActive) {
    MageStudios.Slip.Game_Player_update.call(this, sceneActive);
    this.updateSlippery();
};

Game_Player.prototype.updateSlippery = function() {
    if ($gameMap.isEventRunning()) return;
    if (this.onSlipperyFloor() && !this.isMoving()) {
      $gameTemp.clearDestination();
			this.moveStraight(this._direction);
    }
};

//=============================================================================
// End of File
//=============================================================================
