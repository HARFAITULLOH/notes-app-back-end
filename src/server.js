const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
	const server = Hapi.server({
		port: 5000,
		host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
		// Some-Origin-Policy
		routes: {
			cors: {
				origin: ['*'],
			},
		},
	});

	server.route(routes);

	await server.start();
	console.log(`Server berlajan pada ${server.info.uri}`);
};

init();