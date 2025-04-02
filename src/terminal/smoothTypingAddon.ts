/**
 * @file Declares the smooth typing addon.
 */
import type { Terminal, ITerminalAddon, IDisposable } from "@xterm/xterm";
import gsap from "gsap";

/**
 * The smooth typing addon.
 * ! This is a work in progress.
 * @deprecated
 */
export class SmoothTypingAddon implements ITerminalAddon {
    /**
     * The event listener to add.
     * @param terminal - The terminal to add the event listener to.
     * @param data - The data to add to the terminal.
     */
    private onData(terminal: Terminal, data: string): void {
        // const { cols, rows } = terminal;

        const cursorX = terminal.buffer.active.cursorX;
        const cursorY = terminal.buffer.active.cursorY;

        const cursor = document.querySelector(".xterm-cursor") as HTMLSpanElement | null;

        if (!cursor) {
            return;
        }

        const cellWidth = 9; // Adjust for your font size
        const cellHeight = 18; // Adjust for your font size

        // Move the cursor smoothly
        // gsap.to(cursor, {
        //     right: cursorX * cellWidth,
        //     bottom: cursorY * cellHeight,
        //     duration: 0.15,
        //     ease: "power2.out",

        //     // test
        //     onComplete: () => {
        //         console.log("complete");
        //     },
        // });

        // Change the top and left properties
        // cursor.style.position = "absolute";
        cursor.style.top = `${cursorY * cellHeight}px`;
        cursor.style.left = `${(cursorX - 1) * cellWidth}px`;

        // const computedProperties = getComputedStyle(cursor);

        // computedProperties.setProperty("xterm-cursor-top", `${cursorY * cellHeight}px`);
        // computedProperties.setProperty("xterm-cursor-left", `${cursorX * cellWidth}px`);

        // Hacky way
        // const stylesheets = document.styleSheets[0];

        // stylesheets.insertRule(`.xterm-cursor { top: ${cursorY * cellHeight}px; left: ${cursorX * cellWidth}px; }`, 0);

        // Debug
        console.log({
            // cursorX,
            // cursorY,
            // x: cursorX * cellWidth,
            // y: cursorY * cellHeight,
            top: cursor.style.top,
            a: cursor.style,
            left: cursor.style.left,
            // computedProperties,
        });
    }

    /**
     * Activates the addon.
     * @param terminal - The terminal to activate the addon in.
     */
    public activate(terminal: Terminal): void {
        console.warn("Smooth typing addon is a work in progress.");

        // terminal.onData((data) => this.onData(terminal, data));

        terminal.onData((data) => {
            setTimeout(() => {
                this.onData(terminal, data);
            }, 0);
        });
    }

    /**
     * Disposes the addon.
     */
    public dispose(): void {
        // Do nothing
    }
}
