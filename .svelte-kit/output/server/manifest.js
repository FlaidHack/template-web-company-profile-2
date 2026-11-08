export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["img/interior.jpg"]),
	mimeTypes: {".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.Bp4ZRVuZ.js",app:"_app/immutable/entry/app.81QELUSw.js",imports:["_app/immutable/entry/start.Bp4ZRVuZ.js","_app/immutable/chunks/DhDjTBii.js","_app/immutable/chunks/Cy4jKFAs.js","_app/immutable/chunks/DPrVrCTc.js","_app/immutable/entry/app.81QELUSw.js","_app/immutable/chunks/DhDjTBii.js","_app/immutable/chunks/favJCMhS.js","_app/immutable/chunks/DbCMFlyl.js","_app/immutable/chunks/DPrVrCTc.js","_app/immutable/chunks/CmPSudMU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
