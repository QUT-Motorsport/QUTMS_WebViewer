// @ts-ignore
import { Viewer } from "@xeokit/xeokit-sdk/src/viewer/Viewer";
// @ts-ignore
import { XML3DLoaderPlugin } from "@xeokit/xeokit-sdk/src/plugins/XML3DLoaderPlugin/XML3DLoaderPlugin";
import { useRef, useEffect } from "react";

export default () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current !== null) {
      const viewer = new Viewer({ canvasElement: ref.current });
      const model = new XML3DLoaderPlugin(viewer, {
        workerScriptsPath: "/static/zipjs/" // Path to zip.js workers dir
      }).load({
        src: "/static/test.3dxml",
        edges: false
      });

      model.on("loaded", () => {
        console.log("loaded");
        viewer.cameraFlight.flyTo(model);
      });
    }
  }, [ref.current]);

  return <canvas ref={ref} style={{ width: "100vw", height: "100vh" }} />;
};
