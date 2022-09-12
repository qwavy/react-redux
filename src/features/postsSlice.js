import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        title: "Post 1",
        content: 'Content 1'
    },
    { id: 2,
        title:'Post 2',
        content: 'Content 2' 
    },
    {
        id:3,
        title:'Post 3',
        content: 'Content 3'
    }
]


const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        addPost: (state,action) => {
            state.push(action.payload)
        }
    }
    
})

// export const initialState = postsSlice.actions
export const {addPost} = postsSlice.actions

export default postsSlice.reducer