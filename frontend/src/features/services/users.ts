import api from "src/config/api/axios";
type LoginDataTypes = {
  email: string;
  password: string;
};
type UserTypes = LoginDataTypes & {
  firstname: string;
  lastname: string;
  age: number;
};

export const createUser = async (user: UserTypes) => {
  const response = await api.post("/register", user);
  return response.data;
};
export const login = async (user: LoginDataTypes) => {
  const response = await api.post("/auth", user);
  return response.data;
};

export const loginByToken = async (token: string) => {
  const response = await api.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
