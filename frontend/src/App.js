import React from "react";

import { TextField, Button, createTheme, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Routes, Route } from "react-router-dom";

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

const App = () => (
  <ThemeProvider theme={theme}>
            <Routes>
              <Route path={rt.home} element={<h1>home</h1>}></Route>
            </Routes>
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
    <Button variant="contained" disabled>
      Disabled
    </Button>
    <Button variant="contained" color="primary" href="#contained-buttons">
      Link
    </Button>
    <TextField />
  </ThemeProvider>
);

export default App;
