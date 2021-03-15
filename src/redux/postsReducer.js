import { CREATE_POST } from "./types";

const initialState = {
  posts: [],
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      console.log(action);
      return { ...state, posts: state.posts.concat([action.payload]) };
    default:
      return state;
  }
};
