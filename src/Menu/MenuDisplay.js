import React from "react"
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import menuObject from '../menuObject';
import { NavLink } from 'react-router-dom';

const MenuDisplay = ({ handleToggle, menuStatus }) => (
  <div>
    <RaisedButton
      label="Toggle Drawer"
      onClick={handleToggle}
    />
    <Drawer open={menuStatus} openSecondary={true}>
      <div onClick={handleToggle}>X</div>
      {menuObject.map(({ Name, URL}) => (
        <NavLink to={URL}><MenuItem>{Name}</MenuItem></NavLink>
      ))}
    </Drawer>
  </div>
)

export default MenuDisplay
