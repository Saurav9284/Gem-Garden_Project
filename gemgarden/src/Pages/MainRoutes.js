import { Box } from '@chakra-ui/react'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { HomePage } from './HomePage.js'
import { Admin } from './Admin.js'
import { Login } from './Login.js'
import { SignUp } from './SignUp.js'
import { Product } from './Product.js'
import { Contact } from './Contact.js'
import { About } from './About.js'
import { SingleProductPage } from './SingleProductPage.js'
import { Cart } from './Cart.js'
import  {Payment} from './Payment.js'
import { WishList } from './WishList.js'
import { AdminLogin } from './AdminLogin.js'
import { PrivateRoute } from '../Components/PrivateRoute.js'
import {PaymentSuccess} from './PaymentSuccess.js'



export const MainRoutes = () => {
  return (
   <Box>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/adminlogin' element={<AdminLogin/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/product' element={
       <PrivateRoute>
          <Product/>
       </PrivateRoute>
  
    } />
      <Route path='/product/:id' element={
        // <PrivateRoute>
          <SingleProductPage/>
      //  {/* </PrivateRoute> */}

      } />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/wishlist' element={<WishList/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/paymentsucess' element={<PaymentSuccess/>}></Route>
    </Routes>
   </Box>
  )
}
