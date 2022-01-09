import { createStore, applyMiddleware } from "redux"

import thunk from 'redux-thunk'

const initialState = {
  greetings: [
    {
      name: "test",
      guid: "123"
    }
  ]
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "GET_GREETINGS_SUCCESS":
      return { greetings: action.json.greetings };
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
