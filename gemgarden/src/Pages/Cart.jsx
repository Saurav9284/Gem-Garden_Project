
import { useToast } from '@chakra-ui/react'
import { Box ,Text,Flex, Button,Image,Stack,Input, Table,Thead,Tbody,Tr,Th,Td,TableContainer,useBreakpointValue} from "@chakra-ui/react"
import {ArrowBackIcon,InfoOutlineIcon,AddIcon,MinusIcon} from '@chakra-ui/icons'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import dummyimage from "../Assets/necklace.jpg"
import { Link, useNavigate } from 'react-router-dom'
export const Cart = () => {
  const [cart, setCart] = useState([])
  const [totalprice,setTotalprice]=useState(0)
  const[checkoutText,setCheckoutText]=useState(false)
  const[qty,setQty] =useState(1);
const navigate=useNavigate()
  const toast = useToast()
  useEffect(() => {
    let cartdata = JSON.parse(localStorage.getItem("gem_garden_cart")) || []
    cartdata.map((el)=>{
      
    })
    setCart([...cartdata])
  }, [])

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.quantity * item.currentprice;
    });
    setTotalprice(totalPrice);
  }, [cart]);




  // console.log(cart)

  const handelInc = (data) => {
    const updatedCart = cart.map((item) =>
      item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCart(updatedCart);
    localStorage.setItem("gem_garden_cart", JSON.stringify(updatedCart));
    
  }


  const handelDec = (data) => {
if(data.quantity>1){
  const updatedCart = cart.map((item) =>
  item.id === data.id ? { ...item, quantity: item.quantity - 1 } : item
);

setCart(updatedCart);
localStorage.setItem("gem_garden_cart", JSON.stringify(updatedCart));

}
   }

   const handelRemove = (data) => {
    const updatedCart = cart.filter((item) => item.id !== data.id);

    setCart(updatedCart);
    localStorage.setItem("gem_garden_cart", JSON.stringify(updatedCart));
  };

const handelCheckout=()=>{
  setTimeout(()=>{
  setCheckoutText(true)
  },1000)

setTimeout(()=>{
navigate("/payment")
},4000)
}
const flexDirection = useBreakpointValue({ base: "column", md: "column", lg:"row",});
const goBack = () => {
  navigate(-1); // Go back to the previous page
};

  return (
    <Box m={["0.1em","0.5em","1em"]}  >
    <Flex  align="center" justify="space-between"  w="55%" >
    
    <Button fontSize={["xs","sm","md"]} onClick={goBack}> <ArrowBackIcon/> Back</Button>
    <Text  fontSize={["xl","3xl","6xl"]} fontWeight="bold">Cart</Text>
    </Flex>
    <Flex align="center" justify="space-between" w="100%" direction="column"  >
    <Box w={{base:"100%",md:"100%",lg:"90%",}}>
    
    <TableContainer my="3em" size={['100%',"100%","70%"]}>
      <Table size={["xs","md","sm"]}  >
        <Thead >
          <Tr>
            <Th fontSize={{base:"1em",sm:"1.2em",md:" 1.5em",lg:"2em",}}>Product</Th>
            <Th fontSize={{base:"1em",sm:"1.2em",md:" 1.5em",lg:"2em",}} >Quantity</Th>
            <Th isNumeric fontSize={{base:"1em",sm:"1.2em",md:" 1.5em",lg:"2em",}}>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
       {cart?.map((val)=>
        { return <Tr key={val.id}>
        <Td > 
        <Flex align={["flex-start","center","center"]} justify="flex-start" gap="1em" direction={flexDirection}>
       <Image boxSize={["80px", "100px", "150px"]} src={val.src1} alt={val.name} display="block"></Image>
       <Stack>
       <Text fontSize={{base:"0.65em",md:"1em",lg:"1.5em",}} align="left">{val.name}</Text>
       <Text fontSize={{base:"0.65em",md:"1em",lg:"1.5em",}}  align="left">Rs. {val.currentprice}</Text>
       </Stack> 
        </Flex>
           </Td>
            <Td fontSize={{base:"0.5em",sm:"0.8em",md:" 1em",lg:"1.5em",}}>
        <Flex align="center" justify="flex-start" w="60%"   gap="10px">
        <Button size={["xs","md","md"]}  onClick={(id)=>handelInc(val)}><AddIcon fontSize={["sm","md","md"]}/></Button>
        <Input value={val.quantity}  fontSize={["0.5em","1em","1.5em"]} size={["xs","md","md"]} w="20%"/>
        <Button size={["xs","md","md"]} onClick={(id)=>handelDec(val)} ><MinusIcon fontSize={["sm","md","md"]} /></Button>
    
    </Flex>
    <Button background="none" my="0.3em" size={["xs","md","md"]}  onClick={()=>handelRemove(val)}>Remove Item</Button>
            </Td>
            <Td isNumeric fontSize={{base:"0.8em",md:"1em",lg:"1.5em",}}>{val.currentprice*val.quantity}</Td>
          </Tr>
          }
          )}
    
        </Tbody>
      </Table>
    </TableContainer>
    </Box>
    <Box  w={{base:"90%",md:"50%",lg:"30%",}} boxShadow='md' rounded='md' bg='white' fontSize="1.3em" px="0.5em" py="0.5em" align="right">
        <Text align="left">Total</Text>
        <Box my="1em"  borderY="2px solid grey">
            <Flex  my="0.5em"align="center" justify="space-around" >
                <Text >Sub-Total</Text>
                <Text>Rs. {totalprice}</Text>
            </Flex>
            <Flex align="center" justify="space-around">
                <Text>Delivery</Text>
                <Text><InfoOutlineIcon color="red"/></Text>
            </Flex>
        </Box>
        <Button backgroundColor="black" color="white" p="2em"  onClick={handelCheckout}>Check Out</Button>
    
    </Box>
    </Flex>
    
    </Box>
    )
    }

////////////////////

