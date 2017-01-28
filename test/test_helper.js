const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const assert = require('assert');

before(done => {
  mongoose.connect("mongodb://localhost:27017/master_english_test");
  mongoose.connection
    .once('open', () => done())
    .on('error', error => {
      console.warn('Warning', error);
    });
});

// beforeEach(done => {
//   const {books, users} = mongoose.connection.collections;
//   books.drop(() => {
//     users.drop(() => {
//       done();
//     });
//   });
//
// });
