var path = require('path')
const express = require('express')
//const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');
var FormData = require('form-data');



const dotenv = require('dotenv');
dotenv.config();

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// app.get('/test', function (req, res) {
//     console.log('/test called');
//     res.send(mockAPIResponse)
// })

// app.get('/getMeaningAPIKey', (req, res)=> {
//     console.log('/getMeaningAPIKey called');
//     res.send({ key: process.env.API_KEY });
// })

app.post('/getMeaning', async (req, res)=> {
    console.log('/getMeaning called');

    const sourceURL = req.body.url
    const meaningCloudURL = 'https://api.meaningcloud.com/sentiment-2.1';

    let formData = new FormData();
    formData.append("key", process.env.API_KEY);
    formData.append("lang", "en");
    formData.append("url", sourceURL);

    const response = await fetch(`${meaningCloudURL}`, {
        method: 'POST',
        body: formData
    })

    try {
        const newData = await response.json();
        console.log('/getMeaning data retrieved OK... sending');
        res.send(newData);

    } catch(error) {
        console.log(`/getMeaning/${sourceURL} ${error}`);
        res.status(response.status).send(error);
    }    
})