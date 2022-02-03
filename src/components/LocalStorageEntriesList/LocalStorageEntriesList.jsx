import React from 'react';
import LocalStorageEntryDisplay from 'components/LocalStorageEntryDisplay/LocalStorageEntryDisplay';

const LocalStorageEntriesList = () => {  

  const EntriesToDisplay = [];
  for (let i = 0; i < localStorage.length; i++) {
    EntriesToDisplay.push({key: localStorage.key(i), value: localStorage.getItem(localStorage.key(i))});
  }

  return (
    <div className='notes-list'>
      {EntriesToDisplay.map((content, index) => {
        return <LocalStorageEntryDisplay key={index} entryTitle={content.key} entryBody={content.value}  />
      })}
    </div>
  )
  
}

export default LocalStorageEntriesList;