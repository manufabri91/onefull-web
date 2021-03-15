import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import colors from "./assets/styles/colors.enum";

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.AZUL_ONE,
      dark: colors.AZUL_ONE_DARK,
    },
    secondary: deepOrange,
    text: {
      primary: colors.NEGRO_ONE,
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const theme = responsiveFontSizes(muiTheme);
export default theme;
