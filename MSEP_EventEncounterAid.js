var Imported = Imported || {};
Imported.MSEP_EventEncounter = true;

var MageStudios = MageStudios || {};
MageStudios.EEA = MageStudios.EEA || {};
MageStudios.EEA.version = 1.0;

/*:
 * @plugindesc This plugin helps make eventable encounters easier
 * and determine player position relative to the event.
 * @author Mage Studios Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * For those who have on-screen encounters, you may have discovered that making
 * touch encounters in RPG Maker MV to be rather difficult when it comes to
 * performing a sneak attack upon an event or such. This plugin makes the event
 * encounter checking process easier by providing six conditional script calls
 * for you to utilize when checking event vs player positions.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * You can place these notetags into the notebox at the top of an event's page.
 * These notetags will enable unique effects for event encounters.
 *
 * Event Notetag:
 *
 *   <Encounter Lock>
 *   <Encounter Direction Lock>
 *   - This will cause the event to not immediately face the player when
 *   approached making it possible for the game to check the direction each is
 *   facing.
 *
 *   <Follower Touch>
 *   <Follower Trigger>
 *   - This will allow the event to trigger if the event touches a follower and
 *   not just the main player.
 *
 * ============================================================================
 * Event - Conditional Branch - Script Calls
 * ============================================================================
 *
 * When using the Conditional Branch event, you can use these following in the
 * 'Script' check category:
 *
 * Script Calls
 *
 *   this.checkEventFacingPlayerFront()
 *   - Returns true if the event is facing the player's front.
 *
 *   this.checkEventFacingPlayerBack()
 *   - Returns true if the event is facing the player's back.
 *
 *   this.checkEventFacingPlayerSide()
 *   - Returns true if the event is facing the player's side.
 *
 *   this.checkPlayerFacingEventFront()
 *   - Returns true if the player is facing the event's front.
 *
 *   this.checkPlayerFacingEventBack()
 *   - Returns true if the player is facing the event's back.
 *
 *   this.checkPlayerFacingEventSide()
 *   - Returns true if the player is facing the event's side.
 *
 * Make sure these are spelled correctly. They are also case-sensitive. This
 * means that even if you were to misspell or put a single letter in the wrong
 * case, the effect will cease to work as this is code we're dealing with.
 */

DataManager.processEEANotetags1 = function (obj) {
  var notedata = obj.note.split(/[\r\n]+/);
  obj.encounterDirectionLock = false;
  obj.encounterFollowerTrigger = false;
  for (var i = 0; i < notedata.length; i++) {
    var line = notedata[i];
    if (line.match(/<(?:ENCOUNTER LOCK|ENCOUNTER DIRECTION LOCK)>/i)) {
      obj.encounterDirectionLock = true;
    }
    if (line.match(/<(?:FOLLOWER TRIGGER|FOLLOWER TOUCH)>/i)) {
      obj.encounterFollowerTrigger = true;
    }
  }
};

Game_CharacterBase.prototype.debugShowDirections = function (ev) {
  return;
  console.log(" This X: " + this.x + ",  This Y: " + this.y);
  console.log("Event X: " + ev.x + ", Event Y: " + ev.y);
};

Game_CharacterBase.prototype.isFacingTowards = function (ev) {
  switch (this.direction()) {
    case 1:
      return [8, 9, 6].contains(ev.direction());
      break;
    case 2:
      return [7, 8, 9].contains(ev.direction());
      break;
    case 3:
      return [4, 7, 8].contains(ev.direction());
      break;
    case 4:
      return [9, 6, 3].contains(ev.direction());
      break;
    case 6:
      return [7, 4, 1].contains(ev.direction());
      break;
    case 7:
      return [2, 3, 6].contains(ev.direction());
      break;
    case 8:
      return [1, 2, 3].contains(ev.direction());
      break;
    case 9:
      return [4, 1, 2].contains(ev.direction());
      break;
  }
  return false;
};

Game_CharacterBase.prototype.isFacingAway = function (ev) {
  switch (this.direction()) {
    case 1:
      return [4, 1, 2].contains(ev.direction());
      break;
    case 2:
      return [1, 2, 3].contains(ev.direction());
      break;
    case 3:
      return [2, 3, 6].contains(ev.direction());
      break;
    case 4:
      return [7, 4, 1].contains(ev.direction());
      break;
    case 6:
      return [9, 6, 3].contains(ev.direction());
      break;
    case 7:
      return [4, 7, 8].contains(ev.direction());
      break;
    case 8:
      return [7, 8, 9].contains(ev.direction());
      break;
    case 9:
      return [8, 9, 6].contains(ev.direction());
      break;
  }
  return false;
};

Game_CharacterBase.prototype.isFacingSideways = function (ev) {
  switch (this.direction()) {
    case 1:
      return [4, 7, 8, 2, 3, 6].contains(ev.direction());
      break;
    case 2:
      return [7, 4, 1, 9, 6, 3].contains(ev.direction());
      break;
    case 3:
      return [4, 1, 2, 8, 9, 6].contains(ev.direction());
      break;
    case 4:
      return [7, 8, 9, 1, 2, 3].contains(ev.direction());
      break;
    case 6:
      return [7, 8, 9, 1, 2, 3].contains(ev.direction());
      break;
    case 7:
      return [4, 1, 2, 8, 9, 6].contains(ev.direction());
      break;
    case 8:
      return [7, 4, 1, 9, 6, 3].contains(ev.direction());
      break;
    case 9:
      return [4, 7, 8, 2, 3, 6].contains(ev.direction());
      break;
  }
  return false;
};

Game_CharacterBase.prototype.isPositionFrontOf = function (ev) {
  this.debugShowDirections(ev);
  switch (this.direction()) {
    case 1:
      return ev.y > this.y;
      break;
    case 2:
      return ev.y > this.y;
      break;
    case 3:
      return ev.y > this.y;
      break;
    case 4:
      return ev.x < this.x;
      break;
    case 6:
      return ev.x > this.x;
      break;
    case 7:
      return ev.y < this.y;
      break;
    case 8:
      return ev.y < this.y;
      break;
    case 9:
      return ev.y < this.y;
      break;
  }
  return false;
};

Game_CharacterBase.prototype.isPositionBackOf = function (ev) {
  this.debugShowDirections(ev);
  switch (this.direction()) {
    case 1:
      return ev.y < this.y;
      break;
    case 2:
      return ev.y < this.y;
      break;
    case 3:
      return ev.y < this.y;
      break;
    case 4:
      return ev.x > this.x;
      break;
    case 6:
      return ev.x < this.x;
      break;
    case 7:
      return ev.y > this.y;
      break;
    case 8:
      return ev.y > this.y;
      break;
    case 9:
      return ev.y > this.y;
      break;
  }
  return false;
};

Game_CharacterBase.prototype.isPositionSideOf = function (ev) {
  this.debugShowDirections(ev);
  switch (this.direction()) {
    case 1:
      return (
        (this.x < ev.x && this.y > ev.y) || (this.x > ev.x && this.y < ev.y)
      );
      break;
    case 2:
      return this.x !== ev.x;
      break;
    case 3:
      return (
        (this.x > ev.x && this.y > ev.y) || (this.x < ev.x && this.y < ev.y)
      );
      break;
    case 4:
      return this.y !== ev.y;
      break;
    case 6:
      return this.y !== ev.y;
      break;
    case 7:
      return (
        (this.x > ev.x && this.y > ev.y) || (this.x < ev.x && this.y < ev.y)
      );
      break;
    case 8:
      return this.x !== ev.x;
      break;
    case 9:
      return (
        (this.x < ev.x && this.y > ev.y) || (this.x > ev.x && this.y < ev.y)
      );
      break;
  }
  return false;
};

MageStudios.EEA.Game_Event_start = Game_Event.prototype.start;
Game_Event.prototype.start = function () {
  if (this.isEncounterDirectionLocked()) {
    var list = this.list();
    if (list && list.length > 1) {
      this._starting = true;
      if (this.isTriggerIn([0, 1, 2])) this.encounterLock();
    }
  } else {
    MageStudios.EEA.Game_Event_start.call(this);
  }
};

Game_Event.prototype.encounterLock = function () {
  this._prelockDirection = this.direction();
  this._locked = true;
};

Game_Event.prototype.isEncounterDirectionLocked = function () {
  if (this.event().encounterDirectionLock === undefined) {
    DataManager.processEEANotetags1(this.event());
  }
  return this.event().encounterDirectionLock;
};

MageStudios.EEA.Game_Event_checkEventTriggerTouch =
  Game_Event.prototype.checkEventTriggerTouch;
Game_Event.prototype.checkEventTriggerTouch = function (x, y) {
  MageStudios.EEA.Game_Event_checkEventTriggerTouch.call(this, x, y);
  if ($gameMap.isEventRunning()) return;
  if (this._trigger !== 2) return;
  if (!this.isFollowerTriggerTouch()) return;
  if (this.isJumping()) return;
  if (!this.isNormalPriority()) return;
  var followers = $gamePlayer.followers().visibleFollowers();
  var length = followers.length;
  for (var i = 0; i < length; ++i) {
    var follower = followers[i];
    if (follower && follower.pos(x, y)) this.start();
  }
};

Game_Event.prototype.isFollowerTriggerTouch = function () {
  if (this.event().encounterFollowerTrigger === undefined) {
    DataManager.processEEANotetags1(this.event());
  }
  return this.event().encounterFollowerTrigger;
};

Game_Interpreter.prototype.checkEventFacingPlayerFront = function () {
  var ev = $gameMap.event(this.eventId());
  if (!ev) return false;
  var pl = $gamePlayer;
  return ev.isFacingTowards(pl) && pl.isPositionFrontOf(ev);
};

Game_Interpreter.prototype.checkEventFacingPlayerBack = function () {
  var ev = $gameMap.event(this.eventId());
  if (!ev) return false;
  var pl = $gamePlayer;
  return ev.isFacingAway(pl) && pl.isPositionBackOf(ev);
};

Game_Interpreter.prototype.checkEventFacingPlayerSide = function () {
  var ev = $gameMap.event(this.eventId());
  if (!ev) return false;
  var pl = $gamePlayer;
  return ev.isFacingSideways(pl) && pl.isPositionSideOf(ev);
};

Game_Interpreter.prototype.checkPlayerFacingEventFront = function () {
  var ev = $gameMap.event(this.eventId());
  if (!ev) return false;
  var pl = $gamePlayer;
  return pl.isFacingTowards(ev) && ev.isPositionFrontOf(pl);
};

Game_Interpreter.prototype.checkPlayerFacingEventBack = function () {
  var ev = $gameMap.event(this.eventId());
  if (!ev) return false;
  var pl = $gamePlayer;
  return pl.isFacingAway(ev) && ev.isPositionBackOf(pl);
};

Game_Interpreter.prototype.checkPlayerFacingEventSide = function () {
  var ev = $gameMap.event(this.eventId());
  if (!ev) return false;
  var pl = $gamePlayer;
  return pl.isFacingSideways(ev) && ev.isPositionSideOf(pl);
};
