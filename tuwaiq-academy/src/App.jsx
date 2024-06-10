
import './App.css'
import Nav from "./components/Nav/Nav"
import Tabs from "./components/Tabs/Tabs"
import Footer from "./components/Footer/Footer"
import Register from  "./components/Register/Register"
import Crads from "./components/Cards/Crads"
import Button from './components/button/Button'
function App() {
  

  return (
    <>
      <Nav/>
      <Tabs/>
      <div className='cardsList'>
      <Crads type={"لقاء"} title={"فعالية WWDC24 Watch Party"} eventLocation={"الرياض"} period={"7 أسابيع"} start={"15-06-2024"}/>
      <Crads type={"معسكر"} title={"فعالية WWDC24 Watch Party"} eventLocation={"الرياض"} period={"7 أسابيع"} start={"19-06-2024"}/>
      <Crads type={"برنامج"} title={"فعالية WWDC24 Watch Party"} eventLocation={"الرياض"} period={"7 أسابيع"} start={"25-06-2024"}/>

      <Crads type={"معسكر"} title={"فعالية WWDC24 Watch Party"} eventLocation={"الرياض"} period={"7 أسابيع"} start={"10-06-2024"}/>
      <Crads type={"برنامج"} title={"فعالية WWDC24 Watch Party"} eventLocation={"الرياض"} period={"7 أسابيع"} start={"12-06-2024"}/>
      <Crads type={"لقاء"} title={"فعالية WWDC24 Watch Party"} eventLocation={"الرياض"} period={"7 أسابيع"} start={"09-06-2024"}/>
      
      
       </div>
      <div className='divBtn'>
      <Button name={"تحميل المزيد"}/>
      </div>
       
      
      <Register/>
    
      <Footer/>
    </>
  )
}

export default App
