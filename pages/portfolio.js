import React from 'react'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Header from '../components/Header'
import SectionTitle from '../components/SectionTitle'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
// import OwlCarousel from 'react-owl-carousel'


const portfolio = () => {
    return (
        <>
            <Header title='Portfolio' />
            <Background>
                <BackButton/>
                <SectionTitle title='Portfolio'/>
                <div className="img-con">
                    <img src="/images/1st slide.png" alt="Our Portfolio"/>
                </div>
                <p>We go add logos of brands we have worked with ( Turks and Creative, digita, cryptobonanzas)</p>
                <OwlCarousel className='owl-theme' items={1} margin={10} loop autoHeightClass={'owl-height'} lazyLoad nav >
                    <div className="img-con">
                    <h3 style={{textAlign: 'center'}}>Turks and Creative</h3>
                    <br/>
                        <img src="/images/turks and creative.png" alt="turks"/>
                    </div>
                    <div className="img-con">
                        <h3 style={{textAlign: 'center'}}>Digita</h3>
                        <br/>
                        <img src="/images/2nd slide.png" alt="Digita"/>
                    </div>
                    <div className="img-con">
                        <h3 style={{textAlign: 'center'}}>Cryptobonanzas</h3>
                        <br/>
                        <img src="/images/Digita.png" alt="cryptobonanzas"/>
                    </div>
                </OwlCarousel>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}} >
                    <a className='links download-link' href="/pdf/theCopySmith.pdf" download='The Copy Smith - Portfolio'>
                        Download Portfolio As PDF
                    </a>
                </div>
            </Background>
        </>
    )
}

export default portfolio
