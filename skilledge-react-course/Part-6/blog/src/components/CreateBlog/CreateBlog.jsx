import React from 'react'
import { useState } from 'react'

export default function CreateBlog() {
    const [newBlog, setNewBlog] = useState()
    const form = (e) => {
        e.preventDefault()
        console.log(e.target.querySelector('input').value)
        setNewBlog(e.target.querySelector('input').value)
    }

    return (
      <div>
        <form onSubmit={e => form(e)}>
            <input type="text" />
            <button >Create Blog</button>   
        </form>
        <h3>{newBlog}</h3>
      </div>
    )
  }
