<?php
function init_party() {
  return [
    'bilbo' => 'Bilbo Baggins',
    'frodo' => 'Frodo Baggins',
    'ring' => 'The One Ring'
    ];
}

function leave_hobbiton($party) {  
    array_merge( $party, [
      'merry' => 'Meriadoc Brandybuck',
      'pippin' => 'Peregrin Took'
    ]);
    return $party;
  
}

function go_to_bree($party) {
  $party['strider'] = 'Strider';
  return $party;
}
  


