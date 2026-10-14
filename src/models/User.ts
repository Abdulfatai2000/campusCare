import {Schema,models,model} from "mongoose";
import { USER_ROLES } from "@/types/domain";
const UserSchema=new Schema({
 name:{type:String,required:true,trim:true,maxlength:120},
 email:{type:String,required:true,trim:true,lowercase:true},
 passwordHash:{type:String,select:false},
 role:{type:String,enum:USER_ROLES,default:"student"},
 campusId:{type:Schema.Types.ObjectId,ref:"Campus",required:true},
 isActive:{type:Boolean,default:false},
 emailVerifiedAt:{type:Date,default:null},
 avatarUrl:{type:String}
},{timestamps:true});
UserSchema.index({email:1},{unique:true});
UserSchema.index({campusId:1,role:1});
export const User=models.User??model("User",UserSchema);
