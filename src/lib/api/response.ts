import { NextResponse } from "next/server";
import type { ApiFailure, ApiSuccess } from "@/types/domain";
export function jsonOk<T>(data:T, status=200){return NextResponse.json<ApiSuccess<T>>({data,error:null},{status,headers:{"Cache-Control":"no-store"}});}
export function jsonError(code:string,message:string,status=500){return NextResponse.json<ApiFailure>({data:null,error:{code,message}},{status,headers:{"Cache-Control":"no-store"}});}
export function notImplemented(capability:string){return jsonError("NOT_IMPLEMENTED",capability+" is not available in the Phase 0 scaffold. No data was created or changed.",501);}
export function unauthorized(){return jsonError("UNAUTHORIZED","Authentication required.",401);}
export function forbidden(){return jsonError("FORBIDDEN","Insufficient permissions for this resource.",403);}
