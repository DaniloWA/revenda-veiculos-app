import {
  createMuiTheme,
  ThemeProvider,
  CircularProgress,
  unstable_createMuiStrictModeTheme,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes as rt } from "./routes/Routes";
import { CTImport } from "./view/components";

const Auth = lazy(() => import("./view/components/Auth"));
const Register = lazy(() => import("./view/components/Register"));

const createTheme =
  process.env.NODE_ENV === "production"
    ? createMuiTheme
    : unstable_createMuiStrictModeTheme;

const theme = createTheme({
  props: {
    MuiTextField: {
      fullWidth: true,
      variant: "outlined",
    },
    MuiSelect: {
      fullWidth: true,
      variant: "outlined",
    },
  },
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

//const Login = lazy( () => import("./components/login/Login"))

const App = () => {
  return (
    <div className="App">
      {
        <Suspense
          fallback={
            <div className="d-flex justify-content-center mt-5 pt-5">
              <CircularProgress />
            </div>
          }
        >
          <ThemeProvider theme={theme}>
            <CTImport.Loading />
            <CTImport.Notify />
            <CTImport.Alert />
            <Routes>
              <Route path={rt.vehicles} element={<h1>Veiculos</h1>} />
              <Route path={rt.login} element={<Auth />} />
              <Route path={rt.register} element={<Register />} />
              <Route path={rt.home} element={<Auth />} />
            </Routes>
          </ThemeProvider>
        </Suspense>
      }
    </div>
  );
};

export default App;
