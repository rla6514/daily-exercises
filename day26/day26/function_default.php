<?php


function headline($text, $level = 1){
  return '<h'.$level.'>' . $text . '</h'.$level.'>';
}

echo headline('Headline 1');

echo headline('Headline 3', 3);