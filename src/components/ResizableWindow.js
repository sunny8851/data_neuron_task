import { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

export default function ResizableWindow() {
  const [verticalSizes, setVerticalSizes] = useState([100, "30%", "auto"]);
  const [horizontalSize, setHorizontalSize] = useState([100, "30%", "auto"]);
  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={{ height: "100vh" }}>
      <SplitPane
        split="horizontal"
        sizes={horizontalSize}
        onChange={setHorizontalSize}
      >
        <SplitPane
          split="vertical"
          sizes={verticalSizes}
          onChange={setVerticalSizes}
        >
          <div style={{ ...layoutCSS, background: "#ddd" }}>pane1</div>
          <div style={{ ...layoutCSS, background: "white" }}>pane2</div>
        </SplitPane>
        <div style={{ ...layoutCSS, background: "silver" }}>pane3</div>
      </SplitPane>
    </div>
  );
}
