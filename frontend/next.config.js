require("dotenv").config();

module.exports = {
  env: {
    CMS_URL: process.env.CMS_URL || "http://localhost:1337",
    CMS_GRAPHQL_API_URL:
      process.env.CMS_GRAPHQL_API_URL || "http://localhost:1337/graphql",
    PORT: parseInt(process.env.PORT || 3000),
    SITE_HOST: process.env.SITE_HOST || "localhost",
  },
};
