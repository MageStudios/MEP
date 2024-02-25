var Imported = Imported || {};
Imported.MSEP_SynchFpsOption = true;

var MageStudios = MageStudios || {};
MageStudios.FpsSynch = MageStudios.FpsSynch || {};
MageStudios.FpsSynch.version = 1.0;

/*:
 * @plugindesc Adds a new command to Options menu for synching
 * the FPS of moniters with higher FPS rates.
 * @author Mage Studios Engine Plugins
 *
 * @param Command Name
 * @desc Command name used inside of the Options menu.
 * @default Synch Monitor FPS
 *
 * @param Default Setting
 * @type boolean
 * @on ON
 * @off OFF
 * @desc The default setting of the Synch Monitor FPS.
 * OFF - false (Recommended)  ON - true
 * @default false
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin is to be used with RPG Maker MV version 1.1.0 and upward.
 *
 * RPG Maker MV is constructed in a way where each update to its engine is done
 * once per frame update. While this is normally fine, as many players view the
 * game through 60 fps, some players experience the game differently as their
 * hardware may run at higher than 60 fps.
 *
 * When RPG Maker MV version 1.1.0 is implemented, it implemented Galenmereth's
 * fluid timestep, which forces the game to always play as if it is 60 fps. In
 * practice, this is great for everybody because players that experience more
 * 60 fps will be able to play the game as if it was 60 fps.
 *
 * However, there comes a problem when a player's hardware isn't strong enough
 * to support RPG Maker MV natively at 60 fps (such as the case with older
 * computers, or weaker mobile devices) or if the player is using video
 * recording software that goes below 60 fps. The game will appear laggy and
 * jumping without good response rates from input commands or possibly even
 * make the player miss out on certain visual frame updates.
 *
 * This plugin places a setting in the Options menu to enable or disable the
 * fluid timestep addition and utilize the former RPG Maker MV engine updating
 * function. This way, players will have the option of using fluid timesteps or
 * opting to not use it instead of forcing it on everybody who may not be able
 * to handle it.
 *
 * ============================================================================
 * Options Core Settings - Adding the New Options
 * ============================================================================
 *
 * If you are using MSEP_OptionsCore.js, you can add a new Option using this
 * plugin. Here's the following code/parameter settings you can use with it.
 *
 * ---------
 * Settings:
 * ---------
 *
 * Name:
 * \i[302]Synch Monitor FPS
 *
 * Help Description:
 * Turn this ON if your monitor runs above 60 FPS
 * to synchronize the game to run at 60 FPS.
 *
 * Symbol:
 * synchFps
 *
 * Show/Hide:
 * show = Imported.MSEP_SynchFpsOption;
 *
 * Enable:
 * enabled = true;
 *
 * Ext:
 * ext = 0;
 *
 * ----------
 * Functions:
 * ----------
 *
 * Make Option Code:
 * this.addCommand(name, symbol, enabled, ext);
 *
 * Draw Option Code:
 * var rect = this.itemRectForText(index);
 * var statusWidth = this.statusWidth();
 * var titleWidth = rect.width - statusWidth;
 * this.resetTextColor();
 * this.changePaintOpacity(this.isCommandEnabled(index));
 * this.drawOptionsName(index);
 * this.drawOptionsOnOff(index);
 *
 * Process OK Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * this.changeValue(symbol, !value);
 *
 * Cursor Right Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * this.changeValue(symbol, true);
 *
 * Cursor Left Code:
 * var index = this.index();
 * var symbol = this.commandSymbol(index);
 * var value = this.getConfigValue(symbol);
 * this.changeValue(symbol, false);
 *
 * Default Config Code:
 *
 *
 * Save Config Code:
 *
 *
 * Load Config Code:
 *
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.03:
 * - Compatibility update with MSEP_OptionsCore.js.
 *
 * Version 1.02:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.01:
 * - The plugin is now prevented if the project's core files are under version
 * RPG Maker MV 1.1.0.
 *
 * Version 1.00:
 * - Finished Plugin!
 */

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.1.0") {
  MageStudios.Parameters = PluginManager.parameters("MSEP_FpsSynchOption");
  MageStudios.Param = MageStudios.Param || {};

  MageStudios.Param.FpsSynchCmd = String(
    MageStudios.Parameters["Command Name"]
  );
  MageStudios.Param.FpsSDefault = eval(
    String(MageStudios.Parameters["Default Setting"])
  );

  ConfigManager.synchFps = MageStudios.Param.FpsSDefault;

  MageStudios.FpsSynch.ConfigManager_makeData = ConfigManager.makeData;
  ConfigManager.makeData = function () {
    var config = MageStudios.FpsSynch.ConfigManager_makeData.call(this);
    config.synchFps = this.synchFps;
    return config;
  };

  MageStudios.FpsSynch.ConfigManager_applyData = ConfigManager.applyData;
  ConfigManager.applyData = function (config) {
    MageStudios.FpsSynch.ConfigManager_applyData.call(this, config);
    this.synchFps = this.readConfigFpsSynch(config, "synchFps");
  };

  ConfigManager.readConfigFpsSynch = function (config, name) {
    var value = config[name];
    if (value !== undefined) {
      return value;
    } else {
      return MageStudios.Param.FpsSDefault;
    }
  };

  SceneManager.updateMainFluidTimestep = SceneManager.updateMain;

  SceneManager.updateMain = function () {
    if (ConfigManager.synchFps) {
      this.updateMainFluidTimestep();
    } else {
      this.updateMainNoFpsSynch();
    }
  };

  SceneManager.updateMainNoFpsSynch = function () {
    this.updateInputData();
    this.changeScene();
    this.updateScene();
    this.renderScene();
    this.requestUpdate();
  };

  MageStudios.FpsSynch.Window_Options_addGeneralOptions =
    Window_Options.prototype.addGeneralOptions;
  Window_Options.prototype.addGeneralOptions = function () {
    MageStudios.FpsSynch.Window_Options_addGeneralOptions.call(this);
    if (!Imported.MSEP_OptionsCore) {
      this.addCommand(MageStudios.Param.FpsSynchCmd, "synchFps");
    }
  };
} else {
  var text = "";
  text += "You are getting this error because you are trying to run FPS Synch ";
  text += "Options while your project files are lower than version 1.1.0. \n\n";
  text += "Please visit this thread for instructions on how to update your ";
  text += "project files to 1.1.0 or higher: \n\n";
  text += "http://forums.rpgmakerweb.com/index.php?/topic/";
  text += "71400-rpg-maker-mv-v134-update/";
  console.log(text);
  require("nw.gui").Window.get().showDevTools();
}
