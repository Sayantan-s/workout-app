import React from 'react'
//import styled from 'styled-components'
import EndingSection from './components/Landing/children/EndingSection.component'
import Footer from './components/Landing/children/Footer.component'
import Form from './components/Landing/Form.component'
import LandingTop from './components/Landing/children/LandingTop.component'
import Section from './components/Landing/dynamic/Section.component'
import WorkoutsSection from './components/Landing/children/WorkoutsSection.component'
import { Grid } from './components/layout/StyleWrappers'
import Backdrop from './components/ui/Backdrop.component'
import { connect } from 'react-redux'
const Landing = (props) => {
    React.useEffect(() => {
        console.log(window.scrollY)
    },[])
    const { formVisibility,backdropVisibility } = props 
    const LayoutProps = [
        {
            row : 'max-content 1fr max-content',
            rows : '1/2',
            bgCol : 'var(--primaryMain)',
            Children : LandingTop,
        },
        {   
            col2 : true, 
            rows: "2/3",
            gap: "2rem",
            headerProps: {
                header:"Experience now" ,
                shorthead:"Get your body moving and be ready to unleash the dancer within you!"
            },
            Children: WorkoutsSection
        },
        {
            col2: true,
            rows: "3/4",
            headerProps: {
                header : 'Enjoy fitness',
                shorthead : 'Pick a spacious location and start the challenge.'
            },
            gap:"3rem 1rem",
            Children: EndingSection
        },
        {
            col2 : true,
            bgCol : "var(--primaryMain)", 
            rows : "4/-1",
            p : "2rem 0",
            align: "center",
            flexBasis: "none",
            Children : Footer
        }
    ]
    return (
        <>
            <Grid gap="3rem 0">
                {
                    LayoutProps.map((section,id) => <Section key={id} {...section} />)
                }
            </Grid>
            {  formVisibility && backdropVisibility &&
                <>
                    <Backdrop />
                    <Form />
                </>
            }
        </>
    )
}

const mapStateToProps = state => {
    return { 
        backdropVisibility : state.backdrop,
        formVisibility : state.formModal
    }
}

export default connect(mapStateToProps)(Landing)




/*   { /*<Section
                row="max-content 1fr max-content"
                rows="1/2"
                bgCol="var(--primaryMain)"
                children={<LandingTop />}
                />
                <Section
                col2 
                rows="2/3"
                gap="2rem" 
                headerProps={Mains}
                children={<WorkoutsSection />}
                />
                <Section 
                col2
                rows="3/4"
                headerProps={Endings}
                gap="3rem 1rem"
                children={<EndingSection />}
                />
                <Section
                col2
                bgCol="var(--primaryMain)" 
                rows="4/-1"
                p="2rem 0"
                align="center"
                flexBasis="none"
                children={<Footer />}
                /> */