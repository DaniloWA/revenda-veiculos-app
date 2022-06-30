import React from "react";

import { TextField, Button, createTheme, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";

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
    <h1>Aplicação react</h1>
    <Button variant="contained" color="primary">
      Primary
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
