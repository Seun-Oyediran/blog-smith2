import React from 'react'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Header from '../components/Header'
import SectionTitle from '../components/SectionTitle'

const help = () => {
    return (
        <>
          <Header title='How We Help'/>
          <Background>
                <BackButton/>
                <SectionTitle title='How We Help' />
                <div className="img-con">
                    <img src="/images/pexels-fauxels-3184418.jpg" alt="how we help"/>
                </div>
                <p>
                We are here to get rid of the frustrating feeling you feel when it comes to writing your own copy for your SAAS/ECOM  business. I mean, its your business, if anybody should  be in the best place to write, it should be you. But why is it that writing for your own business is so hard?
                </p>
                <p>Lets let you in on a little secret. Your customer doesn’t need all the information in your head, just the right information about your business. </p>
                <p>
                So if you are intentional about putting the right information out there, which translates to more clicks, more website visitors who actually stays to see what you are about, and a fat bank account( who are we kidding, that’s our ultimate goal). Then its my job to:
                </p>
                <ul className="left-space">
                    <li>Extract the right information from you</li>
                    <li>Learn what your customers want</li>
                    <li>Present it in a way that your customers want to read it</li>
                </ul>
                <p>
                    As simple as these three steps look, its far easier said than done and this is where we come in.
                </p>
        </Background>   
        </>
    )
}

export default help
