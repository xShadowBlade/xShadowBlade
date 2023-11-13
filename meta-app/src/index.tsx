import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <div>
            <h1>Hello, world!</h1>
            <h2>Start editing to see some magic happen!</h2>
        </div>
    </React.StrictMode>,
);