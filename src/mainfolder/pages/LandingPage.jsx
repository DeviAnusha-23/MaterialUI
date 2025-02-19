import { Box, Container } from '@mui/material'
import React from 'react'
import NavBar from '../components/navsection/navBar'
import HeroSection from '../components/hero/HeroSection'
import AccordianSection from '../components/AccordianSection'
import CardDisplay from '../components/CardsSection/CardDisplay'
import MainTab from '../components/TabSection/MainTab'
import MainGraph from '../components/TabSection/GraphSection/MainGraph'


const LandingPage = () => {
    return (
        <Container>
             <Box>
                <NavBar />
                <HeroSection/>
                <AccordianSection/>
                <CardDisplay/>
                <MainTab/>
                <MainGraph/>
                
            </Box>

        </Container>
           
       

    )
}

export default LandingPage
