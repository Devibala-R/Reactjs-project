import './App.css';
import React, { useState } from "react";
import Weather from './component/Input';
import axios from 'axios'
import Result from "./component/Result"


function App() {
  const [input, setInput] = useState("")
  const [temp, setTemp] = useState("")
  const [description, setDescription] = useState("")
  const [icon, setIcon] = useState("")




  const findWeather = async () => {
    const apiKey = "0f9dd749b0297b043e236280c7c6b362";
    const unit = "metric";
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + apiKey + "&units" + unit;
    const response = await axios.get(url);
    const temp = await response.data.main.temp;
    const description = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

    setTemp(temp);
    setDescription(description);
    setIcon(imageUrl);
    setInput("")
  }
  return (
    <div>
      {temp===""?(
    <Weather input={input} setInput={setInput} findWeather={findWeather}/>
      ):(
    <Result temp={temp} desc={description} icon={icon} setTemp={setTemp}/>
      )}
    </div>
    
  );

}

export default App;
