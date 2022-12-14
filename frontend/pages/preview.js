import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import ProfileForm from "../components/Auth/ProfileForm";

import RegisterForm from "../components/Auth/RegisterForm";
import {
  ForgotPassword,
  ResetPassword,
} from "../components/Auth/ForgotPassword";

// for previewing components you're currently working on

const preview = () => {
  return (
    <AuthLayout>
      <ResetPassword />
    </AuthLayout>
  );
};

export default preview;
