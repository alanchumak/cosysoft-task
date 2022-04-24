import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  jokes: [],
  status: 'idle',
  error: null
};


// export const fetchJokes = createAsyncThunk('jokes/fetchJokes',
//   async () => {
//     const url = 'https://karljoke.herokuapp.com/jokes/ten'
//     const response = await fetch(url)
//     const jokes = await response.json()
//     return jokes;
//   }
// );


export const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    jokesFetchedFulfilled(state, action) {
      state.status = 'succeeded';
      const { jokes } = action.payload
      state.jokes = jokes 
    },
    jokesFetchedFailed(state, action) {
      state.status = 'failed'
      const { errMsg } = action.payload
      state.error = errMsg
    },
    fetchJokes(){}
  },

    // extraReducers(builder) {
    //   builder
    //     .addCase(fetchJokes.pending, (state) => {
    //       state.status = 'loading';
    //     })
    //     .addCase(fetchJokes.fulfilled, (state, action) => {
    //       state.status = 'succeeded';
    //       console.log('succeeded', action.payload)
    //       state.jokes = action.payload;
    //     })
    //     .addCase(fetchJokes.rejected, (state, action) => {
    //       state.status = 'failed'
    //       state.error = action.error.message
    //     })
    // }
  
});

export const { fetchJokes, jokesFetchedFulfilled, jokesFetchedFailed} = jokesSlice.actions

export const selectTenJokes = state => state.jokes.jokes

export default jokesSlice.reducer;
