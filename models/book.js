var mongoose = require('mongoose');

var Schema = mongoose.Schema;
// schema is to define the document
// a model in Mongoose is a class with which we construct documents.
var BookSchema = new Schema(
  {
    title : {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    summary: {type: String},
    ISBN: {type: String},
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}], // [] means enabling multipliicity
    bookInstance: [{type: Schema.Types.ObjectId, ref: 'BookInstance'}],
    url: {type: String}
  }
);

//Export model
module.exports = mongoose.model('Book', BookSchema);
