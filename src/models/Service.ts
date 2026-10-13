import mongoose,{Schema,models,model} from "mongoose";
const ServiceSchema=new Schema({
 campusId:{type:Schema.Types.ObjectId,ref:"Campus",required:true},
 name:{type:String,required:true,trim:true,maxlength:130},
 slug:{type:String,required:true,lowercase:true},
 description:{type:String,maxlength:2500,default:""},
 category:{type:String,required:true},
 isActive:{type:Boolean,default:false},
 allowsAppointments:{type:Boolean,default:false},
 contactEmail:{type:String,default:""},
 verifiedAt:{type:Date,default:null}
},{timestamps:true});
ServiceSchema.index({campusId:1,slug:1},{unique:true});
export const Service=models.Service??model("Service",ServiceSchema);
