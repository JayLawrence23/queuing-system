import Login from './Pages/Login/Login'
import { createTheme, ThemeProvider} from '@material-ui/core'
import { pink, yellow, } from '@material-ui/core/colors'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './Pages/Register/Register'
import Home from './Pages/Customer/Home'
import Ticketing from './Pages/Customer/Ticketing'
import VirtualMonitoring from './Pages/Customer/VirtualMonitoring'

const theme = createTheme({
  palette: {
    primary: pink,
    secondary: yellow,
  },
  typography: {
    fontFamily: [
      'Montserrat'
    ].join(','),
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/queuing-system/login">
              <Login />
            </Route>
            <Route path="/queuing-system/register">
              <Register />
            </Route>
            <Route path="/queuing-system/home">
              <Home authorized={true}/>
            </Route>
            <Route path="/queuing-system/ticketing">
              <Ticketing/>
            </Route>
            <Route path="/queuing-system/virtualmonitoring">
              <VirtualMonitoring />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
