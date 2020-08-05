import React, {useState, useEffect} from 'react';
import { DateTime } from 'luxon';
import './App.css';
import Api from "./components/Api";
import Selects from "./components/Selects";

const pageOffsetPrefix = '&sroffset='

const App = () => {
  const [ flights, setFlights ] = useState([]);
  const [ selectInfoFrom, setSelectInfoFrom ] =useState("PRG");
  const [ selectInfoTo, setSelectInfoTo ] =useState("VLC");
  const [ directFlights, setDirectFlights ] =useState(0);
  const [ currentOffset, setCurrentOffset ] = useState(0)



  const fetchData = async () => {
    const data = await Api (
      selectInfoFrom,
      selectInfoTo,
      directFlights,
      pageOffsetPrefix,
      currentOffset
    );
    console.log(data.data);
    setFlights(data.data);
  }

  const handleNextPageClick = (event) => {
    setCurrentOffset(currentOffset + 10)
  }

  const handleSelectChange = (e, targetSelect) => {
    if (targetSelect === 'from') {
      setSelectInfoFrom(e.target.value);
    } else if(targetSelect === 'to') {
      setSelectInfoTo(e.target.value);
    }
  }


  const handleSearch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [currentOffset]);


  return(
<div className="App">
    
    <h2>Flights</h2>
    <p>Select:</p> 
    <Selects 
    handleSearch={handleSearch}
    handleSelectChange={handleSelectChange}
    handleNextPageClick={handleNextPageClick}
    />
    <hr/>
    
    {flights.map((flight, index) => (
    <div key={index}>
      <p>Price: {flight.price} EUR</p>
      <h2>{flight.cityFrom}</h2>
      <p>From: {flight.flyFrom}</p>
      <h2>{flight.cityTo}</h2>
      <p>To: {flight.flyTo}</p>
      <p>Departure: {DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')}</p>
      <p>Arrival: {DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')}</p>
      
      {flight.availability.seats  ? (
        <p>This flight is available: {flight.availability.seats} seats left</p>) : (
          <p>This flight is not Available.</p>
        )}
        
      
      <br/><hr/>
    </div>))}

    </div>
  )
}

export default App;
