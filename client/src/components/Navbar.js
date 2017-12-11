import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

// Stateless Component
const Navbar = () => {
  return (
    <div>
      <Menu inverted>
        <Menu.Item header>Workout Planner</Menu.Item>
        <Menu.Item as={Link} to='/'>
          <Icon name="home" /> 
        </Menu.Item>
        <Menu.Item as={Link} to='/workouts' name="Workouts" />
        <Menu.Item as={Link} to='/workouts/new' name="Create New Workout" />
        <Menu.Item as={Link} to='/help' name="Help" />
        <Menu.Item position="right">
          &copy; John Schlesinger
        </Menu.Item>
      </Menu>
      <br/>
    </div>
  );
}

export default Navbar;