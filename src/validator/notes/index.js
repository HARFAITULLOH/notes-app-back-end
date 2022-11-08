// Berkas untuk folus membuat fungsi validator yang menggunakan schema dari schema.js
const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
    // Fungsi validateNotePayload -> untuk melakukan validasi
    validateNotePayload: (payload) => {
        const validationResult = NotePayloadSchema.validate(payload);

        if(validationResult.error) {
            throw new InvariantError(validationResult.error.message);
        }
    },
};

module.exports = NotesValidator;