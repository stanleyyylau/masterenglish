const assert = require('assert');
const Vocabs = require('./../models/Vocabs');

describe('Vocabs', function() {
  it('Can add a new vocabulary to database', function(done) {
    const stanley = new Vocabs({
      spelling: "Stanley",
      meaning: "it's a name",
      source: "me",
      memory_trick: "Someone who is very great"
    })

    stanley.save()
    .then( ()=> {
      assert(!stanley.isNew);
      done();
    })
  })
})
