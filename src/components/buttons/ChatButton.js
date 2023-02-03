import React from 'react'
import { ChatBack, ChatFront } from '../../icons'

const ChatButton = () => {
  return (
    <div className="fixed bottom-12 right-4 rounded-lg bg-secondary-blue h-12 p-2">
      <span className="bg-white">
        <ChatBack />
      </span>
      <span className="bg-white relative bottom-5">
        <ChatFront />
      </span>
    </div>
  );
}

export default ChatButton