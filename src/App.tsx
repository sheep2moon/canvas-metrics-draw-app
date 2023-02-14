import { useEffect, useState } from "react";
import Actionbar from "./components/actionbar/Actionbar";
import Canvas from "./components/Canvas";
import EffectCanvas from "./components/EffectCanvas";
import Toolbar from "./components/toolbar/Toolbar";

function App() {
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    useEffect(() => {
        window.addEventListener("resize", e => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => setCanvasSize({ width: window.innerWidth, height: window.innerHeight }), 100);
        });
    }, []);
    return (
        <div className="">
            <Canvas canvasWidth={canvasSize.width} canvasHeight={canvasSize.height} />
            <EffectCanvas canvasWidth={canvasSize.width} canvasHeight={canvasSize.height} />
            <Toolbar />
            <Actionbar />
        </div>
    );
}

export default App;
