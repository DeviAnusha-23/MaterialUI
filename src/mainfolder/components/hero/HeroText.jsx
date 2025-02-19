import { Box, Typography } from '@mui/material'
import React from 'react'

const HeroText = () => {
  return (
    
    <Box sx={{
        display:'flex',
        width:'270px',
        height:'50px',
        justifyContent:'left',
        alignItems:'center' ,
        marginTop:'130px'   }}>
        <Typography variant="h6"> 
            our postgraduate programme
        </Typography>
    </Box>
  )
}

export default HeroText
