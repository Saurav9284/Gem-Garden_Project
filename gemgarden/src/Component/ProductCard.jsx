// import {useEffect, useState} from "react";
// import {addToCartProduct} from "../Redux/cart_page/action";
// import { useDispatch } from "react-redux";
// export const ProductCard=()=>{
//     const [prod,setProduc]=useState([]);
//     const dispatch = useDispatch();
//     async function getProduct(){
//     const res= await fetch( `https://gem-garden-tfkw.onrender.com/collections?_page=1_limit=10`);
//     const data= await res.json();
//     console.log(data);
//     setProduc(data);


// }
// useEffect(()=>{
//     getProduct();

// },[])

// return(
//    <div> {prod?.map((val)=>{
//     return <div key={val.id}>
//     <h1>{val.name}</h1>
//     <button onClick={()=>dispatch(addToCartProduct("axsc",val.id))}>AddToCart</button>
//     </div>
//     })}
//    </div>

// )
// }