import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#10defd',
      light: '#0de0fe',
    },
    secondary: {
      main: '#09e5ab',
      light: '#F7F1EA',
    },
    grey: {
      200: '#f8f9fa',
      300: '#F5F5F5',
      700: '#6B7684',
      800: '#333333',
    },
    action: {
      hover: '#00401C',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
