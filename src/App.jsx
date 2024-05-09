import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import './styles.css'

const App = () => {
  
  const [isLight, setIsLight] = useState(false)

  return (
    <div className="app" data-theme={isLight ? "light" : "dark" }>
      <Navbar
        isChecked = {isLight}
        handleChange = {() => setIsLight(prevState => !prevState)}
      />
      <div className="circle c1" />
      <div className="circle c2" />
      <Hero />
    </div>
  )
}

export default App