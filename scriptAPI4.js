$.getScript('functions.js');

let CGjson; //CoinGecko array of cryptocurrency objects
let CSallCurency; // All of CoinScoop currency conversion rates in a object
var table;
real();
//real();

function real(){
    $('table').empty()
    $.get('urlget2.php', function(CurrencyScoop) {
        setTimeout(console.log('Fetching currency conversion coeficients...'), 100);
        $.get('urlget1.php', function(CoinGecko) {
            returnedCurrencyObj = funcCurrencyObj(CurrencyScoop);
            console.log(returnedCurrencyObj);

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
    CSallCurency = JSON.parse(CurrencyScoop);
    //console.log(CSallCurency.response.rates);
    CurrObj = {
        USD: CSallCurency.response.rates.USD,
        CAD: CSallCurency.response.rates.CAD,
        EUR: CSallCurency.response.rates.EUR,
        DZD: CSallCurency.response.rates.DZD,
        TND: CSallCurency.response.rates.TND,
        MAD: CSallCurency.response.rates.MAD
    };
    return CurrObj;
}

function buildAndOut(CoinGecko, CURconstant, property){
    CGjson = JSON.parse(CoinGecko);
    //console.log(CGjson);

    CGjson.forEach(element => {
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

