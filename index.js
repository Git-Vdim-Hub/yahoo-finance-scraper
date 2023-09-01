// require syntax (if your code base does not support imports)
const yahooFinance = require('yahoo-finance2').default; // NOTE the .default
// gets financial results for apple stock
getResults = async () => {
    let results = await yahooFinance.quote('AAPL');
    console.log(results);
}
//use "regularMarketPrice" for current price multiplied by Shares Owned to get the current value in the portfolio
// use "dividendRate"/4 to get the quarterly dividend and /12 to get the monthly dividend per share.
//use "dividendDate" for x-date

getResults();
//gets the dividend results for apple stock
getDividendResults = async () => {
    const query = 'AAPL';
    //period 1 provides the start date for the query, the second period provides the end date for the query, use shown format for data up to current date.
    const queryOptions = { period1: '2019-05-08', /* ... */ };
    const result = await yahooFinance._chart(query, queryOptions);
    console.log(result.events);
}
//calls the function
getDividendResults();