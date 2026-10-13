import { hash, compare } from "bcryptjs";
const COST=12;
export async function hashPassword(password:string){
 if(password.length<12 || password.length>128)throw new Error("Password must be between 12 and 128 characters.");
 return hash(password,COST);
}
export async function verifyPassword(password:string,digest:string){return compare(password,digest);}
