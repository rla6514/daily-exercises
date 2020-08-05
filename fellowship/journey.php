<?php

$party = init_party();

$party['gandalf'] = 'Gandalf the Grey';
$party['sam'] = 'Samwise Gamgee';

unset($party['bilbo']);
unset($party['gandalf']);

$party = leave_hobbiton($party);
$party = go_to_bree($party);




?>




