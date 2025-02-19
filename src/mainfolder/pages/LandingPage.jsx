import { Box, Container } from '@mui/material'
import React from 'react'
import NavBar from '../components/navsection/navBar'
import HeroSection from '../components/hero/HeroSection'
import AccordianSection from '../components/AccordianSection'

const LandingPage = () => {
    return (
        <Container>
             <Box>
                <NavBar />
                <HeroSection/>
                <AccordianSection/>
            </Box>

        </Container>
           
       

    )
}

export default LandingPage
