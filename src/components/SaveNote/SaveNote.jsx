import React from 'react';
import MainButton from 'components/MainButton/MainButton';

const SaveNote = (props) => {  
  const handleSave = () => {
    localStorage.setItem(props.noteTitle, props.noteBody);
    // Seems to work as expected, but getItem() only returns the title for now.
    props.handleLocalStorageUpdated(1);
  } 

  return (
    <MainButton btnText='Save Note' functionReceived={handleSave}/>
  );
}

export default SaveNote;
