import React, { useReducer } from 'react'
import styled from 'styled-components'
import * as fa6Icons  from "react-icons/fa6";


const reducer = (state2, action) => {
    /* if(action.type === 'INCREMENT'){
        return state + 1;
    } 
    if(action.type === 'DECREMENT'){
        return state - 1;
    }
    */

    console.log(state2);

    if(action.type === 'INCREMENT'){
        return {...state2, count : state2.count+1};
    }
    if(action.type === 'DECREMENT'){
        return {...state2, count : state2.count-1}
    }  
}

const initialState = {
    count : 0
}

function Count() {
    
    // dispatch trigger the action method, a perameter of reducer function
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <Wrapper>
            <div className='main'>
                <div onClick={() => dispatch({type: 'INCREMENT'})}>
                    <fa6Icons.FaAngleUp/>
                </div>
                
                <div className='count'>{state.count}</div>

                <div onClick={() => dispatch({type: 'DECREMENT'})}>
                    <fa6Icons.FaAngleDown/>
                </div>
            </div>
        </Wrapper>
    )
}

export default Count

const Wrapper = styled.div`

    .main{
        display: flex;
        gap: 10vw;
        justify-content: center;
        align-items: center;
        height: 100vh;

        svg{
            height: 10vw;
            width: 10vw;
            cursor: pointer;
            color: #773bf0;
        }  
    }

    .count{
            border: 0.7vw solid #773bf0;
            background-color: white;
            color: #911a1a;
            height: 20vw;
            width: 20vw;
            font-size: 10vw;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2vw;
            &:hover{   
                box-shadow: 0vw 1vw 0.8vw gray;
                transition: 200ms;
            }
        }
`
