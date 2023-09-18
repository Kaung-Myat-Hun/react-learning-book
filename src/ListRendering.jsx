import React from 'react'

function ListRendering() {
  const list =[
    "bate thar", "Kaung", "Myat" , "Hun"
  ]

  return (
    <div>
    {
      list.map((item, index)=> (
        <h3 key={index}>{item}</h3>
      ))
    }
    </div>
  )
}

export default ListRendering