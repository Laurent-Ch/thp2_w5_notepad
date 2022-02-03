import React from 'react';

const LocalStorageEntryDisplay = (props) => {  
  return (
    <div className='note-container'>
      <h2>{props.entryTitle}</h2>
      <div>
        {props.entryBody.split(' ').slice(0, 15).join(' ')}
      </div>
    </div>
  );
}

export default LocalStorageEntryDisplay;


