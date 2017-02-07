import React from 'react';

const WeatherMessage = (props) => (
  <div>
    <h3 className="text-center">Temp in {props.city} is {props.temp} degrees</h3>
  </div>
);

module.exports = WeatherMessage;