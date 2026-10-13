import type { Metadata } from "next";
import { AuthPreview } from "@/components/auth/auth-preview";
export const metadata:Metadata={title:"Sign in — Preview"};
export default function Page(){return <AuthPreview mode="login"/>;}
