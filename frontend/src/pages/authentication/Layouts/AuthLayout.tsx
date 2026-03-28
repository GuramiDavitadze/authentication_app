import "./AuthLayout.css";
import React from "react";
type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
};
const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <div className="auth-layout-container">
      <h1>
        <u>{title}</u>
      </h1>
      <div className="container">{children}</div>
    </div>
  );
};

export default AuthLayout;
