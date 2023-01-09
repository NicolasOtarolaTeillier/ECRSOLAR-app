import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  clean_modules: [],
};
export const blueprintSlice = createSlice({
  name: 'blueprint',
  initialState,
  reducers: {
    addModule: (state, action) => {
        state.clean_modules.push({
            name: action.payload.name,
            color: action.payload.color
        })
    },
  },

});

export const { addModule } = blueprintSlice.actions;
export const selectModules = (state) => state.blueprint.clean_modules;
export default blueprintSlice.reducer;
