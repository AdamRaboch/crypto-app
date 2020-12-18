const dotenv = require('dotenv')
const run = require('./app')

const main = () => {
    dotenv.config()
    run()
}

main()