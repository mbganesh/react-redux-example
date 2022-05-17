import {createSlice} from '@reduxjs/toolkit'

export const storeSlice = createSlice({
    name:'store',
    initialState:{value:{text:''}},
    reducers:{
        showData: (state , action) => {
            state.value = action.payload
        }
    }
})

export const {showData} = storeSlice.actions
export default storeSlice.reducer