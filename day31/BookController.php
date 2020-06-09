<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Book;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();

        /* return $books; */
       /*  return 'hello from book controller'; */

        return view('index', compact('books'));
    }

    public function show($book_id)
    {


/*         $book = Book::find($book_id);

        if ($book === null)
        {
            return 'Not found';
        } */

        /* return Book::where('id', $book_id)->first(); */

        /* return Book::where('id', $book_id)->get(); */

/*         $book = Book::findOrFail($book_id);

        return $book; */

        $book = Book::findOrFail($book_id);
        return view('show', compact('book'));
    }

    public function create() 
    {
        return view('books.create');
    }

    public function store(Request $request)
    {
        $book = new Book;
        $book->title = $request->input('title');
        $book->authors = $request->input('authors');
        $book->image = $request->input('image');
        
        $book->save();

        return redirect('/books/'.$book->id);
    }

    public function edit($book_id)
    {
        $book = Book::findOrFail($book_id);

        return view('books.edit', compact('book'));
    }

    public function update($book_id, Request $request)
    {
        $book = Book::findOrFail($book_id);

        $book->title = $request->input('title');
        $book->authors = $request->input('authors');
        $book->image = $request->input('image');
        
        $book->save();

        return redirect('/books/' . $book->id);
    }
}
