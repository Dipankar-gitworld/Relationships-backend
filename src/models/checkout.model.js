const { Schema, model } = require ("mongoose");

const checkoutSchema = new Schema({
    books: { 
        type: Schema.Types.ObjectId,
        ref: "books",
        required: true
    }
},{
    versionKey: false,
    timestamps: true
});


module.exports = model( "checkouts", checkoutSchema );