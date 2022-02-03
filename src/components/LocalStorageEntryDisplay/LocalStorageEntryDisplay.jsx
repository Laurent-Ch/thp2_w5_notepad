import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

const LocalStorageEntryDisplay = (props) => {

  const handleNoteErasure = () => {
    localStorage.removeItem(props.entryTitle);
    props.handleNotesUpdate()
    props.handleNoteRemoved(1);
  }

  return (
    <div className='note-wrapper'>
    <div className='note-container'>
        <h2 className='note-title'>{props.entryTitle}</h2>
        <div className='note-body'>{props.entryBody.split(' ').slice(0, 15).join(' ')}</div>
    </div>
    <button type='button' className='note-container--erase' onClick={handleNoteErasure}><TiDeleteOutline size={40}/></button>
    </div>
  );
}

export default LocalStorageEntryDisplay;


