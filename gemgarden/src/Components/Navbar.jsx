import { Link } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Flex,
  VStack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';

import { HiMenu } from 'react-icons/hi';
import { BiShoppingBag, BiUser, BiHeadphone, BiSearch } from 'react-icons/bi';
import logo from '../Assets/GemGardenLogo2.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/Authentication/action';

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const isLoggedIn = useSelector((state)=>state.isAuth);
  console.log(isLoggedIn);

  const dispatch = useDispatch();

  const handleLogo = () => {
    navigate('/');
    onClose();
  };

  const handleLogin = () => {
    navigate('/login');
    onClose();
  };

  const handleLogout = () => {
    dispatch(logout);
    navigate('/');
    onClose();
  };

  const handleProduct = () => {
    navigate('/product');
    onClose();
  };

  const handleCart = () => {
    navigate('/cart');
    onClose();
  };

  const handleSearch = async () => {
    console.log('Searching for:', searchTerm);
  
    try {
      if (searchResults && searchResults.length > 0) {
        const productId = searchResults[0].id;
        navigate(`/product/${productId}`);
      } else {
        const response = await fetch(`https://gem-garden-tfkw.onrender.com/collections?name=${searchTerm}`);
        const data = await response.json();
        console.log(data);
  
        if (data.results && data.results.length > 0) {
          setSearchResults(data.results);
          const productId = data.results[0].id;
          navigate(`/product/${productId}`);
        } else {
          console.log('No search results found.');
          // alert('No search results found.');
        }
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };
  
  const toggleMobileMenu = () => {
    onOpen();
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        // Assuming your API endpoint for search is '/api/search'
        const response = await fetch(`https://gem-garden-tfkw.onrender.com/collections?name=${searchTerm}`);
        const data = await response.json();
        console.log(data)
        setSearchResults(data.results); // Update state with search results
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <Box
      as="nav"
      p={2}
      backgroundColor="#262425"
      color="white"
      display="flex"
      justifyContent="space-between"
      margin="auto"
      alignItems="center"
      fontWeight="bold"
      position="sticky"
      width="100%"
      top="0"
      zIndex="1000"
      boxShadow="0 2px 4px rgba(0,0,0,0.1)"
    >
      <Box>
        <img src={logo} width="100px" alt="Logo" onClick={handleLogo} style={{ cursor: 'pointer' }} />
      </Box>

      {/* Desktop Menu */}
      <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
        <Link key="/jewelry" to="/jewelry" onClick={handleProduct} mx={4} _hover={{ color: '#E5A639' }}>
          Jewelery
        </Link>
        <Link key="/rings" to="/rings" onClick={handleProduct} mx={4} _hover={{ color: '#E5A639' }}>
          Rings
        </Link>
        <Link key="/gifts" to="/gifts" onClick={handleProduct} mx={4} _hover={{ color: '#E5A639' }}>
          Gifts
        </Link>
        <InputGroup ml={4}>
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={handleSearch}
              _hover={{ background: '#E5A639', color: 'black' }}
              background="#262425"
            >
              <Icon as={BiSearch} boxSize={6} color="white" />
            </Button>
          </InputRightElement>
        </InputGroup>
        <Link
          key="/login"
          to="/login"
          onClick={isLoggedIn ? handleLogout : handleLogin}
          mx={4}
          _hover={{ color: '#E5A639' }}
        >
          {isLoggedIn ? (
            <Button h="1.75rem" size="sm" _hover={{ background: '#E5A639', color: 'black' }}>
              Logout
            </Button>
          ) : (
            <Icon as={BiUser} boxSize={6} />
          )}
        </Link>
        <Link key="#" to="#" mx={4} _hover={{ color: '#E5A639' }}>
          <Icon as={BiHeadphone} boxSize={6} />
        </Link>
        <Link key="/cart" to="/cart" onClick={handleCart} mx={4} _hover={{ color: '#E5A639' }}>
          <Icon as={BiShoppingBag} boxSize={6} />
        </Link>
      </Box>

      {/* Mobile Menu Toggle */}
      <Flex display={{ base: 'flex', md: 'none' }} alignItems="center">
        <InputGroup ml={4} marginRight="20px">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={handleSearch}
              _hover={{ background: '#E5A639', color: 'black' }}
            >
              Search
            </Button>
          </InputRightElement>
        </InputGroup>

        <IconButton
          icon={<HiMenu />}
          fontSize="30px"
          color="white"
          aria-label="Toggle mobile menu"
          onClick={toggleMobileMenu}
          bgColor="transparent"
          _hover={{ bgColor: 'transparent' }}
        />
        {/* Mobile Menu */}
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4}>
                  <Link key="/jewelry" to="/jewelry" onClick={handleProduct} _hover={{ color: '#E5A639' }}>
                    Jewelry
                  </Link>
                  <Link key="/gifts" to="/gifts" onClick={handleProduct} _hover={{ color: '#E5A639' }}>
                    Gifts
                  </Link>
                  <Link key="/rings" to="/rings" onClick={handleProduct} _hover={{ color: '#E5A639' }}>
                    Rings
                  </Link>
                  <Link key="/login" to="/login" onClick={isLoggedIn ? handleLogout : handleLogin} mx={4} _hover={{ color: '#E5A639' }}>
                    {isLoggedIn ? 'Logout' : 'Login'}
                  </Link>
                  <Link key="#" to="#" _hover={{ color: '#E5A639' }}>
                    Contact
                  </Link>
                  <Link key="/cart" to="/cart" onClick={handleCart} _hover={{ color: '#E5A639' }}>
                    Cart
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;