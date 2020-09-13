const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personScheme = new Schema({
    firstname: String,
    lastname: String,
    age: Number,
    position: { type: mongoose.Schema.Types.ObjectId, ref: 'Position'}
})
// personScheme.pre('save', function(next) {
//     console.log('Pre save');
//     console.log(this);
//     //this._id = "122";
//     next()
// })

module.exports = mongoose.model('Person', personScheme)