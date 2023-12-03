import {DEC_ITEM_QTY,INC_ITEM_QTY,CART_REQUEST,CART_FAILURE,ADDTOCART,UPDATECART,DELETECART} from "./actionType"
const initialState = {
    products: [],
    isLoading: false,
    isError: false,

  };
  export const reducer =(state=initialState, action)=>{
  switch(action.type){
    case CART_REQUEST:{
        return{
        ...state,
        isLoading: true,

        }
    }
    case CART_FAILURE:{
        return{
            products: [],
            isLoading: false,
            isError: action.payload,   
        }
    }
    case ADDTOCART:{
        return{
            products: [...action.payload],
            isLoading: false,
            isError:false,   
        }
    }
    case UPDATECART:{
        return{
            products: [action.payload],
            isLoading: false,
            isError:false,
        }
    }
    case DELETECART:{
        return{
            products: [...action.payload],
            isLoading: false,
            isError:false,
        }
    }
    
    
    default: return state;
  }
  }
