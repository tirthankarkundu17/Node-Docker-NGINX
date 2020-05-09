const dotenv = require("dotenv"); // Read from .env file
const express = require("express");
dotenv.config();
const app = express();
const appid = process.env.PORT;

app.get("/", (req, res) => res.send(`appid: ${appid} home page: says hello!`));

app.get("/app1", (req, res) =>
  res.send(`appid: ${appid} app1 page: says hello!`)
);

app.get("/app2", (req, res) =>
  res.send(`appid: ${appid} app2 page: says hello!`)
);

app.get("/admin", (req, res) =>
  res.send(`appid: ${appid} ADMIN page: very few people should see this`)
);

app.listen(appid, () => console.log(`Application : ${appid} is listening on port ${appid}`));
