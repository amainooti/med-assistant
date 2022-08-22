import React from "react";
import AuthLayout from "../components/layout/AuthLayout";
import RegisterForm from "../components/Auth/RegisterForm";

const register = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default register;
