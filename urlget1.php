<?php

    $url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=10&page=1&sparkline=false";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HTTPGET, 1);


    curl_setopt($ch, CURLOPT_HTTPHEADER,
        ['Content-Type: application/json']
    );

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($ch);
    $err = curl_error($ch);
    curl_close($ch);


    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        echo $result;
    }

    ?>
