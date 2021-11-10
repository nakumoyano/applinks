import { Button, Grid, Paper, makeStyles, Box } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import LeftBar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Inicio from "./pages/Home";
import Peliculas from "./pages/Movies";
import Series from "./pages/Series";
import Aplicaciones from "./pages/Aplicaciones";
import Juegos from "./pages/Game";
import Contacto from "./pages/Contact";
import RightBar from "./components/Rightbar";

import { useState } from "react";
import Comentarios from "./pages/Comentarios";
import i16n from "./i18n";
import i18n from "./i18n";
import { Language } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  ln: {
    paddingTop: theme.spacing(10),
    // [theme.breakpoints.down("md")]: {
    //   display: "block",
    // },
    float: "right",
    zIndex: 1,
    "&:focus": {
      color: "white",
    },
  },
}));

const App = () => {
  const classes = useStyle();
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      type: darkMode ? "light" : "dark",
    },
  });
  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Paper style={{ height: "100%" }}>
            <Navbar check={darkMode} change={() => setDarkMode(!darkMode)} />
            <Grid container>
              <Grid item sm={2} xs={2}>
                <LeftBar />
              </Grid>
              <Grid item sm={7} xs={10}>
                <Switch>
                  <Route exact path="/" component={Inicio}></Route>
                  <Route exact path="/movies" component={Peliculas}></Route>
                  <Route exact path="/serie" component={Series}></Route>
                  <Route exact path="/app" component={Aplicaciones}></Route>
                  <Route exact path="/games" component={Juegos}></Route>
                  <Route exact path="/contact" component={Contacto}></Route>
                  <Route exact path="/comment" component={Comentarios}></Route>
                  <Redirect to="/"></Redirect>
                </Switch>
              </Grid>
              <Grid item sm={3}>
                <Language className={classes.ln} />
                <Button
                  color="secondary"
                  onClick={changeLanguage("es")}
                  className={classes.ln}
                >
                  ES
                </Button>
                <Button
                  color="secondary"
                  onClick={changeLanguage("en")}
                  className={classes.ln}
                >
                  EN
                </Button>
                <RightBar />
              </Grid>
            </Grid>
          </Paper>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
