import React from 'react';

const LocalStorageEntryDisplay = (props) => {  
  return (
    <div className='note-container'>
      <h2 className='note-title'>{props.entryTitle}</h2>
      <div className='note-body'>{props.entryBody.split(' ').slice(0, 15).join(' ')}</div>
    </div>
  );
}

export default LocalStorageEntryDisplay;


