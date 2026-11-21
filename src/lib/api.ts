import type { Store } from "@reduxjs/toolkit";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

let getToken: () => string | null = () => null;

/** Called once by the store provider so the API client can attach the auth token. */
export function bindAuthToken(store: Store<{ auth: { token: string | null } }>) {
  getToken = () => store.getState().auth.token;
}

type RequestOptions = Omit<RequestInit, "body"> & { body?: unknown };

/** Single entry point for all API calls. */
export async function api<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { body, headers, ...rest } = options;
  const token = getToken();

  const res = await fetch(`${BASE_URL}${path}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const data = res.status === 204 ? null : await res.json().catch(() => null);
  if (!res.ok) {
    throw new ApiError(res.status, data?.message ?? res.statusText, data);
  }
  return data as T;
}
