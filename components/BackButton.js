import React from 'react'
import Link from 'next/link'


const BackButton = () => {
    return (
        <div className='links-con1'>
            <Link href='/'>
                <a className="links">Back</a>
            </Link>
        </div>
    )
}

export default BackButton
