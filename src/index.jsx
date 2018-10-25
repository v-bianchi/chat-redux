// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise'

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
const middlewares = applyMiddleware(logger, reduxPromise);

import channelsReducer from "./reducers/channels_reducer";
import currentUsernameReducer from "./reducers/current_username_reducer";
import selectedChannelReducer from "./reducers/selected_channel_reducer";
import messagesReducer from "./reducers/messages_reducer";

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUsername: currentUsernameReducer
});

const initialState = {
  messages: [],
  channels: [
    "general",
    "react",
    "paris"
  ],
  selectedChannel: 'general',
  currentUsername: "kiv" //prompt("Please enter your username")
};

// render an instance of the component in the DOM

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
