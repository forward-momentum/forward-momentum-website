const express = require("express");
const sslRedirect = require("heroku-ssl-redirect");

// Pick up NextJS config
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Capture port from URL
const { program } = require("commander");
program.option(
  "-p, --port <port>",
  "Port to serve web requests from",
  process.env.PORT || 3000
);
program.parse(process.argv);
const port = parseInt(program.port, 10);

app.prepare().then(() => {
  const server = express();

  // redirect to SSL
  server.use(sslRedirect(["development", "production"]));

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`>> Ready on http://localhost:${port}`);
  });
});
