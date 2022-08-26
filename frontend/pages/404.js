import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import { Typography, Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { CustomButton, SecondaryButton } from "../components/Common/Custom";

const FourOhFour = () => {
  const router = useRouter();
  return (
    <AuthLayout>
      <Image src="/assets/404.png" alt="" width="256" height="256" />
      <Typography
        variant="h2"
        sx={{
          fontFamily: "inherit",
        }}
      >
        Page Not Found
      </Typography>
      <Stack direction="row" gap="1rem">
        <SecondaryButton size="large" onClick={() => router.back()}>
          Go Back
        </SecondaryButton>

        <CustomButton variant="contained" color="secondary" size="large">
          <Link href="/"> Go to Home</Link>
        </CustomButton>
      </Stack>
    </AuthLayout>
  );
};

export default FourOhFour;
