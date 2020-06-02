import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'authors',
  initialState: {
    data: {},
    isLoading: false,
    error: '',
  },
  reducers: {
    fetchAuthorStart: (state) => {
      state.isLoading = true;
    },
    fetchAuthorSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchAuthorError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchAuthorStart, fetchAuthorSuccess, fetchAuthorError } = slice.actions;

export const fetchAuthor = (name) => (dispatch) => {
  dispatch(fetchAuthorStart());
  fetch(`https://hn.algolia.com/api/v1/users/${name}`)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json()
    })
    .then((res) => {
      dispatch(fetchAuthorSuccess(res))
    })
    .catch(error => dispatch(fetchAuthorError(error)));
};

export const authorState = state => state.authors;

export default slice.reducer;