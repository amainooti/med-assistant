import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";

import {
  Paper,
  Typography,
  styled,
  Stack,
  Divider,
  Checkbox,
  useTheme,
  CircularProgress,
  Snackbar,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import WestRoundedIcon from "@mui/icons-material/WestRounded";

import { Email, Password, CustomButton } from "../Common/Custom";

import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

export const ForgotPassword = () => {
  const [errorMessage, setErrorMessage] = React.useState();
  const router = useRouter();

  return (
    <>
      <Paper
        sx={{
          width: { md: "500px", sm: "80%", xs: "100%" },
          padding: { md: "2rem 3rem", xs: "2rem 1rem" },
          minHeight: { sm: "100%", xs: "100vh" },
          margin: "auto",
          // backgroundColor: "#000",
        }}
      >
        <IconButton
          aria-label="Go Back"
          size="large"
          onClick={() => router.back()}
          sx={{
            top: "-20px",
            left: "-170px",
          }}
        >
          <WestRoundedIcon />
        </IconButton>
        <Box
          sx={{
            marginBottom: "1rem",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: "30px",
              fontFamily: "'Josefin Sans', sans-serif",
            }}
          >
            Forgot Password
          </Typography>
        </Box>
        <Image
          src="/assets/forgotpassword.png"
          alt=""
          width="256"
          height="144"
        />

        <Formik
          initialValues={{
            email: "",
            password: "",
            submit: null,
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            isSubmitting,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Email placeholder="Enter Account Email Address" size="small" />
              <CustomButton
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                disabled={isSubmitting}
                sx={{ textTransform: "none" }}
              >
                {isSubmitting ? <CircularProgress /> : "Reset"}
              </CustomButton>
            </form>
          )}
        </Formik>
      </Paper>
    </>
  );
};

export const ResetPassword = () => {
  const [errorMessage, setErrorMessage] = React.useState();
  const router = useRouter();

  return (
    <>
      <Paper
        sx={{
          width: { md: "500px", sm: "80%", xs: "100%" },
          padding: { md: "2rem 3rem", xs: "2rem 1rem" },
          minHeight: { sm: "100%", xs: "100vh" },
          margin: "auto",
          // backgroundColor: "#000",
        }}
      >
        <Box
          sx={{
            marginBottom: "1rem",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: "30px",
              fontFamily: "'Josefin Sans', sans-serif",
            }}
          >
            Reset Password
          </Typography>
        </Box>
        <Image src="/assets/resetkey.png" alt="" width="256" height="171" />
        <Formik
          initialValues={{
            password: "",
            confirmpassword: "",
            submit: null,
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            isSubmitting,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Password
                size="small"
                placeholder="Enter New Password"
                color="secondary"
              />
              <Password
                size="small"
                placeholder="Confirm New Password"
                color="secondary"
              />
              <CustomButton
                variant="contained"
                color="secondary"
                type="submit"
                fullWidth
                disabled={isSubmitting}
                sx={{ textTransform: "none" }}
              >
                {isSubmitting ? <CircularProgress /> : "Reset"}
              </CustomButton>
            </form>
          )}
        </Formik>
      </Paper>
    </>
  );
};

// redirect to Login page after reset
