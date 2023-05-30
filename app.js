// const express = require("express");
// const app = express();

// app.use(express.static("public")); //make everything inside of public/ available

// // GET / (homepage)
// // app.get(path, code);
// // app.post(path2, code:request, response, next); //"code" is a middleware function
// // app.get("/", function (request, res, next) {
// //   console.log("We have received a request to /home page");

// //   //console.log(request.baseUrl);
// //   //console.log(request); //
// //   res.send(`<h1>Welcome to our amazing restaurant!</h1>"`

// //   <img src="/images/home.jpg"  alt="delicious pizzas" >

// //   )
// // });

// app.get("/", function (request, res, next) {
//   console.log("We have received a request to /home page");

//   res.sendFile(__dirname +"/views/home-page.html");

// app.get("/contact", (req, res, next) => {
//   res.sendFile(__dirname + "/views/contact-page.html");
// });

// // we are writing back-end code now!
// app.listen(3000, () => {
//   console.log("listening to Mary Sue's request, I'm on port 3000 ;) ");
// }));
// // callback:
//app.listen(3000, () => {
//  console.log("server is listening");
//  });

// use 80 or 443 for HTTP requests at commercial environments.

//middleware function
const express = require("express");

const app = express();

app.use(express.static("public")); // Make everything inside of public/ available

// app.get(path, code);
// app.get(path, (req, res, next) => {});

// GET /
app.get("/", (req, res, next) => {
  console.log("we have received a request for the HOMEPAGE");
  //res.send("");

  res.sendFile(__dirname + "/views/home-page.html");
});

// GET /contact
app.get("/contact", (req, res, next) => {
  res.sendFile(__dirname + "/views/contact-page.html");
});

app.listen(3000, () => {
  console.log("server listening on port 3000...");
});
