/**
 * @file Declares the PIXI graphics.
 */
import { Application, Sprite, Texture } from "pixi.js";
import { Viewport } from "pixi-viewport";
// import { Viewport } from "../../node_modules/pixi-viewport/dist/Viewport.d.ts";

const app = new Application();

document.body.appendChild(app.view);

// Create a new viewport
const viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: 1000,
    worldHeight: 1000,

    events: app.renderer.events // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
});

// add the viewport to the stage
app.stage.addChild(viewport);

// activate plugins
viewport
    .drag()
    .pinch()
    .wheel()
    .decelerate();

// add a red box
const sprite = viewport.addChild(new Sprite(Texture.WHITE));
sprite.tint = 0xff0000;
sprite.width = sprite.height = 100;
sprite.position.set(100, 100);
