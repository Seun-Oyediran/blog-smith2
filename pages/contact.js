import React, {useRef} from 'react'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Header from '../components/Header'
import SectionTitle from '../components/SectionTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from  '@fortawesome/free-brands-svg-icons'


const contact = () => {
    const email = useRef()
    const name = useRef()
    const message = useRef()

    const inputArray = [email, name, message]
    const onSubmit = (e)=>{
        e.preventDefault()
    }

    const clearInput =(e)=>{
        e.preventDefault()
        inputArray.forEach((item)=>{
            item.current.value = ''
        })
        return
    }


    return (
        <>
            <Header title='Contact Us'/>
            <Background>
                <BackButton/>
                <SectionTitle title='Contact Us'/>
                <p>Promises don’t shoot up your business!  Results Do</p>
                <div className="contact-form">
                    <form onSubmit={onSubmit}>
                        
                            <div className="input-con">
                                <h4>Name</h4>
                                <input ref={name} name='name' type='text'/>
                            </div>
                            <div className="input-con">
                                <h4>Email</h4>
                                <input ref={email} name='email' type='email' />
                            </div>
                        <div className="input-con">
                            <h4>Message</h4>
                            <textarea ref={message} name="message"  ></textarea>
                        </div>
                        <div className="submit-con">
                            <button className='links form-links' type="submit">Submit</button>
                            <button className='links form-links' onClick={clearInput}>Clear</button>
                        </div>
                    </form>
                </div>
               <div className="social">
                   <a href="https://mail.google.com/mail/u/0/?fs=1&to=victoryobaro9@gmail.com&tf=cm" target='_blank' className='social-link'>
                        <FontAwesomeIcon icon={faEnvelope} style={{width: '30px'}} className='icon' />
                   </a>
                   <a href="https://wa.me/%2B2348139303378?text=I%20want%20make%20an%20enquiry%20about%20The%20Copy%20Smiths" target='_blank' className='social-link'>
                        <FontAwesomeIcon icon={faWhatsapp} style={{width: '25px'}} className='icon' />
                   </a>
               </div>
            </Background>
        </>
    )
}

export default contact
