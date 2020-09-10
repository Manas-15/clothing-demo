import CartActionTypes from '../../redux/cart/cart.types';
import {addItemToCart} from './cart.utils';
import {removeItemFromCart} from './cart.utils';

const iState={
  hidden:true,
  cartItems:[]
}

const cartReducer =(state=iState,action) =>{
  switch(action.type){
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return{
        ...state,
        hidden:!state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return{
        ...state,
        cartItems:addItemToCart(state.cartItems,action.payload)
      };
      case CartActionTypes.REMOVE_ITEM:
        return{
          ...state,
          cartItems:removeItemFromCart(state.cartItems,action.payload)
        };
    case CartActionTypes.DELETE_ITEM_FROM_CART:
      return{
        ...state,
        cartItems:state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
      }
    case CartActionTypes.CLEAR_CART:
      return{
        ...state,
        cartItems:[]
      }
      default:
        return state;
  }
}
export default cartReducer;