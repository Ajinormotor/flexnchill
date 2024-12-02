
import './App.css'
import Routs from './routs/Routs'
import Footer from './ui/Footer'
import Header from './ui/Header'
import MobileHeader from './ui/MobileHeader'
function App() {


  return (
    <>
 <div className="">
  
  <div className="">
  <Header />
  </div>

  <div className="">
    <MobileHeader />
    </div>
</div>

      <Routs />
      <Footer />
    
    </>
  )
}

export default App
