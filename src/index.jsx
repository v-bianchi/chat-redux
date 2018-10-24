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
  messages: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  channels: [],
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
