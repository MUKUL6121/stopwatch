import { useState, useRef } from "react";
import './stop watch.css'
export default function stopwatch() {
    var [state, setState] = useState(0);
    var [color, setcolor] = useState("white");
    var interval = useRef(null);

    function start() {
        setcolor("green");
        interval.current = setInterval(() => {
            setState(state = state + 1);
        }, 1000);
    }
    function stop() {
        setcolor("yellow");
        clearInterval(interval.current);
    }
    function reset() {
        setcolor("white");
        clearInterval(interval.current);
        setState(0);
    }
    return (
        <div style={{width:"140%", border: "2px solid black", "border-radius": "10px", "background-color": "#000911", padding: "0px 20px 20px 20px" }}>
            <div><h1>Stopwatch</h1></div><hr style={{ color: "white", width: "100%" }} />
            <div>
                <p style={{ border: "2px solid black", height: "20px", width: "80px", "border-radius": "20%", "background-color": color }}></p>
                <div><h2><p>Time : </p><p>{state} Sec</p></h2></div>
                <button onClick={start} style={{ "background-color": "green" }}>Start</button>
                <button onClick={stop} style={{ "background-color": "#d8ce0aff" }}>Stop</button>
                <button onClick={reset} style={{ "background-color": "red" }}>Reset</button>
            </div>
        </div>
    )
}