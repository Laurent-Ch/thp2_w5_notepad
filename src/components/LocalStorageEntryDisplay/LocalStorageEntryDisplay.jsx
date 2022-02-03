import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

const LocalStorageEntryDisplay = (props) => {
  const displaySpecificNote = (id) => {
    const targetNote = props.notes.find((note) => note.id === id);
    props.updateUserInputTitle(targetNote.key);
    props.updateUserInputBody(targetNote.value);
  }

  const handleNoteErasure = () => {
    localStorage.removeItem(props.entryTitle);
    props.handleNotesUpdate();
  }

  return (
    <div className='note-wrapper'>
      <div className='note-container' onClick={() => {displaySpecificNote(props.id)}} >
          <h2 className='note-title'>{props.entryTitle}</h2>
          <div className='note-body'>{props.entryBody.split(' ').slice(0, 15).join(' ')}</div>
      </div>
      <button type='button' className='note-container--erase' onClick={handleNoteErasure}><TiDeleteOutline size={40}/></button>
    </div>
  );
}
export default LocalStorageEntryDisplay;


