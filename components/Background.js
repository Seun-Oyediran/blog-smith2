import React from 'react'
import { motion } from 'framer-motion'
const variants ={
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition:{
            duration: 0.4,
        }
    },
    exit:{
        opacity: 0,
        transition:{
            duration: 0.4,
        }
    }
}



const Background = ({children}) => {
    return (
        <div className="flex-page">
            <div className="bg"></div>
            <motion.div className="container"
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'
            >
                {children}
            </motion.div>
            
        </div>
        
    )
}

export default Background
