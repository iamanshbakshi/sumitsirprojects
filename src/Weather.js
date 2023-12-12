// this code is without api integration ,it is manual 
// to add data manually on card
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';









function Weather(){

    const[cities,setCities]=React.useState([{"city":"Nagpur", "temp": 20, "wind": "24kmph"}, {"city":"Mumbai", "temp": 24,"wind":"36kmph"}, {"city":"Gondia", "temp": 30,"wind":"55kmph"} ]);
  

    const [city, setCity] = React.useState();
    const [temp, setTemp] = React.useState();
    const [wind, setWind] = React.useState();
    // return (
    //     <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={3}>
    //     <Grid item xs={4}>
    //     <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="Green" gutterBottom>
    //       Nagpur
    //     </Typography>
        
    //     <Typography sx={{ mb: 1.5 }} color="Blue">
    //       Temp
    //     </Typography>
    //     <Typography variant="body2">
    //       well meaning and kindly.
    //       <br />
    //       {'"a benevolent smile"'}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
    //     </Grid>



    //     <Grid item xs={4}>
    //     <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="Green" gutterBottom>
    //       Mumbai
    //     </Typography>
        
    //     <Typography sx={{ mb: 1.5 }} color="Blue">
    //       Temp
    //     </Typography>
    //     <Typography variant="body2">
    //       well meaning and kindly.
    //       <br />
    //       {'"a benevolent smile"'}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
    //     </Grid>
    //     <Grid item xs={4}>
    //     <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="Green" gutterBottom>
    //       Gondia
    //     </Typography>
       
    //     <Typography sx={{ mb: 1.5 }} color="Blue">
    //       Temp
    //     </Typography>
    //     <Typography variant="body2">
    //       well meaning and kindly.
    //       <br />
    //       {'"a benevolent smile"'}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
    //     </Grid>
       
    //   </Grid>
    // </Box>

      
    // )

    return <>
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    
    <TextField id="filled-basic" label="City" onChange={(e)=>{setCity(e.target.value)}} variant="filled" />
    <TextField id="filled-basic" label="Temp" onChange={(e)=>{setTemp(e.target.value)}} variant="filled" />
    <TextField id="filled-basic" label="Wind"  onChange={(e)=>{setWind(e.target.value)}} variant="filled" />
   

    <Button variant="contained" onClick={()=>{
        console.log("clicked");
        console.log(city, temp, wind);

        cities.push({"city": city, "temp": temp, "wind": wind});
        setCities([...cities]);


      }}>Add</Button>
   

    
  </Box>
    
    
    <Grid container spacing={2}>


    {cities.map((val, index)=>{
        return  <Grid item xs={4}>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography sx={{ fontSize: 18 }} color="Green" gutterBottom>
            {val["city"]}
            </Typography>
            
            <Typography sx={{ mb: 1.5 }} color="Blue">
            Temp: {val["temp"]}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="Brown">
            Wind: {val["wind"]}
            </Typography>
           
        </CardContent>
    
        </Card>
        
    </Grid>;
    })}

</Grid>
</>

}


export default Weather;





