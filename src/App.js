import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'

import Admin from './Pages/Admin/Admin'
import Dashboard from './Pages/Admin/Dashboard/Dashboard'

import RSVP from './Pages/RSVP/RSVP'
import Questionaire from './Pages/Questionaire/Questionaire'

import Error from './Pages/Error/Error'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" render = {() => <Landing />}/>

        {/** RSVP Route */}
        <Route exact path = "/rsvp" render = {() => <RSVP /> } />
        <Route exact path = "/rsvp/qa" render = {() => <Questionaire /> } />

        {/** Admin Routes */}
        <Route exact path = "/admin" render = {() => <Admin />}/>
        <Route exact path = "/dashboard" render  = {() => <Dashboard />} />
        
        <Route path = "*" render  ={() => <Error />} />
      </Switch>
    </Router>
  );
}

export default App;
