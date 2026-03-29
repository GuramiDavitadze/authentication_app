import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createUser, login } from "src/features/services/users";

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

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/profile");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
};
