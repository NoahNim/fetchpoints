const express = require("express");
const app = express();
const points = require("./routes/points")

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.use(points);

app.listen(3000, function () {
    console.log("Server is running on localhost 3000");
});

