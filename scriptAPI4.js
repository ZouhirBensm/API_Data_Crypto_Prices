$.getScript('functions.js');

endpoint = 'v1/latest'
api_key = 'f93abd7bacc99100afb795ee4043649b';

var table;
real();
//real();

function real(){
    $('table').empty()

    
    apiCoinGecko(function(CoinGecko){
        //console.log('CoinGecko getting!')
        
        apiCurrencyScoop(function(CurrencyScoop){
            //console.log('CurrencyScoop getting!');
            //console.log(CurrencyScoop)
            returnedCurrencyObj = funcCurrencyObj(CurrencyScoop);
            //console.log(returnedCurrencyObj);
            //console.log(CoinGecko)
            for(const property in returnedCurrencyObj){
                buildAndOut(CoinGecko, returnedCurrencyObj[property], property);
                //console.log(typeof property, property);
            }
        })
    })




}

handle = setInterval(real, 1000*60*5) //If GET request works out it will start the interval
setTimeout("clearInterval(handle)", 1000*60*40);



//returns object with Currency/USD
function funcCurrencyObj(CurrencyScoop){
    let CurrObj;
    //console.log(CurrencyScoop)
    //console.log(CurrencyScoop.response.rates);
    CurrObj = {
        USD: CurrencyScoop.response.rates.USD,
        CAD: CurrencyScoop.response.rates.CAD,
        EUR: CurrencyScoop.response.rates.EUR,
        DZD: CurrencyScoop.response.rates.DZD,
        TND: CurrencyScoop.response.rates.TND,
        MAD: CurrencyScoop.response.rates.MAD
    };
    return CurrObj;
}

function buildAndOut(CoinGecko, CURconstant, property){
    
    //console.log(CoinGecko);

    CoinGecko.forEach(element => {
        var tr = document.createElement('tr');
        switch (CURconstant){
            case returnedCurrencyObj.USD:
                function1(tr, element,CURconstant);
                break;
            case returnedCurrencyObj.CAD:
                function2(tr, element,CURconstant);
                break;
            case returnedCurrencyObj.EUR:
                function3(tr, element, CURconstant);
                break;
            case returnedCurrencyObj.DZD:
                function4(tr, element, CURconstant, property);
                break;
            case returnedCurrencyObj.TND:
                function5(tr, element, CURconstant, property);
                break;
            case returnedCurrencyObj.MAD:
                function6(tr, element, CURconstant, property);
                break;
            
        }
    });
}


function apiCurrencyScoop(handleData){
    $.ajax({
        url: 'https://api.currencyscoop.com/' + endpoint + '?api_key=' + api_key,
        type: 'GET',
    
        dataType: 'json',
        success: function(json) {
    
            // exchange rata data is stored in json.quotes
            //console.log(json);
            handleData(json)
    
        }
    })
}


function apiCoinGecko(handleData){
    $.ajax({
        url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=10&page=1&sparkline=false',
        type: 'GET',
    
        dataType: 'json',
        success: function(json) {
    
            // exchange rata data is stored in json.quotes
            //console.log(json);
            handleData(json)
    
        }
    });
}