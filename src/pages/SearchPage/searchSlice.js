import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'search',
  initialState: {
    data: {},
    isLoading: false,
    error: '',
  },
  reducers: {
    fetchSearchStart: (state) => {
      state.isLoading = true;
    },
    fetchSearchSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchSearchError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearFetchedData: (state) => {
      state.data = {};
    }
  },
});

export const { fetchSearchStart, fetchSearchSuccess, fetchSearchError, clearFetchedData } = slice.actions;

export const fetchSearchData = (searchStr, url, type) => (dispatch) => {
  dispatch(fetchSearchStart());
  fetch(`${url}${searchStr}`)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json()
    })
    .then((res) => {
      dispatch(fetchSearchSuccess(res))
    })
    .catch(error => dispatch(fetchSearchError(error)));
};

export const clearData = () => (dispatch) => {
  dispatch(clearFetchedData())
}

export const searchState = state => state.searchData;

export default slice.reducer;