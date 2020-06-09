import React from "react";
import ReactDOM from "react-dom";
import DayForecast from "./DayForecast/index.jsx";
import "./style.css";
import "./index.html";

class WeeklyForecast extends React.Component {
  render() {
    return (
      <>
        <h1>Weekly Weather Forecast</h1>
    
        <div class="week-forecast">
        {
    weekday: 'Mon',
    weather: 'cloudy',
    tempDay: 18,
    tempNight: 11,
  },
  {  
    weekday: 'Tue',
    weather: 'partly-cloudy',
    tempDay: 21,
    tempNight: 15,
  },
  {  
    weekday: 'Wed',
    weather: 'rainy',
    tempDay: 8,
    tempNight: 1,
  },
  {  
    weekday: 'Thu',
    weather: 'snowy',
    tempDay: -2,
    tempNight: -7,
  }
  {  
    weekday: "Fri"
    weather: "stormy-rain"
    tempDay: "28"
    tempNight: "21"
  },
  {  
    weekday: "Sat"
    weather: "stormy"
    tempDay: "35"
    tempNight: "27"
  }
  {  
    weekday= "Sun"
    weather= "sunny"
    tempDay= "28"
    tempNight= "22"
  }
        <DayForecast day = "Wed" weather="rainy" tempDay="8" tempNight="1"/>
        <DayForecast day = "Thu" weather="snowy" tempDay="-2" tempNight="-7"/>
        </div>
      </>
    );
  }
}

const appElm = document.querySelector("#app");
ReactDOM.render(<WeeklyForecast />, appElm);
