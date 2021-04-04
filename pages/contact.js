import React, {useRef} from 'react'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import Header from '../components/Header'
import SectionTitle from '../components/SectionTitle'




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
                            <button className='links' type="submit">Submit</button>
                            <button className='links' onClick={clearInput}>Clear</button>
                        </div>
                    </form>
                </div>
            </Background>
        </>
    )
}

export default contact
