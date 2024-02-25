var Imported = Imported || {};
Imported.MSEP_ButtonCommonEvents = true;

var MageStudios = MageStudios || {};
MageStudios.BCE = MageStudios.BCE || {};
MageStudios.BCE.version = 1.0;

/*:
 * @plugindesc On the field map, call common events when certain
 * buttons are pressed on the keyboard.
 * @author Mage Studios Engine Plugins
 *
 * @param ---Top Row---
 * @default
 *
 * @param Key ~
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 1
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 2
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 3
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 4
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 5
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 6
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 7
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 8
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 9
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 0
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key -
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key =
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param ---2nd Row---
 * @default
 *
 * @param Key Q (PageUp)
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key W (PageDown)
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key E
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key R
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key T
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Y
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key U
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key I
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key O
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key P
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key [
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key ]
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key \
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param ---3rd Row---
 * @default
 *
 * @param Key A
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key S
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key D
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key F
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key G
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key H
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key J
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key K
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key L
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key ;
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key "
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Enter (OK)
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param ---4th Row---
 * @default
 *
 * @param Key Shift (Dash)
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Z (OK)
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key X (Cancel)
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key C
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key V
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key B
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key N
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key M
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key ,
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key .
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key /
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param ---Misc---
 * @default
 *
 * @param Key Space (OK)
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Left (Left)
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Up (Up)
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Right (Right)
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Down (Down)
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Insert (Cancel)
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Delete
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Home
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key End
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Page Up (PageUp)
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Page Down (PageDown)
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param ---NumPad---
 * @default
 *
 * @param Key NumPad 0 (Cancel)
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 1
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 2 (Down)
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 3
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 4 (Left)
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 5
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 6 (Right)
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 7
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 8 (Up)
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 9
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad .
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad +
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad -
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad *
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad /
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin enables you to bind common events to the individual buttons on
 * your keyboard. Instead of having the standard Z for OK and X for cancel,
 * you can make other keys work differently. With the exception of important
 * keys that shouldn't be altered, nearly full access is given across the span
 * of the keyboard.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * In the plugin's parameters, you will see a list of all the keys that you can
 * bind to a common event. If that number is something other than 0, then the
 * number associated with it will be the common event that will run. If you
 * assign it to a common event ID that does not exist, you will get an error so
 * please be wary of that.
 *
 * You may also notice that some of the keys have in parenthesis a word like
 * (OK) or (Cancel) next to them. What this means is that those keys already
 * have a function assigned to them by the game. If you assign a common event
 * to these keys, the native function of the key will be removed in favor of
 * the common event you've assigned.
 *
 * Here is a list of the keys that already have a common assigned:
 *
 * Key - What they're assigned to
 *   - Q         - Assigned to PageUp
 *   - W         - Assigned to PageDown
 *   - Shift     - Assigned to Dash
 *   - Z         - Assigned to OK
 *   - X         - Assigned to Cancel
 *   - Space     - Assigned to OK
 *   - Left      - Assigned to moving left
 *   - Up        - Assigned to moving up
 *   - Right     - Assigned to moving right
 *   - Down      - Assigned to moving down
 *   - Insert    - Assigned to Cancel
 *   - Page Up   - Assigned to PageUp
 *   - Page Down - Assigned to PageDown
 *   - Numpad 0  - Assigned to Cancel
 *   - Numpad 2  - Assigned to moving down
 *   - Numpad 4  - Assigned to moving left
 *   - Numpad 6  - Assigned to moving right
 *   - Numpad 8  - Assigned to moving up
 *
 * Once again, if you assign common events to these keys, the common event will
 * removing the binding the key had natively. However, this will only apply
 * while the player is in the field map. Being inside of a menu or battle
 * system will restore the previously native functions.
 *
 * ============================================================================
 * Compatibility Issues
 * ============================================================================
 *
 * This plugin will most likely have compatibility issues with anything that
 * alters keystrokes or makes use of them through a different manner.
 *
 * This will include the KeyboardConfig.js that was provided for the RPG Maker
 * MV plugin pack made by Mage Studios Engine Plugins. A revision of this plugin
 * KeyboardConfig.js is made on MageStudios.moe for you to pick up! Make sure you
 * have MSEP_KeyboardConfig.js version 1.01 in order for this to be compatible
 * with it. This plugin must be placed above MSEP_KeyboardConfig.js for the
 * two plugins to work together.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * For those who would like for a way to toggle back and forth between the
 * bound common events and the default buttons, use these plugin commands.
 *
 * Plugin Commands
 *
 *   RevertButton Ok
 *   RevertButton Cancel
 *   RevertButton Dash
 *   RevertButton PageUp
 *   RevertButton PageDown
 *   RevertButton Left
 *   RevertButton Up
 *   RevertButton Right
 *   RevertButton Down
 *   RevertButton All
 *   - Reverts all keys bound to any of the original functions back to their
 *   original buttons and unbinds the common events bound to them. If the "All"
 *   function is reverted, then all affected buttons will revert back to their
 *   original functions.
 *
 *   SwitchButton Ok
 *   SwitchButton Cancel
 *   SwitchButton Dash
 *   SwitchButton PageUp
 *   SwitchButton PageDown
 *   SwitchButton Left
 *   SwitchButton Up
 *   SwitchButton Right
 *   SwitchButton Down
 *   SwitchButton All
 *   - Switches all keys with original functions to use the common event binds
 *   instead of their original versions. If the "All" function is switched,
 *   then all affected buttons will switch to common event bindings if there
 *   are any.
 *
 *   TriggerButton Ok
 *   TriggerButton Cancel
 *   TriggerButton Dash
 *   TriggerButton PageUp
 *   TriggerButton PageDown
 *   TriggerButton Left
 *   TriggerButton Up
 *   TriggerButton Right
 *   TriggerButton Down
 *   - This will cause the game to simulate triggering the button command of
 *   one of those original functions even if there is a common event bound to
 *   all of the keys of that original function.
 *
 */

MageStudios.Parameters = PluginManager.parameters("MSEP_ButtonCommonEvents");
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.BCEList = {
  tilde: Number(MageStudios.Parameters["Key ~"]),
  1: Number(MageStudios.Parameters["Key 1"]),
  2: Number(MageStudios.Parameters["Key 2"]),
  3: Number(MageStudios.Parameters["Key 3"]),
  4: Number(MageStudios.Parameters["Key 4"]),
  5: Number(MageStudios.Parameters["Key 5"]),
  6: Number(MageStudios.Parameters["Key 6"]),
  7: Number(MageStudios.Parameters["Key 7"]),
  8: Number(MageStudios.Parameters["Key 8"]),
  9: Number(MageStudios.Parameters["Key 9"]),
  0: Number(MageStudios.Parameters["Key 0"]),
  minus: Number(MageStudios.Parameters["Key -"]),
  equal: Number(MageStudios.Parameters["Key ="]),

  q: Number(MageStudios.Parameters["Key Q (PageUp)"]),
  w: Number(MageStudios.Parameters["Key W (PageDown)"]),
  e: Number(MageStudios.Parameters["Key E"]),
  r: Number(MageStudios.Parameters["Key R"]),
  t: Number(MageStudios.Parameters["Key T"]),
  y: Number(MageStudios.Parameters["Key Y"]),
  u: Number(MageStudios.Parameters["Key U"]),
  i: Number(MageStudios.Parameters["Key I"]),
  o: Number(MageStudios.Parameters["Key O"]),
  p: Number(MageStudios.Parameters["Key P"]),
  foreBrack: Number(MageStudios.Parameters["Key ["]),
  backBrack: Number(MageStudios.Parameters["Key ]"]),
  backSlash: Number(MageStudios.Parameters["Key \\"]),

  a: Number(MageStudios.Parameters["Key A"]),
  s: Number(MageStudios.Parameters["Key S"]),
  d: Number(MageStudios.Parameters["Key D"]),
  f: Number(MageStudios.Parameters["Key F"]),
  g: Number(MageStudios.Parameters["Key G"]),
  h: Number(MageStudios.Parameters["Key H"]),
  j: Number(MageStudios.Parameters["Key J"]),
  k: Number(MageStudios.Parameters["Key K"]),
  l: Number(MageStudios.Parameters["Key L"]),
  semicolon: Number(MageStudios.Parameters["Key ;"]),
  quote: Number(MageStudios.Parameters['Key "']),
  enter: Number(MageStudios.Parameters["Key Enter (OK)"]),

  keyShift: Number(MageStudios.Parameters["Key Shift (Dash)"]),
  z: Number(MageStudios.Parameters["Key Z (OK)"]),
  x: Number(MageStudios.Parameters["Key X (Cancel)"]),
  c: Number(MageStudios.Parameters["Key C"]),
  v: Number(MageStudios.Parameters["Key V"]),
  b: Number(MageStudios.Parameters["Key B"]),
  n: Number(MageStudios.Parameters["Key N"]),
  m: Number(MageStudios.Parameters["Key M"]),
  comma: Number(MageStudios.Parameters["Key ,"]),
  period: Number(MageStudios.Parameters["Key ."]),
  foreSlash: Number(MageStudios.Parameters["Key /"]),

  space: Number(MageStudios.Parameters["Key Space (OK)"]),
  dirLeft: Number(MageStudios.Parameters["Key Left (Left)"]),
  dirUp: Number(MageStudios.Parameters["Key Up (Up)"]),
  dirRight: Number(MageStudios.Parameters["Key Right (Right)"]),
  dirDown: Number(MageStudios.Parameters["Key Down (Down)"]),
  ins: Number(MageStudios.Parameters["Key Insert (Cancel)"]),
  del: Number(MageStudios.Parameters["Key Delete"]),
  home: Number(MageStudios.Parameters["Key Home"]),
  end: Number(MageStudios.Parameters["Key End"]),
  pageUp: Number(MageStudios.Parameters["Key Page Up (PageUp)"]),
  pageDown: Number(MageStudios.Parameters["Key Page Down (PageDown)"]),

  num0: Number(MageStudios.Parameters["Key NumPad 0 (Cancel)"]),
  num1: Number(MageStudios.Parameters["Key NumPad 1"]),
  num2: Number(MageStudios.Parameters["Key NumPad 2 (Down)"]),
  num3: Number(MageStudios.Parameters["Key NumPad 3"]),
  num4: Number(MageStudios.Parameters["Key NumPad 4 (Left)"]),
  num5: Number(MageStudios.Parameters["Key NumPad 5"]),
  num6: Number(MageStudios.Parameters["Key NumPad 6 (Right)"]),
  num7: Number(MageStudios.Parameters["Key NumPad 7"]),
  num8: Number(MageStudios.Parameters["Key NumPad 8 (Up)"]),
  num9: Number(MageStudios.Parameters["Key NumPad 9"]),
  numPeriod: Number(MageStudios.Parameters["Key NumPad ."]),
  numPlus: Number(MageStudios.Parameters["Key NumPad +"]),
  numMinus: Number(MageStudios.Parameters["Key NumPad -"]),
  numTimes: Number(MageStudios.Parameters["Key NumPad *"]),
  numDivide: Number(MageStudios.Parameters["Key NumPad /"]),
};
MageStudios.Param.Variables = String(MageStudios.Parameters["Variables"]);

if (MageStudios.Param.BCEList["tilde"] !== 0) Input.keyMapper[192] = "tilde";
if (MageStudios.Param.BCEList["1"] !== 0) Input.keyMapper[49] = "1";
if (MageStudios.Param.BCEList["2"] !== 0) Input.keyMapper[50] = "2";
if (MageStudios.Param.BCEList["3"] !== 0) Input.keyMapper[51] = "3";
if (MageStudios.Param.BCEList["4"] !== 0) Input.keyMapper[52] = "4";
if (MageStudios.Param.BCEList["5"] !== 0) Input.keyMapper[53] = "5";
if (MageStudios.Param.BCEList["6"] !== 0) Input.keyMapper[54] = "6";
if (MageStudios.Param.BCEList["7"] !== 0) Input.keyMapper[55] = "7";
if (MageStudios.Param.BCEList["8"] !== 0) Input.keyMapper[56] = "8";
if (MageStudios.Param.BCEList["9"] !== 0) Input.keyMapper[57] = "9";
if (MageStudios.Param.BCEList["0"] !== 0) Input.keyMapper[48] = "0";
if (MageStudios.Param.BCEList["minus"] !== 0) Input.keyMapper[189] = "minus";
if (MageStudios.Param.BCEList["equal"] !== 0) Input.keyMapper[187] = "equal";

if (MageStudios.Param.BCEList["q"] !== 0) Input.keyMapper[81] = "q";
if (MageStudios.Param.BCEList["w"] !== 0) Input.keyMapper[87] = "w";
if (MageStudios.Param.BCEList["e"] !== 0) Input.keyMapper[69] = "e";
if (MageStudios.Param.BCEList["r"] !== 0) Input.keyMapper[82] = "r";
if (MageStudios.Param.BCEList["t"] !== 0) Input.keyMapper[84] = "t";
if (MageStudios.Param.BCEList["y"] !== 0) Input.keyMapper[89] = "y";
if (MageStudios.Param.BCEList["u"] !== 0) Input.keyMapper[85] = "u";
if (MageStudios.Param.BCEList["i"] !== 0) Input.keyMapper[73] = "i";
if (MageStudios.Param.BCEList["o"] !== 0) Input.keyMapper[79] = "o";
if (MageStudios.Param.BCEList["p"] !== 0) Input.keyMapper[80] = "p";
if (MageStudios.Param.BCEList["foreBrack"] !== 0)
  Input.keyMapper[219] = "foreBrack";
if (MageStudios.Param.BCEList["backBrack"] !== 0)
  Input.keyMapper[221] = "backBrack";
if (MageStudios.Param.BCEList["backSlash"] !== 0)
  Input.keyMapper[220] = "backSlash";

if (MageStudios.Param.BCEList["a"] !== 0) Input.keyMapper[65] = "a";
if (MageStudios.Param.BCEList["s"] !== 0) Input.keyMapper[83] = "s";
if (MageStudios.Param.BCEList["d"] !== 0) Input.keyMapper[68] = "d";
if (MageStudios.Param.BCEList["f"] !== 0) Input.keyMapper[70] = "f";
if (MageStudios.Param.BCEList["g"] !== 0) Input.keyMapper[71] = "g";
if (MageStudios.Param.BCEList["h"] !== 0) Input.keyMapper[72] = "h";
if (MageStudios.Param.BCEList["j"] !== 0) Input.keyMapper[74] = "j";
if (MageStudios.Param.BCEList["k"] !== 0) Input.keyMapper[75] = "k";
if (MageStudios.Param.BCEList["l"] !== 0) Input.keyMapper[76] = "l";
if (MageStudios.Param.BCEList["semicolon"] !== 0)
  Input.keyMapper[186] = "semicolon";
if (MageStudios.Param.BCEList["quote"] !== 0) Input.keyMapper[222] = "quote";
if (MageStudios.Param.BCEList["enter"] !== 0) Input.keyMapper[13] = "enter";

if (MageStudios.Param.BCEList["keyShift"] !== 0)
  Input.keyMapper[16] = "keyShift";
if (MageStudios.Param.BCEList["z"] !== 0) Input.keyMapper[90] = "z";
if (MageStudios.Param.BCEList["x"] !== 0) Input.keyMapper[88] = "x";
if (MageStudios.Param.BCEList["c"] !== 0) Input.keyMapper[67] = "c";
if (MageStudios.Param.BCEList["v"] !== 0) Input.keyMapper[86] = "v";
if (MageStudios.Param.BCEList["b"] !== 0) Input.keyMapper[66] = "b";
if (MageStudios.Param.BCEList["n"] !== 0) Input.keyMapper[78] = "n";
if (MageStudios.Param.BCEList["m"] !== 0) Input.keyMapper[77] = "m";
if (MageStudios.Param.BCEList["comma"] !== 0) Input.keyMapper[188] = "comma";
if (MageStudios.Param.BCEList["period"] !== 0) Input.keyMapper[190] = "period";
if (MageStudios.Param.BCEList["foreSlash"] !== 0)
  Input.keyMapper[191] = "foreSlash";

if (MageStudios.Param.BCEList["space"] !== 0) Input.keyMapper[32] = "space";
if (MageStudios.Param.BCEList["dirLeft"] !== 0) Input.keyMapper[37] = "dirLeft";
if (MageStudios.Param.BCEList["dirUp"] !== 0) Input.keyMapper[38] = "dirUp";
if (MageStudios.Param.BCEList["dirRight"] !== 0)
  Input.keyMapper[39] = "dirRight";
if (MageStudios.Param.BCEList["dirDown"] !== 0) Input.keyMapper[40] = "dirDown";
if (MageStudios.Param.BCEList["ins"] !== 0) Input.keyMapper[45] = "ins";
if (MageStudios.Param.BCEList["del"] !== 0) Input.keyMapper[46] = "del";
if (MageStudios.Param.BCEList["home"] !== 0) Input.keyMapper[36] = "home";
if (MageStudios.Param.BCEList["end"] !== 0) Input.keyMapper[35] = "end";
if (MageStudios.Param.BCEList["pageUp"] !== 0) Input.keyMapper[33] = "pageUp";
if (MageStudios.Param.BCEList["pageDown"] !== 0)
  Input.keyMapper[34] = "pageDown";

if (MageStudios.Param.BCEList["num0"] !== 0) Input.keyMapper[96] = "num0";
if (MageStudios.Param.BCEList["num1"] !== 0) Input.keyMapper[97] = "num1";
if (MageStudios.Param.BCEList["num2"] !== 0) Input.keyMapper[98] = "num2";
if (MageStudios.Param.BCEList["num3"] !== 0) Input.keyMapper[99] = "num3";
if (MageStudios.Param.BCEList["num4"] !== 0) Input.keyMapper[100] = "num4";
if (MageStudios.Param.BCEList["num5"] !== 0) Input.keyMapper[101] = "num5";
if (MageStudios.Param.BCEList["num6"] !== 0) Input.keyMapper[102] = "num6";
if (MageStudios.Param.BCEList["num7"] !== 0) Input.keyMapper[103] = "num7";
if (MageStudios.Param.BCEList["num8"] !== 0) Input.keyMapper[104] = "num8";
if (MageStudios.Param.BCEList["num9"] !== 0) Input.keyMapper[105] = "num9";
if (MageStudios.Param.BCEList["numPeriod"] !== 0)
  Input.keyMapper[110] = "numPeriod";
if (MageStudios.Param.BCEList["numPlus"] !== 0)
  Input.keyMapper[107] = "numPlus";
if (MageStudios.Param.BCEList["numMinus"] !== 0)
  Input.keyMapper[109] = "numMinus";
if (MageStudios.Param.BCEList["numTimes"] !== 0)
  Input.keyMapper[106] = "numTimes";
if (MageStudios.Param.BCEList["numDivide"] !== 0)
  Input.keyMapper[111] = "numDivide";

Input._revertButton = function (button) {
  if (button === "OK") {
    this.keyMapper[13] = "ok";
    this.keyMapper[32] = "ok";
    this.keyMapper[90] = "ok";
  } else if (button === "CANCEL") {
    this.keyMapper[45] = "escape";
    this.keyMapper[88] = "escape";
    this.keyMapper[96] = "escape";
  } else if (button === "DASH") {
    this.keyMapper[16] = "shift";
  } else if (button === "PAGEUP") {
    this.keyMapper[33] = "pageup";
    this.keyMapper[81] = "pageup";
  } else if (button === "PAGEDOWN") {
    this.keyMapper[34] = "pagedown";
    this.keyMapper[87] = "pagedown";
  } else if (button === "LEFT") {
    this.keyMapper[37] = "left";
    this.keyMapper[100] = "left";
  } else if (button === "UP") {
    this.keyMapper[38] = "up";
    this.keyMapper[104] = "up";
  } else if (button === "RIGHT") {
    this.keyMapper[39] = "right";
    this.keyMapper[102] = "right";
  } else if (button === "DOWN") {
    this.keyMapper[40] = "down";
    this.keyMapper[98] = "down";
  } else if (button === "ALL") {
    this.keyMapper[13] = "ok";
    this.keyMapper[32] = "ok";
    this.keyMapper[90] = "ok";
    this.keyMapper[45] = "escape";
    this.keyMapper[88] = "escape";
    this.keyMapper[96] = "escape";
    this.keyMapper[16] = "shift";
    this.keyMapper[33] = "pageup";
    this.keyMapper[81] = "pageup";
    this.keyMapper[34] = "pagedown";
    this.keyMapper[87] = "pagedown";
    this.keyMapper[37] = "left";
    this.keyMapper[100] = "left";
    this.keyMapper[38] = "up";
    this.keyMapper[104] = "up";
    this.keyMapper[39] = "right";
    this.keyMapper[102] = "right";
    this.keyMapper[40] = "down";
    this.keyMapper[98] = "down";
  }
};

Input._switchButton = function (button) {
  if (button === "OK") {
    if (MageStudios.Param.BCEList["enter"] !== 0) this.keyMapper[13] = "enter";
    if (MageStudios.Param.BCEList["space"] !== 0) this.keyMapper[32] = "space";
    if (MageStudios.Param.BCEList["z"] !== 0) this.keyMapper[90] = "z";
  } else if (button === "CANCEL") {
    if (MageStudios.Param.BCEList["ins"] !== 0) this.keyMapper[45] = "ins";
    if (MageStudios.Param.BCEList["x"] !== 0) this.keyMapper[88] = "x";
    if (MageStudios.Param.BCEList["num0"] !== 0) this.keyMapper[96] = "num0";
  } else if (button === "DASH") {
    if (MageStudios.Param.BCEList["keyShift"] !== 0)
      this.keyMapper[16] = "keyShift";
  } else if (button === "PAGEUP") {
    if (MageStudios.Param.BCEList["pageUp"] !== 0)
      this.keyMapper[33] = "pageUp";
    if (MageStudios.Param.BCEList["q"] !== 0) this.keyMapper[81] = "q";
  } else if (button === "PAGEDOWN") {
    if (MageStudios.Param.BCEList["pageDown"] !== 0)
      this.keyMapper[34] = "pageDown";
    if (MageStudios.Param.BCEList["w"] !== 0) this.keyMapper[87] = "w";
  } else if (button === "LEFT") {
    if (MageStudios.Param.BCEList["dirLeft"] !== 0)
      this.keyMapper[37] = "dirLeft";
    if (MageStudios.Param.BCEList["num4"] !== 0) this.keyMapper[100] = "num4";
  } else if (button === "UP") {
    if (MageStudios.Param.BCEList["dirUp"] !== 0) this.keyMapper[38] = "dirUp";
    if (MageStudios.Param.BCEList["num8"] !== 0) this.keyMapper[104] = "num8";
  } else if (button === "RIGHT") {
    if (MageStudios.Param.BCEList["dirRight"] !== 0)
      this.keyMapper[39] = "dirRight";
    if (MageStudios.Param.BCEList["num6"] !== 0) this.keyMapper[102] = "num6";
  } else if (button === "DOWN") {
    if (MageStudios.Param.BCEList["dirDown"] !== 0)
      this.keyMapper[40] = "dirDown";
    if (MageStudios.Param.BCEList["num2"] !== 0) this.keyMapper[98] = "num2";
  } else if (button === "ALL") {
    if (MageStudios.Param.BCEList["enter"] !== 0) this.keyMapper[13] = "enter";
    if (MageStudios.Param.BCEList["space"] !== 0) this.keyMapper[32] = "space";
    if (MageStudios.Param.BCEList["z"] !== 0) this.keyMapper[90] = "z";
    if (MageStudios.Param.BCEList["ins"] !== 0) this.keyMapper[45] = "ins";
    if (MageStudios.Param.BCEList["x"] !== 0) this.keyMapper[88] = "x";
    if (MageStudios.Param.BCEList["num0"] !== 0) this.keyMapper[96] = "num0";
    if (MageStudios.Param.BCEList["keyShift"] !== 0)
      this.keyMapper[16] = "keyShift";
    if (MageStudios.Param.BCEList["pageUp"] !== 0)
      this.keyMapper[33] = "pageUp";
    if (MageStudios.Param.BCEList["q"] !== 0) this.keyMapper[81] = "q";
    if (MageStudios.Param.BCEList["pageDown"] !== 0)
      this.keyMapper[34] = "pageDown";
    if (MageStudios.Param.BCEList["w"] !== 0) this.keyMapper[87] = "w";
    if (MageStudios.Param.BCEList["dirLeft"] !== 0)
      this.keyMapper[37] = "dirLeft";
    if (MageStudios.Param.BCEList["num4"] !== 0) this.keyMapper[100] = "num4";
    if (MageStudios.Param.BCEList["dirUp"] !== 0) this.keyMapper[38] = "dirUp";
    if (MageStudios.Param.BCEList["num8"] !== 0) this.keyMapper[104] = "num8";
    if (MageStudios.Param.BCEList["dirRight"] !== 0)
      this.keyMapper[39] = "dirRight";
    if (MageStudios.Param.BCEList["num6"] !== 0) this.keyMapper[102] = "num6";
    if (MageStudios.Param.BCEList["dirDown"] !== 0)
      this.keyMapper[40] = "dirDown";
    if (MageStudios.Param.BCEList["num2"] !== 0) this.keyMapper[98] = "num2";
  }
};

MageStudios.BCE.Scene_Base_start = Scene_Base.prototype.start;
Scene_Base.prototype.start = function () {
  MageStudios.BCE.Scene_Base_start.call(this);
  Input._revertButton("ALL");
};

MageStudios.BCE.Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function () {
  MageStudios.BCE.Scene_Map_start.call(this);
  Input._switchButton("ALL");
};

MageStudios.BCE.Scene_Map_updateScene = Scene_Map.prototype.updateScene;
Scene_Map.prototype.updateScene = function () {
  MageStudios.BCE.Scene_Map_updateScene.call(this);
  if (SceneManager.isSceneChanging()) return;
  if ($gameMap.isEventRunning()) return;
  this.updateButtonEvents();
};

Scene_Map.prototype.updateButtonEvents = function () {
  for (var key in MageStudios.Param.BCEList) {
    var eventId = MageStudios.Param.BCEList[key];
    if (eventId <= 0) continue;
    if (!Input.isRepeated(key)) continue;
    $gameTemp.reserveCommonEvent(eventId);
    break;
  }
};

MageStudios.BCE.Game_Interpreter_pluginCommand =
  Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
  MageStudios.BCE.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === "RevertButton") this.revertButton(args);
  if (command === "SwitchButton") this.switchButton(args);
  if (command === "TriggerButton") this.triggerButton(args);
};

Game_Interpreter.prototype.revertButton = function (args) {
  if (!args) return;
  var button = args[0].toUpperCase();
  Input._revertButton(button);
};

Game_Interpreter.prototype.switchButton = function (args) {
  if (!args) return;
  var button = args[0].toUpperCase();
  Input._switchButton(button);
};

Game_Interpreter.prototype.triggerButton = function (args) {
  if (!args) return;
  var button = args[0].toLowerCase();
  if (button === "cancel") button = "escape";
  if (button === "dash") button = "shift";
  Input._latestButton = button;
  Input._pressedTime = 0;
};
