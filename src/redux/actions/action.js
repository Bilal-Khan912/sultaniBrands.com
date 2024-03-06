//   action in reducer
// export const addCart = (item) =>{
//     return{
//     type : "ADD_TO_CART",
//      payload : item
// }

// }

export const addCart = (item) =>{
  console.log("item in action", item)
      return {
        type : "ADD_TO_CART",
        payload : item
      }
}

// //////////////////////////////////////////////////del

export const delCart = (id) =>{
      return {
      type : "DELETE_FROME_CART",
        payload : id
      }
}

export const removeSingle = (item) => {
  return {
    type: "REMOVE_SINGLE_CART",
    payload: item,
  };
};
