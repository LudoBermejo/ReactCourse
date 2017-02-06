import React from 'react';

const WeatherMessage = React.createClass({
  render() {
    return (
      <div>
        <p>Temp in {this.props.city} is {this.props.temp} degrees</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;