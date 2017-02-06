import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

const Weather = React.createClass({
  getInitialState() {
    return {
      isLoading: false
    };
  },
  searchCity(city) {
    this.setState({ isLoading: true });
    const self = this;
    openWeatherMap
      .getTemp(city)
      .then((temp) => {
        self.setState(
          {
            city,
            temp,
            isLoading: false
          }
        );
      })
      .catch((message) => {
        alert(message);
      });
  },
  render() {
    const {
      isLoading,
      city,
      temp
    } = this.state;

    function renderMesage() {
      if (isLoading) {
        return <div>Loading city temperature</div>;
      } else if(city && temp) {
        return <WeatherMessage city={city} temp={temp} />;
      }
      return '';
    }

    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearchCity={this.searchCity} />
        {renderMesage()}
      </div>
    );
  }
});

module.exports = Weather;
