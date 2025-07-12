import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@xylem-js/jsx/jsx-runtime";
import Component from "@xylem-js/xylem-js/dom/Component.js";
export class App extends Component {
    build() {
        return _jsxs(_Fragment, { children: [_jsxs("h1", { children: [_jsx("a", { href: "https://github.com/sudo-barun/xylem-js", target: "_blank", class: "xylem-js", children: "XylemJS" }), _jsx(_Fragment, { children: " \uD83E\uDD1D " }), _jsxs("a", { href: "https://vite.dev", target: "_blank", class: "vite", children: ["Vite", " ", _jsx("img", { src: "assets/vite-logo.svg", alt: "Vite Logo", width: "410", height: "404", class: "vite-logo" })] })] }), _jsx("p", { children: "Commands:" }), _jsxs("ul", { children: [_jsxs("li", { children: [_jsx("code", { children: "npx tsc --watch" }), _jsx("br", {}), "Run TypeScript compiler"] }), _jsxs("li", { children: [_jsx("code", { children: "npm run dev" }), _jsx("br", {}), "Start server for development"] }), _jsxs("li", { children: [_jsx("code", { children: "npm run build" }), _jsx("br", {}), "Generate production code in ", _jsx("code", { children: "dist" }), " folder"] }), _jsxs("li", { children: [_jsx("code", { children: "npm run preview" }), _jsx("br", {}), "Start server that serves the generated production code"] })] })] });
    }
}
