import React, { Component } from 'react';
import  { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Customers from './components/customers';
import Profile from './components/profile';
import Posters from './components/posters';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import Footer from './components/footer';
import LoginForm from './components/loginForm';
import Logout from './components/logout';
import RegisterForm from './components/registerForm';
import ProtectedRoute from './components/common/protectedRoute';
import auth from './services/authService';
import './assets/css/template.css';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  state = {}

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
  const { user } = this.state;

  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar user={user} />
      <main className = "container">
          <Switch>
          <Route path = "/register" component = {RegisterForm} />
          <Route path = "/login" component = {LoginForm} />
          <Route path = "/logout" component = {Logout} />
          <ProtectedRoute path="/movies/:id" component={MovieForm} />
          <Route 
          path = "/movies" 
          render = {props => <Movies {...props} 
          user={user} />} 
          />
          <Route path = "/rentals" component = {Posters} />
          <Route path = "/customers" component = {Customers} />
          <Route path = "/profile" component = {Profile} user={user} />
          <Route path = "/not-found" component = {NotFound} />
          <Redirect from = "/" exact to = "/movies" />
          <Redirect to = "not-found" />
          </Switch>
      </main>
      <Footer />
   </React.Fragment>
  );
  }
}

export default App;
