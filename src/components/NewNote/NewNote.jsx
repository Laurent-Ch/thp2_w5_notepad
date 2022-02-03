import React from 'react';
import MainButton from 'components/MainButton/MainButton';

const NewNote = (props) => {  
  const handleNew = () => {
    // Erasing the top part through already defined states.
    props.updateUserInputTitle('');
    props.updateUserInputBody('');
  } 

  return (
    <MainButton btnText={props.btnText} functionReceived={handleNew}/>
  );
}
export default NewNote;
