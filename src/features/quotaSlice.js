import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchQuota = createAsyncThunk('quota/fetchQuota', async () => {
    const response = await fetch('https://type.fit/api/quotes')
    const data = await response.json
    console.log(response)
})

const initialState = {
    isLoading:false,
    quota:[
    ]
}

const quotaSlice = createSlice({
    name:'quota',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchQuota.pending, (state,action) => {
            state.isLoading = true
        })
        // .addCase(fetchQuota.fulfilled, (state,action) => {
        //     state.isLoading = false,
        //     state.quota = action.payload
        // })
        .addCase(fetchQuota.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
})

export default quotaSlice.reducer
