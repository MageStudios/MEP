//=============================================================================
// Mage Studios Engine Plugins - Item Core Extension - Item Picture Images
// MSEP_X_ItemPictureImg.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_X_ItemPictureImg = true;

var MageStudios = MageStudios || {};
MageStudios.IPI = MageStudios.IPI || {};
MageStudios.IPI.version = 1.00;

//=============================================================================
 /*:
 * @plugindesc (Requires MSEP_ItemCore.js) Allows you to use images
 * for items inside of the item menu instead of large icons.
 * @author Mage Studios Engine Plugins
 *
 * @param Max Image Width
 * @type number
 * @min 1
 * @desc Maximum image width for picture if used.
 * Not suggested to go above 144.
 * @default 128
 *
 * @param Max Image Height
 * @type number
 * @min 1
 * @desc Maximum image height for picture if used.
 * Not suggested to go above 144.
 * @default 128
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires MSEP_ItemCore. Make sure this plugin is located under
 * MSEP_ItemCore in the plugin list.
 *
 * For those using the MSEP_ItemCore and enabled the 'Updated Scene Item' plugin
 * parameter, you may have noticed the large icon towards the center of the
 * screen. Ever wondered how it'd be if it were using an image instead? This
 * plugin will add the functionality to use images from your game's 'Pictures'
 * folder to represent the item instead of just the icon. Now, you can add more
 * ways to breathe life into your games!
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert the following notetags into your items, weapons, and/or armors to
 * give them unique images in the item menu.
 *
 * Item, Weapon, and Armor Notetags:
 *
 *   <Picture: filename>
 *   - This will set the item to use 'filename' image from the 'Pictures'
 *   folder in your game's project folder. For the 'filename', do not include
 *   the file extension. If you are using an image named 'Potion.png', simply
 *   replace the filename in the notetag with 'Potion'. Everything is case
 *   sensitive. This notetag will default the hue to 0.
 *
 *   <Picture Image: filename>
 *   - This will set the item to use 'filename' image from the 'Pictures'
 *   folder in your game's project folder. For the 'filename', do not include
 *   the file extension. If you are using an image named 'Potion.png', simply
 *   replace the filename in the notetag with 'Potion'. Everything is case
 *   sensitive. This notetag will not alter the hue.
 *
 *   <Picture Hue: x>
 *   - This will set the item's picture image to use hue x. Altering the hue
 *   will adjust the color hue for the picture image used. Use a value between
 *   0 and 360 for the hue.
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

if (Imported.MSEP_ItemCore) {
if (MageStudios.Item.version && MageStudios.Item.version >= 1.26) {

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MSEP_X_ItemPictureImg');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.ItemImageMaxWidth = Number(MageStudios.Parameters['Max Image Width']);
MageStudios.Param.ItemImageMaxHeight = Number(MageStudios.Parameters['Max Image Height']);

//=============================================================================
// DataManager
//=============================================================================

MageStudios.IPI.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!MageStudios.IPI.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!MageStudios._loaded_MSEP_X_ItemPictureImg) {
    this.processItemImageNotetags1($dataItems);
    this.processItemImageNotetags1($dataWeapons);
    this.processItemImageNotetags1($dataArmors);
    MageStudios._loaded_MSEP_X_ItemPictureImg = true;
  }
  
  return true;
};

DataManager.processItemImageNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.pictureImg = '';
    obj.pictureHue = 0;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:PICTURE):[ ](.*)>/i)) {
        obj.pictureImg = String(RegExp.$1);
        obj.pictureHue = 0;
      } else if (line.match(/<(?:PICTURE IMAGE|PICTURE NAME):[ ](.*)>/i)) {
        obj.pictureImg = String(RegExp.$1);
      } else if (line.match(/<(?:PICTURE HUE):[ ](\d+)>/i)) {
        obj.pictureHue = parseInt(RegExp.$1).clamp(0, 360);
      }
    }
  }
};

//=============================================================================
// Item Manage
//=============================================================================

ItemManager.getItemPictureImageFilename = function(item) {
  if (!item) return '';
  if (item.pictureImg === undefined) {
    if (item.baseItemId) {
      var baseItem = DataManager.getBaseItem(item);
      item.pictureImg = baseItem.pictureImg;
    } else {
      return '';
    }
  }
  if (item.pictureHue === undefined) {
    if (item.baseItemId) {
      var baseItem = DataManager.getBaseItem(item);
      item.pictureHue = baseItem.pictureHue;
    } else {
      return item.pictureHue = 0;
    }
  }
  return item.pictureImg;
};

ItemManager.getItemPictureImage = function(item) {
  if (!item) return new Bitmap(1, 1);
  var filename = this.getItemPictureImageFilename(item);
  var hue = item.pictureHue;
  return ImageManager.loadPicture(filename, hue);
};

ItemManager.effectIUSPictureHue = function(item, filename, hue) {
  if (filename !== undefined) {
    item.pictureImg = filename;
  }
  if (hue !== undefined) {
    item.pictureHue = hue;
  }
};

ItemManager.applyAugmentSetPictureImg = function(mainItem, img, slot, add) {
    mainItem.augmentPictureImg = mainItem.augmentPictureImg || [];
    if (add) {
      mainItem.augmentPictureImg[slot] = img;
    } else {
      mainItem.augmentPictureImg[slot] = undefined;
    }
    var baseImg = DataManager.getBaseItem(mainItem).pictureImg;
    var id = this.getAugmentFirstValue(mainItem.augmentPictureImg, baseImg);
    mainItem.pictureImg = id;
};

ItemManager.applyAugmentSetPictureHue = function(mainItem, Hue, slot, add) {
    mainItem.augmentPictureHue = mainItem.augmentPictureHue || [];
    if (add) {
      mainItem.augmentPictureHue[slot] = Hue;
    } else {
      mainItem.augmentPictureHue[slot] = undefined;
    }
    var baseHue = DataManager.getBaseItem(mainItem).pictureHue;
    var id = this.getAugmentFirstValue(mainItem.augmentPictureHue, baseHue);
    mainItem.pictureHue = id;
};

//=============================================================================
// Require MageStudios.Param.ItemSceneItem
//=============================================================================

if (MageStudios.Param.ItemSceneItem) {

//=============================================================================
// Window_ItemStatus
//=============================================================================

MageStudios.IPI.Window_ItemStatus_drawItemIcon =
  Window_ItemStatus.prototype.drawItemIcon;
Window_ItemStatus.prototype.drawItemIcon = function() {
  if (this.itemHasPictureImage()) {
    this.readyItemPictureImage(this._item);
  } else {
    MageStudios.IPI.Window_ItemStatus_drawItemIcon.call(this);
  }
};

Window_ItemStatus.prototype.itemHasPictureImage = function() {
  if (!this._item) return false;
  var filename = ItemManager.getItemPictureImageFilename(this._item);
  return filename !== '';
};

Window_ItemStatus.prototype.readyItemPictureImage = function(item) {
  if (item !== this._item) return;
  var bitmap = ItemManager.getItemPictureImage(item);
  if (bitmap.width <= 0) {
    return setTimeout(this.readyItemPictureIMageStudios.bind(this, item), 250);
  } else {
    this.drawItemPictureImage(bitmap);
  }
};

Window_ItemStatus.prototype.drawItemPictureImage = function(bitmap) {
  var pw = bitmap.width;
  var ph = bitmap.height;
  var sx = 0;
  var sy = 0;
  var dw = pw;
  var dh = ph;
  if (dw > MageStudios.Param.ItemImageMaxWidth) {
    var rate = MageStudios.Param.ItemImageMaxWidth / dw;
    dw = Math.floor(dw * rate);
    dh = Math.floor(dh * rate);
  }
  if (dh > MageStudios.Param.ItemImageMaxHeight) {
    var rate = MageStudios.Param.ItemImageMaxHeight / dh;
    dw = Math.floor(dw * rate);
    dh = Math.floor(dh * rate);
  }
  var dx = (Window_Base._faceWidth - dw) / 2;
  var dy = (Window_Base._faceHeight - dh) / 2;
  this.contents.blt(bitmap, sx, sy, pw, ph, dx, dy, dw, dh);
};

}; // MageStudios.Param.ItemSceneItem

//=============================================================================
// End of File
//=============================================================================
} else {

var text = '================================================================\n';
text += 'MSEP_X_ItemPictureImg requires MSEP_ItemCore to be at the ';
text += 'latest version to run properly.\n\nPlease go to www.MageStudios.moe and ';
text += 'update to the latest version for the MSEP_ItemCore plugin.\n';
text += '================================================================\n';
console.log(text);
require('nw.gui').Window.get().showDevTools();

}; // MageStudios.Item.version
}; // Imported.MSEP_ItemCore