import React from 'react'
import { useState, useContext } from 'react'

// creating component
const PersonContext = React.createContext()
// provider , consumer

const data = [
    {id : 1, name : "pranjal gogoi"},
    {id : 2, name : "krishna yadav"},
    {id : 3, name : "rahul singh"},
    {id : 4, name : "ishan singh"}
]



// ContextApi component
export default function ContextApi() {
    const [people, setPeople] = useState(data)
    const removePerson = (id) => {
        const updatedData = people.filter((person) => person.id != id)
        setPeople(updatedData)
    }
    return (
    // PersonContext is a component, we can send prop
    // if we pass function inside value of Context Api, we should pass it in double curly bracket
    <PersonContext.Provider value={[{removePerson}, "hanuman"]}>
    <div>
        <h1>USE CONTEXT</h1>
        <List people={people}/>
    </div>
    </PersonContext.Provider>
  )
}

// List component
function List({people}) {
  return (
    <div>
      {/* where we do mapping , unique key needed there */}
      {people.map((person) => {
            return (
                <SinglePerson person={person} key={person.id}/>
            )  
        })}
    </div>
  )
}

// SinglePerson component
function SinglePerson({person}) {
    // destructuring the PersonContext
    const [{removePerson}, boss] = useContext(PersonContext)
    // console.log(removePerson);
    console.log(boss);
    return (
        <div>
            <ul>
                <li>Id : {person.id}</li>
                <li>Name : {person.name}</li>
                <li>Boss : {boss}</li>
                <button onClick={() => removePerson(person.id)}>Remove Person</button>
            </ul>
        </div>
    )
}