import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import MarkdownInput from 'components/MarkdownInput/MarkdownInput';
import NoteDisplay from 'components/NoteDisplay/NoteDisplay';
import SaveNote from 'components/SaveNote/SaveNote';

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

  const BODY_ROWS = 14;
  const TITLE_ROWS = 3;

  return (
  <div className='page-container'>
    <div className='navbar-left'>Test1</div>
    <div className='main-right'>
      <NoteDisplay cssTarget='title-display' userInputToDisplay={userInputTitle}/>
      <NoteDisplay cssTarget='body-display' userInputToDisplay={userInput}/>
      <MarkdownInput rows={TITLE_ROWS} placeholder='new note title...' cssTarget='title-field' updateUserInput={updateUserInputTitle} />
      <MarkdownInput rows={BODY_ROWS} placeholder='new note body...' cssTarget='text-field' updateUserInput={updateUserInputBody} />
      <SaveNote noteTitle={userInputTitle} noteBody={userInput} />
    </div>
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));