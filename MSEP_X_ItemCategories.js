//=============================================================================
// Mage Studios Engine Plugins - Item Core Extension - Item Menu Categories
// MSEP_X_ItemCategories.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_X_ItemCategories = true;

var MageStudios = MageStudios || {};
MageStudios.ItemCat = MageStudios.ItemCat || {};
MageStudios.ItemCat.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc v1.01 (Requires MSEP_ItemCore.js) Assign items to various
 * categories under the item menu.
 * @author Mage Studios Engine Plugins + Sylvester Collaboration
 *
 * @param ---General---
 * @default
 *
 * @param Category Order
 * @parent ---General---
 * @desc Here is the order of all the categories shown in the item
 * menu. Look in the plugin's help file for more information.
 * @default Items, Weapons, Armors, KeyItems
 *
 * @param ---Naming---
 * @default
 *
 * @param Hidden Item A
 * @parent ---Naming---
 * @desc How this category is named in the Item Menu
 * @default Special Items
 *
 * @param Hidden Item B
 * @parent ---Naming---
 * @desc How this category is named in the Item Menu
 * @default Unique Items
 *
 * @param Consumable
 * @parent ---Naming---
 * @desc How this category is named in the Item Menu
 * @default Consumable
 *
 * @param Nonconsumable
 * @parent ---Naming---
 * @desc How this category is named in the Item Menu
 * @default Nonconsumable
 *
 * @param Always Usable
 * @parent ---Naming---
 * @desc How this category is named in the Item Menu
 * @default Usable
 *
 * @param Battle Usable
 * @parent ---Naming---
 * @desc How this category is named in the Item Menu
 * @default Battle
 *
 * @param Field Usable
 * @parent ---Naming---
 * @desc How this category is named in the Item Menu
 * @default Field
 *
 * @param Never Usable
 * @parent ---Naming---
 * @desc How this category is named in the Item Menu
 * @default Misc
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires MSEP_ItemCore. Make sure this plugin is located under
 * MSEP_ItemCore in the plugin list.
 *
 * In RPG Maker MV, there exists only four categories seen in the item menu:
 * Items, Weapons, Armors, and Key Items. Adding extra categories wouldn't be
 * possible without plugins. This plugin, through the help of Item Core, will
 * allow you to add in many more categories in addition to many premade ones
 * that are automatically added based on weapon types, armor types, equipment
 * types, item usage, and more!
 *
 * This is a collaboration plugin by Sylvester and Mage to ensure
 * compatibility with the Mage Studios Engine Plugins library.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * To change the item categories that appear in the item menu, go to the plugin
 * parameters and alter the list. Separate each category with a comma (,). Each
 * category must be spelled correctly using the following formats:
 *
 * -----------------------   --------------------------------------------------
 * Plugin Parameter Syntax   Description
 * -----------------------   --------------------------------------------------
 * Items                     Lists only Regular Item types
 * AllItems                  All items in the items database with Key Items
 *
 * RegularItems              Lists only Regular Item types
 * KeyItems                  Lists only Key Item types
 * HiddenItemA               Lists only Hidden Item A types
 * HiddenItemB               Lists only Hidden Item B types
 * Consumable                Lists only consumable items
 * Nonconsumable             Lists only nonconsumeable items
 * AlwaysUsable              Lists only always usable items
 * BattleUsable              Lists only battle usable items
 * FieldUsable               Lists only field usable items
 * NeverUsable               Lists only never usable items
 *
 * Weapons                   Lists all weapons
 * WType:x                   Lists weapons of type x (replace x with ID)
 *
 * Armors                    Lists all armors
 * AType:x                   Lists armors of armor type x (replace x with ID)
 *
 * EType:x                   Lists items of equip type x (replace x with ID)
 *
 * Category:x                Lists items of category x (replace x with text)
 *
 * An example of a list that would display something like:
 *   Items
 *   Key Items
 *   Dagger
 *   Sword
 *   Bodygear
 *   Accessory
 *   Herbs
 * 
 * Would look like this for the plugin parameters:
 *
 *   Items, KeyItems, WType:1, WType2, AType1, AType2, Category:Herbs
 *
 * The categories go in the order they're listed so plan them out accordingly.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * To add custom categories to items, use the following notetag:
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * Item, Weapon, and Armor Notetags:
 *
 *   <Menu Category: x>
 *   <Menu Category: x, x, x>
 *   - Replace 'x' with the category name you wish to give the item. Insert
 *   multiples of this tag to insert more categories. These categories will be
 *   used in combination with the Category:x plugin parameter syntax keyword.
 *
 *   For Example:
 *
 *     <Menu Category: Herbs>
 *
 *   Would require this syntax keyword in the plugin parameters:
 *
 *     Category:Herbs
 *
 *   If you use the version of the notetag with multiple categories, it would
 *   work something like this:
 *
 *     <Menu Category: Herbs, Potions, Elixirs>
 *
 *   Plugin Parameter:
 *
 *     Category:Herbs, Category:Potions, Category:Elixirs
 *
 *   **Note** The notetag does not apply for any of the pre-made categories.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MEP_X_ItemCategories');
MageStudios.Param = MageStudios.Param || {};

MageStudios.SetupParameters = function() {
  MageStudios.Param.ItemCatOrder = String(MageStudios.Parameters['Category Order']);
  MageStudios.Param.ItemCatOrder = MageStudios.Param.ItemCatOrder.split(',');
  //---
  var length = MageStudios.Param.ItemCatOrder.length;
  for (var i = 0; i < 0; i++) {
    MageStudios.Param.ItemCatOrder[i] = MageStudios.Param.ItemCatOrder[i].trim();
  }
  MageStudios.Param.ItemCatNames = {
    HiddenItemA: String(MageStudios.Parameters['Hidden Item A']),
    HiddenItemB: String(MageStudios.Parameters['Hidden Item B']),
    Consumable: String(MageStudios.Parameters['Consumable']),
    Nonconsumable: String(MageStudios.Parameters['Nonconsumable']),
    AlwaysUsable: String(MageStudios.Parameters['Always Usable']),
    BattleUsable: String(MageStudios.Parameters['Battle Usable']),
    FieldUsable: String(MageStudios.Parameters['Field Usable']),
    NeverUsable: String(MageStudios.Parameters['Never Usable'])
  }
};
MageStudios.SetupParameters();

//=============================================================================
// DataManager
// ----------------------------------------------------------------------------
// Notetags added by Mage
//=============================================================================

MageStudios.ItemCat.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!MageStudios.ItemCat.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!MageStudios._loaded_MSEP_X_ItemCategories) {
    this.processItemCategoriesNotetags1($dataItems);
    this.processItemCategoriesNotetags1($dataWeapons);
    this.processItemCategoriesNotetags1($dataArmors);
    MageStudios._loaded_MSEP_X_ItemCategories = true;
  }
  
  return true;
};

DataManager.processItemCategoriesNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.itemCategory = [];

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<MENU[ ](?:CATEGORY|CATEGORIES):[ ](.*)>/i)) {
        var str = String(RegExp.$1).split(',');
        var length = str.length;
        for (var s = 0; s < length; s++) {
          obj.itemCategory.push(str[s].trim());
        }
      }
    }
  }
};

//=============================================================================
// Window_ItemCategory
//=============================================================================

MageStudios.ItemCat.Window_ItemCategory_update =
  Window_ItemCategory.prototype.update;
Window_ItemCategory.prototype.update = function() {
  MageStudios.ItemCat.Window_ItemCategory_update.call(this);
  if (this._itemWindow) {
    this._itemWindow.setExt(this.currentExt());
  }
};

Window_ItemCategory.prototype.makeCommandList = function() {
  var data = MageStudios.Param.ItemCatOrder;
  var length = data.length;
  for (var i = 0; i < length; i++) {
    var category = data[i].trim();
    this.addItemCategory(category);
  }
};

Window_ItemCategory.prototype.addItemCategory = function(category) {
  var text = MageStudios.Param.ItemCatNames[category];
  if (category.match(/Category:(.*)/i)) {
    var type = String(RegExp.$1);
    return this.addCommand(type, 'Category', true, type);
  }
  if (category.match(/AllItems/i)) {
    return this.addCommand(TextManager.item, 'AllItems');
  }
  if (category.match(/RegularItems/i)) {
    return this.addCommand(text, 'item');
  }
  if (category.match(/KeyItems/i)) {
    return this.addCommand(TextManager.keyItem, 'keyItem');
  }
  if (category.match(/HiddenItemA/i)) {
    return this.addCommand(text, 'HiddenItemA');
  }
  if (category.match(/HiddenItemB/i)) {
    return this.addCommand(text, 'HiddenItemB');
  }
  if (category.match(/Nonconsumable/i)) {
    return this.addCommand(text, 'Nonconsumable');
  }
  if (category.match(/Consumable/i)) {
    return this.addCommand(text, 'Consumable');
  }
  if (category.match(/AlwaysUsable/i)) {
    return this.addCommand(text, 'AlwaysUsable');
  }
  if (category.match(/BattleUsable/i)) {
    return this.addCommand(text, 'BattleUsable');
  }
  if (category.match(/FieldUsable/i)) {
    return this.addCommand(text, 'FieldUsable');
  }
  if (category.match(/NeverUsable/i)) {
    return this.addCommand(text, 'NeverUsable');
  }
  if (category.match(/Items/i)) {
    return this.addCommand(TextManager.item, 'item');
  }
  if (category.match(/Weapons/i)) {
    return this.addCommand(TextManager.weapon, 'weapon');
  }
  if (category.match(/WType:(\d+)/i)) {
    var id = parseInt(RegExp.$1);
    return this.addCommand($dataSystem.weaponTypes[id], 'WType', true, id);
  }
  if (category.match(/Armors/i)) {
    return this.addCommand(TextManager.armor, 'armor');
  }
  if (category.match(/AType:(\d+)/i)) {
    var id = parseInt(RegExp.$1);
    return this.addCommand($dataSystem.armorTypes[id], 'AType', true, id);
  }
  if (category.match(/EType:(\d+)/i)) {
    var id = parseInt(RegExp.$1);
    return this.addCommand($dataSystem.equipTypes[id], 'EType', true, id);
  }
};

//=============================================================================
// Window_ItemList
//=============================================================================

MageStudios.ItemCat.Window_ItemList_initialize =
  Window_ItemList.prototype.initialize;
Window_ItemList.prototype.initialize = function(x, y, width, height) {
  MageStudios.ItemCat.Window_ItemList_initialize.call(this, x, y, width, height);
  this._ext = 'none';
};

Window_ItemList.prototype.setExt = function(ext) {
  if (this._ext !== ext) {
    this._ext = ext;
    this.refresh();
    this.resetScroll();
  }
};

Window_ItemList.prototype.includes = function(item) {
  switch (this._category) {
  case 'AllItems':
    return DataManager.isItem(item);
    break;
  case 'item':
    return DataManager.isItem(item) && item.itypeId === 1;
    break;
  case 'RegularItems':
    return DataManager.isItem(item) && item.itypeId === 1;
    break;
  case 'keyItem':
    return DataManager.isItem(item) && item.itypeId === 2;
    break;
  case 'HiddenItemA':
    return DataManager.isItem(item) && item.itypeId === 3;
    break;
  case 'HiddenItemB':
    return DataManager.isItem(item) && item.itypeId === 4;
    break;
  case 'Consumable':
    return DataManager.isItem(item) && item.consumable;
    break;
  case 'Nonconsumable':
    return DataManager.isItem(item) && !item.consumable;
    break;
  case 'AlwaysUsable':
    return DataManager.isItem(item) && [0].contains(item.occasion);
    break;
  case 'BattleUsable':
    return DataManager.isItem(item) && [0, 1].contains(item.occasion);
    break;
  case 'FieldUsable':
    return DataManager.isItem(item) && [0, 2].contains(item.occasion);
    break;
  case 'NeverUsable':
    return DataManager.isItem(item) && [3].contains(item.occasion);
    break;
  case 'weapon':
    return DataManager.isWeapon(item);
    break;
  case 'WType':
    return DataManager.isWeapon(item) && item.wtypeId === this._ext;
    break;
  case 'armor':
    return DataManager.isArmor(item);
    break;
  case 'AType':
    return DataManager.isArmor(item) && item.atypeId === this._ext;
    break;
  case 'EType':
    return item && item.etypeId === this._ext;
    break;
  case 'Category':
    return item && item.itemCategory.contains(this._ext);
    break;
  default:
    return false;
  }
};

//=============================================================================
// End of File
//=============================================================================
} else {

var text = '================================================================\n';
text += 'MEP_X_ItemCategories requires MSEP_ItemCore and to be at the latest '
text += 'version to run properly. '
text += '\n\nPlease go to www.MageStudios.moe and update to the latest version for ';
text += 'the MSEP_ItemCore plugin.\n';
text += '================================================================\n';
console.log(text);
require('nw.gui').Window.get().showDevTools();

}