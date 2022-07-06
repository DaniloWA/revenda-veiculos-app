import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import { CircularProgress } from "@material-ui/core";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes as rt } from "./routes/Routes";
import { ComponentsImport } from "./view/components";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";

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
            <ComponentsImport.Loading />
            <ComponentsImport.Notify />
            <ComponentsImport.Alert />
            <Routes>
              <Route
                path={rt.vehicles}
                element={() => {
                  return <h1>Veiculos</h1>;
                }}
              ></Route>
              <Route
                path={rt.login}
                element={<ComponentsImport.Auth />}
              ></Route>
              <Route path={rt.home} element={<ComponentsImport.Auth />}></Route>
            </Routes>
          </ThemeProvider>
        </Suspense>
      }
    </div>
  );
};

export default App;
