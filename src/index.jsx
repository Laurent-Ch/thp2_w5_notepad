import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import MarkdownInput from 'components/MarkdownInput/MarkdownInput';
import NoteDisplay from 'components/NoteDisplay/NoteDisplay';
import SaveNote from 'components/SaveNote/SaveNote';
import LocalStorageEntriesList from 'components/LocalStorageEntriesList/LocalStorageEntriesList';
import NewNote from 'components/NewNote/NewNote';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [userInputTitle, setUserInputTitle] = useState('');
  const [localStorageUpdated, setLocalStorageUpdated] = useState('');
  const [noteRemoved, setNoteRemoved] = useState('');


  useEffect(() => {
    console.log(userInput, userInputTitle)
  }, [userInput, userInputTitle]);

  const updateUserInputBody = (callbackValue) => {
    setUserInput(callbackValue);
  }
  const updateUserInputTitle = (callbackValue) => {
    setUserInputTitle(callbackValue);
  }

  // When a state has its value updated, the whole return section is re-rendered
  const handleLocalStorageUpdated = (callbackValue) => {
    setLocalStorageUpdated(localStorageUpdated + callbackValue);
  }

  const handleNoteRemoved= (callbackValue) => {
    setNoteRemoved(noteRemoved + callbackValue);
  }

  const BODY_ROWS = 12;
  const TITLE_ROWS = 3;

  return (
  <div className='page-container'>
    <div className='navbar-left'>
      <NewNote btnText='New Note' updateUserInputBody={updateUserInputBody} updateUserInputTitle={updateUserInputTitle}  />
      <LocalStorageEntriesList handleNoteRemoved={handleNoteRemoved} />
    </div>
    <div className='main-right'>
      <NoteDisplay cssTarget='title-display' userInputToDisplay={userInputTitle}/>
      <NoteDisplay cssTarget='body-display' userInputToDisplay={userInput}/>
      <MarkdownInput rows={TITLE_ROWS} placeholder='new note title...' cssTarget='title-field' value={userInputTitle} updateUserInput={updateUserInputTitle} />
      <MarkdownInput rows={BODY_ROWS} placeholder='new note body...' cssTarget='text-field' value={userInput} updateUserInput={updateUserInputBody} />
      <SaveNote noteTitle={userInputTitle} noteBody={userInput} handleLocalStorageUpdated = {handleLocalStorageUpdated}  />
    </div>
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));