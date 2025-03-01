import { configureStore } from '@reduxjs/toolkit';
import componentsReducer from './componentsSlice';
export default configureStore({
  reducer: {
    components: componentsReducer
  }
})
