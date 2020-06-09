<?php

require_once 'DB.php';
require_once 'DB_functions.php';



connect('localhost',      'games',      'root',  'rootroot');

function getURLParameter($name, $default_value, $allowed_values) {
  if (isset($_GET[$name]) && in_array($_GET[$name], $allowed_values)) {
    return $_GET[$name];
  } else {
    return $default_value;
  }
}

$column = getURLParameter('orderby', 'name', ['name','rating']);
$way = getURLParameter('way', 'asc', ['asc','desc']);

$query = "
SELECT *
FROM `games`
ORDER BY `{$column} {$way} 
";

$games = select($query);


/* var_dump($_GET);

$column = isset($_GET['orderby']) && $_GET['orderby'] == 'rating' ? 'rating' : 'name';
$way = isset($_GET['orderby']) && $_GET['orderby'] == 'name' ? 'name' : $colunm;

$column = `name`;
$way = `ASC`;

if (isset($_GET['orderby']) && $_GET['orderby'] == 'rating'){
  $column = 'rating';
}

if (isset($_GET['orderby']) && $_GET['orderby'] == 'name'){
  $column = 'name';
}

if (isset($_GET['way']) && $_GET['way'] == 'asc'){
  $way = 'ASC'
}

if (isset($_GET['way']) && $_GET['way'] == 'desc'){
  $way = 'DESC';
} */



/* var_dump($games); */



/* header('Content-type: application/json');
echo json_encode($games); */