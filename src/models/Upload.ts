import mongoose,{Schema,models,model} from "mongoose";
const UploadSchema=new Schema({
 campusId:{type:Schema.Types.ObjectId,ref:"Campus",required:true},
 ownerId:{type:Schema.Types.ObjectId,ref:"User",required:true},
 issueId:{type:Schema.Types.ObjectId,ref:"Issue",default:null},
 provider:{type:String,enum:["cloudinary"],default:"cloudinary"},
 publicId:{type:String,required:true},
 mimeType:{type:String,required:true},
 sizeBytes:{type:Number,required:true,min:0},
 moderationStatus:{type:String,enum:["pending","approved","rejected"],default:"pending"}
},{timestamps:true});
UploadSchema.index({campusId:1,ownerId:1,createdAt:-1});
export const Upload=models.Upload??model("Upload",UploadSchema);
