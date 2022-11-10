// mengimpor dotenv dan menjalankan konfigurasinya
require('dotenv').config();

const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NotesService = require('./services/postgres/NotesService');
const NotesValidator = require('./validator/notes');

/**
* Berkas ini menampung kode untuk membuat, mengkonfigurasi
dan menjalankan HTTP server menggunakan Hapi
 */
const init = async () => {
	const notesService = new NotesService();

	const server = Hapi.server({
		port: process.env.PORT,
		// host: process.env.HOST,
		host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
		// Some-Origin-Policy
		routes: {
			cors: {
				origin: ['*'],
			},
		},
	});

	await server.register([
		{
			plugin: notes,
			options: {
				service: notesService,
				validator: NotesValidator,
			},
		},
		// {
		// 	// Jika ada lebih dari 1 plugin argumen register adalah list yang berisi object
		// 	plugin: notes,
		// 	options: {
		// 		service: notesService,
		// 		validator: NotesValidator,
		// 	},
		// },
	]);

	await server.start();
	console.log(`Server berlajan pada ${server.info.uri}`);
};

init();