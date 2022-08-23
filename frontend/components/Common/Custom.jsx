import React from "react";

import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import Link from "next/link";

export const Input = (props) => {
  return (
    <OutlinedInput
      id="password-field"
      fullWidth
      type="string"
      value={props.value}
      size={props.size}
      placeholder={props.placeholder}
      sx={{
        borderRadius: "1rem",
        background: "rgb(0,0,0,5%)",
        marginBottom: "15px",
        fontFamily: "'Josefin Sans', sans-serif",
      }}
    />
  );
};

export const Password = (props) => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <OutlinedInput
      id="password-field"
      fullWidth
      type={values.showPassword ? "text" : "password"}
      value={props.value}
      onChange={handleChange("password")}
      size={props.size}
      placeholder={props.placeholder}
      sx={{
        borderRadius: "1rem",
        background: "rgb(0,0,0,5%)",
        marginBottom: "15px",
        fontFamily: "'Josefin Sans', sans-serif",
      }}
      startAdornment={
        <InputAdornment position="start">
          <LockTwoToneIcon />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton edge="end" size="small">
            {values.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export const Email = (props) => {
  return (
    <OutlinedInput
      id="password-field"
      fullWidth
      type="email"
      value={props.value}
      size={props.size}
      placeholder={props.placeholder}
      sx={{
        borderRadius: "1rem",
        background: "rgb(0,0,0,5%)",
        marginBottom: "15px",
        fontFamily: "'Josefin Sans', sans-serif",
      }}
      startAdornment={
        <InputAdornment position="start">
          <EmailTwoToneIcon />
        </InputAdornment>
      }
    />
  );
};

export const Date = (props) => {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={(event) => console.log("value changed!")}
      />
    </div>
  );
};

export const Select = (props) => {
  return (
    <OutlinedInput
      id="password-field"
      fullWidth
      type="select"
      value={props.value}
      size={props.size}
      placeholder={props.placeholder}
      sx={{
        borderRadius: "1rem",
        background: "rgb(0,0,0,5%)",
        marginBottom: "15px",
        fontFamily: "'Josefin Sans', sans-serif",
      }}
    />
  );
};

export const CustomButton = (props) => {
  return (
    <Button
      variant={props.variant}
      size={props.size}
      sx={{
        borderRadius: "1rem",
        textTransform: "none",
        fontFamily: "'Josefin Sans', sans-serif",
      }}
      fullWidth={props.fullWidth}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
};

export const SecondaryButton = (props) => {
  return (
    <Button
      variant={props.variant}
      size={props.size}
      disableElevation
      sx={{
        color: "#00a889",
        fontWeight: "bold",
        background: "rgb(0,0,0,5%)",
        borderRadius: "1rem",
        textTransform: "none",
        fontFamily: "'Josefin Sans', sans-serif",
      }}
      fullWidth={props.fullWidth}
    >
      {props.children}
    </Button>
  );
};
