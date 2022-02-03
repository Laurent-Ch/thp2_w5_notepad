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
import { v4 as uuid } from 'uuid';

// Textarea size const.
const BODY_ROWS = 12;
const TITLE_ROWS = 3;

const App = () => {
  const [userInputTitle, setUserInputTitle] = useState('');
  const updateUserInputTitle = (callbackValue) => {
    setUserInputTitle(callbackValue);
  }
  
  const [userInput, setUserInput] = useState('');
  const updateUserInputBody = (callbackValue) => {
    setUserInput(callbackValue);
  }

  const fillNotes = () => {
    const entriesToDisplay = [];
    for (let i = 0; i < localStorage.length; i++) {
      entriesToDisplay.push({key: localStorage.key(i), value: localStorage.getItem(localStorage.key(i)), id: uuid()});
    }
    return entriesToDisplay;
  }
  const [notes, setNotes] = useState(fillNotes);
  const handleNotesUpdate = () => {
    setNotes(fillNotes);
  }

  useEffect(() => {
    console.log(userInputTitle, userInput, notes)
  }, [userInputTitle, userInput, notes]);

  return (
  <div className='page-container'>
    <div className='navbar-left'>
      <NewNote btnText='New Note' updateUserInputBody={updateUserInputBody} updateUserInputTitle={updateUserInputTitle}   />
      <LocalStorageEntriesList handleNotesUpdate={handleNotesUpdate} notes={notes} updateUserInputBody={updateUserInputBody} updateUserInputTitle={updateUserInputTitle} />
    </div>
    <div className='main-right'>
      <NoteDisplay cssTarget='title-display' userInputToDisplay={userInputTitle}/>
      <NoteDisplay cssTarget='body-display' userInputToDisplay={userInput}/>
      <MarkdownInput rows={TITLE_ROWS} placeholder='new note title...' cssTarget='title-field' value={userInputTitle} updateUserInput={updateUserInputTitle} />
      <MarkdownInput rows={BODY_ROWS} placeholder='new note body...' cssTarget='text-field' value={userInput} updateUserInput={updateUserInputBody} />
      <SaveNote noteTitle={userInputTitle} noteBody={userInput} handleNotesUpdate={handleNotesUpdate} />
    </div>
  </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));