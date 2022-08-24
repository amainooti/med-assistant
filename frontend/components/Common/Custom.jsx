import React from "react";

import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "next/link";
import { useRouter } from "next/router";

export const Input = (props) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <OutlinedInput
      id={props.placeholder}
      fullWidth
      type="text"
      onChange={handleChange}
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
      id={props.placeholder}
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
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <OutlinedInput
      id={props.placeholder}
      fullWidth
      type="email"
      name="email"
      onChange={handleChange}
      value={props.value}
      size={props.size}
      placeholder={props.placeholder}
      sx={{
        borderRadius: "1rem",
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

export const CustomSelect = (props) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl fullWidth={props.fullWidth}>
      <Select
        labelId={"select-" + props.label}
        id={"select-" + props.label}
        value={props.value}
        onChange={handleChange}
        size={props.size}
        sx={{
          borderRadius: "1rem",
          background: "rgb(0,0,0,5%)",
          marginBottom: "15px",
          fontFamily: "'Josefin Sans', sans-serif",
          textAlign: "left",
        }}
        defaultValue="none"
      >
        <MenuItem value="none">{props.label}</MenuItem>
        {Array(props.items.length)
          .fill()
          .map((_, index) => (
            <MenuItem value={props.items[index]} key={index}>
              {props.items[index]}
            </MenuItem>
          ))}
        {/* test */}
        {console.log(value)}
      </Select>
    </FormControl>
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
        width: props.width,
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
