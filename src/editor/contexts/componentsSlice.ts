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
      },
      {
        id: 2,
        name: "Space",
        props: {
          size: "large",
        },
        children: [
          {
            id: 3,
            name: "Button",
            props: {
              type: "primary",
              text: "Button",
            }
          },
          {
            id: 4,
            name: "Button",
            props: {
              type: "primary",
              text: "Button",
            },
          },
        ],
      },
    ]
  },
  reducers: {
    updateComponents: (state, action) => { },
  }
});
export const { updateComponents } = componentsSlice.actions;
export default componentsSlice.reducer;