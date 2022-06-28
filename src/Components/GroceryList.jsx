import React from 'react'

export default function GroceryList({dataList,handleDelete}) {
  return (
    <>
      <h1>Grocery List</h1>
      {
        dataList.map((item,i)=>{
          return <>
           <p key={item.id}>{item.title}</p>
          <button onClick={()=>handleDelete(item.id)}>Delete Item</button>


          </>

          
        })
      }
    </>
  )
}
