export default ({ router }) => {
	router.addRoutes([
	  { path: '/crash', redirect: '/crash/application' },
	  { path: '/wegame/connection', redirect: '/zh/wegame/connection' },
	  { path: '/en/wegame/connection', redirect: '/zh/wegame/connection' },
	  { path: '/en/wegame/connection.html', redirect: '/zh/wegame/connection.html' },
	])
}