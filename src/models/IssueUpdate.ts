import {Schema,models,model} from "mongoose";
import { ISSUE_STATUSES } from "@/types/domain";
const IssueUpdateSchema=new Schema({
 campusId:{type:Schema.Types.ObjectId,ref:"Campus",required:true},
 issueId:{type:Schema.Types.ObjectId,ref:"Issue",required:true},
 performedBy:{type:Schema.Types.ObjectId,ref:"User",required:true},
 previousStatus:{type:String,enum:ISSUE_STATUSES,default:null},
 nextStatus:{type:String,enum:ISSUE_STATUSES,required:true},
 note:{type:String,maxlength:1500,default:""}
},{timestamps:true});
IssueUpdateSchema.index({issueId:1,createdAt:-1});
IssueUpdateSchema.index({campusId:1,createdAt:-1});
export const IssueUpdate=models.IssueUpdate??model("IssueUpdate",IssueUpdateSchema);
