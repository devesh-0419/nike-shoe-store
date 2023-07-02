import {createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
const initialState = {
    cartState:false,
    cartItems: localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")):[],
    cartTotalAmount:0,
    cartTotalQuantity:0,
};

const CartSlice = createSlice({
    initialState,
    name:"cart",
    reducers:{
        setOpenCart: (state, action)=>{
            state.cartState = action.payload.cartState;
        },
        setCloseCart: (state, action)=>{
            state.cartState = action.payload.cartState;
        },
        setAddItemToCart: (state, action)=>{
             console.log('state', state)
            
            const itemIndex = state.cartItems.findIndex((item)=>item.id===action.payload.id);
            if(itemIndex>=0){
                if(state.cartItems[itemIndex].cartQuantity<20)
                {state.cartItems[itemIndex].cartQuantity+=1;
                toast.success(`Item quantity increased`) } 
                else{
                    toast.success(`You have riched to the maximum limit`) ;
                }
            }else{
                const temp = {...action.payload,cartQuantity: 1};
    
                state.cartItems.push(temp);
              toast.success(`${action.payload.title} added to the cart`)  
            }
            localStorage.setItem('cart',JSON.stringify(state.cartItems))
        },
        setRemoveItemFromCart:(state, action)=>{
            const removeItem = state.cartItems.filter(item => item.id!==action.payload.id)

            state.cartItems = removeItem;
            localStorage.setItem('cart',JSON.stringify(state.cartItems));
            toast.success(`${action.payload.title} is now removed`)  
        },
        setIncreaseItemQTY:(state, action)=>{
            const itemIndex = state.cartItems.findIndex((item)=>item.id===action.payload.id);
            if(state.cartItems[itemIndex].cartQuantity<10){
                state.cartItems[itemIndex].cartQuantity+=1;
                // toast.success(`Item quantity increased`)  
                localStorage.setItem('cart',JSON.stringify(state.cartItems))
            }else{
                toast.success(`You have riched to the maximum limit`) ;
            }
        },
        setDecreaseItemQTY:(state, action)=>{
            const itemIndex = state.cartItems.findIndex((item)=>item.id===action.payload.id);
            if(state.cartItems[itemIndex].cartQuantity>1){
                state.cartItems[itemIndex].cartQuantity-=1;
                // toast.success(`Item quantity decreased`)  
                localStorage.setItem('cart',JSON.stringify(state.cartItems))
            }else{
                toast.success(`Remove instead (trash can)`) ;
            }
        },
        setClearItemQTY:(state, action)=>{
            state.cartItems = [];
            localStorage.setItem('cart',JSON.stringify(state.cartItems))
        toast.success(`Cart Cleared Successfully`); 
        },
        setGetTotal:(state, action)=>{
            let {totalAmount, totalQuantity} = state.cartItems.reduce((cartTotal,cartItem)=>{
                const {price, cartQuantity} = cartItem;
                const totalPrice = price*cartQuantity;
                cartTotal.totalAmount+=totalPrice;
                cartTotal.totalQuantity+=cartQuantity;

                return cartTotal;
            },{
                totalAmount:0, 
                totalQuantity:0
            });

            state.cartTotalAmount = totalAmount;
            state.cartTotalQuantity = totalQuantity;
        },
         
    },
});

export const {setOpenCart, setCloseCart, setAddItemToCart,setRemoveItemFromCart, setIncreaseItemQTY, setDecreaseItemQTY, setClearItemQTY, setGetTotal} = CartSlice.actions;

export const selectCartState = (state)=> state.cart.cartState;
export const selectCartItems = (state)=> state.cart.cartItems;
export const selectTotalAmount = (state)=> state.cart.cartTotalAmount;
export const selectTotalQuantity = (state)=> state.cart.cartTotalQuantity;
export default CartSlice.reducer;