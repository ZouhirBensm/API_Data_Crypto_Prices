<?php

// set API Endpoint and access key (and any options of your choice)
$endpoint = 'v1/latest';
$api_key = 'f93abd7bacc99100afb795ee4043649b';

// Initialize CURL:
$ch = curl_init('https://api.currencyscoop.com/'.$endpoint.'?base=USD&api_key='.$api_key.'');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Store the data:
$json = curl_exec($ch);
$err = curl_error($ch);

curl_close($ch);

// Decode JSON response:
//$exchangeRates = json_decode($json, true);

// Access the exchange rate values, e.g. GBP:
//print_r($exchangeRates);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	echo $json;
}