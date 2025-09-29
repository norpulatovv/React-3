import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div style={{ maxWidth: "1000px", margin: "0px auto", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px" }}>
        <div className='hero-div' style={{ width: "800px", height: "600px" }}>
          <div style={{display:"flex", padding:"20px", paddingLeft:"30px", flexDirection:"column"}}>
            <h1>Hello my name is: <span style={{ color: "yellow" }}>name</span> </h1>
            <h1>This is the day: <span style={{ color: "yellow" }}> 12.12.2024</span> </h1>
            <h1>A random number from 0 to 100:</h1>
          </div>
          <h1 style={{ fontSize: "150px", textAlign: "center" }}>77</h1>
        </div>
      </div>
    </div>
  )
}

export default App
