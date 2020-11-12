import React from 'react'
import styled from 'styled-components'
import EndingSection from './components/Landing/EndingSection.component'
import Footer from './components/Landing/Footer.component'
import LandingTop from './components/Landing/LandingTop.component'
import Section from './components/Landing/Section.component'
import WorkoutsSection from './components/Landing/WorkoutsSection.component'
import { Grid } from './components/layout/StyleWrappers'
const Landing = () => {
    const Mains = {
        header:"Experience now" ,
        shorthead:"Get your body moving and be ready to unleash the dancer within you!"
    }
    const Endings = {
        header : 'Enjoy fitness',
        shorthead : 'Pick a spacious location and start the challenge.'
    }
    return (
        <Grid gap="2rem 0">
            <LandingTop />
            <Section 
            rows="2/3"
            gap="2rem" 
            headerProps={Mains}
            children={<WorkoutsSection />}
            />
            <Section 
            rows="3/4"
            headerProps={Endings}
            gap="2rem 1rem"
            children={<EndingSection />}
            />
            <Section
            bgCol="var(--primaryMain)" 
            rows="4/-1"
            p="2rem 0"
            align="center"
            flexBasis="none"
            children={<Footer />}
            />
        </Grid>
    )
}

export default Landing

