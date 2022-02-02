import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import MarkdownInput from 'components/MarkdownInput/MarkdownInput';
import NoteDisplay from 'components/NoteDisplay/NoteDisplay';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [userInputTitle, setUserInputTitle] = useState('');
  useEffect(() => {
    console.log(userInput, userInputTitle)
  }, [userInput, userInputTitle]);

  const updateUserInputBody = (callbackValue) => {
    setUserInput(callbackValue);
  }
  const updateUserInputTitle = (callbackValue) => {
    setUserInputTitle(callbackValue);
  }

  const BODY_ROWS = 16;
  const TITLE_ROWS = 3;

  return (
  <div  iv className='page-container'>
    <div className='navbar-left'>Test1</div>
    <div className='main-right'>
      <NoteDisplay cssTarget='title-display' userInputToDisplay={userInputTitle}/>
      <NoteDisplay cssTarget='body-display' userInputToDisplay={userInput}/>
      <MarkdownInput rows={TITLE_ROWS} placeholder='new note title...' cssTarget='title-field' updateUserInput={updateUserInputTitle} />
      <MarkdownInput rows={BODY_ROWS} placeholder='new note body...' cssTarget='text-field' updateUserInput={updateUserInputBody} />
    </div>
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));