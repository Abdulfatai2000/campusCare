import mongoose,{Schema,models,model} from "mongoose";
import { APPOINTMENT_STATUSES } from "@/types/domain";
const AppointmentSchema=new Schema({
 campusId:{type:Schema.Types.ObjectId,ref:"Campus",required:true},
 studentId:{type:Schema.Types.ObjectId,ref:"User",required:true},
 serviceId:{type:Schema.Types.ObjectId,ref:"Service",required:true},
 requestedFor:{type:Date,required:true},
 status:{type:String,enum:APPOINTMENT_STATUSES,default:"requested"},
 note:{type:String,maxlength:1500,default:""},
 reviewedBy:{type:Schema.Types.ObjectId,ref:"User",default:null}
},{timestamps:true});
AppointmentSchema.index({campusId:1,serviceId:1,requestedFor:1});
AppointmentSchema.index({studentId:1,createdAt:-1});
export const Appointment=models.Appointment??model("Appointment",AppointmentSchema);
