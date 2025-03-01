import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./editor/layouts/header";
import Material from "./editor/layouts/material";
import Renderer from "./editor/layouts/renderer";
import Setting from "./editor/layouts/setting";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import store from "./editor/contexts/store";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <div className="h-[100vh] flex flex-col">
          <div className="h-15 border-b-2">
            <Header></Header>
          </div>
          <div className="flex flex-1">
            <div className="w-60">
              <Material></Material>
            </div>
            <div className="flex-1 ">
              <Renderer></Renderer>
            </div>
            <div className="w-60">
              <Setting></Setting>
            </div>
          </div>
        </div>
      </Provider>
    </DndProvider>
  </StrictMode>
);
