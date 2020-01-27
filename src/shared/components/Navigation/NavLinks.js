import React, { useContext } from 'react';
import  { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
    const auth = useContext(AuthContext);

    return <ul className="nav-links">
      <li>
          <NavLink to="/users" exact>ALL USERS</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u977D/places">PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
       <li>
           <NavLink to="/places/new">ADD PLACE</ NavLink>
       </li>
      )}
      {auth.isLoggedIn && (
       <li>
           <NavLink to="/development/assets">DEV ASSETS</NavLink>
       </li>
      )}
       {auth.isLoggedIn && (
       <li>
           <NavLink to="/development/new">ADD DEV ASSET</NavLink>
       </li>
      )}
      {!auth.isLoggedIn && (
       <li>
           <NavLink to="/auth">AUTHENTICATE</ NavLink>
       </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
};

export default NavLinks;