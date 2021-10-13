const initialState = {
  products:null
   };
   
   export const userReducer = (state = initialState, action) => {
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