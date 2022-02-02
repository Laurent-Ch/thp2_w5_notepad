import React from 'react';

const SaveNote = (props) => {  
  const handleSave = () => {
    localStorage.setItem(props.noteTitle, props.noteBody);
    let checkSave = localStorage.getItem(props.noteTitle);
    console.log(checkSave);
    console.log(localStorage.length);
    localStorage.clear();
    console.log(localStorage.length);
    // Seems to work as expected, but getItem() only returns the title for now.

  } 

  return (
    <button className='main-btn' type='button' onClick={handleSave}>Save note</button>
  );
}

export default SaveNote;
