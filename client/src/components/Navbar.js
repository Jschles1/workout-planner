import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.PureComponent {
  render() {
    return (
      <div>
        <Menu>
          <Menu.Item as={NavLink} to='/' name="Home" />
        </Menu>
        <br/>
      </div>
    );
  }
}