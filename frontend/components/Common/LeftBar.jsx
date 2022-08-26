import React from "react";
import { useTheme } from "@mui/material/styles";

import {
  Box,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Drawer,
  AppBar,
  styled,
  InputBase,
  Stack,
  alpha,
  Tooltip,
  Button,
  Avatar,
  Paper,
  ClickAwayListener,
} from "@mui/material";

import { Search, FavoriteBorderRounded } from "@mui/icons-material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { SecondaryButton, CustomButton } from "./Custom";

const SearchComp = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "4px",
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  width: "100%",
  maxWidth: "700px",
  border: `2px solid white`,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // width: "100%",
    // maxWidth: "1000px",
  },
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const LeftAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const LeftDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const LeftBar = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }} color="secondary">
      <LeftAppBar position="fixed" open={open} color="secondary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontFamily: "'Josefin Sans', sans-serif",
            }}
          >
            Med-X
          </Typography>
          <Box sx={{ flexGrow: { lg: 1, xs: 0 } }} />

          <SearchComp width="100%">
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Searching for..."
              inputProps={{ "aria-label": "search" }}
              sx={{
                width: "100%",
              }}
            />
          </SearchComp>
          <Box sx={{ flexGrow: { lg: 1 } }} />

          <Stack spacing={2} direction="row">
            <Tooltip title="Profile" arrow>
              <>
                <SecondaryButton
                  textColor="inherit"
                  onClick={() => setShowProfile((prev) => !prev)}
                >
                  <Avatar
                    sx={{
                      marginRight: "5px",
                    }}
                  />
                  Hi, User
                </SecondaryButton>
              </>
            </Tooltip>
          </Stack>
        </Toolbar>
      </LeftAppBar>
      <LeftDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </LeftDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {showProfile && <Profile />}

        {children}
      </Box>
    </Box>
  );
};

export default LeftBar;

const Profile = () => {
  return (
    <Paper
      sx={{
        position: "absolute",
        maxWidth: "350px",
        right: "20px",
        top: "70px",
      }}
      elevation={2}
    >
      <Box p={3}>
        <Box mb={3}>
          <Box display="flex" gap={2.5} mb={1}>
            <Avatar alt="User" src="" sx={{ width: 100, height: 100 }} />
            <Box mt={2} display="flex" flexDirection="column">
              <Typography
                variant="paragraph"
                sx={{
                  fontWeight: "bold",
                }}
              >
                User Name
              </Typography>
              <Typography variant="paragraph" color="GrayText">
                (User/Doctor)
              </Typography>
              <Typography variant="paragraph" color="GrayText">
                email@med-x.com
              </Typography>
            </Box>
          </Box>
          {/* // profile menu */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ea est
          molestiae commodi nisi officia cupiditate delectus sint voluptate aut
          cumque reiciendis rerum magni eos ducimus enim perspiciatis, ut
          repellat!
        </Box>
        <CustomButton color="secondary" variant="contained" fullWidth={true}>
          Logout
        </CustomButton>
      </Box>
    </Paper>
  );
};
