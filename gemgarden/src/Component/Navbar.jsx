import { Link } from '@chakra-ui/react'
import React from 'react'
import logo from '../Assets/GemGardenLogo2.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  // const Links = [
  //   {title:"Jwellary", path:"/jwellary"},
  //   {title:"Rings", path:"/rings"},
  //   {title:"Login", path:"/login"},
  //   {title:"Contact", path:"#"},
  //   {title:"Bag", path:"/cart"},
  // ]

  const naviagte = useNavigate();

  const handlelogo = () => {
    naviagte("/")
    console.log("Clicked")
  }
  const handlelogin = () => {
    naviagte("/login")
    console.log("Clicked")
  }
  const handleProduct = () => {
    naviagte("/product")
    console.log("Clicked")
  }
  const handleCart = () => {
    naviagte("/cart")
  }

  return (
    <div id='navbar' style={{height: "10%", backgroundColor:"#262425",
     color:"white", fontFamily:"sans-serif",cursor:"pointer",
      justifyContent:"space-around", display:"flex", padding:"20px", alignItems:"center"}}>
       <div>
        <img src={logo} width="20%" onClick={handlelogo}/>
        </div> 
       <Link key={"/jwellary"} to={"/jwellary"}onClick={handleProduct}>Jewelery</Link>
       <Link key={"/rings"} to={"/rings"}onClick={handleProduct}>Gifts</Link>
       <Link key={"/login"} to={"/login"} onClick={handlelogin}>Login</Link>
       <Link key={"#"} to={"#"}>Contact</Link>
       <Link key={"/cart"} to={"/cart"}onClick={handleCart}>Bag</Link>
      
    </div>
  )
}

export default Navbar
