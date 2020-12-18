# crypto-app
Simple app for getting data from the Coinmarketcap API

// these are the instructions for stage 1 - the first endpoint for getting live data on prices of cryptos

Crypto Investors requires a backend integration to create an application that it will allow its users to add
the portfolio of their cryptocurrency holdings and view their current value in fiat currency.
Task 1
 Create a new GitHub repository
 Setup a Node.js project that will make use of an Express server.
 Make use of the Coinmarketcap.com API to fetch data from the endpoint https://proapi.coinmarketcap.com/v1/cryptocurrency/listings/latest
Coinmartketcap API is limited to certain amount of requests. Create a proxy route that the users of your
application will be able to use to get data from the API so you will limit the amount of requests to the
coinmartketcap API. The endpoint that you will create should be a GET request to the endpoint
/api/cryptocurrencies.
 You are required to request new data every 1 minute. Try caching the data and keep track of the
time that the cached data was created. If the time exceeds 1 minute make a new request to the
coinmarketcap API.
 Store your API key and the port of your server to a .env file. Ignore that file from GIT so it will
not be committed when pushing your changes on GitHub.
NPM Packages that will be needed
1. axios // (used node-fetch instead)
2. dotenv
3. express
