// Exposes .env files to NodeJS processes; e.g. serverless functions in /api
require("dotenv").config();

module.exports = {
  // Expose environment variables to browser code
  // Do not expose secret keys here
  env: {
    CMS_URL: process.env.CMS_URL || "http://localhost:1337",
    CMS_GRAPHQL_API_URL:
      process.env.CMS_GRAPHQL_API_URL || "http://localhost:1337/graphql",
    PORT: parseInt(process.env.PORT || 3000),
    SITE_HOST: process.env.SITE_HOST || "localhost",
    SITE_URL: process.env.SITE_URL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    POSTHOG_CLIENT_ID: process.env.POSTHOG_CLIENT_ID,
    POSTHOG_URL: process.env.POSTHOG_URL,
  },
};
