import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

import Switch from "@material-ui/core/Switch";
import { useTranslation } from "react-i18next";

const useStyle = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#1b1b1b",
    flexGrow: 1,
    textTransform: "uppercase",
    fontFamily: "Mosntserrat",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      transition: "0.7s",
      transform: "rotate(360deg)",
      webkitTransform: "rotate(360deg)",
      msTransform: "rotate(360deg)",
    },
  },
  dark: {
    "&:hover": {
      color: "grey",
    },
    textTransform: "none",
  },
}));

const Navbar = ({ check, change }) => {
  const classes = useStyle();

  const { t, i18n } = useTranslation();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          {/* Un Poco de Todo */}
          {t("greeting")}
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          UPDT
        </Typography>
        {/* <Settings className={classes.icons} /> */}
        <Typography className={classes.dark}>
          <Switch
            defaultChecked
            color="secondary"
            onChange={change}
            checked={check}
          />
          LightMode
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
