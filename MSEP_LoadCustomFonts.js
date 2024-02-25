//=============================================================================
// Mage Studios Engine Plugins - Load Custom Fonts
// MSEP_LoadCustomFonts.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_LoadCustomFonts = true;

var MageStudios = MageStudios || {};
MageStudios.LCF = MageStudios.LCF || {};
MageStudios.LCF.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc v1.01 Load custom fonts from the /fonts/ folder. This will
 * allow you to use custom fonts without installing them.
 * @author Mage Studios Engine Plugins
 *
 * @param Font Filenames
 * @desc These are full filenames of the fonts to be loaded from the
 * /fonts/ folder of your project. Separate each with ,
 * @default cc-wild-words.ttf, ds-pixel-cyr.ttf
 *
 * @param Font Families
 * @desc The font family names of the fonts. Keep them in the same
 * order as the parameter above. Separate each with ,
 * @default CC Wild Words, DS Pixel Cyr
 *
 * @help
 * ============================================================================
 * Introduction & Instructions
 * ============================================================================
 *
 * For those using custom fonts, you may have noticed that not all fonts from
 * the /fonts/ directory are loaded at the time the game is loaded. This plugin
 * let's you place the fonts into the /fonts/ directory and then load them as
 * the game starts.
 *
 * To use this plugin, follow these instructions:
 *
 * The plugin parameters 'Font Filenames' and 'Font Families' have to be filled
 * out in correspondence to each other. The order of each font entry must match
 * each other's. For example:
 *
 *      Font Filenames: cc-wild-words.ttf, ds-pixel-cyr.ttf
 *
 *      Font Families: CC Wild Words, DS Pixel Cyr
 *
 * In the above example, 'cc-wild-words.ttf' will use 'CC Wild Words' as its
 * font family and 'ds-pixel-cyr.ttf' will use 'DS Pixel Cyr'. For the plugins
 * that use font names such as YEP's Message Core, you will be using the Font
 * Family name instead of the filename.
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

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MEP_LoadCustomFonts');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.LCFFontFilenames = String(MageStudios.Parameters['Font Filenames']);
MageStudios.Param.LCFFontFamilies = String(MageStudios.Parameters['Font Families']);

//=============================================================================
// Utilities
//=============================================================================

MageStudios.Util = MageStudios.Util || {};

MageStudios.Util.loadCustomFonts = function() {
  var filenames = MageStudios.Param.LCFFontFilenames.split(',');
  var fontfamilies = MageStudios.Param.LCFFontFamilies.split(',');
  if (filenames.length !== fontfamilies.length) {
    if (filenames.length > fontfamilies.length) {
      console.log('You are missing fonts in the Font Families parameter.');
    }
    if (filenames.length < fontfamilies.length) {
      console.log('You are missing fonts in the Font Filenames parameter.');
    }
    console.log('Loading custom fonts aborted.');
    return;
  }
  var projectDirectory = window.location.pathname.substring(0,
    window.location.pathname.lastIndexOf('/'));
  var length = filenames.length;
  for (var i = 0; i < length; ++i) {
    var filename = filenames[i].trim();
    var fontfamily = fontfamilies[i].trim();
    Graphics.loadFont(fontfamily, projectDirectory + '/fonts/' + filename);
  }
};
MageStudios.Util.loadCustomFonts();

//=============================================================================
// End of File
//=============================================================================

