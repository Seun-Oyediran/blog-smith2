import React from 'react'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Header from '../components/Header'
import SectionTitle from '../components/SectionTitle'


const work = () => {
    return (
        <>
            <Header title='How We Work' />
            <Background>
                <BackButton />
                <SectionTitle title='How We Work' />
                <div className="img-con">
                    <img src="/images/pexels-life-of-pix-8264.jpg" alt="how we work"/>
                </div>
                <ul className="left-space no-decimal">
                    <li>When you reach out to us to work on a project, we send a questionnaire for you to fill. This gives us a clear insight of your goals and objectives</li>
                    <li>We offer a unique quote depending on the scope of the project and how long we think it will take at a very standard rate.</li>
                    <li>We also schedule a 30 minutes strategy meeting , where we discuss everything as regards your brand and both parties are in sync.</li>
                    <li>We also go ahead to do our own research, understand your customers pain points, the language  your audience relates to, and their buying behaviours.</li>
                    <li>We start working on your copy, send a first draft, ask for your feedback and incorporate that in a second draft, Our final submission would be in the third draft</li>
                </ul>
            </Background>
        </>
    )
}

export default work
