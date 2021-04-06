import React from 'react'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Header from '../components/Header'
import SectionTitle from '../components/SectionTitle'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
// import OwlCarousel from 'react-owl-carousel'


const portfolioContent = [
    {title: 'Turks and Creative', img: '/images/turks and creative.png', alt: 'turks'},
    {title: 'Digita', img: '/images/Digita.png', alt: 'digita'},
    {title: 'Cryptobonanzas', img: '/images/2nd slide.png', alt: 'cryptobonanzas'},
]



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
                
                <OwlCarousel className='owl-theme' items={1} margin={10} loop autoHeightClass={'owl-height'} lazyLoad nav >
                    {
                        portfolioContent.map((item, index)=>(
                            <>
                                 <div className="img-con">
                                 <h3 style={{textAlign: 'center'}}>{item.title}</h3>
                                    <br/>
                                    <img src={item.img} alt={item.alt}/>
                                </div>
                            </>
                        ))
                    }
                    
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
