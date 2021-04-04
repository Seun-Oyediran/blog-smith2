// import '../styles/globals.css'
import '../styles/style.css'
import {AnimatePresence, motion} from 'framer-motion'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <AnimatePresence exitBeforeEnter>
        <motion.div key={router.route}
        style={{padding: 0, margin: 0}}
        >
          <Component {...pageProps} />
        </motion.div>
    </AnimatePresence>
  
   
    )
}

export default MyApp
