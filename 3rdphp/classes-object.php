<?php

require_once 'User.php';

$steve = new User('steve');

var_dump($steve);

$steve ->id = 1;
$steve ->username = 'steve';
$steve ->name = 'Stephan';

var_dump($steve);

$bob = new User;

$steve -> dump();
$bob -> dump();

