import React from 'react';

const WeatherMessage = (props) => (
  <div>
    <p>Temp in {props.city} is {props.temp} degrees</p>
  </div>
);

module.exports = WeatherMessage;