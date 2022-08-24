import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
import { useRouter } from "next/router";

import {
  Paper,
  Typography,
  styled,
  Stack,
  Divider,
  Checkbox,
  useTheme,
  FormControlLabel,
  FormHelperText,
  CircularProgress,
  Snackbar,
  IconButton,
  InputAdornment,
  FilledInput,
  Button,
  Box,
} from "@mui/material";

import {
  Email,
  Input,
  Password,
  CustomButton,
  SecondaryButton,
  BackButton,
} from "../Common/Custom";

import Link from "next/link";
import Image from "next/image";

import { Formik } from "formik";
import * as Yup from "yup";
import WestRoundedIcon from "@mui/icons-material/WestRounded";

const RegisterForm = () => {
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
            top: "-125px",
            left: "-150px",
          }}
        >
          <WestRoundedIcon />
        </IconButton>

        <Image src="/assets/seth.png" alt="" width="128" height="127" />

        <Formik
          initialValues={{
            email: "",
            password: "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            password: Yup.string()
              .min(8)
              .max(244)
              .required("Password is required!"),
          })}
          onSubmit={async (values) => {
            LoginCall(values, dispatch, setErrorMessage);
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
              <Box
                sx={{
                  marginBottom: "1rem",
                  marginTop: "1rem",
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
                  Create New Account
                </Typography>
              </Box>
              <Email placeholder="Email" size="small" />
              <Password placeholder="Password" size="small" />

              <CustomButton
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                disabled={isSubmitting}
                sx={{ textTransform: "none" }}
              >
                {isSubmitting ? <CircularProgress /> : "Sign up"}
              </CustomButton>
            </form>
          )}
        </Formik>
        <Typography
          variant="h6"
          color="primary"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop: "1rem",
            fontSize: "0.9rem",
            fontFamily: "'Josefin Sans', sans-serif",
          }}
        >
          <Link href="#">
            <a>Forgot Password?</a>
          </Link>
        </Typography>

        <Divider
          sx={{
            my: 3,
            color: "#7D879C",
          }}
        >
          or continue with
        </Divider>
        <Stack
          direction="row"
          sx={{ justifyContent: "center", height: "2.5rem" }}
          gap="1rem"
        >
          <Button
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            <BsFacebook />
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            <FcGoogle />
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            <BsApple />
          </Button>
        </Stack>
        <Typography
          variant="h6"
          color="primary"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop: "1rem",
            fontSize: "0.9rem",
            fontFamily: "'Josefin Sans', sans-serif",
          }}
        >
          <span
            style={{
              color: "#7D879C",
            }}
          >
            Already have an account?{" "}
          </span>

          <Link href="/login">
            <a>Sign in</a>
          </Link>
        </Typography>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={!!errorMessage}
        onClose={() => setErrorMessage(null)}
        message={errorMessage}
        action={
          <CustomButton
            color="secondary"
            size="small"
            onClick={() => setErrorMessage(null)}
          >
            OK
          </CustomButton>
        }
      />
    </>
  );
};

export default RegisterForm;
