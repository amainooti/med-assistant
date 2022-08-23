import React from "react";
import Avatar from "@mui/material/Avatar";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

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
  Badge,
  Button,
  Box,
  TextField,
  OutlinedInput,
} from "@mui/material";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";

import {
  Email,
  Input,
  Password,
  CustomButton,
  SecondaryButton,
  CustomSelect,
} from "../Common/Custom";
import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";

const ProfileForm = (props) => {
  const [age, setAge] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState();
  const router = useRouter();

  const [value, setValue] = React.useState(new Date("2001-08-18"));
  const handleChange = (newValue) => {
    setValue(newValue);
  };
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
            // Data Validation for form
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

              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                    >
                      <input hidden accept="image/*" type="file" />
                      <PhotoCamera />
                    </IconButton>
                  </>
                }
              >
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
              </Badge>

              <Input placeholder="Fullname" size="small" />
              <Input placeholder="Nickname" size="small" />
              <Email placeholder="Email" size="small" />
              <Password placeholder="Password" size="small" />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label={
                    <span
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                      }}
                    >
                      Date of Birth
                    </span>
                  }
                  inputFormat="MM/dd/yyyy"
                  placeholder="Date of Birth"
                  renderInput={(params) => (
                    <TextField
                      fullWidth
                      color="primary"
                      size="small"
                      variant="outlined"
                      sx={{
                        borderRadius: "1rem",
                        background: "rgb(0,0,0,5%)",
                        marginBottom: "15px",
                        fontFamily: "'Josefin Sans', sans-serif",
                        display: { xs: "none", md: "block" },
                      }}
                      {...params}
                    />
                  )}
                />
                <MobileDatePicker
                  inputFormat="MM/dd/yyyy"
                  label={
                    <span
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                      }}
                    >
                      Date of Birth
                    </span>
                  }
                  renderInput={(params) => (
                    <TextField
                      fullWidth
                      color="primary"
                      size="small"
                      variant="outlined"
                      sx={{
                        borderRadius: "1rem",
                        background: "rgb(0,0,0,5%)",
                        marginBottom: "15px",
                        fontFamily: "'Josefin Sans', sans-serif",
                        display: { xs: "block", md: "none" },
                      }}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>

              <CustomSelect
                fullWidth={true}
                label="Gender"
                size="small"
                items={["Male"]}
              />

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
