import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import ProfileForm from "../components/Auth/ProfileForm";
import RegisterForm from "../components/Auth/RegisterForm";

const register = () => {
  return (
    <AuthLayout>
      {/* <ProfileForm title="Fill Your Profile" /> */}
      <RegisterForm />
    </AuthLayout>
  );
};

export default register;
