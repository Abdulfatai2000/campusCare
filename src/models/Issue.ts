import mongoose,{Schema,models,model} from "mongoose";
import { ISSUE_STATUSES, ISSUE_PRIORITIES } from "@/types/domain";
const IssueSchema=new Schema({
 campusId:{type:Schema.Types.ObjectId,ref:"Campus",required:true,index:true},
 submittedBy:{type:Schema.Types.ObjectId,ref:"User",required:true},
 assignedTo:{type:Schema.Types.ObjectId,ref:"User",default:null},
 title:{type:String,required:true,maxlength:140,trim:true},
 description:{type:String,required:true,maxlength:4000},
 category:{type:String,enum:["facilities","utilities","safety","health","other"],required:true},
 location:{type:String,required:true,maxlength:220},
 status:{type:String,enum:ISSUE_STATUSES,default:"pending"},
 priority:{type:String,enum:ISSUE_PRIORITIES,default:"medium"},
 attachmentIds:[{type:Schema.Types.ObjectId,ref:"Upload"}],
 resolvedAt:{type:Date,default:null}
},{timestamps:true});
IssueSchema.index({campusId:1,status:1,createdAt:-1});
IssueSchema.index({submittedBy:1,createdAt:-1});
export const Issue=models.Issue??model("Issue",IssueSchema);
