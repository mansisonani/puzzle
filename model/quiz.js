const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const studentSchema = new Schema(
    {
       catename:{ type: Schema.Types.ObjectId, ref: 'category' },
       que:String,
       ans:String,
       option:Array
    });
const quiz= mongoose.model('que-ans',studentSchema);
module.exports = quiz;
