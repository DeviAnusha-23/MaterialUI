import { Stack } from '@mui/material'
import React from 'react'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import ThirdCard from './ThirdCard'

const CardDisplay = () => {
  return (
   <Stack direction={'row'}>
    <FirstCard/>
    <SecondCard/>
    <ThirdCard/>
   </Stack>
  )
}

export default CardDisplay
