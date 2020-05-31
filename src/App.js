import React from 'react';
import './App.scss';
import { AppRouter } from './router/Router';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  }
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
