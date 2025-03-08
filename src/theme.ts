
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { Typography } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a'
    },
    secondary: {
      main: '#d0a73e'
    },
  },
  typography:{
    fontFamily:"Segoe UI"
  }
});

theme = responsiveFontSizes(theme);

export default theme;