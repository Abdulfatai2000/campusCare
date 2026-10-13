import type { Metadata } from "next";
import { AuthPreview } from "@/components/auth/auth-preview";
export const metadata:Metadata={title:"Forgot password — Preview"};
export default function Page(){return <AuthPreview mode="forgot-password"/>;}
