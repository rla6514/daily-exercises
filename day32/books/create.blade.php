<form method="POST" action="/books">
  @csrf
  
  <div>
    <label>Title</label>
    <input type="text" name="title">
  </div>

  <div>
    <label>Authors</label>
    <input type="text" name="authors">
  </div>
  
  <div>
    <label>Image</label>
    <input type="text" name="image">
  </div>
  
  
  <button type="submit">Save my new Book!</button>
  




</form>