import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import Background from '../components/Background'


const links = [
  {name: 'Who We Are', route: '/who'},
  {name: 'How We Help', route: '/help'},
  {name: 'How We Work', route: '/work'},
  {name: 'Contact Us', route: '/contact'},
]


export default function Home() {

  return (
    <>
    <Header title='Home' />
    <Background>
      <h1 >The Copy Smith</h1>
      <br/>
      <p className='homescreen'>7 seconds. This is all the time you have to get the attention of prospects on your website, sales page or whatever marketing tool you use. Seems impossible , we know but let us show you how we do it.</p>
      <ul className='links-con'>
        {links.map((item, index)=>(
          <Link href={item.route} key={index}>
            <a className='links'>{item.name}</a>
          </Link>
        ))}
      </ul>
    </Background>
    
    </>
  )
}
