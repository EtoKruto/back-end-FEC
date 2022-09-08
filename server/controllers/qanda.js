const axios = require('axios');
require("dotenv").config();

const { API_URL, TOKEN } = process.env;
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Authorization'] = TOKEN;


module.exports = {
  questions: (req, res) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${req.query.product_id}&count=${req.query.count || 2}&page=${req.query.page || 1}`)
      .then((response) => {res.status(200).send(response.data)})
      .catch((err) => {res.status(400).send(err)});
  },

  setQHelpful: (req, res) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.params.question_id}/helpful`)
      .then(() => {res.status(200).send('success')})
      .catch((err) => {res.status(400).send(err)});
  },

  setAHelpful: (req, res) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${req.params.answer_id}/helpful`)
      .then(() => {res.status(200).send('success')})
      .catch((err) => {res.status(400).send(err)});
  },

  addQuestions: (req, res) => {
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`, req.body)
      .then(() => {res.status(201).send('success')})
      .catch((err) => {res.status(400).send(err)});
  },

  addAnswers: (req, res) => {
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.body.question_id}/answers`, req.body)
      .then(() => {res.status(201).send('success')})
      .catch((err) => {res.status(400).send(err)});
  },
};

