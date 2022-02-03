import React, { useState } from 'react';
import LocalStorageEntryDisplay from 'components/LocalStorageEntryDisplay/LocalStorageEntryDisplay';



const LocalStorageEntriesList = (props) => {  

  const displaySpecificNote = (id) => {
    const targetNote = props.notes.find((note) => note.id === id);
    console.log(targetNote.key);
    console.log(targetNote.value);
  //   // props.updateUserInputTitle(targetNote.key);
  //   // props.updateUserInputBody(targetNote.value);
  //   props.handleNotesUpdate();
  }

  return (
    <div className='notes-list'>
      {props.notes.map((content) => {
        return <LocalStorageEntryDisplay onClick={() => {displaySpecificNote(content.id)}} key={content.id} entryTitle={content.key} entryBody={content.value} handleNotesUpdate={props.handleNotesUpdate} handleNoteRemoved={props.handleNoteRemoved} updateUserInputTitle={props.updateUserInputTitle} updateUserInputBody={props.updateUserInputBody} />
      })}
    </div>
  )
  
}

export default LocalStorageEntriesList;