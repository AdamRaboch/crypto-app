const {
    response
} = require('express')
const express = require('express')
const port = process.env.PORT || 8080
const morgan = require('morgan')
const axios = require('axios')
const router = require('./routes/router')
const {
    getData
} = require('./routes/router')

// cachedTime = time of last request to API
let cachedTime;
// latestData = latest response from API saved as cache
let latestData;

const run = () => {
    const app = express();
    const port = process.env.PORT
    app.use(morgan("dev"));

    app.get('/api/cryptocurrencies', async (req, res) => {
        try {
            req.time = Date.now()
            requestTime = req.time
            // check to see if more than a minute has elapsed from last request to API
            timePassed = requestTime - cachedTime <= 60000
            /* if less than a minute has elapsed then resend latest data from cache to client,
            otherwise send a new request to API and respond with new data to client */
            if (timePassed) {
                res.status(200).send(latestData)
            } else if (!timePassed) {
                const newPrices = await getData()
                res.status(201).send(newPrices)
                latestData = newPrices
            }
            cachedTime = Date.now()
        } catch (e) {
            res.status(400).json({
                e
            })
        }

    })
    app.listen(port, () => {
        console.log("Server is up on port: " + port);
    })
};



module.exports = run;