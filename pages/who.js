import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import SectionTitle from '../components/SectionTitle'

const who = () => {
    return (
        <>
            <Header title='Who We Are' />
            <Background>
                <BackButton />
                <SectionTitle title='Who We Are'/>
                <div className="img-con">
                    <img src="/images/pexels-fauxels-3183197.jpg" alt="who we are"/>
                </div>
                
                <p>
                We are the copysmiths, and as the name implies , we repair and refine your choppy copy to a data-focused , conversion driven content that helps you make more sales. With us , you can always be sure to pass the 7 seconds test. We are predominantly in the B2B SAAS/E commerce space and we have years of experience on our belt. With the expertise of our in-house writers, we have a long range of content formats/ marketing we work with ranging from e-books, brochures, social media content, press releases, website copy so you can always trust that we have you covered.
                </p>
                <p>If you fall into any of these categories, then I am glad to let you know you are in the right place.</p>
                <ul className='left-space'>
                    <li>You are new to the B2B SAAS/ECOM space and just trying to find your feet?</li>
                    <li>You have all the words in your thoughts and you are sure it will convert, but you are always left with frustration when its time to put your thoughts on paper?</li>
                    <li>You are already quite established, but you feel your website copy is outdated and your page needs a new breath of fresh air.</li>
                </ul>
            </Background>
        </>
    )
}

export default who
