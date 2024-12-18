import React from 'react'

function objectlist() {
    const fruits=[
        {
            id:1,
            name:"Apple"
        },
        {
            id:2,
            name:"Grapes"
        }
    ]
    const fri=fruits.map((x,index)=><li key={x.id}>myid={x.id}&my name={x.name}</li>)
  return (
    <div>
        {fri}

    </div>
  )
}

export default objectlist