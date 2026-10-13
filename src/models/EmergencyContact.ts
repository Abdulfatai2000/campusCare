import mongoose,{Schema,models,model} from "mongoose";
const EmergencyContactSchema=new Schema({
 campusId:{type:Schema.Types.ObjectId,ref:"Campus",required:true},
 title:{type:String,required:true,maxlength:120},
 phone:{type:String,required:true,maxlength:25},
 category:{type:String,enum:["security","medical","fire","other"],default:"other"},
 isVerified:{type:Boolean,default:false},
 verifiedBy:{type:Schema.Types.ObjectId,ref:"User",default:null},
 verifiedAt:{type:Date,default:null},
 isActive:{type:Boolean,default:false}
},{timestamps:true});
EmergencyContactSchema.index({campusId:1,isVerified:1,isActive:1});
export const EmergencyContact=models.EmergencyContact??model("EmergencyContact",EmergencyContactSchema);
