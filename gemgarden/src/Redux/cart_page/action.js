import {DEC_ITEM_QTY,INC_ITEM_QTY,CART_REQUEST,CART_FAILURE,ADDTOCART,UPDATECART,DELETECART,LOGIN_SUCCESS,AUTH_REQUEST,AUTH_ERROR,AUTH_SUCCESS,LOGIN_REQUEST,LOGOUT_REQUEST,LOGIN_FAILURE} from "./actionType"
import axios from "axios";
export const decreaseQty=()=>{
return {type:DEC_ITEM_QTY,}
}
export const increaseQty=()=>{
    return  {type:INC_ITEM_QTY,}
}
export const cartRequest=()=>{
    return {type:CART_REQUEST}

}
export const cartResponseFail =(error)=>{
  return { type: CART_FAILURE , payload:error.response.data.msg}
}
export const cartResponseSucess=(response)=>{
    return  { type: ADDTOCART, payload: response.data }
}
export const updateResponse=(data)=>{
    return { type: UPDATECART, payload: data }
}
export const deleteResponse=(data)=>{
    return{ type: DELETECART, payload: data }}

  export const addToCartProduct = (token,payload)=>async (dispatch)=>{
    console.log(token)
    // const headers = {
    //   Authorization: `Bearer ${token}`,
    // };
    dispatch(cartRequest());
    return axios
      .post(
        `https://gem-garden-tfkw.onrender.com/collections/cart/addtocart`,
         payload,{
            headers : {
                Authorization: `Bearer ${token}`,
            }
         }
       
      )
      .then((response) => {
        // const data = response.data;
        console.log(response)
        dispatch(cartResponseSucess());
      })
      .catch((error) => {
        // console.log(error)
        dispatch(cartResponseFail(error));
      });
  };

  export const updateCartProduct = (token, productId, quantity) => async (dispatch) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    dispatch(cartRequest())
    axios
      .put(
        `https://gemgaredenbackenddatamdb.onrender.com/cart/update/${productId}`,
        { quantity },
        { headers }
      )
      .then((response) => {
        const data = response.data;
        dispatch(updateResponse());
      })
      .catch((error) => {
        dispatch(cartResponseFail(error));
      });
  };
  export const deleteCartProduct = (token, productId) =>async (dispatch) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    dispatch(cartRequest())
    axios
      .delete(`https://gemgaredenbackenddatamdb.onrender.com/cart/${productId}`, {
        headers
      })
      .then((response) => {
        const data = response.data;
        dispatch(deleteResponse());
      })
      .catch((error) => {
        dispatch(cartResponseFail(error));
      });
  };

  export const getCartItems = () => async(dispatch) => {
    dispatch(cartRequest())

    axios
      .get(`https://gemgaredenbackenddatamdb.onrender.com/cart`)
      .then((data) => {
        dispatch(cartResponseSucess(data.data));
        console.log(data.data)
      })
      .catch((error) => {
        dispatch(cartResponseFail(error));
      });
  };


  //////////////////////////////
//    export const signup = (formData) => (dispatch) => {
  
//       dispatch({ type: AUTH_REQUEST });
 
//        axios.post('https://gemgaredenbackenddatamdb.onrender.com/users/register',formData).then((res)=>{
//          console.log(res)
//          dispatch({type:AUTH_SUCCESS, payload:res.data})
      
//       }).catch((err) => {
//           if (err.response && err.response.data && err.response.data.msg) {
//             // console.log(err.response.data.msg)
//             dispatch({ type: AUTH_ERROR, payload: err.response.data.msg });
//           } else {
//             dispatch({ type: AUTH_ERROR, payload: 'An error occurred.' });
//           }
//       })
  
//   }

  

//   export const login = (loginData) => (dispatch) => {
//     dispatch({ type: LOGIN_REQUEST });
    
 
//     axios.post('https://gemgaredenbackenddatamdb.onrender.com/users/login',loginData).then((res)=>{
//       console.log(res)
//       // console.log(res)
//       dispatch({type:LOGIN_SUCCESS, payload:res.data})
//    }).catch((err) => {
//       // console.log(err)
//       // console.log(err.response.data)
//        if (err.response.data) {
//          dispatch({ type: LOGIN_FAILURE, payload: err.response.data });
//        } else {
//          dispatch({ type: LOGIN_FAILURE, payload: 'An error occurred.' });
//        }
//    })
//   };
  

//   export const logout = (token) => (dispatch) => {
//       dispatch({type:LOGOUT_REQUEST})
//      return axios.get('https://gemgaredenbackenddatamdb.onrender.com/users/logout',token).then((res)=>{
//         console.log(res)
//       }).catch((err)=>{
//         console.log(err)
//       })
//   }