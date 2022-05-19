import './App.css';
import {useState} from "react";

function App() {

  const [on, setOn] = useState ({
    red: false,
    yellow: false,
    green: false
  });

  const handleClick = (e) => {
    if (e.target.id === "first") {
      setOn ({
        red: true,
        yellow: false,
        green: false
      })}
    else if (e.target.id === "second") {
      setOn ({
        red: false,
        yellow: true,
        green: false
      })}
      else (
        setOn ({
          red: false,
          yellow: false,
          green: true
        }))
  };

  return (
    <div className="App">
      <div className="container d-flex justify-content-center">
        <div className="traffic-light d-flex flex-column">
          <span>
            <button className= {`circle1 ${on.red ? "light-on":""}`}  id= "first" onClick={handleClick}></button>
          </span>
          <br></br>
          <span>
            <button className={`circle2 ${on.yellow ? "light-on":""}`} id= "second" onClick={handleClick}></button>
          </span>
          <br></br>
          <span>
            <button className={`circle3 ${on.green ? "light-on":""}`} id= "third" onClick={handleClick}></button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
