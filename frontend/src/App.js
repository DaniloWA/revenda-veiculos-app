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
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant: "outlined",
      },
    },
    MuiSelect: {
      defaultProps: {
        fullWidth: true,
        variant: "outlined",
      },
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
            <ComponentsImport.Loading></ComponentsImport.Loading>
            <ComponentsImport.Notify></ComponentsImport.Notify>
            <Routes>
              <Route path={rt.home} element={<h1>home</h1>}></Route>
            </Routes>
          </ThemeProvider>
        </Suspense>
      }
    </div>
  );
};

export default App;
