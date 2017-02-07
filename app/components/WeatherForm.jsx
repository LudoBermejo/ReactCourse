import React from 'react';

const WeatherForm = React.createClass({
  onSubmitForm(e) {
    e.preventDefault();
    if (this.refs.city.value) {
      this.props.onSearchCity(this.refs.city.value);
      this.refs.city.value = '';
    }
  },
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input type="search" ref="city" placeholder="Search weather by city" />
          <button className="button expanded hollow">Get weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
