import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchReducer from '../pages/SearchPage/searchSlice';
import authorsReducer from '../components/HNList/hnSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    searchData: searchReducer,
    authors: authorsReducer,
  },
});
