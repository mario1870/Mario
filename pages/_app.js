import '../styles/globals.css'
import Navbari from './components/navbar.'
import "bootstrap/dist/css/bootstrap.min.css"
import Landing from './components/landing'
import Lebenslauf from './components/lebenslauf'
import Skills from './components/skills'
import Footer from './components/footer'





function MyApp({ Component, pageProps }) {
  return (
  <div>
    <span style={{zIndex: 2, width: "100%"}}><Navbari /></span>
    <div style={{zIndex: 1, width: "100%", height:"100vh", marginTop: "-40px"}}><Landing /></div>
    <div style={{zIndex: 2, width: "100%", height:"100vh"}} id="Lebenslauf"><Lebenslauf /></div>
    <span style={{zIndex: 2, width: "100%", height:"100%"}}><Skills /></span>
    <Footer />
  </div>

  )
}

export default MyApp
