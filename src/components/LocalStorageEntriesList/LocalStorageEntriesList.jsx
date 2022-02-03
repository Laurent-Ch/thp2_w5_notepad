import React, { useState } from 'react';
import LocalStorageEntryDisplay from 'components/LocalStorageEntryDisplay/LocalStorageEntryDisplay';



const LocalStorageEntriesList = (props) => {  

  return (
    <div className='notes-list'>
      {props.notes.map((content) => {
        return <LocalStorageEntryDisplay key={content.id} id={content.id} entryTitle={content.key} entryBody={content.value} handleNotesUpdate={props.handleNotesUpdate} notes={props.notes} handleNoteRemoved={props.handleNoteRemoved} updateUserInputTitle={props.updateUserInputTitle} updateUserInputBody={props.updateUserInputBody} />
      })}
    </div>
  )
  
}

export default LocalStorageEntriesList;