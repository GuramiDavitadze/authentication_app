import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createUser, login, loginByToken } from "src/features/services/users";

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
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("jwt_token", data.token);
      queryClient.setQueryData(["auth"], {
        data: data.data,
      });
      navigate("/profile");
    },
  });
};
export const useAuthByToken = () => {
  const token = localStorage.getItem("jwt_token");
  return useQuery({
    queryKey: ["auth"],
    queryFn: () => loginByToken(token as string),
    retry: false,
    enabled: !!token,
  });
};
