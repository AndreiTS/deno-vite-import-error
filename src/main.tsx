// @deno-types="@types/react"
import { StrictMode } from "react";
// @deno-types="@types/react-dom/client"
import { createRoot } from "react-dom/client";
import { store } from "feature/error/api.ts";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <div>{store}</div>;
  </StrictMode>,
);
