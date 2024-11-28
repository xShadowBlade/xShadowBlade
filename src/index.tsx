/**
 * @file This file is the entry point for your project.
 */
import React from "react";
import { createRoot } from "react-dom/client";

import { Terminal } from "./terminal/terminal";

/**
 * @returns The root component of the application.
 */
const App: React.FC = () => {
    return (
        <>
            {/* <p>Hello World!</p> */}
            <Terminal />
        </>
    );
};

const root = createRoot(document.getElementById("root") ?? document.body);
root.render(<App />);
