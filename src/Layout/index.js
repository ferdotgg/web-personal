import React from "react";
import {
  AppBar,
  Box,
  createStyles,
  Drawer,
  fade,
  IconButton,
  ListItemIcon,
  makeStyles,
  MenuItem,
  MenuList,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { colors } from "../theme/colors.theme";

import HomeIcon from "@material-ui/icons/Home";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import StarIcon from "@material-ui/icons/Star";

import Brightness7Icon from "@material-ui/icons/Brightness7";
import ComputerIcon from "@material-ui/icons/Computer";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      outline: "none",
    },
    title: {
      flexGrow: 1,
      color: colors.white,
      fontWeight: 800,
      textTransform: "uppercase",
    },
    logo: {
      borderRadius: 360,
      width: 50,
      height: 50,
    },
    menu: {
      padding: 5,
      transition: "all ease .20s",
      cursor: "pointer",
      "&:hover": {
        transition: "all ease .20s",
        backgroundColor: fade(colors.blueFernando, 0.5),
        borderRadius: 10,
      },
    },
    menuActive: {
      padding: 5,
      cursor: "pointer",
      backgroundColor: fade(colors.blueFernando, 0.5),
      borderRadius: 10,
      color: colors.blueFernando,
      border: `2px solid ${colors.blueFernando}`,
    },
    menuSocials: {
      padding: 5,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#000",
        borderRadius: 10,
      },
    },
    drawerPaper: {
      padding: 10,
      backgroundColor: colors.black,
      backgroundPosition: "top center",
    },
    anchorLeft: {
      width: 300,
    },
  })
);

const Layout = ({
  children,
  pageActive,
  loading,
  desktop,
  handleChangePage,
  toggleDrawer,
  positionDrawer,
  setDrawer,
  drawer,
}) => {
  const classes = useStyles();

  const menuItem = [
    {
      name: "Home",
      icon: <HomeIcon />,
      url: "/",
    },
    {
      name: "Experience",
      icon: <LinearScaleIcon />,
      url: "/experience",
    },
    {
      name: "Skills",
      icon: <StarIcon />,
      url: "/skills",
    },
    {
      name: "Certificates",
      icon: <Brightness7Icon />,
      url: "/certificates",
    },
    {
      name: "Projects",
      icon: <ComputerIcon />,
      url: "/projects",
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/scriptkash/",
      icon: <LinkedInIcon />,
    },
    {
      name: "GitHub",
      url: "https://github.com/ScriptKash",
      icon: <GitHubIcon />,
    },
    {
      name: "Blog",
      url: "https://www.fernando.gg/blog/",
      icon: <FavoriteIcon />,
    },
  ];

  const closeDrawer = (number) => {
    setDrawer({ ...drawer, [positionDrawer]: false });
    handleChangePage(number);
  };

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener");
  };

  return (
    <>
      {desktop ? (
        <Box display="flex" width="100%">
          <Box
            flexDirection="column"
            height="100vh"
            bgcolor={colors.black}
            textAlign="center"
            display="flex"
            justifyContent="space-between"
            p={1}
            style={{
              borderBottomRightRadius: 10,
            }}
          >
            <Box mt={3} onClick={() => handleChangePage(0)}>
              <Link to="/">
                <img
                  src="./assets/images/logo.png"
                  className={classes.logo}
                  alt="Logo"
                />
              </Link>
            </Box>
            <Box>
              {menuItem.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.url}
                  style={{ color: colors.white }}
                >
                  <Tooltip arrow placement="right" title={item.name}>
                    <Box
                      onClick={() => handleChangePage(index)}
                      display="relative"
                      mb={4}
                      className={
                        pageActive === index ? classes.menuActive : classes.menu
                      }
                    >
                      <Box>{item.icon}</Box>
                    </Box>
                  </Tooltip>
                </Link>
              ))}
            </Box>
            <Box>
              {socials.map((item) => (
                <Box
                  onClick={() => openNewTab(item.url)}
                  key={item.name}
                  display="relative"
                  mb={2}
                  className={classes.menuSocials}
                >
                  <Tooltip arrow placement="right" title={item.name}>
                    <Box>{item.icon}</Box>
                  </Tooltip>
                </Box>
              ))}
            </Box>
          </Box>

          {loading ? (
            <div id="loader" className="loader-container">
              <div className="flex">
                <div className="loader"></div>
              </div>
              <div className="load-text">Loading...</div>
            </div>
          ) : (
            <Box width="100%" position="relative">
              {children}
            </Box>
          )}
        </Box>
      ) : (
        <>
          {loading ? (
            <div id="loader" className="loader-container">
              <div className="flex">
                <div className="loader"></div>
              </div>
              <div className="load-text">Loading...</div>
            </div>
          ) : (
            <>
              <div className={classes.root}>
                <AppBar
                  style={{ height: 60, backgroundColor: colors.black }}
                  position="fixed"
                >
                  <Toolbar>
                    <IconButton
                      onClick={toggleDrawer("left", true, "principal-menu")}
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Typography
                        onClick={() => handleChangePage(0)}
                        variant="body1"
                        className={classes.title}
                      >
                        Fernando.GG
                      </Typography>
                    </Link>
                    <Box width="100%" display="flex" justifyContent="flex-end">
                      {socials.map((item) => (
                        <Box
                          onClick={() => openNewTab(item.url)}
                          key={item.name}
                          mr={2}
                          style={{ cursor: "pointer" }}
                        >
                          <Box>{item.icon}</Box>
                        </Box>
                      ))}
                    </Box>
                  </Toolbar>
                </AppBar>
              </div>

              <Box mt="60px">{children}</Box>

              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                  paperAnchorLeft: classes.anchorLeft,
                }}
                anchor="left"
                open={drawer[positionDrawer]}
                onClose={toggleDrawer(positionDrawer, false)}
              >
                <Box>
                  <Box
                    textAlign="center"
                    mt={3}
                    mb={3}
                    onClick={() => closeDrawer(0)}
                  >
                    <Link to="/">
                      <img
                        src="./assets/images/logo.png"
                        style={{ width: 100, borderRadius: 360 }}
                        alt="Logo"
                      />
                    </Link>
                  </Box>
                  {menuItem.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.url}
                      style={{ color: colors.white, textDecoration: "none" }}
                    >
                      <MenuList>
                        <MenuItem
                          onClick={() => closeDrawer(index)}
                          className={
                            pageActive === index
                              ? classes.menuActive
                              : classes.menu
                          }
                        >
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <Typography style={{ fontWeight: 700 }}>
                            {item.name}
                          </Typography>
                        </MenuItem>
                      </MenuList>
                    </Link>
                  ))}
                </Box>
              </Drawer>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Layout;
