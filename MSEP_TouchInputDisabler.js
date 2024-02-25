//=============================================================================
// Mage Studios Engine Plugins - Touch Input Disabler
// MSEP_TouchInputDisabler.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_TouchInputDisabler = true;

var MageStudios = MageStudios || {};
MageStudios.TID = MageStudios.TID || {};
MageStudios.TID.version = 1.00;

//=============================================================================
 /*:
 * @plugindesc v1.00 Sometimes, we just want to disable mouse and touch input
 * for our games.
 * @author Mage Studios Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Sometimes, we just want to disable the mouse and touch controls for our
 * games. This small plugin lets you control just which parts of the mouse and
 * touch controls you want to disable out of everything available.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * Everything related to the mouse/touch input is disabled by the default
 * plugin parameters. Change the settings to fit your game. If a setting is
 * on/true, then the mouse/touch input for that setting will be enabled.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.00:
 * - Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @param ---Mouse---
 * @default
 *
 * @param Press Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Pressing.
 * @default false
 *
 * @param Trigger Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Triggering.
 * @default false
 *
 * @param Repeat Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Repeating.
 * @default false
 *
 * @param Long Press Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Long Pressing.
 * @default false
 *
 * @param Cancel Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Cancel.
 * @default false
 *
 * @param Move Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Moving.
 * @default false
 *
 * @param Release Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Releasing.
 * @default false
 *
 * @param Wheel Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for the Scroll Wheel.
 * @default false
 *
 * @param Map Move Check
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow Touch Input checks for Map Movement. If enabled,
 * requires Press and Trigger checks to be true.
 * @default false
 *
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MEP_TouchInputDisabler');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.InputDisabler = {
  Press: eval(String(MageStudios.Parameters['Press Check'])),
  Trigger: eval(String(MageStudios.Parameters['Trigger Check'])),
  Repeat: eval(String(MageStudios.Parameters['Repeat Check'])),
  LongPress: eval(String(MageStudios.Parameters['Long Press Check'])),
  Cancel: eval(String(MageStudios.Parameters['Cancel Check'])),
  Move: eval(String(MageStudios.Parameters['Move Check'])),
  Release: eval(String(MageStudios.Parameters['Release Check'])),
  Wheel: eval(String(MageStudios.Parameters['Wheel Check'])),
  MapMove: eval(String(MageStudios.Parameters['Map Move Check'])),
}

//=============================================================================
// TouchInput
//=============================================================================

MageStudios.TID.TouchInput_isPressed = TouchInput.isPressed;
TouchInput.isPressed = function() {
  if (!MageStudios.Param.InputDisabler.Press) return false;
  return MageStudios.TID.TouchInput_isPressed.call(this);
};

MageStudios.TID.TouchInput_isTriggered = TouchInput.isTriggered;
TouchInput.isTriggered = function() {
  if (!MageStudios.Param.InputDisabler.Trigger) return false;
  return MageStudios.TID.TouchInput_isTriggered.call(this);
};

MageStudios.TID.TouchInput_isRepeated = TouchInput.isRepeated;
TouchInput.isRepeated = function() {
  if (!MageStudios.Param.InputDisabler.Repeat) return false;
  return MageStudios.TID.TouchInput_isRepeated.call(this);
};

MageStudios.TID.TouchInput_isLongPressed = TouchInput.isLongPressed;
TouchInput.isLongPressed = function() {
  if (!MageStudios.Param.InputDisabler.LongPress) return false;
  return MageStudios.TID.TouchInput_isLongPressed.call(this);
};

MageStudios.TID.TouchInput_isCancelled = TouchInput.isCancelled;
TouchInput.isCancelled = function() {
  if (!MageStudios.Param.InputDisabler.Cancel) return false;
  return MageStudios.TID.TouchInput_isCancelled.call(this);
};

MageStudios.TID.TouchInput_isMoved = TouchInput.isMoved;
TouchInput.isMoved = function() {
  if (!MageStudios.Param.InputDisabler.Move) return false;
  return MageStudios.TID.TouchInput_isMoved.call(this);
};

MageStudios.TID.TouchInput_isReleased = TouchInput.isReleased;
TouchInput.isReleased = function() {
  if (!MageStudios.Param.InputDisabler.Release) return false;
  return MageStudios.TID.TouchInput_isReleased.call(this);
};

Object.defineProperty(TouchInput, 'wheelX', {
  get: function() {
    if (!MageStudios.Param.InputDisabler.Wheel) return 0;
    return this._wheelX;
  },
  configurable: true
});

Object.defineProperty(TouchInput, 'wheelY', {
  get: function() {
    if (!MageStudios.Param.InputDisabler.Wheel) return 0;
    return this._wheelY;
  },
  configurable: true
});

//=============================================================================
// Scene_Map
//=============================================================================

MageStudios.TID.Scene_Map_processMapTouch =
  Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function() {
  if (!MageStudios.Param.InputDisabler.MapMove) return;
  MageStudios.TID.Scene_Map_processMapTouch.call(this);
};

//=============================================================================
// End of File
//=============================================================================