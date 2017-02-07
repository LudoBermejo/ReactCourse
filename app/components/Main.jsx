import React from 'react';
import Nav from 'Nav';

const Main = props => (
  <div>
    <Nav />
    <h2>Main component</h2>
    { props.children }
  </div>
);

module.exports = Main;
