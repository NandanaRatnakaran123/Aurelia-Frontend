"use client";

import { useState } from "react";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { makeStore } from "./index";
import { makeQueryClient } from "@/lib/queryClient";
import { bindAuthToken } from "@/lib/api";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [store] = useState(() => {
    const s = makeStore();
    bindAuthToken(s);
    return s;
  });
  const [queryClient] = useState(makeQueryClient);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}
