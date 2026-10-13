import { jsonOk } from "@/lib/api/response";
export const runtime = "nodejs";
export async function GET(){return jsonOk({app:"CampusCare",phase:"0",status:"scaffold-only",databaseConnected:false,authEnabled:false});}
