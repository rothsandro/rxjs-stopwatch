import "./style.css";
import { letsGetThePartyStarted } from "./party";
import { of } from "rxjs";

const startBtn = document.getElementById("start")!;
const stopBtn = document.getElementById("stop")!;
const resetBtn = document.getElementById("reset")!;
const output = document.getElementById("output")!;

export const stopwatch$ = of(0);

stopwatch$.subscribe(console.log);
