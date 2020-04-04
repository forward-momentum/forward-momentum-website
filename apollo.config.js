module.exports = {
  client: {
    tagName: "graphql",
    service: {
      name: "my-graphql-app",
      url: "http://localhost:1337/graphql",
    },
    includes: [
      "./frontend/**/*.js",
      "./frontend/**/*.tsx",
      "./frontend/**/*.ts",
    ],
  },
};
