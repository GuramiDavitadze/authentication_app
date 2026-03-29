import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createUser, login } from "src/features/services/users";
import { useAuthContext } from "./AuthHooks";

export const useCreateUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      alert("User signed up successfully");
      navigate("/login");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
};

export const useAuthUser = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthContext();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.data);
      navigate("/profile");
    },
  });
};
