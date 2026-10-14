import {Schema,models,model} from "mongoose";
const NotificationSchema=new Schema({
 campusId:{type:Schema.Types.ObjectId,ref:"Campus",required:true},
 userId:{type:Schema.Types.ObjectId,ref:"User",required:true},
 type:{type:String,enum:["issue","appointment","system"],required:true},
 title:{type:String,required:true,maxlength:180},
 body:{type:String,required:true,maxlength:1500},
 isRead:{type:Boolean,default:false},
 readAt:{type:Date,default:null}
},{timestamps:true});
NotificationSchema.index({userId:1,isRead:1,createdAt:-1});
export const Notification=models.Notification??model("Notification",NotificationSchema);
