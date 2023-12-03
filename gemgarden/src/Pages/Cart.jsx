import { Box ,Text,Flex, Button,Image,Stack,Input, Table,Thead,Tbody,Tr,Th,Td,TableContainer,useBreakpointValue} from "@chakra-ui/react"
import {ArrowBackIcon,InfoOutlineIcon,AddIcon,MinusIcon} from '@chakra-ui/icons'
import { useEffect, useState } from "react"
import {useDispatch} from "react-redux";
import {decreaseQty,increaseQty} from "../Redux/cart_page/action"
import {useNavigate} from "react-router-dom"
import {getCartItems} from "../Redux/cart_page/action"

export default function Cart(){
//     const navigate = useNavigate();


// const goBack = () => {
//     navigate(-1); // Go back to the previous page
// };
    const[qty,setQty] =useState(1);
    const [totalprice,setTotalprice]=useState(0)
     const dispatch=useDispatch();
    const flexDirection = useBreakpointValue({ base: "column", md: "column", lg:"row",});
    function decQty(){
     dispatch(decreaseQty)
    }
    function incQty(){
        dispatch(increaseQty)

    }
    const [prod,setProduc]=useState([]);
    async function getProduct(){
    const res= await fetch( `https://gem-garden-tfkw.onrender.com/collections?_page=1_limit=10`);
    const data= await res.json();
    console.log(data);
    setProduc(data);


}
    useEffect(()=>{
        // dispatch(getCartItems)
        getProduct();
       
 
    },[])
    useEffect(()=>{
        let totalPrice=0;
        prod.forEach((item) => {
            totalPrice += qty * item.currentprice;
          });
          setTotalprice(totalPrice);
    },[prod])
return(
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
   {prod && prod.map((val)=>
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
    <Button size={["xs","md","md"]}  onClick={(id)=>incQty(id)}><AddIcon fontSize={["sm","md","md"]}/></Button>
    <Input value={qty}  fontSize={["0.5em","1em","1.5em"]} size={["xs","md","md"]} w="10%"/>
    <Button size={["xs","md","md"]} onClick={(id)=>decQty(id)} ><MinusIcon fontSize={["sm","md","md"]} /></Button>

</Flex>
<Button background="none" my="0.3em" size={["xs","md","md"]}>Remove Item</Button>
        </Td>
        <Td isNumeric fontSize={{base:"0.8em",md:"1em",lg:"1.5em",}}>{val.currentprice*qty}</Td>
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
    <Button backgroundColor="black" color="white" p="2em">Check Out</Button>

</Box>
</Flex>

</Box>
)
}