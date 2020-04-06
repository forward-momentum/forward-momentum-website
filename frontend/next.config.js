require("dotenv").config();

module.exports = {
  env: {
    CMS_URL: process.env.CMS_URL || "http://localhost:1337",
    CMS_GRAPHQL_API_URL:
      process.env.CMS_GRAPHQL_API_URL || "http://localhost:1337/graphql",
    PORT: parseInt(process.env.PORT || 3000),
    SITE_HOST: process.env.SITE_HOST || "localhost",
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_MEMBERS_BASE_ID: process.env.AIRTABLE_MEMBERS_BASE_ID,
    AIRTABLE_MEMBERS_BASE_TABLE_NAME:
      process.env.AIRTABLE_MEMBERS_BASE_TABLE_NAME,
    REDIS_URL: process.env.REDIS_URL,
    SITE_URL: process.env.SITE_URL,
  },
};
