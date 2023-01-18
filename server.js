import express from "express";
import env from "./env.js";
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/env", (req, res) => {
    const { MY_ENV_VALUE } = env;
    res.status(200).json({
        MY_ENV_VALUE
    });
});
const port = 8080;

app.listen(port, () => {
    console.log("Running on Port: " + port);
});