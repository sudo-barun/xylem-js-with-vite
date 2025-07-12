import { App } from "./App.js";
import mountComponent from "@xylem-js/xylem-js/dom/mountComponent.js";

mountComponent(new App(), document.getElementById('app-container')!);
