import React from 'react';

const MessageList = ({ data }) => (
  <ul>
    {data.map((message, index) => (
      <li key={index}>{message}</li>
    ))}
  </ul>
);

export default MessageList;
