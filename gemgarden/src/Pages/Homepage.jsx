import React from 'react'
import { useState, useEffect } from 'react'

export const Homepage = () => {

  const [data , setData] = useState([]);

  const getdata = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/albums`)
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getdata();
  },[])
  return (
    
    <div style={{display:"grid", gridTemplateColumns:"repeat(1,1fr)",marginTop:"150px"}}>
      {/* <h1>Welcome to Homepage</h1> */}
      {data.map((item)=>(
       <div key={item.id}>
        <h1>{item.id}</h1>
        <h1>{item.title}</h1>
       </div>
      ))}
    </div>
  )
}

