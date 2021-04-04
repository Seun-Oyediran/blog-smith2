// import '../styles/globals.css'
import '../styles/style.css'
import {AnimatePresence, motion} from 'framer-motion'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log(router);
  return (
    <AnimatePresence exitBeforeEnter>
        <motion.div key={router.route}
        
        >
          <Component {...pageProps} />
        </motion.div>
    </AnimatePresence>
  
   
    )
}

export default MyApp
