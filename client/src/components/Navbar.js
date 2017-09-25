import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// Stateless Component
const Navbar = () => {
  return (
    <div>
      <Menu inverted>
        <Menu.Item header>Workout Planner</Menu.Item>
        <Menu.Item as={NavLink} to='/'>
          <Icon name="home"/> 
        </Menu.Item>
        <Menu.Item as={NavLink} to='/workouts' name="Workouts"/>
        <Menu.Item as={NavLink} to='/workouts/new' name="Create New Workout"/>
      </Menu>
      <br/>
    </div>
  );
}

export default Navbar;