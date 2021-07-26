import Login from './Pages/Login/Login'
import { createTheme, ThemeProvider} from '@material-ui/core'
import { pink, yellow, deepOrange} from '@material-ui/core/colors'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './Pages/Register/Register'
import Home from './Pages/Customer/Home'
import Ticketing from './Pages/Customer/Ticketing'
import VirtualMonitoring from './Pages/Customer/VirtualMonitoring'
import Transactions from './Pages/Customer/Transactions'
import Account from './Pages/Customer/Account'

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
            <Route exact path="/queuing-system/">
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
            <Route path="/queuing-system/transactions">
              <Transactions />
            </Route>
            <Route path="/queuing-system/account">
              <Account />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
