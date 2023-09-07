const express = require('express')
import configViewEngine from './configs/viewEngine';
const dotenv = require('dotenv')
dotenv.config(__dirname)

const app = express();
const port = process.env.PORT;
console.log('>>> check port: ', port)


configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(parseInt(port), () => {
    console.log('example app listening at http://localhost:${port}')
})

