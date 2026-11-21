import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type InquiryMode = "inquiry" | "callback";

interface InquiryState {
  open: boolean;
  mode: InquiryMode;
}

const initialState: InquiryState = { open: false, mode: "inquiry" };

const inquirySlice = createSlice({
  name: "inquiry",
  initialState,
  reducers: {
    openInquiry(state, action: PayloadAction<InquiryMode | undefined>) {
      state.open = true;
      state.mode = action.payload ?? "inquiry";
    },
    setInquiryMode(state, action: PayloadAction<InquiryMode>) {
      state.mode = action.payload;
    },
    closeInquiry(state) {
      state.open = false;
    },
  },
});

export const { openInquiry, setInquiryMode, closeInquiry } = inquirySlice.actions;
export default inquirySlice.reducer;
