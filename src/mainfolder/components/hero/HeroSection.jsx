import { Stack ,Box} from '@mui/material'
import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

const HeroSection = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent='space-between'>
        <Box sx={{flex:'2'}}>
            <HeroText/>
        </Box>
        <Box>
            <HeroImage/>
        </Box>
    </Stack>
    
    
  )
}

export default HeroSection

