/**
 * @file The main xterm component.
 */
import React, { useEffect, useRef } from "react";
import type { UseXTermProps } from "react-xtermjs";
import { useXTerm } from "react-xtermjs";

/**
 * @returns The xterm component.
 */
export const Terminal: React.FC = () => {
    // Use the xterm instance and ref.
    const { instance, ref } = useXTerm({
        // options: {
        //     cursorBlink: true,
        //     fontSize: 16,
        //     fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace",
        //     theme: {
        //         background: "#000000",
        //         foreground: "#FFFFFF",
        //     },
        // },
    });

    // If the instance is not available, return an empty div.
    if (!instance) {
        return <div />;
    }

    // Write to the terminal.
    instance.writeln("Hello world!");
    instance.onData((data) => instance.write(data));

    return <div ref={ref} style={{ width: "100%", height: "100%" }} />;
};
