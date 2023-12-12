import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function Register(){
    return <div>i am in Register<br/>
    <Box
      sx={{'& > legend': { mt: 2 },}}
    >

     <Typography component="legend">Give us Rating</Typography>
      <Rating name="no-value" value={null} />

    </Box>


    </div>
}

export default Register;



