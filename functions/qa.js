const axios = require("axios");

const API_URL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp";


axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["Authorization"] = TOKEN;

exports.handler = async (event, context) => {
  console.log("event.queryStringParameters", event.queryStringParameters);

  return axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${
        event.queryStringParameters.product_id
      }&count=${event.queryStringParameters.count || 2}&page=${
        event.queryStringParameters.page || 1
      }`
    )
    .then((response) => {
      return {
        statusCode: 200,
        body: JSON.stringify(response.data),
      };
    })
    .catch((err) => {
      res.status(400).send(err);
    });

  // setQHelpful: (req, res) => {
  //   axios
  //     .put(
  //       `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.params.question_id}/helpful`
  //     )
  //     .then(() => {
  //       res.status(200).send("success");
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err);
  //     });
  // },

  // setAHelpful: (req, res) => {
  //   axios
  //     .put(
  //       `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${req.params.answer_id}/helpful`
  //     )
  //     .then(() => {
  //       res.status(200).send("success");
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err);
  //     });
  // },

  // addQuestions: (req, res) => {
  //   axios
  //     .post(
  //       `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`,
  //       req.body
  //     )
  //     .then(() => {
  //       res.status(201).send("success");
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err);
  //     });
  // },

  // addAnswers: (req, res) => {
  //   axios
  //     .post(
  //       `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.body.question_id}/answers`,
  //       req.body
  //     )
  //     .then(() => {
  //       res.status(201).send("success");
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err);
  //     });
  // },
};
