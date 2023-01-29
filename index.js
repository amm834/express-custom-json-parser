import express from 'express';
import json_parser from "./json_parser.js";

const app = express();


app.post('/', json_parser, (req, res) => {
    return res.json(req.body);
})

app.listen(3000, () => {
    console.log('Server started on port http://localhost:3000');
})