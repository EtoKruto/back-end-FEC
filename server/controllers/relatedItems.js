const axios = require('axios');
require("dotenv").config();

const {API_URL, TOKEN} = process.env;
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Authorization'] = TOKEN;

module.exports = {
  related: (req, res) => {
    // console.log(req.originalUrl)
    axios.get(req.originalUrl)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.send(err);
      })
  }
}

