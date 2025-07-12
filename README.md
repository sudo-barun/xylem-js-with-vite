# XylemJS with Vite

There are multiple ways to integrate Vite.
Two ways are provided in this repo:

1. minimal
1. custom

## Minimal

- Zero configuration in `vite.config.ts` file.

- Vite handles `.ts` to `.js` conversion

- Vite handles bundling and minification of js and css

- `noEmit: true` in `tsconfig.json` prevents generation of `.js` from `.ts` using `tsc`.

## Custom

- Some configuration in `vite.config.ts` file.

- This helps to achieve following:

	- Keep the source code used in production as similar to original code as possible.
	- Be able to run the original code (not the code in `dist` folder).

- `.ts` to `.js` is done by `tsc` command instead of vite.
	<br>Vite can do the conversion but the generated code contains `/* @__PURE__ */` annotation
	all over the generated code.

- Vite preserves ES modules i.e. no bundling occurs.

- Vite converts bare specifier to relative module specifier
	<br>For example,
	<br>`import Component from "@xylem-js/xylem-js/dom/Component.js";`
	<br>to
	<br>`import Component from "./node_modules/@xylem-js/xylem-js/dom/Component.js";`

	This is helpful for compatibility with old browsers not supporting `importmap`.

- Vite injects script tags in html file to load module files.
	For example,
	```html
	<script type="module" crossorigin src="/main.js"></script>
	```
	This is not technically same as preloading modules using `modulepreload`, for example:
	```html
	<link rel="modulepreload" src="/main.js">
	```
	But, this gives similar result and also eliminates the need to add `modulepreload` for each module file manually.

- Make sure to run `npx tsc` or `npx tsc --watch` along with the commands below to see changes.

Commands:

- `npm run dev`
	<br>Start server for development
- `npm run build`
	<br>Generate production code in dist folder
- `npm run preview`
	<br>Start server that serves the generated production code
