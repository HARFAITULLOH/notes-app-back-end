const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NotesService = require('./services/inMemory/NotesService');
const NotesValidator = require('./validator/notes');

/**
* Berkas ini menampung kode untuk membuat, mengkonfigurasi
dan menjalankan HTTP server menggunakan Hapi
 */
const init = async () => {
	const notesService = new NotesService();

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

	await server.register({
		plugin: notes,
		options: {
			service: notesService,
			validator: NotesValidator,
		},
		});

	await server.start();
	console.log(`Server berlajan pada ${server.info.uri}`);
};

init();