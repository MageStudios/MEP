//=============================================================================
// Mage Studios Engine Plugins - Battle Engine Extension - Animated Sideview Enemies
// MSEP_X_AnimatedSVEnemies.js
//=============================================================================

var Imported = Imported || {};
Imported.MSEP_X_AnimatedSVEnemies = true;

var MageStudios = MageStudios || {};
MageStudios.SVE = MageStudios.SVE || {};
MageStudios.SVE.version = 1.19;

//=============================================================================
 /*:
 * @plugindesc v1.19 (Requires MSEP_BattleEngineCore.js) This plugin lets
 * you use Animated Sideview Actors for enemies!
 * @author Mage Studios Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Anchor X
 * @parent ---General---
 * @type number
 * @decimals 1
 * @desc Sets the default anchor position of the sprite.
 * Default: 0.5
 * @default 0.5
 *
 * @param Anchor Y
 * @parent ---General---
 * @type number
 * @decimals 1
 * @desc Sets the default anchor position of the sprite.
 * Default: 1.0
 * @default 1.0
 *
 * @param Sprite Smoothing
 * @parent ---General---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable Sprite Smoothing? This is a global setting.
 * NO - false     YES - true
 * @default true
 *
 * @param Sprite Width
 * @parent ---General---
 * @desc Sets the minimum width for sideview sprites.
 * Use 'auto' for automatic detection. Default: 64
 * @default auto
 *
 * @param Sprite Height
 * @parent ---General---
 * @desc Sets the minimum height for sideview sprites.
 * Use 'auto' for automatic detection. Default: 64
 * @default auto
 *
 * @param Collapse
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc When a sprite dies, have it collapse and vanish?
 * NO - false     YES - true
 * @default false
 *
 * @param Frame Speed
 * @parent ---General---
 * @type number
 * @min 0
 * @desc The default frame speed used in between motions.
 * Default: 12
 * @default 12
 *
 * @param Show State Overlay
 * @parent ---General---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show state overlays on sideview enemies?
 * NO - false     YES - true
 * @default true
 *
 * @param ---Shadows---
 * @default
 *
 * @param Show Shadow
 * @parent ---Shadows---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show shadows on sideview enemies?
 * NO - false     YES - true
 * @default false
 *
 * @param Shadow Scale X
 * @parent ---Shadows---
 * @desc Sets the default horizontal shadow scale.
 * Use 'auto' for automatic detection. Default: 1
 * @default auto
 *
 * @param Shadow Scale Y
 * @parent ---Shadows---
 * @desc Sets the default vertical shadow scale.
 * Use 'auto' for automatic detection. Default: 1
 * @default auto
 *
 * @param ---Breathing---
 * @default
 *
 * @param Enable Breathing
 * @parent ---Breathing---
 * @desc Breathing option for enemies.
 * @type select
 * @option None
 * @value 0
 * @option Static
 * @value 1
 * @option Sideview
 * @value 2
 * @option Both
 * @value 3
 * 0 - None, 1 - Static, 2 - Sideview, 3 - Both
 * @default 1
 *
 * @param Breathing Speed
 * @parent ---Breathing---
 * @type number
 * @min 0
 * @desc The default breathing rate for enemies.
 * Lower - Faster     Larger - Slower
 * @default 20
 *
 * @param Breathing X Rate
 * @parent ---Breathing---
 * @type number
 * @decimals 3
 * @desc The default breathing X rate for enemies.
 * Lower - Static     Larger - Dynamic
 * @default 0.001
 *
 * @param Breathing Y Rate
 * @parent ---Breathing---
 * @type number
 * @decimals 3
 * @desc The default breathing Y rate for enemies.
 * Lower - Static     Larger - Dynamic
 * @default 0.020
 *
 * @param HP Link Breathing
 * @parent ---Breathing---
 * @type boolean
 * @on Link
 * @off Don't Link
 * @desc Link breathing rate to HP Rate?
 * NO - false     YES - true
 * @default false
 *
 * @param ---Floating---
 * @default
 *
 * @param Floating Speed
 * @parent ---Floating---
 * @type number
 * @min 0
 * @desc The default floating speed for enemies.
 * Lower - Faster     Larger - Slower
 * @default 20
 *
 * @param Floating Rate
 * @parent ---Floating---
 * @type number
 * @decimals 1
 * @desc The default floating rate for enemies.
 * Lower - Faster     Larger - Slower
 * @default 0.3
 *
 * @param Floating Height
 * @parent ---Floating---
 * @type number
 * @min 0
 * @desc The default minimum floating height for enemies.
 * Lower - Closer to Ground     Larger - Higher Up
 * @default 50
 *
 * @param Floating Death
 * @parent ---Floating---
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow enemies to remain floating while dead?
 * NO - false     YES - true
 * @default true
 *
 * @param ---Motions---
 * @default
 *
 * @param Attack Motion
 * @parent ---Motions---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Sets the default attack motion for no weapons.
 * Attack Motion Types: swing     thrust     missile
 * @default thrust
 *
 * @param Idle Motion
 * @parent ---Motions---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Sets the sprite's idle motion.
 * Default: walk
 * @default walk
 *
 * @param Damage Motion
 * @parent ---Motions---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Sets the sprite's taking damage motion.
 * Default: damage
 * @default damage
 *
 * @param Evade Motion
 * @parent ---Motions---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Sets the sprite's evasion motion.
 * Default: evade
 * @default evade
 *
 * @param Escape Motion
 * @parent ---Motions---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Sets the sprite's escape motion.
 * Default: escape
 * @default escape
 *
 * @param Guard Motion
 * @parent ---Motions---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Sets the sprite's guard motion.
 * Default: guard
 * @default guard
 *
 * @param Abnormal Motion
 * @parent ---Motions---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Sets the sprite's abnormal (status afflicted) motion.
 * Default: abnormal
 * @default abnormal
 *
 * @param Sleep Motion
 * @parent ---Motions---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Sets the sprite's sleeping motion.
 * Default: sleep
 * @default sleep
 *
 * @param Dying Motion
 * @parent ---Motions---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Sets the sprite's dying (crisis) motion.
 * Default: dying
 * @default dying
 *
 * @param Dead Motion
 * @parent ---Motions---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Sets the sprite's dead motion.
 * Default: dead
 * @default dead
 *
 * @param ---Weapons---
 * @default
 *
 * @param Weapon Image Index
 * @parent ---Weapons---
 * @type number
 * @min 0
 * @desc Sets the default weapon image index for the sprite.
 * Use 0 for no iMageStudios.
 * @default 0
 *
 * @param Weapon 1 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 1: Dagger     Motion: swing
 * @default swing
 *
 * @param Weapon 1 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 6
 *
 * @param Weapon 2 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 2: Sword     Motion: swing
 * @default swing
 *
 * @param Weapon 2 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 6
 *
 * @param Weapon 3 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 3: Flail     Motion: swing
 * @default swing
 *
 * @param Weapon 3 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 1
 *
 * @param Weapon 4 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 4: Axe     Motion: swing
 * @default swing
 *
 * @param Weapon 4 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 6
 *
 * @param Weapon 5 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 5: Whip     Motion: swing
 * @default swing
 *
 * @param Weapon 5 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 6
 *
 * @param Weapon 6 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 6: Staff     Motion: swing
 * @default swing
 *
 * @param Weapon 6 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 1
 *
 * @param Weapon 7 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 7: Long Bow     Motion: missile
 * @default missile
 *
 * @param Weapon 7 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 11
 *
 * @param Weapon 8 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 8: Crossbow     Motion: missile
 * @default missile
 *
 * @param Weapon 8 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 11
 *
 * @param Weapon 9 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 9: Gun     Motion: missile
 * @default missile
 *
 * @param Weapon 9 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 111
 *
 * @param Weapon 10 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 10: Claw     Motion: thrust
 * @default thrust
 *
 * @param Weapon 10 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 16
 *
 * @param Weapon 11 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 11: Glove     Motion: thrust
 * @default thrust
 *
 * @param Weapon 11 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 1
 *
 * @param Weapon 12 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 12: Spear     Motion: thrust
 * @default thrust
 *
 * @param Weapon 12 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 11
 *
 * @param Weapon 13 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 13: Mace     Motion: swing
 * @default swing
 *
 * @param Weapon 13 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 1
 *
 * @param Weapon 14 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 14: Rod     Motion: swing
 * @default swing
 *
 * @param Weapon 14 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 1
 *
 * @param Weapon 15 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 15: Club     Motion: swing
 * @default swing
 *
 * @param Weapon 15 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 1
 *
 * @param Weapon 16 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 16: Chain     Motion: swing
 * @default swing
 *
 * @param Weapon 16 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 6
 *
 * @param Weapon 17 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 17: Sword#2     Motion: swing
 * @default swing
 *
 * @param Weapon 17 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 7
 *
 * @param Weapon 18 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 18: Iron Pipe     Motion: swing
 * @default swing
 *
 * @param Weapon 18 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 1
 *
 * @param Weapon 19 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 19: Sling Shot     Motion: missile
 * @default missile
 *
 * @param Weapon 19 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 11
 *
 * @param Weapon 20 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 20: Shotgun     Motion: missile
 * @default missile
 *
 * @param Weapon 20 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 111
 *
 * @param Weapon 21 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 21: Rifle     Motion: missile
 * @default missile
 *
 * @param Weapon 21 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 111
 *
 * @param Weapon 22 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 22: Chainsaw     Motion: thrust
 * @default thrust
 *
 * @param Weapon 22 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 7
 *
 * @param Weapon 23 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 23: Railgun     Motion: missile
 * @default missile
 *
 * @param Weapon 23 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 15
 *
 * @param Weapon 24 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 24: Stun Rod     Motion: thrust
 * @default thrust
 *
 * @param Weapon 24 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 15
 *
 * @param Weapon 25 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 25: Spell Book   Motion: swing
 * @default swing
 *
 * @param Weapon 25 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 1
 *
 * @param Weapon 26 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 26: custom     Motion: thrust
 * @default thrust
 *
 * @param Weapon 26 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 1
 *
 * @param Weapon 27 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 27: custom     Motion: thrust
 * @default thrust
 *
 * @param Weapon 27 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 1
 *
 * @param Weapon 28 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 28: custom     Motion: thrust
 * @default thrust
 *
 * @param Weapon 28 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 1
 *
 * @param Weapon 29 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 29: custom     Motion: thrust
 * @default thrust
 *
 * @param Weapon 29 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 1
 *
 * @param Weapon 30 Motion
 * @parent ---Weapons---
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Motion used by default for this weapon iMageStudios.
 * Weapon 30: custom     Motion: thrust
 * @default thrust
 *
 * @param Weapon 30 Animation
 * @parent ---Weapons---
 * @type animation
 * @desc Battle animation used by default for this weapon iMageStudios.
 * @default 1
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires MSEP_BattleEngineCore.
 * Make sure this plugin is located under MSEP_BattleEngineCore in the
 * plugin list.
 *
 * This extension plugin allows you to animate enemies in a number of ways,
 * from giving static enemies breathing, floating, and scaled attributes to
 * utilizing animated sideview actors as potential battlers for your enemies
 * instead of static graphics to help make your enemies appear more lively!
 *
 * If you are using MSEP_X_ActSeqPack2, and would like the ability to add in
 * floating enemies, place this plugin under MSEP_X_ActSeqPack2 as well.
 *
 * To use this plugin, insert within the enemy's notebox the notetags you see
 * in the section below:
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert these notetags into the enemy noteboxes below to change their
 * sidewview battler aspects.
 *
 * Enemy Notetags:
 *
 *   --- General ---
 *
 *   <Breathing>
 *   <No Breathing>
 *   Enables or disables a 'breathing' effect for the enemy sprite.
 *
 *   <Breathing Speed: x>
 *   How many frames does it take to make a full breathing cycle? The lower the
 *   x value, the faster the enemy breathes. The higher the x value, the slower
 *   the enemy breathes.
 *
 *   <Breathing Rate X: x.y>
 *   <Breathing Rate Y: x.y>
 *   Sets the horizontal and vertical breathing rate to x.y. 1.0 is a 100%
 *   variance change while 0.0 is a 0% variance.
 *
 *   <Enable HP Link Breathing>
 *   <Disable HP Link Breathing>
 *   Will enable/disable HP Link Breathing. The lower the HP on the enemy, the
 *   slower the enemy will breathe.
 *
 *   <Floating>
 *   Sets the enemy to be animated as if it was floating.
 *
 *   <Floating Speed: x>
 *   How many frames does it take to do a full floating cycle? The lower the x
 *   value, the faster the enemy floats. The higher the x value, the slower the
 *   enemy floats.
 *
 *   <Floating Rate: x.y>
 *   Sets the floating rate for the enemy to x.y. 1.0 is a 100% variance change
 *   while 0.0 is a 0% variance change.
 *
 *   <Floating Height: x>
 *   Sets the minimum float height for the enemy to x.
 *
 *   <Floating Death>
 *   <No Floating Death>
 *   Decide whether or not this particular enemy will float while dead or
 *   instead, drop to the ground instantly and will bypass the 'Floating Death'
 *   plugin parameter for the particular enemy.
 *
 *   <Scale Sprite: x%>
 *   This allows you to scale the sprite larger or smaller by x% of the
 *   original sprite size. If you wish to only scale either the width or the
 *   height, use the notetags below:
 *
 *   <Scale Sprite Width: x%>
 *   <Scale Sprite Height: x%>
 *   This will scale the sprite's width or height by x% amount specifically
 *   rather than the whole sprite itself by the same ratio.
 *
 *   --- Sideview ---
 *
 *   <Sideview Battler: filename>
 *   This is the filename used for the sideview battler found within your
 *   project's img/sv_actors/ folder. Doing this will enable the following
 *   notetags to be applied to the battler. This is case-sensitive and used
 *   without the image's file extension.
 *
 *   *Example: SF_Actor3_8.png would be <Sideview Battler: SF_Actor3_8>
 *
 *   *Note: If more than one of these tags is used, the sideview battler
 *   selected will be picked from a random pool. Their settings, however, will
 *   match all of the other sideview settings set in the notetags for the sake
 *   of simplicity.
 *
 *   --- Sideview Specific ---
 *
 *   <Sideview Anchor X: y.z>
 *   <Sideview Anchor Y: y.z>
 *   This sets the anchor location for the enemy's sideview battler at y.z.
 *   This is used for the event you have an odd-proportioned sideview battler.
 *
 *   <Sideview Width: x>
 *   <Sideview Height: x>
 *   Sets the width/height of the sideview battler. This is for the event
 *   you're using a battler image that may have different proportions than
 *   normal sideview battlers.
 *
 *   <Sideview Collapse>
 *   Sets it so that the enemy when it dies will collapse and vanish.
 *
 *   <Sideview No Collapse>
 *   Sets it so that the enemy when it dies will leave behind a corpse and
 *   will not vanish.
 *
 *   <Sideview Frame Speed: x>
 *   Sets the frame speed of this sideview battler to x. The lower the x value,
 *   the faster the sideview battler animates. The higher it is, the slower the
 *   battler animates.
 *
 *   --- State Overlays ---
 *
 *   <Sideview Show State Overlay>
 *   <Sideview Hide State Overlay>
 *   This will either show or hide the state overlay for the sideview enemy and
 *   ignore the default setting within the plugin parameters.
 *
 *   --- Motions ---
 *
 *   <Sideview Attack Motion: swing>
 *   <Sideview Attack Motion: thrust>
 *   <Sideview Attack Motion: missile>
 *   Sets the basic attack motion for your sideview enemy if the sideview
 *   enemy is not using any weapons. You can use any of the following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Weapon: x>
 *   This sets the sprite's weapon image to x. If you haven't modified your
 *   system images of the weapons, they would be as follows:
 *
 *   0 - Nothing
 *   1 - Dagger   7 - Long Bow  13 - Mace       19 - Slingshot  25 - Book
 *   2 - Sword    8 - Crossbow  14 - Rod        20 - Shotgun    26 - Custom
 *   3 - Flail    9 - Gun       15 - Club       21 - Rifle      27 - Custom
 *   4 - Axe     10 - Claw      16 - Chain      22 - Chainsaw   28 - Custom
 *   5 - Whip    11 - Glove     17 - Sword#2    23 - Railgun    29 - Custom
 *   6 - Staff   12 - Spear     18 - Iron Pipe  24 - Stun Rod   30 - Custom
 *
 *   * Note: Inserting multiple of these notetags will put them inside a random
 *   pool of weapons to use. Keep in mind if you use this notetag, it will use
 *   all the default settings found in the plugin's parameters. If you wish to
 *   use more unique settings, use the notetag below:
 *
 *   <Sideview Weapon: x, y, z>
 *   This sets the sprite's weapon image to x, motion to y, and attack
 *   animation to z. An example of how this notetag would be used would be
 *   as such:
 *   
 *      <Sideview Weapon: 2, swing, 6>
 *
 *   This will give the battler a sword with the swing motion and playing
 *   battle animation 6 when attacking.
 *
 *   <Sideview Idle Motion: x>
 *   Sets the idling motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *   * Note: Inserting multiple of these notetags will put them inside a random
 *   pool of motions to use.
 *
 *   <Sideview Damage Motion: x>
 *   Sets the damaged motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Evade Motion: x>
 *   Sets the evasion motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Escape Motion: x>
 *   Sets the escaping motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Guard Motion: x>
 *   Sets the guard motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Abnormal Motion: x>
 *   Sets the abnormal motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Sleep Motion: x>
 *   Sets the sleep motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Dying Motion: x>
 *   Sets the dying (crisis) motion for your sideview enemy. You can use any
 *   of the following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   <Sideview Dead Motion: x>
 *   Sets the dead motion for your sideview enemy. You can use any of the
 *   following motions:
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 *   --- Shadows ---
 *
 *   <Sideview Show Shadow>
 *   Sets it so the enemy will show its shadow for its sideview sprite. The
 *   default setting of this is tied to Battle Engine Core's 'Show Shadows'.
 *
 *   <Sideview Hide Shadow>
 *   Sets it so the enemy will hide its shadow for its sideview sprite. The
 *   default setting of this is tied to Battle Engine Core's 'Show Shadows'.
 *
 *   <Sideview Shadow Width: x%>
 *   Sets the shadow width to x% larger/smaller than the default shadow size
 *   found within the img/system folder.
 *
 *   <Sideview Shadow Height: x%>
 *   Sets the shadow height to x% larger/smaller than the default shadow size
 *   found within the img/system folder.
 *
 * State Notetags:
 *
 *   <Hide Sideview Weapon>
 *   This will cause the animated sideview enemy battler to hide its sideview
 *   weapon effect. The attack motion will revert back to the barehanded attack
 *   motion set for the enemy and the attack animation will be the enemy's
 *   default attack animation.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.19:
 * - Bugfix provided by SwiftIllusion regarding the animation positioning on
 * animated sideview enemies.
 *
 * Version 1.18:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Verison 1.17:
 * - Visual graphic update to sync attack animations properly with how actor
 * animations are now handled in the more updated RPG Maker MV versions.
 *
 * Version 1.16:
 * - Added 'Floating Death' plugin parameter.
 * - Optimization update.
 *
 * Version 1.15:
 * - Updated for RPG Maker MV version 1.3.2.
 *
 * Version 1.14:
 * - Pixi4 update to fix bug that caused state icons to fly off the screen.
 * - Fixed a compatibility issue with MSEP_X_VisualStateFX regarding state
 * sprites being disabled and causing crashes.
 *
 * Version 1.13:
 * - Compatibility update with MSEP_X_VisualStateFX to disable State Overlays on
 * enemies properly.
 *
 * Version 1.12:
 * - Fixed a bug that caused the <Sideview Show State Overlay> and 
 * <Sideview Hide State Overlay> notetags to not work.
 * - Fixed a bug that caused scaled enemies to have their state icons and
 * overlays appear in odd places.
 *
 * Version 1.11:
 * - Fixed a bug that caused hidden enemies to appear early on.
 *
 * Version 1.10:
 * - Optimized plugin to use less resources. Animated enemies will no longer
 * have a static graphic once the game is loaded.
 *
 * Version 1.09:
 * - Added a fix for state icons appearing behind battlers for the users who
 * aren't using the Action Sequence Packs.
 *
 * Version 1.08:
 * - State Icon and State Overlays will now synch together for floating and
 * jumping battlers.
 *
 * Version 1.07:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.06a:
 * - Fixed a bug that prevented animated sideview enemies from not mirroring.
 * - Added <Sideview Show State Overlay> and <Sideview Hide State Overlay>
 * notetags to make certain enemies show/hide state overlays.
 * - Fixed a bug that was caused by motion notetags not retrieved properly.
 *
 * Version 1.05:
 * - Made adjustments to the <Sprite Height: x> notetag to also affect the
 * location of the state icons and effects.
 *
 * Version 1.04:
 * - Fixed a bug with Sprite Smoothing disabled on Shadows.
 * - Fixed a bug with the anchor Y positions being overwritten.
 *
 * Version 1.03:
 * - Fixed a bug that would cause <Sideview Width: x> & <Sideview Height: x>
 * notetags to crash the game.
 *
 * Version 1.02:
 * - Synchronized state icons and overlays with floating enemies.
 *
 * Version 1.01:
 * - Added 'HP Link Breathing' plugin parameter. If enabled, the lower the HP,
 * the slower the enemy breathes.
 * - Added <Enable HP Link Breathing> and <Disable HP Link Breathing> notetags.
 *
 * Version 1.00:
 * - Finished plugin! Hooray!
 */
//=============================================================================

if (Imported.MSEP_BattleEngineCore) {

if (MageStudios.BEC.version && MageStudios.BEC.version >= 1.42) {

//=============================================================================
// Parameter Variables
//=============================================================================

MageStudios.Parameters = PluginManager.parameters('MEP_X_AnimatedSVEnemies');
MageStudios.Param = MageStudios.Param || {};

MageStudios.Param.SVEAnchorX = Number(MageStudios.Parameters['Anchor X']);
MageStudios.Param.SVEAnchorY = Number(MageStudios.Parameters['Anchor Y']);
MageStudios.Param.SVESmoothing = eval(String(MageStudios.Parameters['Sprite Smoothing']));
MageStudios.Param.SVEWidth = String(MageStudios.Parameters['Sprite Width']);
MageStudios.Param.SVEWidth = MageStudios.Param.SVEWidth.toLowerCase();
MageStudios.Param.SVEHeight = String(MageStudios.Parameters['Sprite Height']);
MageStudios.Param.SVEHeight = MageStudios.Param.SVEHeight.toLowerCase();
MageStudios.Param.SVECollapse = eval(String(MageStudios.Parameters['Collapse']));
MageStudios.Param.SVEFrameSpeed = Number(MageStudios.Parameters['Frame Speed']);
MageStudios.Param.SVEOverlay = eval(String(MageStudios.Parameters['Show State Overlay']));

MageStudios.Param.SVEBreathing = Number(MageStudios.Parameters['Enable Breathing']);
MageStudios.Param.SVEBreathSpeed = Number(MageStudios.Parameters['Breathing Speed']);
MageStudios.Param.SVEBreathXRate = Number(MageStudios.Parameters['Breathing X Rate']);
MageStudios.Param.SVEBreathYRate = Number(MageStudios.Parameters['Breathing Y Rate']);
MageStudios.Param.SVELinkBreathing = eval(MageStudios.Parameters['HP Link Breathing']);

MageStudios.Param.SVEFloatSpeed = Number(MageStudios.Parameters['Floating Speed']);
MageStudios.Param.SVEFloatRate = Number(MageStudios.Parameters['Floating Rate']);
MageStudios.Param.SVEFloatHeight = Number(MageStudios.Parameters['Floating Height']);
MageStudios.Param.SVEFloatDeath = String(MageStudios.Parameters['Floating Death']);
MageStudios.Param.SVEFloatDeath = eval(MageStudios.Param.SVEFloatDeath);

MageStudios.Param.SVEShowShadow = eval(String(MageStudios.Parameters['Show Shadow']));
MageStudios.Param.SVEShadowScaleX = String(MageStudios.Parameters['Shadow Scale X']);
MageStudios.Param.SVEShadowScaleY = String(MageStudios.Parameters['Shadow Scale Y']);

MageStudios.Param.SVEAttackMotion = String(MageStudios.Parameters['Attack Motion']);
MageStudios.Param.SVEIdleMotion = String(MageStudios.Parameters['Idle Motion']);
MageStudios.Param.SVEDmgMotion = String(MageStudios.Parameters['Damage Motion']);
MageStudios.Param.SVEEvadeMotion = String(MageStudios.Parameters['Evade Motion']);
MageStudios.Param.SVEEscMotion = String(MageStudios.Parameters['Escape Motion']);
MageStudios.Param.SVEGuardMotion = String(MageStudios.Parameters['Guard Motion']);
MageStudios.Param.SVEAbnMotion = String(MageStudios.Parameters['Abnormal Motion']);
MageStudios.Param.SVESleepMotion = String(MageStudios.Parameters['Sleep Motion']);
MageStudios.Param.SVEDyingMotion = String(MageStudios.Parameters['Dying Motion']);
MageStudios.Param.SVEDeadMotion = String(MageStudios.Parameters['Dead Motion']);

MageStudios.Param.SVEWeaponIndex = Number(MageStudios.Parameters['Weapon Image Index']);
MageStudios.Param.SVEWeaponMotion = {};
MageStudios.Param.SVEWeaponAnimation = {};
MageStudios.Param.SVEWeaponMotion[0] = MageStudios.Param.SVEAttackMotion.toLowerCase();
for (MageStudios.i = 1; MageStudios.i < 31; ++MageStudios.i) {
  MageStudios.s1 = 'Weapon ' + MageStudios.i + ' Motion';
  MageStudios.s2 = String(MageStudios.Parameters[MageStudios.s1]);
  MageStudios.Param.SVEWeaponMotion[MageStudios.i] = MageStudios.s2.toLowerCase();
  MageStudios.s1 = 'Weapon ' + MageStudios.i + ' Animation';
  MageStudios.s2 = Number(MageStudios.Parameters[MageStudios.s1]);
  MageStudios.Param.SVEWeaponAnimation[MageStudios.i] = MageStudios.s2;
};

//=============================================================================
// DataManager
//=============================================================================

MageStudios.SVE.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!MageStudios.SVE.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!MageStudios._loaded_MSEP_X_AnimatedSVEnemies) {
    this.processSVENotetags1($dataEnemies);
    this.processSVENotetags2($dataStates);
    MageStudios._loaded_MSEP_X_AnimatedSVEnemies = true;
  }
  return true;
};

DataManager.processSVENotetags1 = function(group) {
  var noteWeapon = /<(?:SIDEVIEW WEAPON):[ ](\d+),[ ](.*),[ ](\d+)>/i;
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.sideviewBattler = [];
    obj.sideviewAttackMotion = MageStudios.Param.SVEAttackMotion.toLowerCase();
    obj.sideviewIdleMotion = [];
    obj.sideviewDmgMotion = MageStudios.Param.SVEDmgMotion.toLowerCase();
    obj.sideviewEvadeMotion = MageStudios.Param.SVEEvadeMotion.toLowerCase();
    obj.sideviewEscMotion = MageStudios.Param.SVEEscMotion.toLowerCase();
    obj.sideviewGuardMotion = MageStudios.Param.SVEGuardMotion.toLowerCase();
    obj.sideviewAbnMotion = MageStudios.Param.SVEAbnMotion.toLowerCase();
    obj.sideviewSleepMotion = MageStudios.Param.SVESleepMotion.toLowerCase();
    obj.sideviewDyingMotion = MageStudios.Param.SVEDyingMotion.toLowerCase();
    obj.sideviewDeadMotion = MageStudios.Param.SVEDeadMotion.toLowerCase();
    obj.sideviewAnchorX = MageStudios.Param.SVEAnchorX;
    obj.sideviewAnchorY = MageStudios.Param.SVEAnchorY;
    obj.sideviewWeaponImage = [];
    obj.sideviewWidth = MageStudios.Param.SVEWidth;
    obj.sideviewHeight = MageStudios.Param.SVEHeight;
    obj.sideviewCollapse = MageStudios.Param.SVECollapse;
    obj.sideviewShadowShow = MageStudios.Param.SVEShowShadow;
    obj.sideviewShadowScaleX = MageStudios.Param.SVEShadowScaleX;
    obj.sideviewShadowScaleY = MageStudios.Param.SVEShadowScaleY;
    obj.spriteScaleX = 1;
    obj.spriteScaleY = 1;
    obj.sideviewFrameSpeed = MageStudios.Param.SVEFrameSpeed;
    obj.sideviewBreathing = [1, 3].contains(MageStudios.Param.SVEBreathing);
    obj.sideviewBreathSpeed = Math.max(1, MageStudios.Param.SVEBreathSpeed);
    obj.sideviewBreathXRate = Math.max(0, MageStudios.Param.SVEBreathXRate);
    obj.sideviewBreathYRate = Math.max(0, MageStudios.Param.SVEBreathYRate);
    obj.sideviewLinkBreathing = MageStudios.Param.SVELinkBreathing;
    obj.sideviewFloating = false;
    obj.sideviewFloatSpeed = MageStudios.Param.SVEFloatSpeed;
    obj.sideviewFloatRate = MageStudios.Param.SVEFloatRate;
    obj.sideviewFloatHeight = MageStudios.Param.SVEFloatHeight;
    obj.sideviewFloatDeath = MageStudios.Param.SVEFloatDeath;
    obj.sideviewStateOverlay = MageStudios.Param.SVEOverlay;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
       if (line.match(/<(?:SCALE SPRITE):[ ](\d+)([%％])>/i)) {
        obj.spriteScaleX = parseFloat(RegExp.$1) * 0.01;
        obj.spriteScaleY = obj.spriteScaleX;
      } else if (line.match(/<(?:SCALE SPRITE WIDTH):[ ](\d+)([%％])>/i)) {
        obj.spriteScaleX = parseFloat(RegExp.$1) * 0.01;
      } else if (line.match(/<(?:SCALE SPRITE HEIGHT):[ ](\d+)([%％])>/i)) {
        obj.spriteScaleY = parseFloat(RegExp.$1) * 0.01;
      } else if (line.match(/<(?:SIDEVIEW BATTLER):[ ](.*)>/i)) {
        obj.sideviewBattler.push(String(RegExp.$1));
        obj.sideviewBreathing = [2, 3].contains(MageStudios.Param.SVEBreathing);
      } else if (line.match(/<(?:SIDEVIEW ATTACK MOTION):[ ](.*)>/i)) {
        obj.sideviewAttackMotion = String(RegExp.$1).toLowerCase();
      } else if (line.match(/<(?:SIDEVIEW IDLE MOTION):[ ](.*)>/i)) {
        obj.sideviewIdleMotion.push(String(RegExp.$1).toLowerCase());
      } else if (line.match(/<(?:SIDEVIEW DAMAGE MOTION):[ ](.*)>/i)) {
        obj.sideviewDmgMotion = String(RegExp.$1).toLowerCase();
      } else if (line.match(/<(?:SIDEVIEW EVADE MOTION):[ ](.*)>/i)) {
        obj.sideviewEvadeMotion = String(RegExp.$1).toLowerCase();
      } else if (line.match(/<(?:SIDEVIEW ESCAPE MOTION):[ ](.*)>/i)) {
        obj.sideviewEscMotion = String(RegExp.$1).toLowerCase();
      } else if (line.match(/<(?:SIDEVIEW GUARD MOTION):[ ](.*)>/i)) {
        obj.sideviewGuardMotion = String(RegExp.$1).toLowerCase();
      } else if (line.match(/<(?:SIDEVIEW ABNORMAL MOTION):[ ](.*)>/i)) {
        obj.sideviewAbnMotion = String(RegExp.$1).toLowerCase();
      } else if (line.match(/<(?:SIDEVIEW SLEEP MOTION):[ ](.*)>/i)) {
        obj.sideviewSleepMotion = String(RegExp.$1).toLowerCase();
      } else if (line.match(/<(?:SIDEVIEW DYING MOTION):[ ](.*)>/i)) {
        obj.sideviewDyingMotion = String(RegExp.$1).toLowerCase();
      } else if (line.match(/<(?:SIDEVIEW DEAD MOTION):[ ](.*)>/i)) {
        obj.sideviewDeadMotion = String(RegExp.$1).toLowerCase();
      } else if (line.match(/<(?:SIDEVIEW ANCHOR X):[ ](\d+)[.](\d+)>/i)) {
        obj.sideviewAnchorX = eval(String(RegExp.$1) + '.' + String(RegExp.$2));
      } else if (line.match(/<(?:SIDEVIEW ANCHOR Y):[ ](\d+)[.](\d+)>/i)) {
        obj.sideviewAnchorY = eval(String(RegExp.$1) + '.' + String(RegExp.$2));
      } else if (line.match(/<(?:SIDEVIEW WEAPON):[ ](\d+)>/i)) {
        var weaponId = parseInt(RegExp.$1);
        var motionId = MageStudios.Param.SVEWeaponMotion[weaponId].toLowerCase();
        var aniId = MageStudios.Param.SVEWeaponAnimation[weaponId];
        var index = obj.sideviewWeaponIMageStudios.length;
        obj.sideviewWeaponImage[index] = [weaponId, motionId, aniId];
      } else if (line.match(noteWeapon)) {
        var weaponId = parseInt(RegExp.$1);
        var motionId = String(RegExp.$2).toLowerCase();
        var aniId = parseInt(RegExp.$3);
        var index = obj.sideviewWeaponIMageStudios.length;
        obj.sideviewWeaponImage[index] = [weaponId, motionId, aniId];
      } else if (line.match(/<(?:SIDEVIEW WIDTH):[ ](\d+)>/i)) {
        obj.sideviewWidth = parseInt(RegExp.$1);
      } else if (line.match(/<(?:SIDEVIEW HEIGHT):[ ](\d+)>/i)) {
        obj.sideviewHeight = parseInt(RegExp.$1);
      } else if (line.match(/<(?:SIDEVIEW COLLAPSE)>/i)) {
        obj.sideviewCollapse = true;
      } else if (line.match(/<(?:SIDEVIEW NO COLLAPSE)>/i)) {
        obj.sideviewCollapse = false;
      } else if (line.match(/<(?:SIDEVIEW SHOW SHADOW)>/i)) {
        obj.sideviewShadowShow = true;
      } else if (line.match(/<(?:SIDEVIEW HIDE SHADOW)>/i)) {
        obj.sideviewShadowShow = false;
      } else if (line.match(/<(?:SIDEVIEW SHADOW WIDTH):[ ](\d+)([%％])>/i)) {
        obj.sideviewShadowScaleX = parseFloat(RegExp.$1 * 0.01);
      } else if (line.match(/<(?:SIDEVIEW SHADOW HEIGHT):[ ](\d+)([%％])>/i)) {
        obj.sideviewShadowScaleY = parseFloat(RegExp.$1 * 0.01);
      } else if (line.match(/<(?:SIDEVIEW FRAME SPEED):[ ](\d+)>/i)) {
        obj.sideviewFrameSpeed = parseInt(RegExp.$1);
      } else if (line.match(/<(?:FLOATING|float)>/i)) {
        obj.sideviewFloating = true;
      } else if (line.match(/<(?:FLOATING SPEED):[ ](\d+)>/i)) {
        obj.sideviewFloatSpeed = Math.max(1, parseInt(RegExp.$1));
      } else if (line.match(/<(?:FLOATING RATE):[ ](\d+)[.](\d+)>/i)) {
        var rate = eval(String(RegExp.$1) + '.' + String(RegExp.$2));
        obj.sideviewFloatRate = rate;
      } else if (line.match(/<(?:FLOATING HEIGHT):[ ](\d+)>/i)) {
        obj.sideviewFloatHeight = parseInt(RegExp.$1);
      } else if (line.match(/<(?:FLOATING DEATH|FLOAT DEATH)>/i)) {
        obj.sideviewFloatDeath = true;
      } else if (line.match(/<(?:NO FLOATING DEATH|NO FLOAT DEATH)>/i)) {
        obj.sideviewFloatDeath = false;
      } else if (line.match(/<SIDEVIEW SHOW STATE OVERLAY>/i)) {
        obj.sideviewStateOverlay = true;
      } else if (line.match(/<SIDEVIEW HIDE STATE OVERLAY>/i)) {
        obj.sideviewStateOverlay = false;
      }
    }
    // Breathing
    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:BREATHING)>/i)) {
        obj.sideviewBreathing = true;
      } else if (line.match(/<(?:NO BREATHING)>/i)) {
        obj.sideviewBreathing = false;
      } else if (line.match(/<(?:BREATHING SPEED):[ ](\d+)>/i)) {
        obj.sideviewBreathSpeed = Math.max(1, parseInt(RegExp.$1));
      } else if (line.match(/<(?:BREATHING RATE X):[ ](\d+)[.](\d+)>/i)) {
        var rate = eval(String(RegExp.$1) + '.' + String(RegExp.$2));
        obj.sideviewBreathXRate = rate;
      } else if (line.match(/<(?:BREATHING RATE Y):[ ](\d+)[.](\d+)>/i)) {
        var rate = eval(String(RegExp.$1) + '.' + String(RegExp.$2));
        obj.sideviewBreathYRate = rate;
      } else if (line.match(/<(?:ENABLE HP LINK BREATHING)>/i)) {
        obj.sideviewLinkBreathing = true;
      } else if (line.match(/<(?:DISABLE HP LINK BREATHING)>/i)) {
        obj.sideviewLinkBreathing = false;
      }
    }
    // Create Defaults
    if (obj.sideviewIdleMotion.length <= 0) {
      obj.sideviewIdleMotion = [MageStudios.Param.SVEIdleMotion.toLowerCase()];
    }
    if (obj.sideviewWeaponIMageStudios.length <= 0) {
      var weaponId = MageStudios.Param.SVEWeaponIndex;
      var motionId = MageStudios.Param.SVEWeaponMotion[weaponId].toLowerCase();
      var aniId = MageStudios.Param.SVEWeaponAnimation[weaponId];
      obj.sideviewWeaponImage = [[weaponId, motionId, aniId]];
    }
    obj.sideviewFrameSpeed = Math.max(1, obj.sideviewFrameSpeed);
    if (obj.sideviewBattler.length > 0) {
      if (Imported.MSEP_X_BattleSysCTB) {
        MageStudios.Param.CTBEnemySVBattler = true;
      }
      obj.battlerName = '';
      obj.battlerHue = 0;
    }
  }
};

DataManager.processSVENotetags2 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.hideSVWeapon;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:HIDE SIDEVIEW WEAPON)>/i)) {
        obj.hideSVWeapon = true;
      }
    }
  }
};

//=============================================================================
// ImageManager
//=============================================================================

if (MageStudios.Param.SVESmoothing) {

ImageManager.loadSvActor = function(filename, hue) {
    return this.loadBitmap('img/sv_actors/', filename, hue, true);
};

ImageManager.loadSystemSmooth = function(filename, hue) {
    return this.loadBitmap('img/system/', filename, hue, true);
};

}; // MageStudios.Param.SVESmoothing

//=============================================================================
// Game_Battler
//=============================================================================

MageStudios.SVE.Game_Battler_spriteWidth = Game_Battler.prototype.spriteWidth;
Game_Battler.prototype.spriteWidth = function() {
    if (this.isSideviewDimensions('width')) {
      var value = this.sideviewWidth();
    } else {
      var value = MageStudios.SVE.Game_Battler_spriteWidth.call(this);
    }
    //value *= Math.abs(this.spriteScaleX());
    return Math.floor(value);
};

MageStudios.SVE.Game_Battler_spriteHeight = Game_Battler.prototype.spriteHeight;
Game_Battler.prototype.spriteHeight = function() {
    if (this.isSideviewDimensions('height')) {
      var value = this.sideviewHeight();
    } else {
      var value = MageStudios.SVE.Game_Battler_spriteHeight.call(this);
    }
    //value *= Math.abs(this.spriteScaleY());
    return Math.floor(value);
};

Game_Battler.prototype.isSideviewDimensions = function(value) {
    if (!this.isEnemy()) return false;
    if (!this.hasSVBattler()) return false;
    if (value === 'width') return this.sideviewWidth() !== 'auto';
    if (value === 'height') return this.sideviewHeight() !== 'auto';
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.actor = function() {
    return this.enemy();
};

Game_Enemy.prototype.clearSVAttributes = function() {
    this._svWeaponImageId = undefined;
    this._svAttackMotion = undefined;
    this._svAttackAnimationId = undefined;
    this._svBattlerName = undefined;
    this._svIdleMotion = undefined;
};

Game_Enemy.prototype.setupSVAttributes = function() {
    var array = this.enemy().sideviewWeaponImage;
    var newArray = MageStudios.Util.getRandomElement(array);
    this._svWeaponImageId = newArray[0];
    this._svAttackMotion = newArray[1];
    this._svAttackAnimationId = newArray[2];
    if (this._svAttackAnimationId === undefined) this._svAttackAnimationId =
      MageStudios.SVE.Game_Enemy_attackAnimationId.call(this);
};

MageStudios.SVE.Game_Enemy_attackAnimationId =
    Game_Enemy.prototype.attackAnimationId;
Game_Enemy.prototype.attackAnimationId = function() {
    if (this.hasSVBattler() && !this.isHideSVWeapon()) {
      if (this._svAttackAnimationId) return this._svAttackAnimationId;
      this.setupSVAttributes();
      return this._svAttackAnimationId;
    }
    return MageStudios.SVE.Game_Enemy_attackAnimationId.call(this);
};

Game_Enemy.prototype.svBattlerName = function() {
    if (this._svBattlerName) return this._svBattlerName;
    var array = this.enemy().sideviewBattler;
    this._svBattlerName = MageStudios.Util.getRandomElement(array);
    return this._svBattlerName;
};

Game_Enemy.prototype.hasSVBattler = function() {
    return this.svBattlerName() !== undefined;
};

Game_Enemy.prototype.weaponImageId = function() {
    if (this.isHideSVWeapon()) return 0;
    if (this._svWeaponImageId) return this._svWeaponImageId;
    this.setupSVAttributes();
    return this._svWeaponImageId;
};

Game_Enemy.prototype.attackMotion = function() {
    if (this.weaponImageId() === 0) return this.enemy().sideviewAttackMotion;
    if (this._svAttackMotion) return this._svAttackMotion;
    this.setupSVAttributes();
    return this._svAttackMotion;
};

Game_Enemy.prototype.idleMotion = function() {
    if (this._svIdleMotion) return this._svIdleMotion;
    var array = this.enemy().sideviewIdleMotion;
    this._svIdleMotion = MageStudios.Util.getRandomElement(array);
    return this._svIdleMotion;
};

Game_Enemy.prototype.damageMotion = function() {
    return this.enemy().sideviewDmgMotion;
};

Game_Enemy.prototype.evadeMotion = function() {
    return this.enemy().sideviewEvadeMotion;
};

Game_Enemy.prototype.escapeMotion = function() {
    return this.enemy().sideviewEscMotion;
};

Game_Enemy.prototype.guardMotion = function() {
    return this.enemy().sideviewGuardMotion;
};

Game_Enemy.prototype.abnormalMotion = function() {
    return this.enemy().sideviewAbnMotion;
};

Game_Enemy.prototype.sleepMotion = function() {
    return this.enemy().sideviewSleepMotion;
};

Game_Enemy.prototype.dyingMotion = function() {
    return this.enemy().sideviewDyingMotion;
};

Game_Enemy.prototype.deadMotion = function() {
    return this.enemy().sideviewDeadMotion;
};

Game_Enemy.prototype.sideviewAnchorX = function() {
    return this.enemy().sideviewAnchorX;
};

Game_Enemy.prototype.sideviewAnchorY = function() {
    return this.enemy().sideviewAnchorY;
};

Game_Enemy.prototype.anchorX = function() {
    if (this.hasSVBattler()) return this.sideviewAnchorX();
    return Game_Battler.prototype.anchorX.call(this);
};

Game_Enemy.prototype.anchorY = function() {
    if (this.hasSVBattler()) return this.sideviewAnchorY();
    return Game_Battler.prototype.anchorY.call(this);
};

Game_Enemy.prototype.sideviewWidth = function() {
    return this.enemy().sideviewWidth;
};

Game_Enemy.prototype.sideviewHeight = function() {
    return this.enemy().sideviewHeight;
};

Game_Enemy.prototype.sideviewCollapse = function() {
    return this.enemy().sideviewCollapse;
};

Game_Enemy.prototype.showSideviewShadow = function() {
    return this.enemy().sideviewShadowShow;
};

Game_Enemy.prototype.sideviewShadowScaleX = function() {
    return this.enemy().sideviewShadowScaleX;
};

Game_Enemy.prototype.sideviewShadowScaleY = function() {
    return this.enemy().sideviewShadowScaleY;
};

Game_Enemy.prototype.spriteScaleX = function() {
    if (this.hasSVBattler()) return this.enemy().spriteScaleX * -1;
    return this.enemy().spriteScaleX;
};

Game_Enemy.prototype.spriteScaleY = function() {
    return this.enemy().spriteScaleY;
};

Game_Enemy.prototype.sideviewFrameSpeed = function() {
    return this.enemy().sideviewFrameSpeed;
};

Game_Enemy.prototype.performAttack = function() {
    if (!this.hasSVBattler()) {
      return Game_Battler.prototype.performAttack.call(this);
    }
    this.forceMotion(this.attackMotion());
    this.startWeaponAnimation(this.weaponImageId());
};

Game_Enemy.prototype.performAction = function(action) {
    if (!this.hasSVBattler()) {
      return Game_Battler.prototype.performAction.call(this, action);
    }
    Game_Actor.prototype.performAction.call(this, action);
};

MageStudios.SVE.Game_Enemy_performDamage = Game_Enemy.prototype.performDamage;
Game_Enemy.prototype.performDamage = function() {
    if (!this.hasSVBattler()) {
      return MageStudios.SVE.Game_Enemy_performDaMageStudios.call(this);
    }
    Game_Battler.prototype.performDaMageStudios.call(this);
    if (this.isSpriteVisible()) {
      this.requestMotion(this.damageMotion());
    } else {
      $gameScreen.startShake(5, 5, 10);
    }
    SoundManager.playEnemyDamage();
};

Game_Enemy.prototype.performEvasion = function() {
    Game_Battler.prototype.performEvasion.call(this);
    if (!this.hasSVBattler()) return;
    this.requestMotion(this.evadeMotion());
};

Game_Enemy.prototype.performMagicEvasion = function() {
    Game_Battler.prototype.performMagicEvasion.call(this);
    if (!this.hasSVBattler()) return;
    this.requestMotion(this.evadeMotion());
};

Game_Enemy.prototype.performCounter = function() {
    Game_Battler.prototype.performCounter.call(this);
    if (!this.hasSVBattler()) return;
    this.performAttack();
};

Game_Enemy.prototype.performEscape = function() {
    if (!this.hasSVBattler()) return;
    if (!this.canMove()) return;
    this.requestMotion(this.escapeMotion());
};

Game_Enemy.prototype.isBreathing = function() {
    if (this.isDead()) return false;
    return this.enemy().sideviewBreathing;
};

Game_Enemy.prototype.breathingSpeed = function() {
    return this.enemy().sideviewBreathSpeed;
};

Game_Enemy.prototype.breathXRate = function() {
    return this.enemy().sideviewBreathXRate;
};

Game_Enemy.prototype.breathYRate = function() {
    return this.enemy().sideviewBreathYRate;
};

Game_Enemy.prototype.linkBreathing = function() {
    return this.enemy().sideviewLinkBreathing;
};

Game_Enemy.prototype.isFloating = function() {
    if (this.isDead() && !this.enemy().sideviewFloatDeath) return false;
    return this.enemy().sideviewFloating;
};

Game_Enemy.prototype.floatSpeed = function() {
    return this.enemy().sideviewFloatSpeed;
};

Game_Enemy.prototype.floatRate = function() {
    return this.enemy().sideviewFloatRate;
};

Game_Enemy.prototype.floatHeight = function() {
    return this.enemy().sideviewFloatHeight;
};

Game_Enemy.prototype.isHideSVWeapon = function() {
    var max = this.states().length;
    for (var i = 0; i < max; ++i) {
      var state = this.states()[i];
      if (state && state.hideSVWeapon) return true;
    }
    return false;
};

MageStudios.SVE.Game_Enemy_transform = Game_Enemy.prototype.transform;
Game_Enemy.prototype.transform = function(enemyId) {
    this.clearSVAttributes();
    MageStudios.SVE.Game_Enemy_transform.call(this, enemyId);
    this.battler().setTransform(this);
    this.battler().setBattler(this);
};

//=============================================================================
// Game_Party
//=============================================================================

MageStudios.SVE.Game_Party_requestMotionRefresh =
    Game_Party.prototype.requestMotionRefresh;
Game_Party.prototype.requestMotionRefresh = function() {
    MageStudios.SVE.Game_Party_requestMotionRefresh.call(this);
    $gameTroop.requestMotionRefresh();
};

//=============================================================================
// Sprite_Enemy
//=============================================================================

MageStudios.SVE.Sprite_Enemy_initMembers = Sprite_Enemy.prototype.initMembers;
Sprite_Enemy.prototype.initMembers = function() {
    MageStudios.SVE.Sprite_Enemy_initMembers.call(this);
    this._battlerName = null;
    this.initSVSprites();
};

Sprite_Enemy.prototype.initSVSprites = function() {
    this._svRand = Math.random() * 10000;
    this._svBattlerName = '';
    this._motion = null;
    this._motionCount = 0;
    this._pattern = 0;
    this._svBattlerEnabled = false;
    this.createShadowSprite();
    this.createWeaponSprite();
    this.createMainSprite();
    this.createStateSprite();
    this._effectTarget = this;
};

Sprite_Enemy.prototype.setTransform = function(battler) {
    this._shadowSprite.opacity = 0;
    this._weaponSprite.opacity = 0;
    this._mainSprite.opacity = 0;
    this._stateSprite.opacity = 0;
    if (battler.svBattlerName()) {
      this.createShadowSprite();
      this.createWeaponSprite();
      this.createMainSprite();
      this.createStateSprite();
      this._shadowSprite.opacity = 255;
      this._weaponSprite.opacity = 255;
      this._mainSprite.opacity = 255;
      this._stateSprite.opacity = 255;
    }
};

Sprite_Enemy.prototype.createMainSprite = function() {
    Sprite_Actor.prototype.createMainSprite.call(this);
};

Sprite_Enemy.prototype.createShadowSprite = function() {
    this._shadowSprite = new Sprite();
    if (MageStudios.Param.SVESmoothing) {
      this._shadowSprite.bitmap = ImageManager.loadSystemSmooth('Shadow2');
    } else {
      this._shadowSprite.bitmap = ImageManager.loadSystem('Shadow2');
    }    
    this._shadowSprite.anchor.x = 0.5;
    this._shadowSprite.anchor.y = 0.5;
    this._shadowSprite.y = -2;
    this.addChild(this._shadowSprite);
    this._shadowSprite.opacity = 0;
};

Sprite_Enemy.prototype.createWeaponSprite = function() {
    Sprite_Actor.prototype.createWeaponSprite.call(this);
};

Sprite_Enemy.prototype.createStateSprite = function() {
    if (Imported.MSEP_X_VisualStateFX) {
      if (!MageStudios.Param.VSFXEnemyOver) return;
    }
    Sprite_Actor.prototype.createStateSprite.call(this);
};

MageStudios.SVE.Sprite_Enemy_setBattler = Sprite_Enemy.prototype.setBattler;
Sprite_Enemy.prototype.setBattler = function(battler) {
    this._svBattlerEnabled = false;
    this.initSVSprites();
    MageStudios.SVE.Sprite_Enemy_setBattler.call(this, battler);
    this.setSVBattler(battler);
};

Sprite_Enemy.prototype.setMirror = function(value) {
    if (this._svBattlerEnabled) value = !value;
    Sprite_Battler.prototype.setMirror.call(this, value);
};

Sprite_Enemy.prototype.setSVBattler = function(battler) {
    if (!this._enemy) return;
    if (this._enemy.svBattlerName() === undefined) return;
    this._adjustMainBitmapSettings = false;
    this._actor = this._enemy;
    this._svBattlerEnabled = true;
    if (this._stateSprite) this._stateSprite.setup(battler);
};

MageStudios.SVE.Sprite_Enemy_update = Sprite_Enemy.prototype.update;
Sprite_Enemy.prototype.update = function() {
    MageStudios.SVE.Sprite_Enemy_update.call(this);
    if (this._svBattlerEnabled) this.updateMotion();
    this.updateBreathing();
    if (!Imported.MSEP_X_ActSeqPack2) this.updateStateIconHeight();
};

MageStudios.SVE.Sprite_Enemy_updateStateSprite =
    Sprite_Enemy.prototype.updateStateSprite;
Sprite_Enemy.prototype.updateStateSprite = function() {
    if (this._enemy && this._enemy.hasSVBattler()) {
      this.updateSVStateSprite();
    } else {
      MageStudios.SVE.Sprite_Enemy_updateStateSprite.call(this);
    }
    this.updateFloatingStateSprite();
};

Sprite_Enemy.prototype.updateSVStateSprite = function() {
    if (!this._stateSprite) return;
    this._stateSprite.visible = this._enemy.enemy().sideviewStateOverlay;
    return;
    var height = this._enemy.spriteHeight() * -1;
    height -= Sprite_StateIcon._iconHeight;
    this._stateIconSprite.y = height;
    this._stateSprite.y = (this._enemy.spriteHeight() - 64) * -1;
};

Sprite_Enemy.prototype.updateFloatingStateSprite = function() {
    if (this._enemy && this._enemy.isFloating()) {
      var heightRate = this.addFloatingHeight();
      var height = this._enemy.spriteHeight();
      this._stateIconSprite.y += Math.ceil(heightRate * height);
      this._stateSprite.y += Math.ceil(heightRate * height);
    };
};

Sprite_Enemy.prototype.updateBreathing = function() {
    if (!this._enemy) return;
    if (this._enemy.isBreathing()) {
      var c = Graphics.frameCount + this._svRand;
      var s = this._enemy.breathingSpeed();
      var rateX = this._enemy.breathXRate();
      var rateY = this._enemy.breathYRate();
      if (this._enemy.linkBreathing()) s /= this._enemy.hpRate();
      var scaleX = Math.cos(c / s) * rateX;
      var scaleY = Math.cos(c / s) * rateY;
    } else {
      var scaleX = 0;
      var scaleY = 0;
    }
    var mirror = this.scale.x > 0 ? 1 : -1;
    this.scale.x = this._enemy.spriteScaleX() + scaleX;
    this.scale.x = Math.abs(this.scale.x) * mirror;
    this.scale.y = this._enemy.spriteScaleY() + scaleY;
};

if (Imported.MSEP_X_ActSeqPack2) {

MageStudios.SVE.Sprite_Battler_getFloatHeight = 
    Sprite_Battler.prototype.getFloatHeight;
Sprite_Battler.prototype.getFloatHeight = function() {
    var value = MageStudios.SVE.Sprite_Battler_getFloatHeight.call(this);
    value -= this.addFloatingHeight();
    return value;
};

Sprite_Battler.prototype.addFloatingHeight = function() {
    value = 0;
    if (this._enemy && this._enemy.isFloating()) {
      var c = Graphics.frameCount + this._svRand;
      var s = this._enemy.floatSpeed();
      var rate = this._enemy.floatRate();
      value += Math.cos(c / s) * rate - rate;
      var height = this._enemy.floatHeight();
      value -= height / this._enemy.spriteHeight();
    }
    return value;
};

} else { // If MSEP_X_ActSeqPack2 is NOT installed

Sprite_Enemy.prototype.updateStateIconHeight = function() {
  if (!this._stateIconSprite) return;
  var height = this._battler.spriteHeight() * -1;
  height -= Sprite_StateIcon._iconHeight;
  height /= this.scale.y;
  this._stateIconSprite.y = height;
};

} // Imported.MSEP_X_ActSeqPack2

MageStudios.SVE.Sprite_Enemy_updateBitmap = Sprite_Enemy.prototype.updateBitmap;
Sprite_Enemy.prototype.updateBitmap = function() {
    MageStudios.SVE.Sprite_Enemy_updateBitmap.call(this);
    if (!this._svBattlerEnabled) this.updateScale();
    this.updateSVBitmap();
    this.adjustAnchor();
};

Sprite_Enemy.prototype.updateSVBitmap = function() {
    Sprite_Battler.prototype.updateBitmap.call(this);
    var name = this._enemy.svBattlerName();
    if (this._svBattlerEnabled && this._svBattlerName !== name) {
      this._createdDummyMainSprite = false;
      this._svBattlerName = name;
      this._mainSprite.bitmap = ImageManager.loadSvActor(name);
      this.adjustAnchor();
      this.refreshMotion();
      this.updateScale();
    } else if (this._svBattlerName === '') {
      this._svBattlerName = '';
      this._svBattlerEnabled = false;
      if (this._createdDummyMainSprite) return;
      this._createdDummyMainSprite = true;
      this._mainSprite = new Sprite_Base();
      this._mainSprite.anchor.x = 0.5;
      this._mainSprite.anchor.y = 1;
    }
};

Sprite_Enemy.prototype.adjustAnchor = function() {
    if (!this._mainSprite) return;
    this._mainSprite.anchor.x = this._enemy.sideviewAnchorX();
    this._mainSprite.anchor.y = this._enemy.sideviewAnchorY();
};

Sprite_Enemy.prototype.updateScale = function() {
    this.scale.x = this._enemy.spriteScaleX();
    this.scale.y = this._enemy.spriteScaleY();
    if (this._stateIconSprite) {
      var safe = 1 / 100000;
      var sprite = this._stateIconSprite;
      sprite.scale.x = 1 / Math.max(safe, Math.abs(this.scale.x));
      sprite.scale.y = 1 / Math.max(safe, Math.abs(this.scale.y));
    }
};

MageStudios.SVE.Sprite_Enemy_updateFrame = Sprite_Enemy.prototype.updateFrame;
Sprite_Enemy.prototype.updateFrame = function() {
    if (this._svBattlerEnabled) return this.updateSVFrame();
    MageStudios.SVE.Sprite_Enemy_updateFrame.call(this);
};

Sprite_Enemy.prototype.updateSVFrame = function() {
    Sprite_Battler.prototype.updateFrame.call(this);
    var bitmap = this._mainSprite.bitmap;
    if (bitmap.width <= 0) return;
    this._effectTarget = this._mainSprite;
    var motionIndex = this._motion ? this._motion.index : 0;
    var pattern = this._pattern < 3 ? this._pattern : 1;
    var cw = bitmap.width / 9;
    var ch = bitmap.height / 6;
    var cx = Math.floor(motionIndex / 6) * 3 + pattern;
    var cy = motionIndex % 6;
    var cdh = 0;
    if (this._effectType === 'bossCollapse') {
      cdh = ch - this._effectDuration;
    }
    // this.setFrame(cx * cw, cy * ch, cw, ch);
    this._mainSprite.setFrame(cx * cw, cy * ch, cw, ch - cdh);
    this.adjustMainBitmapSettings(bitmap);
    this.adjustSVShadowSettings();
};

Sprite_Enemy.prototype.adjustMainBitmapSettings = function(bitmap) {
    if (this._adjustMainBitmapSettings) return;
    this._adjustMainBitmapSettings = true;
    var svw = this._enemy.sideviewWidth();
    var svh = this._enemy.sideviewHeight();
    if (svw === 'auto') svw = bitmap.width / 9;
    if (svh === 'auto') svh = bitmap.height / 6;
    svw = Math.floor(Math.abs(svw * this._enemy.spriteScaleX()));
    svh = Math.floor(Math.abs(svh * this._enemy.spriteScaleY()));
    this.bitmap = new Bitmap(svw, svh);
};

Sprite_Enemy.prototype.adjustSVShadowSettings = function() {
    if (this._enemy.showSideviewShadow()) this._shadowSprite.opacity = 255;
    var scaleX = this._enemy.sideviewShadowScaleX();
    var scaleY = this._enemy.sideviewShadowScaleY();
    if (scaleX === 'auto') scaleX = this._mainSprite.bitmap.width / 9 / 64;
    if (scaleY === 'auto') scaleY = this._mainSprite.bitmap.width / 9 / 64;
    this._shadowSprite.scale.x = scaleX;
    this._shadowSprite.scale.y = scaleY;
};

Sprite_Enemy.prototype.updateMotion = function() {
    if (!this._svBattlerEnabled) return;
    this.setupMotion();
    this.setupWeaponAnimation();
    if (this._enemy.isMotionRefreshRequested()) {
      Sprite_Actor.prototype.refreshMotion.call(this);
      this._enemy.clearMotion();
    }
    this.updateMotionCount();
};

Sprite_Enemy.prototype.setupMotion = function() {
    if (!this._svBattlerEnabled) return;
    if (!this._enemy.isMotionRequested()) return;
    this.startMotion(this._enemy.motionType());
    this._enemy.clearMotion();
};

Sprite_Enemy.prototype.startMotion = function(motionType) {
    if (!this._svBattlerEnabled) return;
    var newMotion = Sprite_Actor.MOTIONS[motionType];
    if (this._motion === newMotion) return;
    this._motion = newMotion;
    this._motionCount = 0;
    this._pattern = 0;
};

Sprite_Enemy.prototype.setupWeaponAnimation = function() {
    if (!this._svBattlerEnabled) return;
    if (!this._enemy.isWeaponAnimationRequested()) return;
    this._weaponSprite.setup(this._enemy.weaponImageId());
    this._enemy.clearWeaponAnimation();
};

Sprite_Enemy.prototype.updateMotionCount = function() {
    if (!this._svBattlerEnabled) return;
    if (this._motion && ++this._motionCount >= this.motionSpeed()) {
      if (this._motion.loop) {
        this._pattern = (this._pattern + 1) % 4;
      } else if (this._pattern < 2) {
        this._pattern++;
      } else if (this._pattern >= 2) {
        this.startMotion(this._enemy.idleMotion());
      } else {
        this.refreshMotion();
      }
      this._motionCount = 0;
    }
};

Sprite_Enemy.prototype.refreshMotion = function() {
    if (!this._svBattlerEnabled) return;
    var enemy = this._enemy;
    if (!enemy) return;
    var motionGuard = Sprite_Actor.MOTIONS['guard'];
    if (this._motion === motionGuard && !BattleManager.isInputting()) return;
    var stateMotion = enemy.stateMotionIndex();
    if (enemy.isInputting() || enemy.isActing()) {
        this.startMotion('walk');
    } else if (stateMotion === 3) {
        this.startMotion(enemy.deadMotion());
    } else if (stateMotion === 2) {
        this.startMotion(enemy.sleepMotion());
    } else if (enemy.isGuard() || enemy.isGuardWaiting()) {
        this.startMotion(enemy.guardMotion());
    } else if (stateMotion === 1) {
        this.startMotion(enemy.abnormalMotion());
    } else if (enemy.isDying()) {
        this.startMotion(enemy.dyingMotion());
    } else {
        this.startMotion(enemy.idleMotion());
    }
};

Sprite_Enemy.prototype.motionSpeed = function() {
    if (!this._enemy) return 12;
    return this._enemy.sideviewFrameSpeed() || 12;
};

Sprite_Enemy.prototype.updateSelectionEffect = function() {
    if (!this._svBattlerEnabled) {
      return Sprite_Battler.prototype.updateSelectionEffect.call(this);
    }
    var target = this._mainSprite;
    if (this._battler.isSelected()) {
        this._selectionEffectCount++;
        if (this._selectionEffectCount % 30 < 15) {
            target.setBlendColor([255, 255, 255, 64]);
        } else {
            target.setBlendColor([0, 0, 0, 0]);
        }
    } else if (this._selectionEffectCount > 0) {
        this._selectionEffectCount = 0;
        target.setBlendColor([0, 0, 0, 0]);
    }
};

Sprite_Enemy.prototype.isSideviewCollapse = function() {
    if (!this._svBattlerEnabled) return true;
    return this._enemy.sideviewCollapse();
};

MageStudios.SVE.Sprite_Enemy_updateCollapse = Sprite_Enemy.prototype.updateCollapse;
Sprite_Enemy.prototype.updateCollapse = function() {
    if (!this.isSideviewCollapse()) return;
    if (this._svBattlerEnabled) {
      this._mainSprite.blendMode = Graphics.BLEND_ADD;
      this._mainSprite.setBlendColor([255, 128, 128, 128]);
      this.opacity *= this._effectDuration / (this._effectDuration + 1);
    } else {
      MageStudios.SVE.Sprite_Enemy_updateCollapse.call(this);
    }
};

MageStudios.SVE.Sprite_Enemy_startBossCollapse =
    Sprite_Enemy.prototype.startBossCollapse;
Sprite_Enemy.prototype.startBossCollapse = function() {
    if (this._svBattlerEnabled) {
      this._effectDuration = Math.ceil(this._mainSprite.height * this.scale.y);
    this._appeared = false;
    } else {
      MageStudios.SVE.Sprite_Enemy_startBossCollapse.call(this);
    }
};

MageStudios.SVE.Sprite_Enemy_updateBossCollapse =
    Sprite_Enemy.prototype.updateBossCollapse;
Sprite_Enemy.prototype.updateBossCollapse = function() {
    if (!this.isSideviewCollapse()) return;
    if (this._svBattlerEnabled) {
      this._shake = this._effectDuration % 2 * 4 - 2;
      this._mainSprite.blendMode = Graphics.BLEND_ADD;
      this._mainSprite.setBlendColor([255, 255, 255, 255 - this.opacity]);
      this.opacity *= this._effectDuration / (this._effectDuration + 1);
      if (this._effectDuration % 20 === 19) {
        SoundManager.playBossCollapse2();
      }
    } else {
      MageStudios.SVE.Sprite_Enemy_updateBossCollapse.call(this);
    }
};

MageStudios.SVE.Sprite_Enemy_updateInstantCollapse =
    Sprite_Enemy.prototype.updateInstantCollapse;
Sprite_Enemy.prototype.updateInstantCollapse = function() {
    if (!this.isSideviewCollapse()) return;
    MageStudios.SVE.Sprite_Enemy_updateInstantCollapse.call(this);
};

Sprite_Enemy.prototype.forceMotion = function(motionType) {
    var newMotion = Sprite_Actor.MOTIONS[motionType];
    this._motion = newMotion;
    this._motionCount = 0;
    this._pattern = 0;
};

//=============================================================================
// Sprite_Animation
// ----------------------------------------------------------------------------
// Code provided by SwiftIllusion
//=============================================================================

MageStudios.SVE.Sprite_Animation_updatePosition = 
  Sprite_Animation.prototype.updatePosition;
Sprite_Animation.prototype.updatePosition = function() {
  MageStudios.SVE.Sprite_Animation_updatePosition.call(this);
  this.updateSvePosition();
};

Sprite_Animation.prototype.updateSvePosition = function() {
  if (typeof this._target.parent._battler != 'undefined'){
    if (this._animation.position !== 3) {
      if (this._animation.position === 0) {
        if (this._target.parent._battler.isEnemy()) {
          this.y -= this._target.parent._texture.height;
        };
      } else if (this._animation.position === 1) {
        if (this._target.parent._battler.isEnemy()) {
          this.y -= this._target.parent._texture.height / 2;
        };
      }
    }
  }
};

//=============================================================================
// Utilities
//=============================================================================

MageStudios.Util = MageStudios.Util || {};

MageStudios.Util.getRandomElement = function(array) {
    var value = array[Math.floor(Math.random() * array.length)];
    return value;
};

//=============================================================================
// End of File
//=============================================================================
} else { // MageStudios.BEC.version

var text = '================================================================\n';
text += 'MEP_X_AnimatedSVEnemies requires MSEP_BattleEngineCore to be at the ';
text += 'latest version to run properly.\n\nPlease go to www.MageStudios.moe and ';
text += 'update to the latest version for the MSEP_BattleEngineCore plugin.\n';
text += '================================================================\n';
console.log(text);
require('nw.gui').Window.get().showDevTools();

} // MageStudios.BEC.version
}; // MSEP_BattleEngineCore