import React, { useState, useCallback } from 'react';
import  { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './dashboard/Dashboard';
import Users from './users/pages/Users';
import Auth from './users/pages/Auth';
import DevelopmentAssets from './devAssets/pages/DevelopmentAssets';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdatePlace from './places/pages/UpdatePlace';
import { AuthContext } from './shared/context/auth-context';
import NewDevAsset from './devAssets/pages/NewDevAsset';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Dashboard/>
        </Route>
        <Route path="/users" exact>
          <Users/>
        </Route>
        <Route path="/:userId/places" exact>
           <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
       </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
       <Route path="/development/assets" exact>
          <DevelopmentAssets />
       </Route>
       <Route path="/development/new" exact>
         <NewDevAsset/>
       </Route>
         <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
      <Route path="/" exact>
        <Users/>
      </Route>
      <Route path="/:userId/places" exact>
         <UserPlaces />
       </Route>
       <Route path="/auth">
         <Auth/>
       </Route>
       <Redirect to="/auth" />
    </Switch>
    );
  }

    return (
     <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
     >
      <Router>
       <MainNavigation />
       <main>
        {routes}
      </main>
      </Router>
    </AuthContext.Provider>
    );
  };

export default App;


