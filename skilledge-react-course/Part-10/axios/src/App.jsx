import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export default function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    // GET REQUEST
    /* axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    }); */

    // POST REQUEST
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      "userId" : 1000,
      "title" : "CUSTOM POST REQUEST",
      "completed" : true
    })
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  })

  return (
    <div>
      Is it running
      <h1>{data && data.title}</h1>
      <p>Is completed : {data.completed ? "YES" : "NO"}</p>
    </div>
  )
}
