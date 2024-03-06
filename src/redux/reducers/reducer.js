const initialState = {
    carts : []
}

export const cartReducer = (state=initialState, action) =>{
    console.log("action in reducer",action)
     switch (action.type){
         case "ADD_TO_CART":

         let existitem = state.carts.findIndex((x) => x.id == action.payload.id);
         if (existitem >= 0) {
           state.carts[existitem].qnty += 1;
         } else { 

           let newitem = { ...action.payload, qnty: 1 }
            return {
                  ...state,
                   carts:[...state.carts, newitem],
            };
        }
       
         case "DELETE_FROME_CART":
     let fItem = state.carts.filter(el => el.id !== action.payload)
         return{
            ...state,
             carts:fItem
         }
         
       
         case "REMOVE_SINGLE_CART":      
    let item_dec = state.carts.findIndex((x) => x.id === action.payload.id);

    if(state.carts[item_dec].qnty >= 1){
        state.carts[item_dec].qnty -= 1;
        return{
            ...state,
            carts:[...state.carts]
        }
    }  
   
         
       

            default : 
            return state
     }
}




// const initialState = {
//     carts:[]
// }
// export const cartReducer = (state =  initialState, action)=>{
//    switch (action.type){
//           case "ADD_TO_CART":
//            return{
     
//   carts: [...state.carts, action.payload]
// }
//   }
// }