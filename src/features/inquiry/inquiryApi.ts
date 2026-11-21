import { api } from "@/lib/api";
import type { InquiryMode } from "./inquirySlice";

export interface InquiryPayload {
  type: InquiryMode;
  name: string;
  phone: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
  guestCount?: number;
  preferredTime?: string;
  message?: string;
}

/** NOTE: assumes the backend exposes POST /inquiries. Adjust the path if the API differs. */
export const submitInquiry = (data: InquiryPayload) =>
  api<{ id?: string }>("/inquiries", { method: "POST", body: data });
