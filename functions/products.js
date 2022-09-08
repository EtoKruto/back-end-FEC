const axios = require("axios");

const API_URL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["Authorization"] = TOKEN;

exports.handler = async function (event, context) {
  console.log("event.path", event.path);
  console.log("event.httpMethod", event.httpMethod);
  console.log("event.body", event.body);
  console.log("event.queryStringParameters", event.queryStringParameters);
  console.log("`${API_URL}${event.path}`", `${event.path}`);

  return axios
    .get(`${event.path}`)
    .then((response) => {
      return {
        statusCode: 200,
        body: JSON.stringify(response.data),
      };
    })
    .catch((error) => {
      console.error(error);
      return {
        statusCode: 409,
        headers: {
          "Content-Type": "application/json",
        },
      };
    });
};
