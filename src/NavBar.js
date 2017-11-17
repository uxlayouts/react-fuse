import React from "react"
import RaisedButton from 'material-ui/RaisedButton';
import menuObject from './menuObject';
import { NavLink } from 'react-router-dom';

const style = {
  margin: 12,
};

const NavBar = () => (
  <div>
    {menuObject.map(({ Name, URL}) => (
      <NavLink to={URL}><RaisedButton label={Name} primary={true} style={style} /></NavLink>
    ))}
  </div>
)

export default NavBar
