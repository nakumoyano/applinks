import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useStyle = makeStyles((theme) => ({
  contact: {
    height: "100vh",
    marginBottom: "28px",
    margin: 10,
    [theme.breakpoints.down("sm")]: {
      height: 685,
    },
  },
  hero: {
    paddingTop: theme.spacing(8),
  },
  card: {
    background: "#ffffff10",
    boxShadow: "0px 10px 10px black",
    [theme.breakpoints.down("sm")]: {
      height: 605,
      paddingBottom: "60px",
    },
  },
  title: {
    color: "black",
  },
  small: {
    color: "#E51212",
    fontSize: 12,
  },
  p: {
    color: "#10EE1F",
    fontSize: 20,
  },
}));

const Contact = () => {
  const classes = useStyle({});

  const { t, i18n } = useTranslation();

  const initialValues = {
    username: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "El nombre es requerido!";
    }
    if (!values.lastname) {
      errors.lastname = "El apellido es requerido!";
    }
    if (!values.email) {
      errors.email = "El email es requerido!";
    } else if (!regex.test(values.email)) {
      errors.email = "Este no es un formato válido para el email";
    }
    if (!values.phone) {
      errors.phone = "El teléfono es requerido!";
    }
    if (!values.message) {
      errors.message = "El mensaje es requerido!";
    }
    return errors;
  };
  return (
    <div className={classes.contact}>
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        className={classes.hero}
      >
        <Card
          style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}
          className={classes.card}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" className={classes.title}>
              {t("contact-us")}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body2"
              component="p"
            >
              {t("textcontact")}
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    value={formValues.username}
                    onChange={handleChange}
                    label={t("name")}
                    placeholder={t("name")}
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="username"
                  />
                  <p className={classes.small}>{formErrors.username}</p>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    value={formValues.lastname}
                    onChange={handleChange}
                    label={t("lastname")}
                    placeholder={t("lastname")}
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="lastname"
                  />
                  <p className={classes.small}>{formErrors.lastname}</p>
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    value={formValues.email}
                    onChange={handleChange}
                    label="Email"
                    placeholder="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                  />
                  <p className={classes.small}>{formErrors.email}</p>
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    value={formValues.phone}
                    onChange={handleChange}
                    label={t("phone")}
                    placeholder={t("phone")}
                    variant="outlined"
                    fullWidth
                    type="number"
                    name="phone"
                  />
                  <p className={classes.small}>{formErrors.phone}</p>
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    value={formValues.message}
                    onChange={handleChange}
                    label={t("message")}
                    multiline
                    rows={4}
                    placeholder={t("message")}
                    variant="outlined"
                    fullWidth
                    name="message"
                  />
                  <p className={classes.small}>{formErrors.message}</p>
                </Grid>
                <Grid xs={12} item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    {t("submit")}
                  </Button>
                </Grid>
              </Grid>
            </form>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <p className={classes.p}>Enviado correctamente</p>
            ) : null}
          </CardContent>
        </Card>
      </Typography>
    </div>
  );
};

export default Contact;
