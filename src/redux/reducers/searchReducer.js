import { SET_SEARCH_QUERY } from "../search/searchActions";

// Initial state for the search feature
const initialState = {
  query: "", // Default search query is an empty string
};

// Search reducer function
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state, // Preserve the existing state
        query: action.payload, // Update the search query with the new value
      };
    default:
      return state; // Return the current state if no relevant action is matched
  }
};

export default searchReducer;
