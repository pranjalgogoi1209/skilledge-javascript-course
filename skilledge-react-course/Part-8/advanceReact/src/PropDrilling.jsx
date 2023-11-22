// We can write multiple components in a single page
// It's a good practice to write single component in a single page

import React from 'react'
import { useState } from 'react';

const data = [
    {id : 1, name : "pranjal gogoi"},
    {id : 2, name : "krishna yadav"},
    {id : 3, name : "rahul singh"},
    {id : 4, name : "ishan singh"}
]

// propDrilling component
function PropDrilling() {
    const [people, setPeople] = useState(data)
    const removePerson = (id) => {
        const updatedData = people.filter((person) => person.id != id)
        setPeople(updatedData)
    }

    return (
    <div>
        <h1>PROP DRILLING</h1>
        <List people={people} removePerson={removePerson}/>
    </div>
  )
}

// List component
function List({people, removePerson}) {
  return (
    <div>
      {/* where we do mapping , unique key needed there */}
      {people.map((person) => {
            return (
                <SinglePerson person={person} key={person.id} removePerson={removePerson}/>
            )  
        })}
    </div>
  )
}

// SinglePerson component
function SinglePerson({person, removePerson}) {
    // Don't modify props ever to make change in database
    return (
        <div>
            <ul>
                <li>Id : {person.id}</li>
                <li>Name : {person.name}</li>
                <button onClick={() => removePerson(person.id)}>Remove Person</button>
            </ul>
            {/* 
                We don't have access of removePerson function in SinglePerson component, because remvoePerson is a function defined in PropDrilling component. That's why, we have to send the data from PropDrilling component to List component and from List component to SinglePerson component through prop. Unneccessarily we are providing access of removePerson function to List component. Here we will face big problem in big projects. It's called prop drilling problem 
            */}
        </div>
    )
}

export default PropDrilling