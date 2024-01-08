import Navbar from "./Navbar"; //Navbar component
import { useState } from "react"; //update event change in dom by refreshing dom
// It trigger rerender of the component not the whole page

function App() {
  let [name, setName] = useState("PRANJAL");
  let [age, setAge] = useState(24);

  function handleClick() {
    console.log("Clicked");
    setName("KRISHNA");
    setAge(27);
  }

  return (
    <div>
      <Navbar />
      <h1>App.js</h1>
      <h2>LEARNING REACT js</h2>
      <div>
        <h3>Name : {name}</h3>
        <h3>Age : {age}</h3>
        <button onClick={handleClick}>Click</button>
        {/* supplying reference of the function */}
      </div>
    </div>
    // It only return single div
  );
}

export default App;
