import React from 'react'
import GroceryInput from './GroceryInput'
import GroceryList from './GroceryList'
import { v4 as uuid } from 'uuid';

export default function Grocery() {
  const [data,setData]=React.useState([]);
  const addItem=(title)=>{
    const payload={
      title,
      id:uuid()
    };
    setData([...data,payload]);
    console.log(data);
    
  }

  const handleDelete=(id)=>{
    const upDateData=data.filter((item)=> item.id!==id);
    setData(upDateData);

  }

  return (
    <>
        <GroceryInput addItem={addItem}/>
        <GroceryList handleDelete={handleDelete} dataList={data}/>

       
    </> 
  )
}
