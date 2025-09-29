import './App.css'

function App() {
  let firstName = prompt("Ismingizni kiriting");

  let randomSon = Math.floor(Math.random() * 100) + 1;

  let now = new Date().getHours();

  let day = new Date().toDateString()

  return (
    <div>
      <div style={{
        maxWidth: "1000px", margin: "0px auto", display: "flex", alignItems: "center",
        justifyContent: "center", marginTop: "50px", 
      }}>
        <div className='hero-div' style={{ width: "800px", height: "600px", backgroundColor: now > 17 && now < 18 ? "white" : "black",
        color: now > 17 && now < 18 ? "black" : "white"}}>
          <div style={{ display: "flex", padding: "20px", paddingLeft: "30px", flexDirection: "column" }}>
            <h1>Hello my name is: <span style={{ color: "yellow" }}>{firstName}</span> </h1>
            <h1>This is the day: <span style={{ color: "yellow" }} >{day} </span> </h1>
            <h1>A random number from 0 to 100:</h1>
          </div>
          <h1 style={{ fontSize: "150px", textAlign: "center" }}>{randomSon}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
