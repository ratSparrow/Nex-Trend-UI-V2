import React, { useEffect } from 'react'
import error from "../../assets/images/common/404-error.jpg"
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const nagigate = useNavigate()
    useEffect(()=>{
        setTimeout(() => {
            nagigate("/")
        }, 5000);
    },[])
  return (
    <div>
      <img style={{width:"100%", height:"100vh"}} src={error} alt="" />
    </div>
  )
}
