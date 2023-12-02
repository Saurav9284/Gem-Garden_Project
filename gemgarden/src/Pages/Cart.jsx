import { Box ,Text,Flex, Button,Image,Stack,Input, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,} from "@chakra-ui/react"
import {ArrowBackIcon,InfoOutlineIcon,AddIcon,MinusIcon} from '@chakra-ui/icons'
export default function Cart(){
return(
<Box m={6}  >
<Flex  align="center" justify="space-between"  w="55%">

<Button> <ArrowBackIcon/> Back</Button>
<Text  fontSize="6xl" fontWeight="bold">Cart</Text>
</Flex>
<Flex align="center" justify="space-around" w="100%">
<Box w="60%">
{/* <Flex align="center" justify="space-around" w="100%" borderBottom="1px solid grey" fontSize="1.5em" >
 <Text fontSize="1.2em" w="60%" align="left">Product</Text>
 <Text fontSize="1.2em">Quantity</Text>
 <Text fontSize="1.2em">Total</Text>
 
</Flex>
<Flex align="center" justify="space-between" w="100%" backgroundColor="red">
   <Flex align="center" justify="center" gap="1em" w="40%" backgroundColor="yellow">
   <Image boxSize='150px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' display="block"></Image>
   <Stack>
   <Text align="left">NAME OF THE PRODUCT</Text>
   <Text  align="left">Rs. 250</Text>
   </Stack> 
    </Flex> 
<Flex align="center" justify="center"  w="50%"  gap="10px" backgroundColor="blue" >
    <Button>+</Button>
    <Input placeholder='small size' size='md' w="10%" />
    <Button>-</Button>

</Flex>
<Text>2</Text>
</Flex> */}
<TableContainer my="2em">
  <Table size='md' >
    <Thead>
      <Tr>
        <Th fontSize="2em">Product</Th>
        <Th fontSize="2em">Quantity</Th>
        <Th isNumeric fontSize="2em">Total</Th>
      </Tr>
    </Thead>
    <Tbody>
   
      <Tr>
        <Td fontSize="1.5em"> 
        <Flex align="center" justify="flex-start" gap="1em">
   <Image boxSize='150px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' display="block"></Image>
   <Stack>
   <Text align="left">NAME OF THE PRODUCT</Text>
   <Text  align="left">Rs. 250</Text>
   </Stack> 
    </Flex>
    </Td>
        <Td fontSize="1.5em"><Flex align="center" justify="flex-start"   gap="10px" >
    <Button><AddIcon/></Button>
    <Input placeholder='small size' size='md' w="10%" fontSize="1em"/>
    <Button><MinusIcon/></Button>

</Flex>
<Button background="none" my="0.3em">Remove Item</Button>
    </Td>
        <Td isNumeric  fontSize="1.5em">Rs 100</Td>
      </Tr>

    </Tbody>
  </Table>
</TableContainer>
</Box>
<Box w="30%" boxShadow='md' p='6' rounded='md' bg='white' fontSize="1.3em" px="0.5em" py="0.5em">
    <Text align="left">Total</Text>
    <Box my="1em"  borderY="2px solid grey">
        <Flex  my="0.5em"align="center" justify="space-around" >
            <Text >Sub-Total</Text>
            <Text>var</Text>
        </Flex>
        <Flex align="center" justify="space-around">
            <Text>Delivery</Text>
            <Text><InfoOutlineIcon color="red"/></Text>
        </Flex>
    </Box>
    <Button>Check Out</Button>

</Box>
</Flex>

</Box>
)
}