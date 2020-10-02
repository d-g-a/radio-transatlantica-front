import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/404/NotFound.js';
import About from './pages/About'
import Admin from './pages/Admin'
import Explore from './pages/Explore'
import Editorial from './pages/Editorial'
import LogIn from './pages/LogIn'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Layout from "./components/Layout"
import EditorialDetails from "./pages/EditorialDetails"
import Shows from "./pages/Shows"
import ShowDetails from './pages/ShowDetails';
import GuestPage from "./pages/GuestPage"


const Router = () => (
  <BrowserRouter>
     <Layout>
        <Switch>
            <Route component={Home}  path="/" exact/>
            <Route component={About} path="/about" exact />
            <Route component={Admin} path="/admin" exact />
            <Route component={Editorial} path="/editorial" exact />
            <Route component={EditorialDetails} path="/editorial/:editorialId" exact />
            <Route component={Explore} path="/explore" exact />
            <Route component={GuestPage} path="/guests/:guestId" exact/>
            <Route component={LogIn} path="/login" exact />
            <Route component={Profile} path="/profile" exact />
            <Route component={SignUp} path="/signup" exact />
            <Route component={Shows} path="/shows" exact />
            <Route component={ShowDetails} path="/shows/:showId" exact />
            <Route component={NotFound} />
        </Switch>
      </Layout>
  </BrowserRouter>
);

export default Router;
