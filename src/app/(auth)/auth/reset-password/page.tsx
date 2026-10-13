import type { Metadata } from "next";
import { AuthPreview } from "@/components/auth/auth-preview";
export const metadata:Metadata={title:"Reset password — Preview"};
export default function Page(){return <AuthPreview mode="reset-password"/>;}
