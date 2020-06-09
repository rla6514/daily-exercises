<?php

require_once 'DB.php';
require_once 'DB_functions.php';


$success = connect('localhost',      'world',      'root',  'rootroot');



function getPageOfCities($page_nr) {
  
  $limit =20;
  $offset = ($page_nr-1) * $limit;
/*   
  $query = "
    SELECT *
    FROM `city`
    ORDER BY `Population`
    LIMIT {$offset}, {$limit}
  "; */

  $query = "
  SELECT *
  FROM `city`
  WHERE `CountryCode` IN (?, ?, ?, ?)
  ORDER BY `Population` DESC
  LIMIT 0, 10
  ";

  $cities = select($query, ['CZE', 'SVK', 'POL', 'HUN']);

  return $cities;
}


$page_of_cities = getPageOfCities(1);
var_dump($page_of_cities);

$page_of_cities = getPageOfCities(3);
var_dump($page_of_cities);