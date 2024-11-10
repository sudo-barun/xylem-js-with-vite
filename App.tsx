import Component from "@xylem-js/xylem-js/dom/Component.js";

export
class App extends Component
{
	build()
	{
		return <>
			<h1>
				<a href="https://github.com/sudo-barun/xylem-js" target="_blank"
					class="xylem-js"
				>XylemJS</a>
				<> 🤝 </>
				<a href="https://vite.dev" target="_blank"
					class="vite"
				>Vite</a>
			</h1>
			<p>Commands:</p>
			<ul>
				<li>
					<code>npx tsc --watch</code>
					<br/>
					Run TypeScript compiler
				</li>
				<li>
					<code>npm run dev</code>
					<br/>
					Start server for development
				</li>
				<li>
					<code>npm run build</code>
					<br/>
					Generate production code in <code>dist</code> folder
				</li>
				<li>
					<code>npm run preview</code>
					<br/>
					Start server that serves the generated production code
				</li>
			</ul>
		</>
	}
}
