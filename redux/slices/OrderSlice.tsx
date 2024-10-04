// store/slices/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

//our initial counter state is o
const initialState = {
  order:{}
};
 
const AddOrderSlice = createSlice({
//name of the slice
  name: "AddOrderSlice",
  //the initial state
  initialState,
  //the reducer functions
  reducers: {
  
    updateOrderData:(state,action)=>{
        state.order = {...action.payload}
    },
    deleteOrderData:(state)=>{
      state.order = {}
    }
  },
});

//export the reducers from counterSlice.actions
export const { updateOrderData, deleteOrderData } = AddOrderSlice.actions;
//export the counterSlice.reducer
export default AddOrderSlice.reducer;