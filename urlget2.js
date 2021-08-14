// set endpoint and your access key
endpoint = 'v1/latest'
api_key = 'f93abd7bacc99100afb795ee4043649b';

// get the most recent exchange rates via the "live" endpoint:
$.ajax({
    url: 'https://api.currencyscoop.com/' + endpoint + '?api_key=' + api_key,
    type: 'GET',

    dataType: 'json',
    success: function(json) {

        // exchange rata data is stored in json.quotes
        console.log(json);

    }
});