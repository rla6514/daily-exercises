<?php

require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Region.php';


$success = connect('localhost',      'world',      'root',  'rootroot');

$region = new Region;
$region->name = 'Central Africa';


var_dump($region);

$region->insert();

var_dump($region);