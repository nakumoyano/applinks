import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  InputBase,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Cancel, Favorite, Search } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import data from "../DataMovies";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const useStyle = makeStyles((theme) => ({
  hero: {
    paddingTop: theme.spacing(10),
    marginLeft: 23,
  },
  hr: {
    width: 125,
    marginBottom: "20px",
  },
  text: {
    color: "black",
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
    minHeight: "200px",
    "&:hover": {
      transform: "scale(1.1,1.1)",
      transition: "500ms linear",
    },
    display: "none",
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
    background: "grey",
  },
  media: {
    height: 150,
  },
  cuerpo: {
    height: 50,
    marginBottom: "15px",
  },
  btn: {
    color: "white",
    position: "relative",
    outline: "none",
    textDecoration: "none",
  },
  link: {
    outline: "none",
    fontSize: 16,
    textDecoration: "none",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#CE1818",
    "&:hover": {
      backgroundColor: "#B31E1E",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.black, 0.2),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.3),
    },
    border: "1px solid black",
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "80%",
    },
    color: "black",
  },
  input: {
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    color: "black",
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
    color: "black",
  },
  title: {
    color: "black",
  },
  book: {
    cursor: "pointer",
    alignItems: "center",
    margin: "0px 20px",
    justifyContent: "center",
    // marginLeft: "30px",
    transform: "translate(150%, 20%)",
    "&:hover": {
      color: "red",
    },
  },
}));
const Movies = () => {
  //scroll
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  //para abrir lo que sea
  const [open, setOpen] = useState(false);

  //estilos
  const classes = useStyle({ open });

  // buscador
  const [filter, setFilter] = useState("");

  const searchText = (e) => {
    setFilter(e.target.value);
  };
  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const { t, i18n } = useTranslation();
  return (
    <div className="app">
      <Typography variant="h3" color="primary">
        <Box className={classes.hero}>
          <Box className={classes.text}>{t("titlemovie")}</Box>
          <hr className={classes.hr} />
          <div className={classes.search}>
            <Search />
            <InputBase
              placeholder={t("search")}
              className={classes.input}
              value={filter}
              onChange={searchText.bind(this)}
            />
            <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
          </div>
          <div className={classes.icons}>
            <Search
              className={classes.searchButton}
              onClick={() => setOpen(true)}
            />
          </div>
        </Box>
      </Typography>

      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          {dataSearch.map((item, index) => {
            return (
              <Grid item xs={12} md={6} lg={4}>
                <Card className={classes.card} data-aos="fade-down">
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="Duolingo Plus"
                    className={classes.media}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="h2"
                      className={classes.title}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className={classes.cuerpo}
                      gutterBottom
                    >
                      {item.desc}
                    </Typography>

                    <a
                      href={item.link}
                      className={classes.link}
                      target="_blank"
                    >
                      <Button className={classes.btn}>
                        {t("carddownload")}
                      </Button>
                    </a>
                    <Favorite className={classes.book} id="book" />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Movies;
