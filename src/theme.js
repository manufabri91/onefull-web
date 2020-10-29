import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#042af7',
      dark: '#042e3d',
    },
    secondary: teal,
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);
export default theme;
