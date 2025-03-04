import { createSlice } from "@reduxjs/toolkit";
export const componentsSlice = createSlice({
  name: "components",
  initialState: {
    components: [
      {
        id: 1,
        name: "Button",
        props: {
          type: "primary",
          text: "Button",
        },
      }
    ]
  },
  reducers: {
    updateComponents: (state, action) => {
      return { components: [...state.components, action.payload] }
    },
  }
});
export const { updateComponents } = componentsSlice.actions;
export default componentsSlice.reducer;