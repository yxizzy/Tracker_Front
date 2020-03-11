import React from 'react';
import Home from './views/Home';
import Login from './views/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';
import PrivateRoute from './privateRoute';
import AdminRoute from './adminRoute';


class App extends React.Component {
  
  render() {
   
    return (
      <Router>
        <Switch>
          <PrivateRoute path='/' component={Home} exact />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <AdminRoute path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    );
  }

}

export default App;
