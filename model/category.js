const mongoose= require('mongoose');

const Schema=mongoose.Schema;
const studentSchema = new Schema(
    {
        category:String
    });
const cate= mongoose.model('cate',studentSchema);
module.exports = cate;
