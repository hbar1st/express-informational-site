const express = require("express");
const { getSystemErrorMap } = require("util");

const path = require("path");
const app = express(); //<== initialize the server

const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

//matches any path (so will be a catch-all for the 404 message)
app.use((req, res) => {
    const options = {
        root: path.join(__dirname, "public"),
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true,
        },
    };

    res.status(404).sendFile("./404.html", options, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Sent: 404.html");
        }
    });
});

// Every thrown error in the application or the previous middleware
// function calling `next` with an error as an argument will eventually 
// go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error; //show startup errors if any
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
});