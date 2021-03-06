const initialState = {
  products:null
   };
   
   export const productReducer = (state = initialState, action) => {
     switch (action.type) {
      case "FETCH_ALL_PRODUCTS":
        return {
            ...state,
            products: [...action.payload.data]
        };
       default:
         return state;
     }
   }