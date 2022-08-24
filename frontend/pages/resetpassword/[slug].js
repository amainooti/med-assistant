import React from "react";
import AuthLayout from "../../components/Layout/AuthLayout";
import ProfileForm from "../../components/Auth/ProfileForm";

import RegisterForm from "../../components/Auth/RegisterForm";
import { ResetPassword } from "../../components/Auth/ForgotPassword";

// for previewing components you're currently working on

const reset = () => {
  return (
    <AuthLayout>
      <ResetPassword />
    </AuthLayout>
  );
};

export default reset;
