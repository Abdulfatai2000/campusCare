import mongoose from "mongoose";
type Cached = {conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null};
const holder=globalThis as typeof globalThis & { __campuscareMongoose?: Cached };
const cache=holder.__campuscareMongoose ?? {conn:null,promise:null};
if(!holder.__campuscareMongoose) holder.__campuscareMongoose=cache;
export async function connectToDatabase(){
  if(cache.conn)return cache.conn;
  const uri=process.env.MONGODB_URI;
  if(!uri)throw new Error("MONGODB_URI is missing; configure the database before enabling backend features.");
  if(!cache.promise)cache.promise=mongoose.connect(uri,{serverSelectionTimeoutMS:8000}).catch(error=>{cache.promise=null;throw error});
  cache.conn=await cache.promise;
  return cache.conn;
}
