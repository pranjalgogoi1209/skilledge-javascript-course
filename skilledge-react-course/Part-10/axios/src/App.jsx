import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Home from "./pages/Home";
import { createContext } from "react";

export const UserDetailsContext = createContext(null);

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    // GET REQUEST
    /*  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    }); */

    // POST REQUEST
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        userId: 1000,
        title: "CUSTOM POST REQUEST",
        completed: true,
      })
      .then(res => {
        console.log(res.data);
        setData(res.data);
      });
  });

  return (
    <UserDetailsContext.Provider value={"CONTEXT API"}>
      <p>Is it running</p>
      <h1>{data && data.title}</h1>
      <p>Is completed : {data.completed ? "YES" : "NO"}</p>
      <Home />
    </UserDetailsContext.Provider>
  );
}
