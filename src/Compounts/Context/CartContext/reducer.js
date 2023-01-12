// reducer related to cart state;
// reducer related to cart state;
import React from 'react'

function reducer(state, action) {
    switch (action.type){

        case "ADD_TO_CART":{
    
            return [ ...state, action.payload];
    
        };

        case "REMOVE_TO_CART":{
            // const cartAfterItemRemoval = state.filter(
            //     (item) => item.id !== action.payload
            // );

            
            const newstate = state.splice(action.payload,1);
            // debugger
            return state ;
    
        }

        case "CHECKOUT": {
            return [];
        }
        default: {
            return state;
        }
    }
}

export default reducer