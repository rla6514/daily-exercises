<?php

/**
 * class User
 */
class User
{
  public $email = null;

  public function __construct($email = null)
  {
    if($email !== null || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
      throw new \InvalidArgumentException('The given argument must be a valid email address');
    }


    $this->email = $email;
  }

/*   public function __toString()
  {
    return $this->email;
  } */
}