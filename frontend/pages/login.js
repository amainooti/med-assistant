import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import LoginForm from "../components/Auth/LoginForm";

const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
