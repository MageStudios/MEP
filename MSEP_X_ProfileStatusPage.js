//=============================================================================
// Mage Studios Engine Plugins - Status Menu Extension - Profile Status Page
// MSEP_X_ProfileStatusPage.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_X_ProfileStatusPage = true;

var MageStudios = MageStudios || {};
MageStudios.PSP = MageStudios.PSP || {};
MageStudios.PSP.version = 1.00

//=============================================================================
 /*:
 * @plugindesc (Requires MSEP_StatusMenuCore.js) Places a Profile
 * Status Page in the status menu for your actors.
 * @author Mage Studios Engine Plugins
 *
 * @param Command Name
 * @desc This is the text used for the command name in the Status
 * Menu command list.
 * @default Profile
 *
 * @param Default Profile
 * @type boolean
 * @on YES
 * @off NO
 * @desc Set database profile as default profile?
 * NO - false     YES - true
 * @default true
 *
 * @param Image Align
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc How do you want the profile image aligned?
 * left     center     right
 * @default right
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires MSEP_StatusMenuCore.js.
 * Place this plugin under MSEP_StatusMenuCore.js in the Plugin Manager.
 *
 * This plugin adds a new 'Profile' command to the Status Menu where the player
 * can read up on the actor's biography. Pictures can be added in. Text can be
 * updated mid-game, too!
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following notetags are used for actors specifically to alter the profile
 * page properties for the Status Menu.
 *
 * Actor Notetags:
 *   <Profile Text>
 *    text
 *    text
 *   </Profile Text>
 *   Changes the profile text from the default profile text to the text used in
 *   between the two notetags. You can use text codes for the text here. Word
 *   wrap is not supported.
 *
 *   <Profile Image: filename>
 *   If you wish to associate a profile image for the actor, replace 'filename'
 *   with the filename of a picture located in your img/pictures folder. Do not
 *   include the file extension. If your image is Aldo.png, just use 'Aldo' and
 *   do not include the '.png' extension.
 *
 *   <Profile Image Align: Left>
 *   <Profile Image Align: Center>
 *   <Profile Image Align: Right>
 *   If you wish to use a different alignment from the one in the plugin's
 *   parameter settings, you can use these notetags. If you use a nonexistant
 *   word, then the right alignment will be decided by default.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following plugin commands can be used to alter an actor's profile page.
 *
 * Plugin Commands:
 *
 * ClearProfileText actorId
 * This will clear out all of actorId's profile text.
 *
 * AddProfileText actorId text
 * This will add to actorId's profile text the line of text.
 *
 * ProfileTextLine lineIndex actorId text
 * This will change the specific lineIndex of the profile text for actorId to
 * display a specific text. For example, if you wish to the 50th line of the
 * profile text for actor 3 to 'Hello World', you'll write this out as the
 * plugin command:
 * ProfileTextLine 49 3 Hello World
 *
 * ProfileImage actorId filename
 * This will change the profile image for actorId to filename without the file
 * extension. For example, if you wish to change actor 3's profile image to
 * Aldo.png, you'll write out this as the plugin command: 
 * ProfileImage 3 Aldo
 * 
 * ProfileImageAlign actorId align
 * This will change the profile image alignment for actorId. Replace 'align'
 * with 'left', 'center', or 'right' without the quotes. If a nonexistant word
 * is used for the alignment, then the right alignment will be used. If you
 * wish to make the image aligned to the left for actor 3, you'll use:
 * ProfileImageAlign 3 Left
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.01:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.02:
 * - Fixed a bug twhere the status window was not calling the right arguments.
 *
 * Version 1.01:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

if (Imported.MSEP_StatusMenuCore) {

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MSEP_X_ProfileStatusPage');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.PSPCmdName = String(MageStudios.Parameters['Command Name']);
MageStudios.Param.PSPDefaultProfile = String(MageStudios.Parameters['Default Profile']);
MageStudios.Param.PSPDefaultProfile = eval(MageStudios.Param.PSPDefaultProfile);
MageStudios.Param.PSPImageAlign = String(MageStudios.Parameters['Image Align']);

//=============================================================================
// DataManager
//=============================================================================

MageStudios.PSP.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!MageStudios.PSP.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!MageStudios._loaded_MSEP_X_ProfileStatusPage) {
    this.processPSPNotetags($dataActors);
    MageStudios._loaded_MSEP_X_ProfileStatusPage = true;
  }
  return true;
};

DataManager.processPSPNotetags = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.profileImage = '';
    obj.profileImgAlign = MageStudios.Param.PSPImageAlign;
    obj.profileText = [];
    if (MageStudios.Param.PSPDefaultProfile) {
      var arr = obj.profile.split(/[\r\n]+/);
      for (var i = 0; i < arr.length; ++i) {
        obj.profileText.push(arr[i]);
      }
    }
    var textMode = 'none';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:PROFILE TEXT)>/i)) {
        textMode = 'profileText'
        obj.profileText = [];
      } else if (line.match(/<\/(?:PROFILE TEXT)>/i)) {
        textMode = 'none'
      } else if (textMode === 'profileText') {
        obj.profileText.push(line);
      } else if (line.match(/<(?:PROFILE IMAGE):[ ](.*)>/i)) {
        obj.profileImage = String(RegExp.$1);
      } else if (line.match(/<(?:PROFILE IMAGE ALIGN):[ ](.*)>/i)) {
        obj.profileImgAlign = String(RegExp.$1).toLowerCase();
      }
    }
  }
};

//=============================================================================
// Game_Actor
//=============================================================================

MageStudios.PSP.Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
    MageStudios.PSP.Game_Actor_setup.call(this, actorId);
    this.initProfileStatusPage();
};

Game_Actor.prototype.initProfileStatusPage = function() {
    this._profileStatusText = this.actor().profileText.slice();
    this._profileImage = this.actor().profileImage;
    this._profileImgAlign = this.actor().profileImgAlign;
};

Game_Actor.prototype.profileStatusText = function() {
    if (this._profileStatusText === undefined) this.initProfileStatusPage();
    return this._profileStatusText;
};

Game_Actor.prototype.clearProfileStatusText = function() {
    if (this._profileStatusText === undefined) this.initProfileStatusPage();
    this._profileStatusText = [''];
};

Game_Actor.prototype.addProfileStatusText = function(text) {
    if (this._profileStatusText === undefined) this.initProfileStatusPage();
    this._profileStatusText.push(text);
};

Game_Actor.prototype.setProfileStatusText = function(lineIndex, text) {
    if (this._profileStatusText === undefined) this.initProfileStatusPage();
    this._profileStatusText[lineIndex] = text;
};

Game_Actor.prototype.profileImage = function() {
    if (this._profileImage === undefined) this.initProfileStatusPage();
    return this._profileImage;
};

Game_Actor.prototype.setProfileImage = function(filename) {
    if (this._profileImage === undefined) this.initProfileStatusPage();
    this._profileImage = filename;
};

Game_Actor.prototype.profileImageAlign = function() {
    if (this._profileImgAlign === undefined) this.initProfileStatusPage();
    return this._profileImgAlign;
};

Game_Actor.prototype.setProfileImageAlign = function(align) {
    if (this._profileImgAlign === undefined) this.initProfileStatusPage();
    this._profileImgAlign = align.toLowerCase();
};

//=============================================================================
// Game_Interpreter
//=============================================================================

MageStudios.PSP.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    MageStudios.PSP.Game_Interpreter_pluginCommand.call(this, command, args)
    if (command === 'ClearProfileText') this.clearActorProfileText(args);
    if (command === 'AddProfileText') this.addActorProfileText(args);
    if (command === 'ProfileTextLine') this.setLineActorProfileText(args);
    if (command === 'ProfileImage') this.setActorProfileImage(args);
    if (command === 'ProfileImageAlign') this.setActorProfileImageAlign(args);
};

Game_Interpreter.prototype.clearActorProfileText = function(args) {
    var actorId = parseInt(args[0]);
    $gameActors.actor(actorId).clearProfileStatusText();
};

Game_Interpreter.prototype.addActorProfileText = function(args) {
    var actorId = parseInt(args[0]);
    var text = '';
    for (var i = 1; i < args.length; ++i) {
      text += args[i] + ' ';
    }
    $gameActors.actor(actorId).addProfileStatusText(text);
};

Game_Interpreter.prototype.setLineActorProfileText = function(args) {
    var lineIndex = parseInt(args[0]);
    var actorId = parseInt(args[1]);
    var text = '';
    for (var i = 2; i < args.length; ++i) {
      text += args[i] + ' ';
    }
    $gameActors.actor(actorId).setProfileStatusText(lineIndex, text);
};

Game_Interpreter.prototype.setActorProfileImage = function(args) {
    var actorId = parseInt(args[0]);
    var filename = '';
    for (var i = 1; i < args.length; ++i) {
      filename += args[i];
      if (args[i + 1]) filename += ' ';
    }
    $gameActors.actor(actorId).setProfileImage(filename);
};

Game_Interpreter.prototype.setActorProfileImageAlign = function(args) {
    var actorId = parseInt(args[0]);
    var align = String(args[1]);
    $gameActors.actor(actorId).setProfileImageAlign(align);
};

//=============================================================================
// Window_StatusCommand
//=============================================================================

MageStudios.PSP.Window_StatusCommand_createCommand =
    Window_StatusCommand.prototype.createCommand;
Window_StatusCommand.prototype.createCommand = function(command) {
    if (command.toUpperCase() === 'PROFILE') {
      var text = MageStudios.Param.PSPCmdName;
      this.addCommand(text, 'profile', true);
    } else {
      MageStudios.PSP.Window_StatusCommand_createCommand.call(this, command);
    }
};

MageStudios.PSP.Window_StatusCommand_addCustomCommands =
    Window_StatusCommand.prototype.addCustomCommands;
Window_StatusCommand.prototype.addCustomCommands = function() {
    MageStudios.PSP.Window_StatusCommand_addCustomCommands.call(this);
    if (this.findSymbol('profile') > -1) return;
    var text = MageStudios.Param.PSPCmdName;
    this.addCommand(text, 'profile', true);
};

MageStudios.PSP.Window_StatusCommand_isPlayOkSound =
    Window_StatusCommand.prototype.isPlayOkSound;
Window_StatusCommand.prototype.isPlayOkSound = function() {
    if (this.currentSymbol() === 'profile') return true;
    return MageStudios.PSP.Window_StatusCommand_isPlayOkSound.call(this);
};

//=============================================================================
// Window_StatusInfo
//=============================================================================

MageStudios.PSP.Window_StatusInfo_drawInfoContents =
    Window_StatusInfo.prototype.drawInfoContents;
Window_StatusInfo.prototype.drawInfoContents = function(symbol) {
    if (symbol === 'profile') {
      this.drawAllItems();
    } else {
      MageStudios.PSP.Window_StatusInfo_drawInfoContents.call(this, symbol);
    }
};

MageStudios.PSP.Window_StatusInfo_maxItems = Window_StatusInfo.prototype.maxItems;
Window_StatusInfo.prototype.maxItems = function() {
    if (this._symbol === 'profile') {
      return this._actor.profileStatusText().length;
    }
    return MageStudios.PSP.Window_StatusInfo_maxItems.call(this);
};

MageStudios.PSP.Window_StatusInfo_drawAllItems =
    Window_StatusInfo.prototype.drawAllItems;
Window_StatusInfo.prototype.drawAllItems = function() {
    if (this._symbol === 'profile' && this._actor) {
      if (this._actor.profileImage() !== '') {
        var bitmap = ImageManager.loadPicture(this._actor.profileImage());
        if (bitmap.width <= 0) {
          return setTimeout(this.drawAllItems.bind(this), 5);
        }
        this.drawProfileImage();
      }
    }
    MageStudios.PSP.Window_StatusInfo_drawAllItems.call(this);
};

Window_StatusInfo.prototype.drawProfileImage = function() {
    var source = ImageManager.loadPicture(this._actor.profileImage());
    var sx = 0; var sy = 0; var sw = source.width; var sh = source.height;
    var dw = sw; var dh = sh;
    if (dw > this.contents.width) {
      var rate = this.contents.width / dw;
      dw = Math.floor(dw * rate);
      dh = Math.floor(dh * rate);
    }
    if (dh > this.contents.height) {
      var rate = this.contents.height / dh;
      dw = Math.floor(dw * rate);
      dh = Math.floor(dh * rate);
    }
    var dy = this.contents.height - dh;
    if (this._actor.profileImageAlign() === 'left') {
      var dx = 0;
    } else if (this._actor.profileImageAlign() === 'center') {
      var dx = (this.contents.width - dw) / 2;
    } else {
      var dx = this.contents.width - dw;
    }
    this.contents.blt(source, sx, sy, sw, sh, dx, dy, dw, dh);
};

MageStudios.PSP.Window_StatusInfo_drawItem = Window_StatusInfo.prototype.drawItem;
Window_StatusInfo.prototype.drawItem = function(index) {
    MageStudios.PSP.Window_StatusInfo_drawItem.call(this, index);
    if (this._symbol === 'profile') this.drawProfileItem(index);
};

Window_StatusInfo.prototype.drawProfileItem = function(index) {
    var text = this._actor.profileStatusText()[index];
    var rect = this.itemRectForText(index);
    this.drawTextEx(text, rect.x, rect.y);
};

//=============================================================================
// Scene_Status
//=============================================================================

MageStudios.PSP.Scene_Status_setCommandWindowHandlers =
    Scene_Status.prototype.setCommandWindowHandlers;
Scene_Status.prototype.setCommandWindowHandlers = function() {
    MageStudios.PSP.Scene_Status_setCommandWindowHandlers.call(this);
    this._commandWindow.setHandler('profile', this.commandProfile.bind(this));
};

Scene_Status.prototype.commandProfile = function() {
    this._infoWindow.activate();
    this._infoWindow.select(0);
};

//=============================================================================
// End of File
//=============================================================================
};