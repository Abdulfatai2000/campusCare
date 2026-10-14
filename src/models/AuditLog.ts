import {Schema,models,model} from "mongoose";
const AuditLogSchema=new Schema({
 campusId:{type:Schema.Types.ObjectId,ref:"Campus",required:true},
 actorId:{type:Schema.Types.ObjectId,ref:"User",required:true},
 action:{type:String,required:true,maxlength:130},
 entityType:{type:String,required:true,maxlength:60},
 entityId:{type:Schema.Types.ObjectId,required:true},
 details:{type:Schema.Types.Mixed,default:{}},
 ipHash:{type:String,default:""}
},{timestamps:true});
AuditLogSchema.index({campusId:1,createdAt:-1});
AuditLogSchema.index({entityType:1,entityId:1,createdAt:-1});
export const AuditLog=models.AuditLog??model("AuditLog",AuditLogSchema);
