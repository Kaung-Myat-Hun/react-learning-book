import React from 'react'

import { useParams } from 'react-router-dom'

function DynamicRoute() {
  const params = useParams()
  console.log(params)
  const {id} = params;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default DynamicRoute

