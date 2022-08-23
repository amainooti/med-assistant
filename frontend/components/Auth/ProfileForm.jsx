import React from "react";
import Avatar from "@mui/material/Avatar";

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
} from "../Common/Custom";
import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";

const ProfileForm = (props) => {
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
        <Formik
          initialValues={{
            fullname: "",
            nickname: "",
            dob: "",
            email: "",
            gender: "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            fullname: Yup.string()
              .min(0)
              .max(244)
              .required("FullName is required!"),

            dob: Yup.date().min(0).max(244).required("Password is required!"),

            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
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
                  {props.title}
                </Typography>
              </Box>
              <Avatar
                alt=""
                src=""
                sx={{
                  width: 150,
                  height: 150,
                  marginBottom: "1.5rem",
                  alignSelf: "center",
                }}
              />
              <Input placeholder="Fullname" size="small" />
              <Input placeholder="Nickname" size="small" />

              <Email placeholder="Email" size="small" />
              <Password placeholder="Password" size="small" />
              <Input placeholder="Fullname" size="small" />
              <Input placeholder="Fullname" size="small" />

              <CustomButton
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                disabled={isSubmitting}
                sx={{ textTransform: "none" }}
              >
                {isSubmitting ? <CircularProgress /> : "Continue"}
              </CustomButton>
            </form>
          )}
        </Formik>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={!!errorMessage}
        onClose={() => setErrorMessage(null)}
        message={errorMessage}
        action={
          <Button
            color="secondary"
            size="small"
            onClick={() => setErrorMessage(null)}
          >
            OK
          </Button>
        }
      />
    </>
  );
};

export default ProfileForm;
