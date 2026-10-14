import {Schema,models,model} from "mongoose";
const CampusSchema=new Schema({
 name:{type:String,required:true,trim:true,maxlength:160},
 shortName:{type:String,required:true,trim:true,maxlength:30},
 slug:{type:String,required:true,lowercase:true,trim:true,unique:true},
 location:{type:String,default:""},
 status:{type:String,enum:["pilot","active","suspended"],default:"pilot"},
 officialIntegration:{type:Boolean,default:false}
},{timestamps:true});
export const Campus=models.Campus??model("Campus",CampusSchema);
