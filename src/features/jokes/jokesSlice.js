import { createSlice } from '@reduxjs/toolkit';

// const initialState = localStorage.getItem('reduxState') ?
//   JSON.parse(localStorage.getItem('reduxState'))
//   : {
//     jokes: [],
//     readingList: [],
//     status: 'idle',
//     error: null
//   };

const initialState = {
    jokes: [],
    readingList: [],
    status: 'idle',
    error: null
  }

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
    fetchJokes(){},
    jokeSavedToReadingList(state, action) {
      const {id} = action.payload
      const joke = state.jokes.find(item => item.id == id)
      state.readingList.push(joke)
      // state.readingList[id] = state.jokes[id]
    },
    jokeRemovedFromReadingList(state, action) {
      const { id } = action.payload
      const joke = state.readingList.find(item => item.id == id)
      const index = state.readingList.indexOf(joke)
      state.readingList.splice(index, 1)
      // state.readingList.push(joke)
      // delete state.readingList[id]
    }

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

export const { fetchJokes, jokesFetchedFulfilled, jokesFetchedFailed,
  jokeSavedToReadingList, jokeRemovedFromReadingList } = jokesSlice.actions

export const selectTenJokes = state => state.jokes.jokes
export const selectReadingList = state => state.jokes.readingList

export default jokesSlice.reducer;
