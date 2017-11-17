import React from "react"
import { renderRoutes } from 'react-router-config';
import { object } from 'prop-types';
//import NavBar from "./NavBar"

import Menu from "./Menu/Menu"

const Root = ( {route}, {router} ) => (
  <div>
    <Menu />
    {renderRoutes(route.routes)}
  </div>
)

Root.contextTypes = {
  router: object
}

export default Root

// <NavBar />
