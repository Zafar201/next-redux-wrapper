import axios from "axios";

export const fetchAllUser = () => async (dispatch) => {
  try {
    const users = await axios.get("https://fakestoreapi.com/products");
    console.log(users,'yess')
    dispatch({
      type: "FETCH_ALL_USER",
      payload: users,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const addUser = ({name}) => async (dispatch) => {
//   function guidGenerator() {
//     var S4 = function() {
//        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
//     };
//     return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
// }
//     dispatch({
//       type: "ADD_USER",
//       payload:     {
//         id: guidGenerator(),
//         name: name,
//         username: 'Moriah.Stanton',
//         email: 'Rey.Padberg@karina.biz',
//         address: [Object],
//         phone: '024-648-3804',
//         website: 'ambrose.net'
//       }
//     });

// };
