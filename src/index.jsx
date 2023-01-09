//React Tools
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//Composant
import Header from './components/Header'
import Footer from './components/Footer'
//Pages Composant
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Housing from './pages/Housing'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/about">
                  <About />
              </Route>
              <Route path="/housing/:uid">
                    <Housing />
              </Route>
              <Route>
                <Error />
              </Route>
            </Switch>
            <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)