//=============================================================================
// Mage Studios Engine Plugins - Screen Resolution
// ScreenResolution.js
// Version: 1.00
//=============================================================================

var Imported = Imported || {};
Imported.ScreenResolution = true;

var MageStudios = MageStudios || {};
MageStudios.ScrRes = MageStudios.ScrRes || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 Change your game's screen resolution to your liking!
 * @author Mage Studios Engine Plugins
 *
 * @param Screen Width
 * @desc Adjusts the width of the screen.                           .
 * Default: 816
 * @default 816
 *
 * @param Screen Height
 * @desc Adjusts the height of the screen.                          .
 * Default: 624
 * @default 624
 *
 * @help
 * Adjust the parameters to change the size of how you want your game's
 * screen resolution to appear.
 */
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('ScreenResolution');

//=============================================================================
// Scene_Manager
//=============================================================================

SceneManager._screenWidth  = Number(MageStudios.Parameters['Screen Width'] || 816);
SceneManager._screenHeight = Number(MageStudios.Parameters['Screen Height'] || 624);
SceneManager._boxWidth     = Number(MageStudios.Parameters['Screen Width'] || 816);
SceneManager._boxHeight    = Number(MageStudios.Parameters['Screen Height'] || 624);

MageStudios.ScrRes.SceneManager_run = SceneManager.run;
SceneManager.run = function(sceneClass) {
    MageStudios.ScrRes.SceneManager_run.call(this, sceneClass);
    if (Utils.isMobileDevice()) return;
    if (Utils.isMobileSafari()) return;
    if (Utils.isAndroidChrome()) return;
		var resizeWidth = Graphics.boxWidth - window.innerWidth;
		var resizeHeight = Graphics.boxHeight - window.innerHeight;
		window.moveBy(-1 * resizeWidth / 2, -1 * resizeHeight / 2);
		window.resizeBy(resizeWidth, resizeHeight);
};

//=============================================================================
// End of File
//=============================================================================
