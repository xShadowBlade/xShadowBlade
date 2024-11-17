/**
 * @file Initialize the PixiJS application and the viewport.
 */
import { Application, Graphics, Sprite, Texture } from "pixi.js";
// @ts-expect-error - pixi-viewport is commonjs
import { Viewport } from "pixi-viewport";

const app = new Application({
    backgroundColor: 0x00030a,
    resizeTo: window,
    antialias: true,
    autoDensity: true, // !!!
    resolution: 2,
});

document.body.appendChild(app.view as HTMLCanvasElement);

// create viewport
const viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: 1000,
    worldHeight: 1000,

    events: app.renderer.events, // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
});

// add the viewport to the stage
app.stage.addChild(viewport);

// activate plugins
viewport.drag().pinch().wheel().decelerate();

// add a red box
// const sprite = viewport.addChild(new Sprite(Texture.WHITE));
// sprite.tint = 0xff0000;
// sprite.width = sprite.height = 100;
// sprite.position.set(100, 100);

// add a white circle
// const circle = viewport.addChild(new Sprite(Texture.WHITE));
const circle = viewport.addChild(new Graphics().beginFill(0xffffff).drawCircle(0, 0, 50));
circle.tint = 0xffffff;
circle.position.set(100, 100);
