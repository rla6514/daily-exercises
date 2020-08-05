<?php

/* $html = file_get_contents('http://www.codingbootcamp.cz'); */

/* echo $html; */

define('CACHE_DIR', dirname(__FILE__) . DIRECTORY_SEPARATOR . 'cache');
 
function download_from_internet($url)
{
    $curl = curl_init();
  curl_setopt($curl, CURLOPT_COOKIEFILE, CACHE_DIR . DIRECTORY_SEPARATOR . 'cookies.txt');
  curl_setopt($curl, CURLOPT_COOKIEJAR, CACHE_DIR . DIRECTORY_SEPARATOR . 'cookies.txt');
  curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)");
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($curl, CURLOPT_HTTPGET, true);
    curl_setopt($curl, CURLOPT_URL, $url);
    $response = curl_exec($curl);
 
    return $response;
}

echo download_from_internet('http://www.codingbootcamp.cz');