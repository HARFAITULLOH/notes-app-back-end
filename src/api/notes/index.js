const NotesHandler = require('./handler');
const routes = require('./routes');

// Ini adalah plugin
module.exports = {
    name: 'notes',
    version: '1.0.0',
    /**
     * @param {*} server adalah parameter untuk server yang menggunakan plugin ini
     * @param {*} option adalah untuk menampung data yang akan digunakan pada handler
     * Fungsi register bisa async atau sync, tapi kita gunakan async karena mungkin beberapa
        server mengharuskan fungsi berjalan async
     */
    register: async (server, { service, validator }) => {
        const notesHandler = new NotesHandler(service, validator);
        server.route(routes(notesHandler));
    },
};