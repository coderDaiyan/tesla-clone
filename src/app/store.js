import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
    reducer: {
        car: carReducer,
    },
});
