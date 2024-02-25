//=============================================================================
// Mage Studios Engine Plugins - Footstep Sounds
// MSEP_FootstepSounds.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_FootstepSounds = true;

var MageStudios = MageStudios || {};
MageStudios.Footsteps = MageStudios.Footsteps || {};
MageStudios.Footsteps.version = 1.00;

//=============================================================================
 /*:
 * @plugindesc Set footstep sounds to play when the player and/or
 * events walk over specific tiles.
 * @author Mage Studios Engine Plugins + Chickie Collaboration
 *
 * @param ---Default---
 * @default
 *
 * @param Default Sound
 * @parent ---Default---
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc The default SE sound used for all tiles.
 * @default Move1
 *
 * @param Default Volume
 * @parent ---Default---
 * @desc Volume of the footsteps made by default.
 * Insert a number value.
 * @default 10
 *
 * @param Default Pitch
 * @parent ---Default---
 * @desc Pitch of the footsteps made by default.
 * Insert a number value.
 * @default 150
 *
 * @param ---Player Settings---
 * @default
 *
 * @param Player Enable
 * @parent ---Player Settings---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Play footstep sounds for the player character?
 * Disable - false     Enable - true
 * @default true
 *
 * @param Player Volume
 * @parent ---Player Settings---
 * @desc What volume rate to play the footsteps at for player?
 * Use a float value. 1.00 = 100%    0.50 = 50%
 * @default 1.00
 *
 * @param Player Pitch
 * @parent ---Player Settings---
 * @desc What pitch rate to play the footsteps at for player?
 * Use a float value. 1.00 = 100%    0.50 = 50%
 * @default 1.00
 *
 * @param ---Event Settings---
 * @default
 *
 * @param Event Enable
 * @parent ---Event Settings---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Play footstep sounds for the events?
 * Disable - false     Enable - true
 * @default true
 *
 * @param Event Volume
 * @parent ---Event Settings---
 * @desc What volume rate to play the footsteps at for events?
 * Use a float value. 1.00 = 100%    0.50 = 50%
 * @default 1.00
 *
 * @param Distance Volume
 * @parent ---Event Settings---
 * @desc Change the volume by this much per tile difference
 * from event to player. Use a float value.
 * @default -0.10
 *
 * @param Event Pitch
 * @parent ---Event Settings---
 * @desc What pitch rate to play the footsteps at for events?
 * Use a float value. 1.00 = 100%    0.50 = 50%
 * @default 1.00
 *
 * @param Distance Pitch
 * @parent ---Event Settings---
 * @desc Change the pitch by this much per tile difference
 * from event to player. Use a float value.
 * @default -0.00
 *
 * @param Distance Pan
 * @parent ---Event Settings---
 * @desc Change the pan by this much per tile difference
 * from event to player. Use an int value.
 * @default 10
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin gives your player and/or events footsteps when they walk onto
 * tiles. These footsteps made by players and/or events can have different
 * sounds based on regions, tilesets, and/or terrain tags. If footsteps are
 * enabled for events, they can have distance based volumes and pitches to
 * immerse the player further.
 *
 * This is a collaboration plugin by Chickie and Mage to ensure compatibility
 * with the Mage Studios Engine Plugins library.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * This plugin requires a bit of setup. Adjust the plugin parameters to set up
 * a default set of footsteps that are to be played when nothing else has been
 * set. These sound effects will be played when there are no region-specific
 * sound effects or terrain tag-specific sound effects.
 *
 * That said, if you go into your project's database and go to the Tilesets tab
 * you can set footsteps for each tileset. The tiles can play specific footstep
 * sounds based on their terrain tag ID. Look in the notetags section below for
 * the notetag setup on how to make a set of tiles play certain footsteps. The
 * footsteps made here have higher priority than the default sound effects and
 * if the player or event steps on a tile that has a footstep sound tied to a
 * terrain tag, that footstep sound will be played instead.
 *
 * Even higher on the priority level are the region-based footstep sounds. If
 * the player or an event steps on a tile that has a region-based footstep
 * sound, then that sound will be played regardless of the terrain tag setting
 * made for that specific tile. Look in the notetags section below for the
 * notetag setup on how to make a specific region ID play a footstep sound.
 *
 * To sum it up, from lowest to highest priority:
 *
 *   LOWEST  - Default Footstep Sound
 *             Terrain Tag Footstep Sound
 *   HIGHEST - Region-Based Footstep Sound
 *
 * If you wish to give a whole map a certain footsteps sound, use the notetag
 * to set a region-based footstep sound for region ID 0.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert the following notetags to add footsteps to your maps.
 *
 * Event Notetag:
 *
 *   <No Footsteps>
 *   - Insert this into the notebox of any event you wish to not make any
 *   footsteps when moving.
 *
 * Tileset Notetags:
 *
 *   <Terrain Tag x Footstep Sound: filename>
 *   <Terrain Tag x Footstep Sound: filename, volume>
 *   <Terrain Tag x Footstep Sound: filename, volume, pitch>
 *   - Replace 'x' with the terrain tag ID (from 1 to 7). If 0 is used, it will
 *   be ignored.  When inserting the filename, the filename must be case
 *   sensitive and must not include the extension. The 'volume' and 'pitch'
 *   variables must be integar values between 0 and 100 if they are used.
 *
 *   Examples:
 *
 *   <Terrain Tag 1 Footstep Sound: Move1>
 *   <Terrain Tag 2 Footstep Sound: Move2, 80>
 *   <Terrain Tag 3 Footstep Sound: Move3, 75, 150>
 *
 *   In the above examples, the tiles marked by terrain tags 1, 2, or 3 will
 *   play their respective sound effect when stepped on by the player or an
 *   event that can trigger footsteps.
 *
 * Map Notetags:
 *
 *   <Region x Footstep Sound: filename>
 *   <Region x Footstep Sound: filename, volume>
 *   <Region x Footstep Sound: filename, volume, pitch>
 *   - Replace 'x' with the region tag ID (from 1 to 255). If 0 is used, it
 *   will become the default footstep sound.  When inserting the filename, the
 *   filename must be case sensitive and must not include the extension. The
 *   'volume' and 'pitch' variables must be integar values between 0 and 100 if
 *   they are used.
 *
 *   Examples:
 *
 *   <Region 10 Footstep Sound: Move1>
 *   <Region 20 Footstep Sound: Move2, 80>
 *   <Region 30 Footstep Sound: Move3, 75, 150>
 *
 *   In the above examples, the tiles marked by regions 10, 20, or 30 will play
 *   their respective sound effect when stepped on by the player or an event
 *   that can trigger footsteps.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * If at any time you wish to enable/disable footstep sounds in your game, you
 * can use some plugin commands to do so.
 *
 * Plugin Commands:
 *
 *   EnableFootsteps
 *   - Turns on footstep sounds.
 *
 *   DisableFootsteps
 *   - Turns off footstep sounds.
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MSEP_FootstepSounds');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.Footsteps = {
  defaultSound:   String(MageStudios.Parameters['Default Sound']),
  defaultVolume:  Number(MageStudios.Parameters['Default Volume']),
  defaultPitch:   Number(MageStudios.Parameters['Default Pitch']),

  PlayerEnable:   eval(String(MageStudios.Parameters['Player Enable'])),
  PlayerVolume:   parseFloat(MageStudios.Parameters['Player Volume']),
  PlayerPitch:    parseFloat(MageStudios.Parameters['Player Pitch']),

  EventEnable:    eval(String(MageStudios.Parameters['Event Enable'])),
  EventVolume:    parseFloat(MageStudios.Parameters['Event Volume']),
  DistanceVolume: parseFloat(MageStudios.Parameters['Distance Volume']),
  EventPitch:     parseFloat(MageStudios.Parameters['Event Pitch']),
  DistancePitch:  parseFloat(MageStudios.Parameters['Distance Pitch']),
  DistancePan:    parseInt(MageStudios.Parameters['Distance Pan'])
};

//=============================================================================
// DataManager
//=============================================================================

MageStudios.Footsteps.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!MageStudios.Footsteps.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!MageStudios._loaded_MSEP_FootstepSounds) {
    this.processFootstepNotetags($dataTilesets);
    MageStudios._loaded_MSEP_FootstepSounds = true;
  }
  return true;
};

DataManager.processFootstepNotetags = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.terrainTagFootstepSounds = {
      0: [
        MageStudios.Param.Footsteps.defaultSound, 
        MageStudios.Param.Footsteps.defaultVolume, 
        MageStudios.Param.Footsteps.defaultPitch
      ]
    };

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<TERRAIN[ ]TAG[ ](\d+)[ ]FOOTSTEP SOUND:[ ](.*)>/i)) {
        var tagId = parseInt(RegExp.$1).clamp(1, 7);
        var footstepData = String(RegExp.$2).split(',');
        footstepData[0] = footstepData[0].trim();
        footstepData[1] = footstepData[1] ||
          MageStudios.Param.Footsteps.defaultVolume;
        footstepData[1] = parseInt(footstepData[1]);
        footstepData[2] = footstepData[2] ||
          MageStudios.Param.Footsteps.defaultPitch;
        footstepData[2] = parseInt(footstepData[2]);
        obj.terrainTagFootstepSounds[tagId] = footstepData;
      }
    }
  }
};

DataManager.processMapFootstepNotetags = function() {
  if (!$dataMap) return;

  $dataMap.regionFootstepSounds = {
    0: [
      MageStudios.Param.Footsteps.defaultSound, 
      MageStudios.Param.Footsteps.defaultVolume, 
      MageStudios.Param.Footsteps.defaultPitch
    ]
  };

  if (!$dataMap.note) return;
  var notedata = $dataMap.note.split(/[\r\n]+/);
  for (var i = 0; i < notedata.length; i++) {
    var line = notedata[i];
    if (line.match(/<REGION[ ](\d+)[ ]FOOTSTEP SOUND:[ ](.*)>/i)) {
      var regionId = parseInt(RegExp.$1).clamp(0, 255);
      var footstepData = String(RegExp.$2).split(',');
      footstepData[0] = footstepData[0].trim();
      footstepData[1] = footstepData[1] || MageStudios.Param.Footsteps.defaultVolume;
      footstepData[1] = parseInt(footstepData[1]);
      footstepData[2] = footstepData[2] || MageStudios.Param.Footsteps.defaultPitch;
      footstepData[2] = parseInt(footstepData[2]);
      $dataMap.regionFootstepSounds[regionId] = footstepData;
    }
  }
};

//=============================================================================
// Game_System
//=============================================================================

MageStudios.Footsteps.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
  MageStudios.Footsteps.Game_System_initialize.call(this);
  this.initFootstepSettings();
};

Game_System.prototype.initFootstepSettings = function() {
  this._footstepsEnabled = true;
};

Game_System.prototype.canHearFootsteps = function() {
  if (this._footstepsEnabled === undefined) this.initFootstepSettings();
  return this._footstepsEnabled;
};

Game_System.prototype.setHearFootsteps = function(value) {
  if (this._footstepsEnabled === undefined) this.initFootstepSettings();
  this._footstepsEnabled = value;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

MageStudios.Footsteps.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  MageStudios.Footsteps.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'EnableFootsteps') {
    $gameSystem.setHearFootsteps(true);
  } else if (command === 'DisableFootsteps') {
    $gameSystem.setHearFootsteps(false);
  }
};

Game_Interpreter.prototype.argsToString = function(args) {
  var str = '';
  var length = args.length;
  for (var i = 0; i < length; ++i) {
    str += args[i] + ' ';
  }
  return str.trim();
};

//=============================================================================
// Game_Map
//=============================================================================

MageStudios.FootstepsGame_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
  if ($dataMap) DataManager.processMapFootstepNotetags();
  MageStudios.FootstepsGame_Map_setup.call(this, mapId);
};

//=============================================================================
// Game_CharacterBase
//=============================================================================

MageStudios.Footsteps.Game_CharacterBase_increaseSteps =
  Game_CharacterBase.prototype.increaseSteps;
Game_CharacterBase.prototype.increaseSteps = function() {
  MageStudios.Footsteps.Game_CharacterBase_increaseSteps.call(this);
  if (this !== $gamePlayer) {
    this.processFootstepSound();
  }
};

Game_CharacterBase.prototype.canPlayFootsteps = function() {
  if (!$gameSystem.canHearFootsteps()) return false;
  if (this._canPlayFootsteps !== undefined) return this._canPlayFootsteps;
  this._canPlayFootsteps = MageStudios.Param.Footsteps.EventEnable;
  return this._canPlayFootsteps;
};

Game_CharacterBase.prototype.processFootstepSound = function() {
  if (this.canPlayFootsteps() && $gameSystem.canHearFootsteps()) {
    var player = $gamePlayer;
    var distance = $gameMap.distance(this.x, this.y, player.x, player.y);
    var volume = MageStudios.Param.Footsteps.EventVolume || 0;
    volume += distance * MageStudios.Param.Footsteps.DistanceVolume;
    var pitch = MageStudios.Param.Footsteps.EventPitch || 0;
    pitch += distance * MageStudios.Param.Footsteps.DistancePitch;
    var pan = 0;
    pan -= $gameMap.deltaX(this.x, player.x);
    this.playFootstepSound(volume, pitch, pan);
  };
};

Game_CharacterBase.prototype.playFootstepSound = function(volume, pitch, pan) {
  if (volume <= 0) return;
  if (pitch <= 0) return;
  if (!$dataMap) return;
  if (!$dataMap.regionFootstepSounds) DataManager.processMapFootstepNotetags();
  var x = this.x;
  if (this.x === 6) {
    x += 1;
  } else if (this.x === 4) {
    x -= 1;
  }
  var y = this.y;
  if (this.y === 2) {
    y += 1;
  } else if (this.y === 8) {
    y -= 1;
  }
  var regionId = $gameMap.regionId(x, y)
  var terrainTag = $gameMap.terrainTag(x, y);
  if (regionId > 0) {
    var footstepData = $dataMap.regionFootstepSounds[regionId];
  }
  if (!footstepData && terrainTag > 0) {
    var footstepData = $gameMap.tileset().terrainTagFootstepSounds[terrainTag];
  }
  if (!footstepData) footstepData = $dataMap.regionFootstepSounds[0];
  var se = {
    name:   footstepData[0],
    volume: footstepData[1] * volume,
    pitch:  footstepData[2] * pitch,
    pan:    pan.clamp(-100, 100)
  };
  AudioManager.playSe(se);
};

//=============================================================================
// Game_Player
//=============================================================================

MageStudios.Footsteps.Game_Player_increaseSteps =
  Game_Player.prototype.increaseSteps;
Game_Player.prototype.increaseSteps = function() {
  MageStudios.Footsteps.Game_Player_increaseSteps.call(this);
  this.processFootstepSound();
};

Game_Player.prototype.canPlayFootsteps = function() {
  if (!$gameSystem.canHearFootsteps()) return false;
  if (!this.isNormal()) return false;
  return MageStudios.Param.Footsteps.PlayerEnable;
};

Game_Player.prototype.processFootstepSound = function() {
  if (this.canPlayFootsteps()) {
    var volume = MageStudios.Param.Footsteps.PlayerVolume || 0;
    var pitch = MageStudios.Param.Footsteps.PlayerPitch || 0;
    var pan = 0;
    this.playFootstepSound(volume, pitch, pan);
  };
};

//=============================================================================
// Game_Event
//=============================================================================

Game_Event.prototype.canPlayFootsteps = function() {
  if (!$gameSystem.canHearFootsteps()) return false;
  if (this._canPlayFootsteps !== undefined) return this._canPlayFootsteps;
  this._canPlayFootsteps = MageStudios.Param.Footsteps.EventEnable;
  var note = this.event().note;
  if (note.match(/<NO FOOTSTEPS>/i)) this._canPlayFootsteps = false;
  return this._canPlayFootsteps;
};

//=============================================================================
// Game_Follower
//=============================================================================

Game_Follower.prototype.canPlayFootsteps = function() {
  if (!this.isVisible()) return false;
  return Game_Character.prototype.canPlayFootsteps.call(this);
};

//=============================================================================
// End of File
//=============================================================================