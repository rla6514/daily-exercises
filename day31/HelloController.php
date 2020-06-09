<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function index()
    {
        $whatever = 'yunyong';
        $age = 31;
        $comment = '<script>alert("yunyong wa here!!!");</script>';
        $fruits =['apple', 'pear', 'plum'];

        /* return view('hello')->with('whatever', $user); */

/*         return view('hello', [
            'whatever' => $user,
            'age' => $age
        ]); */

        return view('hello', compact('whatever', 'age', 'comment','fruits'));

       /*  return 'Hello form HelloController'; */
    }
}
