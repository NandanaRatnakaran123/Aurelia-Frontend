import { api } from "@/lib/api";
import type { AuthUser } from "./authSlice";

export interface AuthResponse {
  user: AuthUser;
  token: string;
}

export const login = (data: { email: string; password: string }) =>
  api<AuthResponse>("/auth/login", { method: "POST", body: data });

export const register = (data: { name: string; email: string; password: string }) =>
  api<AuthResponse>("/auth/register", { method: "POST", body: data });
