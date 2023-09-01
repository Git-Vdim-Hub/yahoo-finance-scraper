// require syntax (if your code base does not support imports)
const yahooFinance = require('yahoo-finance2').default; // NOTE the .default

// create an async function so we can use await
getResults = async () => {
    let results = await yahooFinance.quote('AAPL');
    console.log(results);
}
//use "regularMarketPrice" for current price multiplied by Shares Owned to get the current value in the portfolio
// use "dividendRate"/4 to get the quarterly dividend and /12 to get the monthly dividend per share.
//use dividendDate for x-date

getResults();
