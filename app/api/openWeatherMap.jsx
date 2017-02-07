import Axios from 'axios';

const config = {
  apiKey: '2a36296cbf6e16bc508a5dea84786c78',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=#CITY#&appid=#APIKEY#&units=metric'
};

module.exports = {
  getTemp(location) {
    const requestURL
      = config.url
      .replace('#CITY#', encodeURIComponent(location))
      .replace('#APIKEY#', config.apiKey);

    return Axios
      .get(requestURL)
      .then((res) => {
        if (res.data.cod && res.data.main) {
          return res.data.main.temp;
        }
        throw new Error(res);
      })
      .catch((res) => {
        throw new Error(res);
      });
  }
};
