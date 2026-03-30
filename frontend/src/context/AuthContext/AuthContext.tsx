import { useQueryClient } from "@tanstack/react-query";
import React, { createContext, useEffect } from "react";
import FullScreenLoader from "src/components/FullScreenLoader/FullScreenLoader";
import { useAuthByToken } from "src/hooks/ApiHooks";
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
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
const AuthProvider = ({ children }: AuthProviderProp) => {
  const { data, isLoading, isError } = useAuthByToken();
  const user = data?.data ?? null;
  const queryClient = useQueryClient();
  useEffect(() => {
    if (isError) {
      localStorage.removeItem("jwt_token");
      queryClient.removeQueries({ queryKey: ["auth"] });
    }
  }, [isError,queryClient]);
  const hasToken = !!localStorage.getItem("jwt_token");
  const shouldShowLoader = hasToken && isLoading;
  if (shouldShowLoader) {
    return <FullScreenLoader />;
  }
  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
