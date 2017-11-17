import React, { Component } from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from "react-router-dom"
import { renderRoutes } from 'react-router-config';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          {renderRoutes(routes)}
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
