"use client";

import { useAppDispatch } from "@/store/hooks";
import { openInquiry, type InquiryMode } from "@/features/inquiry/inquirySlice";

/** Button that opens the inquiry / call-back pop-up. */
export default function InquiryButton({
  mode = "inquiry",
  className = "",
  children,
}: {
  mode?: InquiryMode;
  className?: string;
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  return (
    <button type="button" onClick={() => dispatch(openInquiry(mode))} className={className}>
      {children}
    </button>
  );
}
