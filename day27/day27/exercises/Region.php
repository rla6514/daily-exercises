<?php

class Region {
  public $id = null;
  public $name = null;
  public $slug = null;

  public function insert() {
    $query = "
    INSERT
    INTO `region`
    (`name`)
    VALUES
    (?);
    ";

    insert($query, [$this->name]);

    $this->id = last_insert_id();
  }

}