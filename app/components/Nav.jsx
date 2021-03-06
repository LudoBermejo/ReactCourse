import React from 'react';
import { IndexLink, browserHistory } from 'react-router';

const Nav = React.createClass({
  onSearch(e) {
    e.preventDefault();
    const search = encodeURIComponent(this.refs.searchInput.value);
    if(search) {
      this.refs.searchInput.value = '';
      window.location = `/#?location=${search}`;
    }
  },
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React weather app</li>
            <li>
              <IndexLink
                to="/"
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >Get Weather</IndexLink>
            </li>
            <li>
              <IndexLink
                to="/about"
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >About</IndexLink>
            </li>
            <li>
              <IndexLink
                to="/examples"
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >Examples</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" ref="searchInput" placeholder="Search weather" /></li>
              <li><input type="submit" className="button" value="Get Weather" /></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
