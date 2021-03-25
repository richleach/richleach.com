import Layout_Home from '../components/Layout_Home'
import '../styles/styles.css'
import '../styles/utilities.css'


function MyApp({ Component, pageProps, router }) {
  /* console.log(router.route);
  console.log((router.route.startsWith('/react'))); */

  if(router.route.startsWith('/')) {
    return(
    <Layout_Home>
      <Component {...pageProps} />
    </Layout_Home>
    )
  } 
}

export default MyApp
