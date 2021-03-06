import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

const Weather = React.createClass({
  propTypes: {
    location: React.PropTypes.object
  },
  getInitialState() {
    return {
      isLoading: false
    };
  },
  componentDidMount() {
    const location = this.props.location.query.location;
    if (location) {
      this.searchCity(location);
    }
  },
  componentWillReceiveProps(newProps) {
    const location = newProps.location.query.location;
    if (location) {
      this.searchCity(location);
    }
  },
  searchCity(city) {
    this.setState(
      {
        isLoading: true,
        errorMessage: undefined,
        location: undefined,
        temp: undefined
      }
    );
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
        self.setState({
          errorMessage: message.message
        });
      });
  },
  render() {
    const {
      isLoading,
      city,
      temp,
      errorMessage
    } = this.state;

    function renderError() {
      if (errorMessage) {
        return <ErrorModal message={errorMessage} />;
      }
      return '';
    }

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Loading city temperature</h3>;
      } else if (city && temp) {
        return <WeatherMessage city={city} temp={temp} />;
      }
      return '';
    }

    return (
      <div>
        <h1 className="page-title text-center">Weather component</h1>
        <WeatherForm onSearchCity={this.searchCity} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
