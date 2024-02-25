var Imported = Imported || {};
Imported.MSEP_X_ItemDiscard = true;

var MageStudios = MageStudios || {};
MageStudios.ItemDiscard = MageStudios.ItemDiscard || {};
MageStudios.ItemDiscard.version = 1.0;

/*:
 * @plugindesc (Requires MSEP_ItemCore.js) Allow the player to discard
 * items from their inventory.
 * @author Mage Studios Engine Plugins + Sylvester Collaboration
 *
 * @param ---General---
 * @default
 *
 * @param Discard Command
 * @parent ---General---
 * @desc The command text used for discarding items.
 * %1 - Item Name   %2 - Quantity   %3 - Stock
 * @default Discard %1 %2/%3
 *
 * @param Default Discard
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Can all items be discarded by default?
 * YES - true     NO - false
 * @default true
 *
 * @param ---Confirm---
 * @default
 *
 * @param Confirm Discard
 * @parent ---Confirm---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Do you wish to display a confirmation message?
 * YES - true     NO - false
 * @default true
 *
 * @param Confirm Message
 * @parent ---Confirm---
 * @desc The command text used for discard confirmation.
 * %1 - Item Name   %2 - Quantity
 * @default Are you sure you want to discard %1 %2?
 *
 * @param Confirm Yes
 * @parent ---Confirm---
 * @desc The text used for "Yes" when discarding.
 * @default Yes
 *
 * @param Confirm No
 * @parent ---Confirm---
 * @desc The text used for "No" when discarding.
 * @default No
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires MSEP_ItemCore.
 * Make sure this plugin is located under MSEP_ItemCore in the plugin list.
 *
 * Discarding items in RPG Maker MV isn't possible default. In order to get rid
 * of items, players must either use them or sell them but cannot directly
 * discard them. This plugin uses the extra menu commands provided by the Item
 * Core plugin by Mage to add a Discard option, allowing players to select
 * however many items they wish to discard and do so. The player can set the
 * quantity values by highlighting the Discard option and pressing left/right
 * to adjust the discard quantity.
 *
 * This is a collaboration plugin by Sylvester and Mage to ensure
 * compatibility with the Mage Studios Engine Plugins library.
 *
 * *NOTE: This plugin does not support touch screen only games as keyboard or
 * controller inputs are used to access the ability to adjust discard values.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * There are a couple of notetags you can use with the Item Discard plugin.
 * They exist to allow you to offset the Default Discard option in the plugin's
 * parameter settings.
 *
 * Item, Weapon, and Armor Notetags:
 *
 *   <Can Discard>
 *   - This will set the item, weapon, or armor to be discardable regardless of
 *   the Default Discard plugin parameter.
 *
 *   <Cannot Discard>
 *   - This will set the item, weapon, or armor unable to be discarded
 *   regardless of the Default Discard plugin parameter.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.02:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.01:
 * - Fixed a problem with the notetags not working.
 *
 * Version 1.00:
 * - Finished Plugin!
 */

if (
  Imported.MSEP_ItemCore &&
  MageStudios.Item.version &&
  MageStudios.Item.version >= 1.27
) {
  MageStudios.Parameters = PluginManager.parameters("MSEP_X_ItemDiscard");
  MageStudios.Param = MageStudios.Param || {};

  MageStudios.Param.ItemDiscardCmdFmt = String(
    MageStudios.Parameters["Discard Command"]
  );
  MageStudios.Param.ItemDiscardDefault = String(
    MageStudios.Parameters["Default Discard"]
  );
  MageStudios.Param.ItemDiscardDefault = eval(
    MageStudios.Param.ItemDiscardDefault
  );
  MageStudios.Param.ItemDiscardConfirm = String(
    MageStudios.Parameters["Confirm Discard"]
  );
  MageStudios.Param.ItemDiscardConfirm = eval(
    MageStudios.Param.ItemDiscardConfirm
  );
  MageStudios.Param.ItemDiscardMessage = String(
    MageStudios.Parameters["Confirm Message"]
  );
  MageStudios.Param.ItemDiscardYes = String(
    MageStudios.Parameters["Confirm Yes"]
  );
  MageStudios.Param.ItemDiscardNo = String(
    MageStudios.Parameters["Confirm No"]
  );

  MageStudios.ItemDiscard.DataManager_isDatabaseLoaded =
    DataManager.isDatabaseLoaded;
  DataManager.isDatabaseLoaded = function () {
    if (!MageStudios.ItemDiscard.DataManager_isDatabaseLoaded.call(this))
      return false;

    if (!MageStudios._loaded_MSEP_X_ItemDiscard) {
      this.processItemDiscardNotetags1($dataItems);
      this.processItemDiscardNotetags1($dataWeapons);
      this.processItemDiscardNotetags1($dataArmors);
      MageStudios._loaded_MSEP_X_ItemDiscard = true;
    }

    return true;
  };

  DataManager.processItemDiscardNotetags1 = function (group) {
    for (var n = 1; n < group.length; n++) {
      var obj = group[n];
      var notedata = obj.note.split(/[\r\n]+/);

      obj.canDiscard = MageStudios.Param.ItemDiscardDefault;

      for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(/<CAN DISCARD>/i)) {
          obj.canDiscard = true;
        } else if (line.match(/<CANNOT DISCARD>/i)) {
          obj.canDiscard = false;
        }
      }
    }
  };

  MageStudios.ItemDiscard.Window_ItemActionCommand_initialize =
    Window_ItemActionCommand.prototype.initialize;
  Window_ItemActionCommand.prototype.initialize = function (x, y) {
    MageStudios.ItemDiscard.Window_ItemActionCommand_initialize.call(
      this,
      x,
      y
    );
    this._discardAmount = 1;
  };

  MageStudios.ItemDiscard.Window_ItemActionCommand_setItem =
    Window_ItemActionCommand.prototype.setItem;
  Window_ItemActionCommand.prototype.setItem = function (item) {
    this._discardAmount = 1;
    MageStudios.ItemDiscard.Window_ItemActionCommand_setItem.call(this, item);
  };

  MageStudios.ItemDiscard.Window_ItemActionCommand_addCustomCommandsF =
    Window_ItemActionCommand.prototype.addCustomCommandsF;
  Window_ItemActionCommand.prototype.addCustomCommandsF = function () {
    MageStudios.ItemDiscard.Window_ItemActionCommand_addCustomCommandsF.call(
      this
    );
    if (this.isShowDiscardCommand()) this.addDiscardCommand();
  };

  Window_ItemActionCommand.prototype.isShowDiscardCommand = function () {
    if (this._item.baseItemId && $gameParty.checkItemIsEquipped(this._item)) {
      return false;
    }
    return true;
  };

  Window_ItemActionCommand.prototype.addDiscardCommand = function () {
    if (!this._item) {
      return false;
    }
    var enabled = this._item.canDiscard;
    var text = this.createDiscardCommandName();
    this.addCommand(text, "discard", enabled);
  };

  Window_ItemActionCommand.prototype.createDiscardCommandName = function () {
    var fmt = MageStudios.Param.ItemDiscardCmdFmt;
    var name = "\\i[" + this._item.iconIndex + "]";
    if (this._item.textColor !== undefined) {
      name += "\\c[" + this._item.textColor + "]";
    }
    name += this._item.name + "\\c[0]";
    if ($gameParty.maxItems(this._item) > 1) {
      var quantity = "\u00d7" + MageStudios.Util.toGroup(this._discardAmount);
      var stock = $gameParty.numItems(this._item);
    } else {
      var quantity = "";
      var stock = "";
    }
    var text = fmt.format(name, quantity, stock);
    return text;
  };

  MageStudios.ItemDiscard.Window_ItemActionCommand_update =
    Window_ItemActionCommand.prototype.update;
  Window_ItemActionCommand.prototype.update = function () {
    MageStudios.ItemDiscard.Window_ItemActionCommand_update.call(this);
    if (this.currentSymbol() === "discard") this.updateDiscard();
  };

  Window_ItemActionCommand.prototype.updateDiscard = function () {
    if (!this.active) {
      return;
    }
    if (Input.isRepeated("left")) {
      var prevAmount = this._discardAmount;
      this._discardAmount -= 1;
    } else if (Input.isRepeated("right")) {
      var prevAmount = this._discardAmount;
      this._discardAmount += 1;
    } else {
      return;
    }
    if (Input.isPressed("shift")) {
      this._discardAmount *= 10;
    }
    this._discardAmount = this._discardAmount.clamp(
      1,
      $gameParty.numItems(this._item)
    );
    if (prevAmount !== this._discardAmount) {
      SoundManager.playCursor();
      this._list[this.index()].name = this.createDiscardCommandName();
      this.redrawCurrentItem();
    }
  };

  function Window_ItemDiscardConfirm() {
    this.initialize.apply(this, arguments);
  }

  Window_ItemDiscardConfirm.prototype = Object.create(Window_Command.prototype);
  Window_ItemDiscardConfirm.prototype.constructor = Window_ItemDiscardConfirm;

  Window_ItemDiscardConfirm.prototype.initialize = function () {
    Window_Command.prototype.initialize.call(this, 0, 0);
    this.openness = 0;
  };

  Window_ItemDiscardConfirm.prototype.makeCommandList = function () {
    this.addCommand(MageStudios.Param.ItemDiscardYes, "confirm");
    this.addCommand(MageStudios.Param.ItemDiscardNo, "cancel");
  };

  Window_ItemDiscardConfirm.prototype.setData = function (item, quantity) {
    var fmt = MageStudios.Param.ItemDiscardMessage;
    var name = "\\i[" + item.iconIndex + "]";
    if (item.textColor !== undefined) {
      name += "\\c[" + item.textColor + "]";
    }
    name += item.name;
    if ($gameParty.maxItems(item) > 1) {
      quantity = "\u00d7" + MageStudios.Util.toGroup(quantity);
    } else {
      quantity = "\u00d7" + 1;
    }
    this._text = fmt.format(name, quantity);
    var ww = this.textWidthEx(this._text) + this.standardPadding() * 4;
    this.width = ww;
    this.refresh();
    this.x = (Graphics.boxWidth - this.width) / 2;
    this.y = (Graphics.boxHeight - this.height) / 2;
    this.drawTextEx(this._text, this.textPadding(), 0);
  };

  Window_ItemDiscardConfirm.prototype.textWidthEx = function (text) {
    return this.drawTextEx(text, 0, this.contents.height);
  };

  Window_ItemDiscardConfirm.prototype.itemTextAlign = function () {
    return "center";
  };

  Window_ItemDiscardConfirm.prototype.windowHeight = function () {
    return this.fittingHeight(3);
  };

  Window_ItemDiscardConfirm.prototype.itemRect = function (index) {
    var rect = Window_Selectable.prototype.itemRect.call(this, index);
    rect.y += this.lineHeight();
    return rect;
  };

  MageStudios.ItemDiscard.Scene_Item_createActionWindow =
    Scene_Item.prototype.createActionWindow;
  Scene_Item.prototype.createActionWindow = function () {
    MageStudios.ItemDiscard.Scene_Item_createActionWindow.call(this);
    this._itemActionWindow.setHandler(
      "discard",
      this.onActionDiscard.bind(this)
    );
    this.createDiscardConfirmWindow();
  };

  Scene_Item.prototype.onActionDiscard = function () {
    var item = this._itemActionWindow._item;
    var quantity = this._itemActionWindow._discardAmount;
    if (MageStudios.Param.ItemDiscardConfirm) {
      this._discardConfirmWindow.setData(item, quantity);
      this._discardConfirmWindow.open();
      this._discardConfirmWindow.activate();
      this._discardConfirmWindow.select(0);
    } else {
      this.performDiscardItem(item, quantity);
    }
  };

  Scene_Item.prototype.createDiscardConfirmWindow = function () {
    this._discardConfirmWindow = new Window_ItemDiscardConfirm();
    var win = this._discardConfirmWindow;
    win.setHandler("confirm", this.onDiscardConfirmOk.bind(this));
    win.setHandler("cancel", this.onDiscardConfirmCancel.bind(this));
    this.addWindow(this._discardConfirmWindow);
  };

  Scene_Item.prototype.onDiscardConfirmOk = function () {
    var item = this._itemActionWindow._item;
    var quantity = this._itemActionWindow._discardAmount;
    this._discardConfirmWindow.close();
    this.performDiscardItem(item, quantity);
  };

  Scene_Item.prototype.onDiscardConfirmCancel = function () {
    this._discardConfirmWindow.deactivate();
    this._discardConfirmWindow.close();
    this._itemActionWindow.activate();
  };

  Scene_Item.prototype.performDiscardItem = function (item, quantity) {
    $gameParty.loseItem(item, quantity);
    if ($gameParty.numItems(item) > 0) {
      this._itemActionWindow._discardAmount = 1;
      this._itemActionWindow.refresh();
      this._itemActionWindow.activate();
      this._itemWindow.refresh();
    } else {
      this._itemActionWindow.hide();
      this._itemActionWindow.deactivate();
      this._itemWindow.refresh();
      this._itemWindow.activate();
    }
  };

  MageStudios.Util = MageStudios.Util || {};

  MageStudios.Util.toGroup = function (inVal) {
    if (typeof inVal !== "string") {
      inVal = String(inVal);
    }
    if (!eval(MageStudios.Param.DigitGroup)) return inVal;
    return inVal.replace(/(^|[^\w.])(\d{4,})/g, function ($0, $1, $2) {
      return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
    });
  };
} else {
  var text =
    "================================================================\n";
  text += "MSEP_X_ItemDiscard requires MSEP_ItemCore and to be at the latest ";
  text += "version to run properly. ";
  text +=
    "\n\nPlease go to www.MageStudios.moe and update to the latest version for ";
  text += "the MSEP_ItemCore plugin.\n";
  text += "================================================================\n";
  console.log(text);
  require("nw.gui").Window.get().showDevTools();
}
