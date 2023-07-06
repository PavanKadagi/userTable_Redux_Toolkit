import {createSlice} from '@reduxjs/toolkit';
import { clearAllUsers } from '../actions';

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            //1
            // let filterUser = state.filter((user,index)=>user !== action.payload)
            // console.log(filterUser)
            // return{
            //     ...state,
            //     initialState:filterUser
            // }
            // return state=filterUser;
            
            state.splice(action.payload,1)
        },
        // this is for only user createSlce
        // clearUsers(state,action){
        //     return []
        //     //2
        //     // return state=[]
        //     //3
        //     // state.length=0;
        // },
    },  
    // extraReducers(builder){
    //     builder.addCase(userSlice.actions.clearUsers,(state,action)=>{
    //         return [];
    //     })
    // }

    // this is for user and admin createSlice
    extraReducers(builder){
        builder.addCase(clearAllUsers,(state,action)=>{
            return [];
        })
    }
})


// if action is supposed to be handled by one reducer, use reducers.

// if action is supposed to be handled by multiple reducers, use extraReducers.

// console.log(userSlice)

export default userSlice.reducer;
// export const {addUser,removeUser,clearUsers} = userSlice.actions;
export const {addUser,removeUser} = userSlice.actions;

