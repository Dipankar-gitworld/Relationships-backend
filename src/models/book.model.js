const { Schema, model } = require ("mongoose");

const bookSchema = new Schema({
    name: { type: String, required: true},
    body: { type:String, required: true },
    author: [{ 
        type: Schema.Types.ObjectId,
        ref: "author",
        required: true

     }],
    section: { 
        type: Schema.Types.ObjectId,
        ref: "sections",
        required: true
    }

},{
    versionKey: false,
    timestamps: true
});


module.exports = model("books", bookSchema);