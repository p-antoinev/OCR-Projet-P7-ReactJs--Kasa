import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Error from './components/Error'
 
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
              <Route>
                <Error />
              </Route>
            </Switch>
            <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)