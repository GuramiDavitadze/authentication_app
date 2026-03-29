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
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
const AuthProvider = ({ children }: AuthProviderProp) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isAuth = !!user;
  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuth, isLoading, setIsLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
