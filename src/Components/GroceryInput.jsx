import React from 'react'

export default function GroceryInput() {
    const [title,setTitle]=React.useState("");
  return (
    <div>
        Grocery Input
        <input type="text" value={title} placeholder="Add item" onChange={(e)=setTitle(e.target.value)} />
        <button onClick={()}>Add Item</button>

      
    </div>
  )
}
