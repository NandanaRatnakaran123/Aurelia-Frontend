import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "@/store/hooks";
import { login, register } from "./authApi";
import { setCredentials } from "./authSlice";

export function useLogin() {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => dispatch(setCredentials(data)),
  });
}

export function useRegister() {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: register,
    onSuccess: (data) => dispatch(setCredentials(data)),
  });
}
