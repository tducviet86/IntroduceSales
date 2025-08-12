// src/main.tsx
import React from "react"
import { createRoot } from "react-dom/client"
import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"         

import App from "./App"
import "./index.css"

const container = document.getElementById("root")
if (!container) {
  throw new Error("Root container not found")
}

createRoot(container).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="light">
        <App />
    </MantineProvider>
  </React.StrictMode>
)
