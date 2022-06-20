import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App from "./component/counter/test";
import App from "./component/props-list/test";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
