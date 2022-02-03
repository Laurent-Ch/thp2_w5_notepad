import React, { useState } from 'react';
import LocalStorageEntryDisplay from 'components/LocalStorageEntryDisplay/LocalStorageEntryDisplay';
import { v4 as uuid } from 'uuid';


const LocalStorageEntriesList = (props) => {  

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

  const displaySpecificNote = (id) => {
    const note = notes.find((note) => note.id === id);
    props.updateUserInputTitle(note.key);
    props.updateUserInputBody(note.value);
  }

  return (
    <div className='notes-list'>
      {notes.map((content) => {
        return <LocalStorageEntryDisplay onClick={() => {displaySpecificNote(content.id)}} key={content.id} entryTitle={content.key} entryBody={content.value} handleNotesUpdate={handleNotesUpdate} handleNoteRemoved={props.handleNoteRemoved} updateUserInputTitle={props.updateUserInputTitle} updateUserInputBody={props.updateUserInputBody} />
      })}
    </div>
  )
  
}

export default LocalStorageEntriesList;