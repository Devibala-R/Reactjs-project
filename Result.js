import { Button } from '@mui/material';
import React from 'react';
import "./Result.css"

const Result = ({ temp, icon, desc,setTemp }) => {
    return (
        <div className='result'>
            <div className='result-box'>
                <h1>Temp:{temp}</h1>
                <p>{desc}</p>
                <img src={icon} alt="logo" /><br/>
                <Button type="submit" variant="contained" onClick={()=>{setTemp("")}}>Back</Button>

            </div>

        </div>
    )
}

export default Result
