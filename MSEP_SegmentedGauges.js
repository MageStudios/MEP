//=============================================================================
// Mage Studios Engine Plugins - Segmented Gauges
// MSEP_SegmentedGauges.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_SegmentedGauges = true;

var MageStudios = MageStudios || {};
MageStudios.SegGauge = MageStudios.SegGauge || {};
MageStudios.SegGauge.version = 1.00;

//=============================================================================
 /*:
 * @plugindesc Segment up your gauges to make them easier to read.
 * @author Mage Studios Engine Plugins + Tigress + Collaboration
 *
 * @param ---Segments---
 * @default
 *
 * @param HP Gauge Segments
 * @parent ---Segments---
 * @type Number
 * @min 1
 * @desc How much HP will make a segment?
 * @default 100
 *
 * @param MP Gauge Segments
 * @parent ---Segments---
 * @type Number
 * @min 1
 * @desc How much MP will make a segment?
 * @default 15
 *
 * @param TP Gauge Segments
 * @parent ---Segments---
 * @type Number
 * @min 1
 * @desc How much TP will make a segment?
 * @default 10
 *
 * @param ---Status Menu Core---
 * @default
 *
 * @param EXP Gauge Segments
 * @parent ---Status Menu Core---
 * @type Number
 * @min 1
 * @desc How much EXP will make a segment for your EXP gauge?
 * @default 100
 *
 * @param Param Gauge Segments
 * @parent ---Status Menu Core---
 * @type Number
 * @min 1
 * @desc What values will make a segment for your parameters?
 * @default 100
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Segments are divided up depending on a specific flat value amount, allowing
 * for the player to guess the exact value of an HP, MP, or TP gauge. This is
 * because normally, gauges can be kind of hard to read when they're a bit too
 * long. Make them more visually friendly by segmenting them up so the player
 * has a better idea of how much of a battler's HP, MP, or TP is left. You can
 * set much value will be used per segment, too.
 *
 * This plugin is plug and play, but you can adjust the plugin parameters to
 * fit the settings and needs of your game. Adjust the values found in the
 * plugin's parameters to adjust the mentioned aspect to change up the segments
 * found in a gauge's HP, MP, or TP. 
 *
 * The Status Menu Core also has compatibility with this plugin to display
 * segmented gauges for the EXP gauges and the parameter gauges. Like with the
 * other plugin parameters, you can adjust the amount of segments added per
 * gauge with them to separate them for easier viewing.
 *
 * This is a collaboration plugin by Tigress and Mage to ensure compatibility
 * with the Mage Studios Engine Plugins library and with special thanks to Fragrarch
 * for an idea on how to approach this.
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

if (Imported.MSEP_SectionedGauges) {

var text = '================================================================\n';
text += 'You are trying to use MSEP_SegmentedGauges with MSEP_SectionedGauges.\n';
text += 'These two plugins cannot be used with each other. Please disable\n';
text += 'one or the other.\n';
text += '================================================================\n';
console.log(text);
require('nw.gui').Window.get().showDevTools();

} else {

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MSEP_SegmentedGauges');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.SegmentGaugesHp = Number(MageStudios.Parameters['HP Gauge Segments']);
MageStudios.Param.SegmentGaugesMp = Number(MageStudios.Parameters['MP Gauge Segments']);
MageStudios.Param.SegmentGaugesTp = Number(MageStudios.Parameters['TP Gauge Segments']);

MageStudios.Param.SegmentGaugesExp = Number(MageStudios.Parameters['EXP Gauge Segments']);
MageStudios.Param.SegmentGaugesParam =
  Number(MageStudios.Parameters['Param Gauge Segments']);

//=============================================================================
// Window_Base
//=============================================================================

MageStudios.SegGauge.Window_Base_initialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function(x, y, width, height) {
  this.clearGaugeSegments();
  MageStudios.SegGauge.Window_Base_initialize.call(this, x, y, width, height);
};

MageStudios.SegGauge.Window_Base_drawActorHp = Window_Base.prototype.drawActorHp;
Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
  this.setGaugeSegments(actor.mhp / MageStudios.Param.SegmentGaugesHp);
  MageStudios.SegGauge.Window_Base_drawActorHp.call(this, actor, x, y, width);
  this.clearGaugeSegments();
};

MageStudios.SegGauge.Window_Base_drawActorMp = Window_Base.prototype.drawActorMp;
Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
  this.setGaugeSegments(actor.mmp / MageStudios.Param.SegmentGaugesMp);
  MageStudios.SegGauge.Window_Base_drawActorMp.call(this, actor, x, y, width);
  this.clearGaugeSegments();
};

MageStudios.SegGauge.Window_Base_drawActorTp = Window_Base.prototype.drawActorTp;
Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
  this.setGaugeSegments(actor.maxTp() / MageStudios.Param.SegmentGaugesTp);
  MageStudios.SegGauge.Window_Base_drawActorTp.call(this, actor, x, y, width);
  this.clearGaugeSegments();
};

Window_Base.prototype.setGaugeSegments = function(segments) {
  this._gaugeSegments = segments;
};

Window_Base.prototype.clearGaugeSegments = function() {
  this._gaugeSegments = 0;
};

MageStudios.SegGauge.Window_Base_drawGauge = Window_Base.prototype.drawGauge;
Window_Base.prototype.drawGauge = function(dx, dy, dw, rate, color1, color2) {
  MageStudios.SegGauge.Window_Base_drawGauge.call(this, dx, dy, dw, rate, 
    color1, color2);
  this.drawGaugeSegments(dx, dy, dw, 0, 0);
};

Window_Base.prototype.drawGaugeSegments = function(dx, dy, dw, xB, yB) {
  var segments = this._gaugeSegments;
  if (segments) {
    var originalX = dx;
    var originalW = dw;
    var gaugeH = this.gaugeHeight() - 2;
    var gaugeY = dy + this.lineHeight() - gaugeH - 2 + yB;
    if (this.isGaugeOutline()) {
      dx += 1;
      dw -= 2;
      gaugeY -= 2;
    }
    dx += xB;
    var segmentWidth = Math.ceil(dw / segments);
    if (segmentWidth > 1) {
      var color = this.gaugeBackColor();
      for (var i = 1; i < segments; ++i) {
        dx += segmentWidth;
        if (dx > originalX + originalW) return;
        this.contents.fillRect(dx, gaugeY, 1, gaugeH, color);
      }
    }
  }
};

//=============================================================================
// Compatibility Stuff
// ----------------------------------------------------------------------------
// MSEP_CoreEngine
//=============================================================================

if (!Imported.MSEP_CoreEngine) {

Window_Base.prototype.gaugeHeight = function() {
  return 6;
};

}; // Imported.MSEP_CoreEngine

Window_Base.prototype.isGaugeOutline = function() {
  if (this._isGaugeOutline === undefined) {
    if (Imported.MSEP_CoreEngine) {
      this._isGaugeOutline = eval(MageStudios.Param.GaugeOutline);
    } else {
      this._isGaugeOutline = false;
    }
  }
  return this._isGaugeOutline;
};

//=============================================================================
// Compatibility Stuff
// ----------------------------------------------------------------------------
// MSEP_X_VisualHpGauge
//=============================================================================

if (Imported.MSEP_X_VisualHpGauge) {

MageStudios.SegGauge.Window_VisualHPGauge_drawActorHp =
  Window_VisualHPGauge.prototype.drawActorHp;
Window_VisualHPGauge.prototype.drawActorHp = function(actor, x, y, w) {
  this.setGaugeSegments(actor.mhp / MageStudios.Param.SegmentGaugesHp);
  MageStudios.SegGauge.Window_VisualHPGauge_drawActorHp.call(this, actor, x, y, w);
  this.clearGaugeSegments();
};

MageStudios.SegGauge.Window_VisualHPGauge_drawGauge =
  Window_VisualHPGauge.prototype.drawGauge;
Window_VisualHPGauge.prototype.drawGauge =
function(dx, dy, dw, rate, color1, color2) {
  MageStudios.SegGauge.Window_VisualHPGauge_drawGauge.call(this, dx, dy, dw, rate,
    color1, color2);
  this.drawGaugeSegments(dx, dy, dw, 0, 1);
};

}; // Imported.MSEP_X_VisualHpGauge

//=============================================================================
// Compatibility Stuff
// ----------------------------------------------------------------------------
// MSEP_StatusMenuCore
//=============================================================================

if (Imported.MSEP_StatusMenuCore) {

MageStudios.SegGauge.Window_StatusInfo_drawExpGauge =
  Window_StatusInfo.prototype.drawExpGauge;
Window_StatusInfo.prototype.drawExpGauge = function(actor, rate, rect) {
  this.setGaugeSegments(MageStudios.Param.SegmentGaugesExp);
  MageStudios.SegGauge.Window_StatusInfo_drawExpGauge.call(this, actor, rate, rect);
  this.clearGaugeSegments();
};

MageStudios.SegGauge.Window_StatusInfo_drawParamGauge =
  Window_StatusInfo.prototype.drawParamGauge;
Window_StatusInfo.prototype.drawParamGauge = function(dx, dy, dw, paramId) {
  this.setGaugeSegments(MageStudios.Param.SegmentGaugesParam);
  var rate = MageStudios.SegGauge.Window_StatusInfo_drawParamGauge.call(this, dx, dy,
    dw, paramId);
  this.clearGaugeSegments();
  return rate;
};

}; // Imported.MSEP_StatusMenuCore

//=============================================================================
// End of File
//=============================================================================
}; // Imported.MSEP_SectionedGauges