// const initialState = {
//     myVariable : 0,
//     test: false,
// }

// const myReducers =(state = initialState, action)=>{
//     switch(action.type){
//         case "INCREMENT":
//             return {...state, myVariable: action.payload};
//         case "DECREMENT":
//             return{...state, myVariable:state.myVariable - 1};
//         case "TEST":
//             return{...state, test : action.payload}
//         default:
//             return state;
//     }
// };

// export default myReducers;

// reducers.js
import { SET_DUMMY_CREDENTIALS } from './actions';

const initialState = {
  dummyEmail: 'admin@gmail.com',
  dummyPassword: '12345'
};

const myReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_DUMMY_CREDENTIALS:
      return {
        ...state,
        dummyEmail: action.payload.email,
        dummyPassword: action.payload.password
      };
    default:
      return state;
  }
};

export default myReducers;
