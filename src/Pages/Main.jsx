import '../App.css'
import Academic from '../Components/Academic'
import Contact from '../Components/Contact'
import Hero from '../Components/Hero'
import MySpace from '../Components/MySpace'
import Projects from '../Components/Projects'
import Websites from '../Components/Redes'
import Tecnologies from '../Components/Tecnologies'



function Main() {


  return (
    <div className='Main'>
      <Hero/>
      <Academic/>
      <Projects/>
      <Tecnologies/>
      <Websites/>
      <Contact/>
      <MySpace/>
      
    </div>
  )
}

export default Main