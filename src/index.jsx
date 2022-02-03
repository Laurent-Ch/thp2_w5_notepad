import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import MarkdownInput from 'components/MarkdownInput/MarkdownInput';
import NoteDisplay from 'components/NoteDisplay/NoteDisplay';
import SaveNote from 'components/SaveNote/SaveNote';
import MainButton from 'components/MainButton/MainButton';
import LocalStorageEntriesList from 'components/LocalStorageEntriesList/LocalStorageEntriesList';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [userInputTitle, setUserInputTitle] = useState('');
  const [localStorageUpdated, setLocalStorageUpdated] = useState('');

  useEffect(() => {
    console.log(userInput, userInputTitle)
  }, [userInput, userInputTitle]);

  const updateUserInputBody = (callbackValue) => {
    setUserInput(callbackValue);
  }
  const updateUserInputTitle = (callbackValue) => {
    setUserInputTitle(callbackValue);
  }

  const handleLocalStorageUpdated = (callbackValue) => {
    setLocalStorageUpdated(localStorageUpdated + callbackValue);
  }

  const BODY_ROWS = 12;
  const TITLE_ROWS = 3;

  return (
  <div className='page-container'>
    <div className='navbar-left'>
      <MainButton btnText='New Note' />
      <LocalStorageEntriesList />
    </div>
    <div className='main-right'>
      <NoteDisplay cssTarget='title-display' userInputToDisplay={userInputTitle}/>
      <NoteDisplay cssTarget='body-display' userInputToDisplay={userInput}/>
      <MarkdownInput rows={TITLE_ROWS} placeholder='new note title...' cssTarget='title-field' updateUserInput={updateUserInputTitle} />
      <MarkdownInput rows={BODY_ROWS} placeholder='new note body...' cssTarget='text-field' updateUserInput={updateUserInputBody} />
      <SaveNote noteTitle={userInputTitle} handleLocalStorageUpdated = {handleLocalStorageUpdated} noteBody={userInput} />
    </div>
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));