import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/404/NotFound.js';
import Archive from './pages/Archive'
import About from './pages/About'
import Admin from './pages/Admin'
import Explore from './pages/Explore'
import Editorial from './pages/Editorial'
import LogIn from './pages/LogIn'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
//import Support from './pages/Support'
import MyRT from './pages/MyRT'
import Layout from "./components/Layout"
import EditorialDetails from "./pages/EditorialDetails"
import Shows from "./pages/Shows"
import ShowDetails from './pages/ShowDetails';
//import Guests from "./components/Guests"
import GuestPage from "./pages/GuestPage"

//const Explore = () => <h1>Explore</h1>
//const About = () => <h1>About</h1>
//const PageDetail = () => <h1>PageDetail</h1>
//const Archive = () => <h1>Archive</h1>
//const Editorial = () => <h1>Editorial</h1>
//const Support = () => <h1>Support</h1>

const Router = () => (
  <BrowserRouter>
     <Layout>
        <Switch>
            <Route component={Home}  path="/" exact/>
            <Route component={About} path="/about" exact />
            <Route component={Admin} path="/admin" exact />
            <Route component={Archive} path="/archive" exact />
            <Route component={Editorial} path="/editorial" exact />
            <Route component={EditorialDetails} path="/editorial/:editorialId" exact />
            <Route component={Explore} path="/explore" exact />
            <Route component={GuestPage} path="/guests/:guestId" exact/>
            <Route component={LogIn} path="/login" exact />
            <Route component={Profile} path="/profile" exact />
            <Route component={MyRT} path="/my-rt" exact />
            <Route component={SignUp} path="/signup" exact />
            {/* <Route component={Support} path="/support-rt" exact /> */}
            <Route component={Shows} path="/shows" exact />
            <Route component={ShowDetails} path="/shows/:showId" exact />
            <Route component={NotFound} />
            {/* <Route component={Guests} path="/guests" exact /> */}
        </Switch>
      </Layout>
  </BrowserRouter>
);

export default Router;
