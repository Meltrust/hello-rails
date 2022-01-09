import React from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

function getGreetings() {
  return dispatch => {
    dispatch({ type: GET_GREETINGS_REQUEST });
    return fetch(`v1/greetings.json`)
      .then(response => response.json())
      .then(json => dispatch(getGreetingsSuccess(json)))
      .catch(error => console.log(error));
  };
};

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  };
};

function HelloWorld(props) {
  const { greeting } = props;
  const greetingsList = greeting

  return (
    <React.Fragment>
      <div className="getGreetings">
        Greetings: { props.greeting_from_app}

        <button className="getGreetingsBtn" onClick={() => props.getGreetings()}>getGreetings</button>
        <br />
        <br />

        <p>{ greetingsList }</p>
      </div>
    </React.Fragment>
  );
}

const structuredSelector = createStructuredSelector({
  greeting: state => state.greeting,
});

const mapDispatchToProps = { getGreetings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
