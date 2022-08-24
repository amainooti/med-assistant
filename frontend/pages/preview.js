import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import ProfileForm from "../components/Auth/ProfileForm";

import RegisterForm from "../components/Auth/RegisterForm";

// for previewing components you're currently working on

const preview = () => {
  return (
    <AuthLayout>
      <ProfileForm title="Fill Your Profile" />
    </AuthLayout>
  );
};

export default preview;
