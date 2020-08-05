  
import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch='
const pageOffsetPrefix = '&sroffset='


const App = () => {
  const [ searchValue, setSearchValue ] = useState('')
  const [ currentOffset, setCurrentOffset ] = useState(0)
  const [ searchResults, setSearchResults ] = useState([])

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSearchClick = () => {
    getSearchResults()
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') getSearchResults()
  }

  const getSearchResults = async () => {
    if(!searchValue) return
    const searchUrl = `${url}${searchValue}${pageOffsetPrefix}${currentOffset}`
    const response = await fetch(searchUrl)
    const data = await response.json()
    setSearchResults(data.query.search)
  }

  const handleNextPageClick = (event) => {
    setCurrentOffset(currentOffset + 10)
  }

  useEffect(() => {
    getSearchResults()
  }, [currentOffset]) // Empty array is thes same as componentDidMount
  return (
    <div className="App">
      <SearchBar
        searchValue={searchValue}
        handleInputChange={handleInputChange}
        handleSearchClick={handleSearchClick}
        handleKeyPress={handleKeyPress}
      />
      <SearchResults searchResults={searchResults} handleNextPageClick={handleNextPageClick}/>
  </div>
  );
}

export default App;