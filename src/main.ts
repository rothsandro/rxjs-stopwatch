import "./style.css";
import { letsGetThePartyStarted } from "./party";
import {
  endWith,
  fromEvent,
  interval,
  map,
  repeat,
  switchMap,
  takeUntil,
  tap,
} from "rxjs";

const startBtn = document.getElementById("start")!;
const stopBtn = document.getElementById("stop")!;
const resetBtn = document.getElementById("reset")!;
const output = document.getElementById("output")!;

const start$ = fromEvent(startBtn, "click");
const stop$ = fromEvent(stopBtn, "click");
const reset$ = fromEvent(resetBtn, "click");

const stopwatch$ = start$.pipe(
  tap(() => letsGetThePartyStarted()),
  switchMap(() => interval(1000).pipe(takeUntil(stop$))),
  map((_, idx) => idx + 1),
  takeUntil(reset$),
  endWith(0),
  tap((val) => (output.textContent = `${val}s`)),
  repeat()
);

stopwatch$.subscribe();
