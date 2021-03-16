import { AppBar, Toolbar } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import logo from './logo.svg'
import Beneficios from './pages/Beneficios/Beneficios'
import Landing from './pages/Landing/Landing'
import Planes from './pages/Planes/Planes'
import theme from './theme'

const useStyles = makeStyles((muiTheme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    marginRight: muiTheme.spacing(5),
  },
  menuButton: {
    marginRight: muiTheme.spacing(2),
    outline: 0,
  },
  title: {
    flexGrow: 1,
  },
}))

const App = () => {
  const classes = useStyles()
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar color='inherit' position='sticky' className={classes.appBar}>
            <Toolbar>
              <Link to='/' className={classes.logo}>
                <img
                  src={logo}
                  width='120'
                  height='50'
                  className='d-inline-block align-top'
                  alt='ONE Full logo'
                />
              </Link>
              <Button
                className={classes.menuButton}
                color='primary'
                component={Link}
                to='/beneficios'
              >
                Beneficios
              </Button>
              <Button
                className={classes.menuButton}
                color='primary'
                component={Link}
                to='/planes'
              >
                Planes
              </Button>
            </Toolbar>
          </AppBar>
          <div className={classes.routerOutlet}>
            <Switch>
              <Route path='/beneficios'>
                <Beneficios />
              </Route>
              <Route exact path='/planes'>
                <Planes />
              </Route>
              <Route exact path='/'>
                <Landing />
              </Route>
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
