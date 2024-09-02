import React, { useState } from 'react';
import './App.css';
import EmojiPicker from 'emoji-picker-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [choosenEmoji, setChoosenEmoji] = useState('');

  const copyEmojiFunction = (text) => {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
  };

  const emojiPickerFunction = (emojiObject) => {
      const emoji = emojiObject.emoji;
      setChoosenEmoji(emoji);
      copyEmojiFunction(emoji);
      toast.success('Copied to Clipboard!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
      });
  };

  return (
      <div className="emoji-app">
          <h1>Emoji Application</h1>
          {choosenEmoji && (
              <div className="selected-emoji">
                  <p>Selected Emoji:</p>
                  <span>{choosenEmoji}</span>
              </div>
          )}
          <div className="emoji-picker">
              <EmojiPicker onEmojiClick={emojiPickerFunction} />
          </div>
          <ToastContainer />
      </div>
  );
};

export default App;
