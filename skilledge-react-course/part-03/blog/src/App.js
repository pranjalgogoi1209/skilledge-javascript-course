import { useState } from "react";
// useSatate is a hook

function App() {
  const [name, setName] = useState("PRANJAL");
  const [age, setAge] = useState(24);

  function handleClick() {
    setName("KRISHNA");
    setAge(27);
  }

  function handleClickAgain(name, e) {
    setName(name);
    setAge(23);
    console.log(name);
    console.log(e);
  }

  return (
    <div>
      <h1>Event binding with the help of hook(useState)</h1>
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>

      {/* We aren't calling the function, We are giving the reference only, So we cann't trasfer argument */}
      <button onClick={handleClick}>Click</button>

      {/* We are calling the function, We are giving the reference of arrow function but inside that we ara calling the event function, So that we can trasfer argument now */}
      <button
        onClick={e => {
          handleClickAgain("RAHUL", e);
        }}
      >
        Click Again
      </button>
    </div>
  );
}

export default App;
