<?php

class Games {
  public $id = null;
  public $name = null;
  public $image_url = null;
  public $description = null;
  public $rating = null;
  public $released_at = null;



  public function __toString() {
    return $this->name;
  }

}