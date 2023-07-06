import { createSlice } from "@reduxjs/toolkit";
import UserSlices from "./UserSlices";
import { clearAllUsers } from "../actions";

const adminSlice = createSlice({
    name:"admin",
    initialState:[],
    reducers:{
        addAdmin(state,action){
            state.push(action.payload)
        },
        removeAdmin(state,action){
            state.splice(action.payload,1)
        }
    },
    // extraReducers(builder){
    //     builder.addCase(UserSlices.actions.clearUsers,(state,action)=>{
    //         return [];
    //     })
    // }


    extraReducers(builder){
        builder.addCase(clearAllUsers,(state,action)=>{
            return [];
        })
    }
});

console.log(adminSlice)
export default adminSlice.reducer;
export const {addAdmin,removeAdmin} = adminSlice.actions;
