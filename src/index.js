const express = require('express');
const cors = require('cors');

const port = process.env.PORT;
const photosRouter = require('./routers/photosRouter');

const app = express();
app.use(cors());
app.use(express.json());
app.use(photosRouter);

app.get("/", (req, res) => {
    res.send("ok");
});

app.listen(port, () => console.log("Server connected, port:", port));