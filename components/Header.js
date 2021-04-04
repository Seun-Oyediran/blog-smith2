import Head from 'next/head'
import React from 'react'

const Header = ({title}) => {
    return (
        <Head>
            <title>The Copy Smith | {title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Header
