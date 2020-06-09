<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class ApiController extends Controller
{
    public function index()
    {

        $query = "
        SELECT * 
        FROM `movies` 
        WHERE 1 
        ORDER BY `rating` DESC 
        LIMIT 0, 10 
        ";

        $movies =DB::select($query);

        return $movies;


        // the logic of your page will be here

        // as a response we will return an array of data
/*         return 
        
        [
            'success' => true,
            'message' => 'Response successfully returned.',
            'errors' => [],
            'data' => []
        ]; */
      }    
} 