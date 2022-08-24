import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import ProfileForm from "../components/Auth/ProfileForm";

import { ForgotPassword } from "../components/Auth/ForgotPassword";

const preview = () => {
  return (
    <AuthLayout>
      <ForgotPassword />
    </AuthLayout>
  );
};

export default preview;
