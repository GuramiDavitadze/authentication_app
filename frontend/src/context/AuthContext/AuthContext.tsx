import React, { createContext, useState } from "react";
type AuthProviderProp = {
  children: React.ReactNode;
};
interface User {
  id: string;
  age: number;
  firstname: string;
  lastname: string;
  email: string;
}
export type AuthContextType = {
  user: User | null;
  isAuth: boolean;
  isLoading: boolean;
  login: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
const AuthProvider = ({ children }: AuthProviderProp) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isAuth = !!user;
  const login = () => {
    setUser({
      id: "1",
      firstname: "Gurami",
      lastname: "Das",
      age: 12,
      email: "Gsafda@gmail.com",
    });
  };
  return (
    <AuthContext.Provider value={{ user, login, isAuth, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
