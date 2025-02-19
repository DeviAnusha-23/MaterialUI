import { Box, Typography } from '@mui/material'
import React from 'react'
import HeroDivider from './HeroDivider'

const HeroText = () => {
  return (
    
    <Box sx={{
        display:'flex',
        width:'270px',
        height:'50px',
        justifyContent:'center',
        alignItems:'center' ,
        marginTop:'130px'  
         }}>
          <Box>
            <HeroDivider/>
          </Box>
        {/* <Typography variant="h6"> 
            our postgraduate programme
        </Typography> */}
    </Box>
  )
}

export default HeroText
