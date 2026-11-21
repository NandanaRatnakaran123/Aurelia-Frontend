import { useMutation } from "@tanstack/react-query";
import { submitInquiry } from "./inquiryApi";

export function useSubmitInquiry() {
  return useMutation({ mutationFn: submitInquiry });
}
