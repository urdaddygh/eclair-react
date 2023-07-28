import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import s from "./Auth.module.scss";
import { logo } from "../../Images";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Auth = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [miss, setMiss] = useState("");

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },

    onSubmit: (values) => {
      if (values.login === "admin" && values.password === "1234") {
        setErr(true);
        return navigate("/main/home");
      } else if (values.password !== "1234" && values.login !== "admin") {
        setErr(true);
        setMiss("Wrong password and login");
      } else if (values.login !== "admin") {
        setErr(true);
        setMiss("Wrong login");
      } else if (values.password !== "1234") {
        setErr(true);
        setMiss("Wrong password");
      } else {
        setErr(true);
      }
    },
  });

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      {/* <img src={logo} width="400px" height="200px" style={{margin:"100px auto 0 auto", display:"flex", justifyContent:"center", backgroundColor:"#2FC2FF"}}/> */}
      {/* <p style={{ textAlign: "center" }}>ECLAIR</p> */}
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Log in to ECLAir system
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Login"
            name="login"
            value={formik.values.login}
            // autoComplete="email"
            onChange={formik.handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {err && <p className={s.wrongPass}>{miss}</p>}
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомнить меня"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            sign in
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Auth;
