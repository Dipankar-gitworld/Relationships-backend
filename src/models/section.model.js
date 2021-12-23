const {Schema, model} = require ("mongoose");

const sectionSchema = new Schema ({
    name:{type:String, required: true}
},{
    versionKey: false,
    timestamps: true
});


module.exports = model("sections" , sectionSchema);