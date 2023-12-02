import { Box ,Text,Flex, Button} from "@chakra-ui/react"
import {ArrowBackIcon,InfoOutlineIcon} from '@chakra-ui/icons'
export default function Cart(){
return(
<Box m={6}  >
<Flex  align="center" justify="space-between"  w="55%">

<Button> <ArrowBackIcon/> Back</Button>
<Text  fontSize="6xl" fontWeight="bold">Cart</Text>
</Flex>
<Flex align="center" justify="space-around" w="100%">
<Flex align="center" justify="space-around" w="60%" borderBottom="1px solid grey" fontSize="1.5em" >
 <Text fontSize="1.2em" w="60%" align="left">Product</Text>
 <Text fontSize="1.2em">Quantity</Text>
 <Text fontSize="1.2em">Total</Text>
</Flex>
<Box w="30%" boxShadow='md' p='6' rounded='md' bg='white' fontSize="1.3em" px="0.5em" py="0.5em">
    <Text align="left">Total</Text>
    <Box my="1em"  borderY="2px solid grey">
        <Flex  my="0.5em"align="center" justify="space-around" >
            <Text >Sub-Total</Text>
            <Text>var</Text>
        </Flex>
        <Flex align="center" justify="space-around">
            <Text>Delivery</Text>
            <Text><InfoOutlineIcon/></Text>
        </Flex>
    </Box>
    <Button>Check Out</Button>

</Box>
</Flex>

</Box>
)
}