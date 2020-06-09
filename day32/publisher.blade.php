<h1>Publishers Index</h1>
@foreach($publishers as $b)
  <div>
    <h2>{{$b->title}}</h2>
    <a href="publishers/{{ $b->id }}">Read more...</a>
  </div>
@endforeach 