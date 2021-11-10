import { Container, Typography, makeStyles } from "@material-ui/core";
import {
  Home,
  PhoneAndroid,
  Movie,
  LocalMovies,
  SportsEsports,
  ContactMail,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const useStyle = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "black",
    paddingTop: theme.spacing(10),
    backgroundColor: "black",
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "black",
      color: "white",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(5),
      cursor: "pointer",
      backgroundColor: "black",
    },
    color: "white",
    "&:hover": {
      color: "grey",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },
    "&:hover": {
      transition: "0.7s",
      transform: "rotate(360deg)",
      webkitTransform: "rotate(360deg)",
      msTransform: "rotate(360deg)",
    },
  },
  text: {
    fontSize: "16px",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      transition: "0.7s",
      transform: "rotate(360deg)",
      webkitTransform: "rotate(360deg)",
      msTransform: "rotate(360deg)",
    },
  },
}));

const LeftBar = () => {
  const { t, i18n } = useTranslation();

  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <div>
        <Link
          to="/"
          className={classes.item}
          style={{ textDecoration: "none" }}
        >
          <Home className={classes.icon} />
          <Typography className={classes.text}>{t("home")}</Typography>
        </Link>
      </div>
      <div>
        <Link
          to="/movies"
          className={classes.item}
          style={{ textDecoration: "none" }}
        >
          <Movie className={classes.icon} />
          <Typography className={classes.text}>{t("movies")}</Typography>
        </Link>
      </div>
      <div>
        <Link
          to="/serie"
          className={classes.item}
          style={{ textDecoration: "none" }}
        >
          <LocalMovies className={classes.icon} />
          <Typography className={classes.text}>{t("series")}</Typography>
        </Link>
      </div>
      <div>
        <Link
          to="/app"
          className={classes.item}
          style={{ textDecoration: "none" }}
        >
          <PhoneAndroid className={classes.icon} />
          <Typography className={classes.text}>{t("aplicaciones")}</Typography>
        </Link>
      </div>
      <div>
        <Link
          to="/games"
          className={classes.item}
          style={{ textDecoration: "none" }}
        >
          <SportsEsports className={classes.icon} />
          <Typography className={classes.text}>{t("games")}</Typography>
        </Link>
      </div>
      <div>
        <Link
          to="/contact"
          className={classes.item}
          style={{ textDecoration: "none" }}
        >
          <ContactMail className={classes.icon} />
          <Typography className={classes.text}>{t("contact")}</Typography>
        </Link>
      </div>
      {/* <div>
        <Link
          to="/comment"
          className={classes.item}
          style={{ textDecoration: "none" }}
        >
          <Comment className={classes.icon} />
          <Typography className={classes.text}>Comentarios</Typography>
        </Link>
      </div> */}
    </Container>
  );
};

export default LeftBar;
