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
          <input type="text" ref="city" /><button>Get weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
