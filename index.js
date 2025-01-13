const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.listen(port);

app.get("/", (req, res) => {
    res.send({
        "status": "success",
    })
})