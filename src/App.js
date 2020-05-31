import React from 'react';
import './App.scss';
import { AppRouter } from './router/Router';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { Provider } from 'react-redux';
import { Store } from './store/store';
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  }
});
const App = () => {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>

  );
}

export default App;
