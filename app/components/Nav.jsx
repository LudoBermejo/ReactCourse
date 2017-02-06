import React from 'react';
import {IndexLink} from 'react-router';

const Nav = React.createClass({
  render() {
    return (
      <div>
        <h2>Nav component</h2>
        <IndexLink to="/"
              activeClassName="active"
              activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <IndexLink to="/about"
              activeClassName="active"
              activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
        <IndexLink to="/examples"
               activeClassName="active"
              activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
      </div>
    );
  }
});

module.exports = Nav;
