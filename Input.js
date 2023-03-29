import React from 'react'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import "./cardBox.css"
import google from "./googleImg.png";

const Weather = ({input,setInput,findWeather}) => {
    const handleChange=(e)=>{
        setInput(e.target.value);
    }
const handleClick=(e)=>{
    e.preventDefault();
    findWeather();
}

    return (
        <div className='card-box'>
            <div className='input-box'>
                <h1>Google Weather Map</h1>
                <p>powered by</p>
                <img src={google}
                    alt="google img" />
                <form>
                    <Input placeholder="Enter city name" onChange={handleChange} value={input} />
                    <Button type="submit" variant="contained" onClick={handleClick}>Search</Button>
                </form>
            </div>
        </div>
    )
}

export default Weather;
