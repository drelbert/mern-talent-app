import React from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import Auth from './users/pages/Auth';
import LearningAssets from './development/pages/LearningAssets';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdatePlace from './places/pages/UpdatePlace';

const App = () => {
    return (
      <Router>
      <MainNavigation />
      <main>
        <Switch>
         <Route path="/" exact>
          <Users/>
         </Route>
         <Route path="/:userId/places" exact>
           <UserPlaces />
         </Route>
         <Route path="/development/assets" exact>
          <LearningAssets />
         </Route>
         <Route path="/places/new" exact>
          <NewPlace />
         </Route>
         <Route path="/places/:placeId">
           <UpdatePlace />
         </Route>
         <Route path="/auth">
            <Auth/>
         </Route>
        </Switch>
      </main>
      </Router>
    );
  };

export default App;


