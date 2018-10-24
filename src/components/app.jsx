import React from 'react';
import ChannelList from './channel_list';
import ChatRoom from '../containers/chat_room';

const App = () => {
  return (
    <div className="app container-fluid">
      <ChannelList />
      <ChatRoom />
    </div>
  );
};

export default App;
