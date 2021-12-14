import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#F0F0F0",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#C70000",
    },
    background: {
      default: "#fff",
    },
    button: {
      main: "#c6ff00",
    },
  },
});

export default theme;
