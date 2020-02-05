// const _ = require("./node_modules/underscore/underscore");
const env_port = process.env.PORT || 3000;
const express = require("express");
const expressApp = express();

let courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
  { id: 4, name: "course4" }
];

// let result = _.contains([1, 2, 3], 2);

// console.log(result);

// two args
expressApp.get("/", (req, res) => {
  res.send(`Hello World`);
});

expressApp.get("/app", (req, res) => {
  res.send(`App is better than index`);
});

expressApp.get("/blog/:type/:id", (req, res) => {
  let param = req.params;
  let query = req.query;
  res.send(
    `This is for Query ${query.query} \r\n This is  param ${param.type}   ${param.id}`
  );
});

expressApp.get("/course/:id", (req, res) => {
  let course = courses.find(c => {
    return c.id === parseInt(req.params.id);
  });

  if (!course) res.send("400 page - Not found");
  res.send(course);
});

expressApp.listen(env_port, () => console.log("localhost:" + env_port));
