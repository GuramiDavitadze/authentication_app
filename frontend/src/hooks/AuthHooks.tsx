import { useContext } from "react";
import { AuthContext } from "src/context/AuthContext/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAth must be used within AuthProvider");
  }
  return context;
};
