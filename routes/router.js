const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const dotenv = require('dotenv').config()



const getData = async () => {
    try {
        const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': `${process.env.API_KEY}`,
                json: true,
                gzip: true
            }
        })
        const data = await res.json()
        const latest = data.data
        const array = []
        // each loop creates an object with three keys and pushes that object to array
        for (const crypto of latest) {
            const result = new Object()
            result.name = crypto.name
            result.price = crypto.quote.USD.price
            result.last_updated = crypto.quote.USD.last_updated
            array.push(result)
        }
        return array
    } catch (e) {
        console.log(e)
        res.status(400).json({
            e
        })
    }
}

module.exports = router
module.exports = {
    getData
}