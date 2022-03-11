//const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler');
const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

// agar bisa menambahkan catatan
const routes = [
    {
      method: 'POST',
      path: '/notes',
      //handler: () => {},
      handler: addNoteHandler,
    },

    //menampilkan catatan
    {
      method: 'GET',
      path: '/notes',
      //handler: () => {},
      handler: getAllNotesHandler,
    },

      {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },

  {
    method: 'PUT',
    path: '/notes/{id}',
    //handler: () => {},
    handler: editNoteByIdHandler,
  },

  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },

  ];
   
  module.exports = routes;