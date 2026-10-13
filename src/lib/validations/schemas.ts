import { z } from "zod";
import { USER_ROLES, ISSUE_STATUSES, ISSUE_PRIORITIES, APPOINTMENT_STATUSES } from "@/types/domain";
export const mongoIdSchema = z.string().regex(/^[a-f\d]{24}$/i, "Invalid identifier");
export const campusIdSchema = mongoIdSchema;
export const registerSchema=z.object({name:z.string().trim().min(2).max(100),email:z.string().email().max(254),password:z.string().min(12).max(128),campusId:campusIdSchema});
export const loginSchema=z.object({email:z.string().email(),password:z.string().min(1)});
export const issueCreateSchema=z.object({
  campusId:campusIdSchema,
  title:z.string().trim().min(5).max(140),
  description:z.string().trim().min(15).max(4000),
  category:z.enum(["facilities","utilities","safety","health","other"]),
  location:z.string().trim().min(2).max(220),
  priority:z.enum(ISSUE_PRIORITIES).default("medium"),
  attachmentIds:z.array(mongoIdSchema).max(5).default([])
});
export const issueStatusSchema=z.object({status:z.enum(ISSUE_STATUSES),note:z.string().max(1500).optional()});
export const roleUpdateSchema=z.object({role:z.enum(USER_ROLES)});
export const appointmentCreateSchema=z.object({campusId:campusIdSchema,serviceId:mongoIdSchema,requestedFor:z.string().datetime(),notes:z.string().max(1500).optional()});
export const appointmentStatusSchema=z.object({status:z.enum(APPOINTMENT_STATUSES)});
export const serviceSchema=z.object({campusId:campusIdSchema,name:z.string().trim().min(2).max(130),description:z.string().max(2500),category:z.string().max(90),isActive:z.boolean().default(false)});
export const emergencyContactSchema=z.object({campusId:campusIdSchema,title:z.string().trim().min(2).max(120),phone:z.string().min(5).max(25),isVerified:z.boolean().default(false),verifiedBy:mongoIdSchema.optional()});
export const idParams=z.object({id:mongoIdSchema});
