// import {createStore} from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name : 'counter',
    initialState :  {counter :0 , showCounter : true},
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        },
    }
});
const authSlice = createSlice({
    name : 'auth',
    initialState :  {isAuth : false},
    reducers:{
       login(state){
        state.isAuth = true;
       },
       logout(state){
        state.isAuth = false;
       }
    }
});

const store = configureStore({
    reducer : {counter : counterSlice.reducer,auth : authSlice.reducer}
}); 

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
// const counterReducer = (state = {counter :0 , showCounter : true},action)=>{
//     if(action.type === 'increment'){
//         return {
//             counter : state.counter +1 ,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === 'increase'){
//         return {
//             counter : state.counter + action.data,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter : state.counter -1 ,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === 'toggle'){
//         return{
//             showCounter : !state.showCounter,
//             counter : state.counter
//         }
//     }
//     return state;
// }


