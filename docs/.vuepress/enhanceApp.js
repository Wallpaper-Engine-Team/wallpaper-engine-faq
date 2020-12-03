export default ({ router }) => {
	router.addRoutes([
	  { path: '/crash', redirect: '/crash/application' },
	  { path: '/wegame/connection', redirect: '/zh/wegame/connection' },
	  { path: '/en/wegame/connection', redirect: '/zh/wegame/connection' },
	  { path: '/en/wegame/connection.html', redirect: '/zh/wegame/connection.html' },
	]);
	if (typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
		router.onReady(() => {
			const { app } = router
			app.$once('hook:mounted', () => {
			// Fix bullshit Chrome anchor scroll issue on page load
			const { hash } = document.location;
			console.log(hash, 0);
			setTimeout(() => {
				if (hash.length > 1) {
					const id = hash.substring(1)
					const element = document.getElementById(id)
					if (element) element.scrollIntoView(true)
				}
			}, 2000)
		})});
		router.afterEach(() => {
			// Fix bullshit Firefox scroll to top issue
			const { hash } = document.location;
			console.log(hash, 1);
			if (!hash.length) {
			setTimeout(() => {
				document.body.scrollTop = 0;
				document.body.parentNode.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			}, 501);
			}
		});
	}
}