import React from 'react'
import { useParams } from 'react-router-dom'
// to grab the id coming from router parameter

export default function Details() {
    const {id} = useParams()
    return (
      <div>
        {id}
      </div>
    )
  }
