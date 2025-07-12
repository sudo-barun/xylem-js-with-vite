export default {
	build: {
		minify: false,
		modulePreload: {
			polyfill: false,
			resolveDependencies: () => [],
		},
		rollupOptions: {
			preserveEntrySignatures: 'strict',
			output: {
				preserveModules: true,
				assetFileNames: "[name][extname]",
				entryFileNames: "[name].js",
			},
			treeshake: false,
		},
	},
};
