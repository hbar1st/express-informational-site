const express = require("express");
const { getSystemErrorMap } = require("util");

const path = require("path");
const app = express(); //<== initialize the server

// make a route
app.get("/", (req, res, next) => {


      const options = {
        root: path.join(__dirname, "public"),
        dotfiles: "deny",
        headers: {
          "x-timestamp": Date.now(),
          "x-sent": true,
        },
      };
    
      res.sendFile("./index.html", options, (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log("Sent: index.html");
        }
      });
});
app.get("/about", (req, res, next) => {
  const options = {
    root: path.join(__dirname, "public"),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };

  res.sendFile("./about.html", options, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent: about.html" );
    }
  });
});
app.get("/contact-me", (req, res, next) => {
  const options = {
    root: path.join(__dirname, "public"),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };

  res.sendFile("./contact-me.html", options, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent: contact-me.html" );
    }
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error; //show startup errors if any
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
});