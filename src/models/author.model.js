const { Schema, model } = require ("mongoose");

const authorSchema = new Schema({
    name: { type: String, required: true}
},{
    versionKey: false,
    timestamps: true
});


module.exports = model( "author", authorSchema );