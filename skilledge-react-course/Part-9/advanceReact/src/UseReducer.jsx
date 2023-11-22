import React from 'react'
// import { useState } from 'react'
import { useReducer } from 'react'


const reducer = (state, action) => {
    switch(action.type){
        case 'userInput':
            return {...state, userInput : action.payload}

        case 'inc':
            return {...state, count : state.count + 1}
        
        case 'dec':
            return {...state, count : state.count - 1}
        
        case 'changeColor' : 
            return {...state, color : !state.color}

        default:
            throw new Error()
    }
}

const initialState = {
    userInput:'',
    count:0, 
    color:false
}

export default function UseReducer() {
    // const [userInput, setUserInput] = useState('')
    // const [color, setColor] = useState(false)
    // const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)

    // not necessary but convension for industry
    const ACTION = {
        UESR_INPUT : 'userInput',
        INCREMENT : 'inc',
        DECREMENT : 'dec'
    }

    return (
        <div style={{
            // backgroundColor : color ? "yellow" : "black",
            backgroundColor : state.color ? "yellow" : "black",
            color : state.color ? "black" : "white",
            boxShadow : "-10px -10px 10px gray",
            height : "500px"
            }}>
            {/* <input type="text" onChange={e => setUserInput(e.target.value)}/> */}
            <input type="text" onChange={e => dispatch({type : ACTION.UESR_INPUT, payload : e.target.value})}/>

            {/* <p>{count}</p> */}
            <p>{state.count}</p>

            <section>
                {/* <button onClick={() => setCount(prev => prev-1)}>-</button>
                <button onClick={() => setCount(prev => prev+1)}>+</button> */}
                <button onClick={() => dispatch({type : ACTION.DECREMENT})}>-</button>
                <button onClick={() => dispatch({type : ACTION.INCREMENT})}>+</button>

                {/* <button onClick={() => setColor(prev => !prev)}>Change Color</button> */}
                <button onClick={() => dispatch({type : 'changeColor'})}>Change Color</button>
            </section>
            <p>{state.userInput}</p>

        </div>
    )
  }
