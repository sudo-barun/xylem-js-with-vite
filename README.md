# XylemJS with Vite

Vite is used to:

- convert bare specifier to relative module specifier
	<br>For example,
	<br>`import Component from "@xylem-js/xylem-js/dom/Component.js";` to `import Component from "./node_modules/@xylem-js/xylem-js/dom/Component.js";`

- preload module files

Commands:

- `npm run dev`
	<br>Start server for development
- `npm run build`
	<br>Generate production code in dist folder
- `npm run preview`
	<br>Start server that serves the generated production code
