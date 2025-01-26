import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function GitHub() {
    const [data,setData] = useState([]);
    useEffect(() =>{
        fetch('https://api.github.com/users/priyan2003')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setData(data);
        })
    },[])
  return (
   <>
   <div className='flex flex-row bg-blue-300 text-red-800 h-70 justify-center font-medium items-center'>Github Followers: {data.followers}

   </div>
   
   <img src={data.avatar_url} alt="" />
   
   </>
  )
}

export default GitHub