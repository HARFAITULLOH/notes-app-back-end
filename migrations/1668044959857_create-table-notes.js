/* eslint-disable camelcase */

// Bisa dihapus karena tidak digunakan
exports.shorthands = undefined;

// Pada fungsi ini, kita menuliskan kode untuk membuat table notes pgm(pg-node-migrate)
exports.up = (pgm) => {
    pgm.createTable('notes', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        title: {
            type: 'TEXT',
            notNull: true,
        },
        body: {
            type: 'TEXT',
            notNull: true,
        },
        tags: {
            type: 'TEXT[]',
            notNull: true,
        },
        created_at: {
            type: 'TEXT',
            notNull: true,
        },
        updated_at: {
            type: 'TEXT',
            notNull: true,
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable('notes');
};
