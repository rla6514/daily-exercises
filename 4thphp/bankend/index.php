<?php


include 'data.php';


require_once 'Celebrity.php';


$celebrities = [];

foreach ($data as $celebrity_array) {


    $celebrity = new Celebrity;


    $celebrity->loadFromArray($celebrity_array);


    $celebrities[] = $celebrity;
}


header('Content-type: application/json');


echo json_encode($celebrities);