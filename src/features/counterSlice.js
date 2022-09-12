import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value:0
    },
    reducers: {
        increment: (state,action ) => {
            state.value++
        },
        addBy:(state,action) => {
            state.value = state.value + action.payload
        }
    }
})

// console.log(counterSlice)



export const {increment,addBy} = counterSlice.actions

export default counterSlice.reducer