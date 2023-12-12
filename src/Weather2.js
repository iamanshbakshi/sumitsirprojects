// this code is with API-integration

// it will automatically show real -time data


import { Link, Outlet } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import axios from "axios";

function Weather2(){

    const [cities, setCities] = React.useState([{"city":"Nagpur", "temp": 20, "wind": "24kmph"}, {"city":"Mumbai", "temp": 24}, {"city":"Pune", "temp": 30}, {"city":"Delhi"}, {"city":"Wardha"}, {"city":"Gondia"}]);

    const [apidata, setApiData] = React.useState();

    function fetchAPI(){
        console.log("fetch api");
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Nagpur,in&APPID=7acf2630aaa501c920d51011926171b6&units=metric`)
            .then((res)=>{
            console.log(res)
            setApiData(res.data);
        });
    }
    return <>
   
    <Button onClick={()=>{fetchAPI()}}>Fetch API : </Button>

    <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="blue" gutterBottom>
                {apidata && apidata.name}
                </Typography>
                
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Temp:                 {apidata && apidata.main.temp}

                </Typography>
                <Typography variant="body2">
                humidity: {apidata && apidata.main.humidity}
                </Typography>
            </CardContent>
        
            </Card>


    <Grid container spacing={2}>
  
        {cities.map((val, index)=>{
            return  <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="blue" gutterBottom>
                {val["city"]}
                </Typography>
                
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Temp: {val["temp"]}
                </Typography>
                <Typography variant="body2">
                Wind: {val["wind"]}
                </Typography>
            </CardContent>
        
            </Card>
            
        </Grid>;
        })}
    
</Grid>

</>


}


export default Weather2;