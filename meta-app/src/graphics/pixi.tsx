/**
 * @file Declares the PIXI graphics.
 */
// import { Application, Graphics, Text } from "pixi.js";
import React from "react";
import { Stage, Container, Sprite, Text } from "@pixi/react";
import { data } from "../metaProgress";

const PixiApp: React.FC = () => {
    return (
        <Stage width={800} height={600} options={{
            backgroundColor: 0x1099bb,
        }}>
            <Container>
                <Text text="Hello, world!" x={400} y={300} anchor={0.5} />
            </Container>
        </Stage>
    );
};

export default PixiApp;
