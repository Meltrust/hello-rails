import { createStore, applyMiddleware } from "redux"

import thunk from 'redux-thunk'

const initialState = {
  greeting: []
};

function rootReducer(state, action) {
  switch (action.type) {
    case "GET_GREETINGS_SUCCESS":
      return { greeting: action.json.greeting };
  }
  return state;
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
     initialState,
     applyMiddleware(thunk)
  );
  return store;
}
