<?php

namespace Honza\code;

use function Honza\functions\strlen as thebestfunction;

require_once 'functions.php';

var_dump(\Honza\functions\strlen('Hello'));

var_dump(strlen('Hello'));

var_dump(\strlen('Hello'));

var_dump(thebestfunction('Hello'));

var_dump(strlen('Hello'));

var_dump(\Honza\functions\someClass::class);

