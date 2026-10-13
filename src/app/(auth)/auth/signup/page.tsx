import type { Metadata } from "next";
import { AuthPreview } from "@/components/auth/auth-preview";
export const metadata:Metadata={title:"Create an account — Preview"};
export default function Page(){return <AuthPreview mode="signup"/>;}
