const Vocabs = require('./../models/Vocabs');

module.exports.getAll = function(req, res){
  Vocabs.find({})
  .then((all) => {
    res.send(all)
  })
  .catch((err) => {
    res.send(err)
  })
}

module.exports.addNew = function(req, res){
  var newVocab = new Vocabs({
    spelling: req.body.spelling,
    meaning: req.body.meaning || "",
    source: req.body.source || "",
    memory_trick: req.body.memory_trick || ""
  })

  newVocab.save()
  .then((newVocab) => {
    res.send("done...")
  })
  .catch((err) => {
    res.send(err)
  })
}
