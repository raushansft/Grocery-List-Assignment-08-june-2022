import React from 'react'

export default function GroceryInput({addItem}) {
    const [title,setTitle]=React.useState("");
  return (
    <div>
        Grocery Input
        <br />
        <input type="text" value={title} placeholder="Add item" onChange={(e)=>setTitle(e.target.value)} />
        <button onClick={()=>{ addItem(title);setTitle("")}}>Add Item</button>

      
    </div>
  )
}
