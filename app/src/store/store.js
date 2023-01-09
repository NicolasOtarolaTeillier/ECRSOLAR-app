import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import blueprintReducer from '../features/blueprint/blueprintSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blueprint: blueprintReducer,

    
  },
});
