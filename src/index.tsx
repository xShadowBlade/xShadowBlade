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
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900">
            <Terminal />
        </div>
    );
};

const root = createRoot(document.body);
root.render(<App />);
