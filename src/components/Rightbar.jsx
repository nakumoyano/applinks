import {
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    height: "100vh",
    position: "sticky",

    top: 0,
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
      backgroundColor: "black",
      color: "white",
    },
  },
  title: {
    fontSize: 16,
    color: "#151313",
    fontWeight: "bold",
  },
  right: {
    paddingTop: theme.spacing(10),
    margin: "5px",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  img: {
    position: "relative",
  },
}));

const RightBar = () => {
  const classes = useStyle();

  const { t, i18n } = useTranslation();

  return (
    <div className="Rightbar">
      <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>
          {t("gallery")}
        </Typography>
        <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
          <ImageListItem>
            <img
              src="http://apkpuff.com/wp-content/uploads/2020/05/Duolingo.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i2.wp.com/wildescargas.pw/wp-content/uploads/2021/04/Miniatura-Wildescargas20.jpg?fit=1280%2C720&ssl=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://phantom-elmundo.unidadeditorial.es/1bdd2b6bf26ee9d6f709d6f8bbbe4895/crop/130x0/1855x1150/resize/746/f/jpg/assets/multimedia/imagenes/2020/06/24/15930194372255.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2016/03/Clash-Royale.jpg?fit=1920%2C1080&ssl=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.staticaly.com/img/1.bp.blogspot.com/-X6R69FWFo-c/X6Che8LA7hI/AAAAAAAAFy0/tTZK93fJxnwPZ66Gy98sNnZnmXivbOg-QCLcBGAsYHQ/s1600-rw-e90/%25D8%25AA%25D8%25AD%25D9%2585%25D9%258A%25D9%2584-%25D8%25A8%25D8%25B1%25D9%2586%25D8%25A7%25D9%2585%25D9%258E%25D8%25AC-picsart--%25D9%2584%25D9%2584%25D9%2583%25D9%2585%25D8%25A8%25D9%258A%25D9%2588%25D8%25AA%25D8%25B1-%25D9%2588%25D9%2587%25D9%2588%25D8%25A7%25D8%25AA%25D9%2581-%25D8%25A3%25D9%2586%25D8%25AF%25D8%25B1%25D9%2588%25D9%258A%25D8%25AF-%25D9%2588-%25D8%25A3%25D9%258A%25D9%2581%25D9%2588%25D9%2586-%25D9%2585%25D8%25AC%25D8%25A7%25D9%2586%25D8%25A7-%25D8%25A3%25D8%25AD%25D8%25AF%25D8%25AB-%25D8%25A5%25D8%25B5%25D8%25AF%25D8%25A7%25D8%25B1-2021.png"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i0.wp.com/www.laarena.com.ar/__uP_Load_/2021/05/social-media-apps-2-shutterstock-650-e157668605753835d964ce.jpg?fit=650%2C399"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography className={classes.title} gutterBottom>
          {t("about-us")}
        </Typography>
        <Typography gutterBottom>
          <p className={classes.about}>{t("tabout")}</p>
        </Typography>
      </Container>
      <Typography className={classes.right}>
        <Typography className={classes.title} gutterBottom>
          SOBRE NOSOTROS
        </Typography>
        <Typography gutterBottom>
          <p className={classes.about}>
            Somos un sitio web pensado para brindarte el mayor entretenimiento y
            comodidad, uniendo en una misma plataforma, links totalmente
            gratuitos de pelis,juegos,apps y mas para que hagas tus días más
            divertidos.
          </p>
        </Typography>
      </Typography>
    </div>
  );
};

export default RightBar;
