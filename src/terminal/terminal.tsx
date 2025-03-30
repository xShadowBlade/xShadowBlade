/**
 * @file The main xterm component.
 */
import React, { useEffect, useRef } from "react";
import type { UseXTermProps } from "react-xtermjs";
import { useXTerm, XTerm } from "react-xtermjs";

import { NebulaShAddon } from "nebula-sh";

/**
 * @returns The xterm component.
 */
export const Terminal: React.FC = () => {
    return (
        <XTerm
            options={{
                // Font and letter
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 14,
                letterSpacing: 1,
                lineHeight: 1.4,
                fontWeight: "400",
                fontWeightBold: "600",
                allowTransparency: true,

                // Cursor
                // Disabled because of custom blink css
                // cursorBlink: true,
                cursorStyle: "block",
                cursorInactiveStyle: "block",
                altClickMovesCursor: false,
                smoothScrollDuration: 100,

                theme: {
                    background: "#151515",
                    foreground: "#fff",
                    cursor: "#fff",

                    // ANSI colors (changed to be brighter)
                    black: "#333333",
                    red: "#ff6e73",
                    green: "#98e06a",
                    yellow: "#ffd74d",
                    blue: "#64a5ff",
                    magenta: "#d46dff",
                    cyan: "#6ae0ff",
                    white: "#eaeaea",
                },
            }}
            addons={[new NebulaShAddon()]}
        />
    );
};
