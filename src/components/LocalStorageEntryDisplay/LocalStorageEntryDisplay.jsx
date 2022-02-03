import React from 'react';

const LocalStorageEntryDisplay = (props) => {  
  return (
    <div>
      <h2>{props.entryTitle}</h2>
      <div>{props.entryBody}</div>
    </div>
  );
}

export default LocalStorageEntryDisplay;


