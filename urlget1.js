
// get the most recent exchange rates via the "live" endpoint:
$.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=10&page=1&sparkline=false',
    type: 'GET',

    dataType: 'json',
    success: function(json) {

        // exchange rata data is stored in json.quotes
        console.log(json);

    }
});