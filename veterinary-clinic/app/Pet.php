<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    public function client()
    {
        return $this->belongsTo('App\Client');
    }

    public function visits()
    {
        return $this->hasMany('App\Visit');
    }
}
