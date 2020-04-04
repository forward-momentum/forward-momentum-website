require("dotenv").config();

module.exports = {
  env: {
    API_URL: process.env.CMS_GRAPHQL_API_URL,
  },
};
