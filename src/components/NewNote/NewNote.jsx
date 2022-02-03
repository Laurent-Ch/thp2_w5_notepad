import React from 'react';
import MainButton from 'components/MainButton/MainButton';

const NewNote = (props) => {  
  const handleNew = () => {
    // Erasing the top part through already defined states.
    props.updateUserInputTitle('');
    props.updateUserInputBody('');
    // Erasing the input part through query Selectors. States were not necessary in the first place and implementing them now would be far too complex for a goal as simple as the present one (no saving required at this stage).
    let titleToErase = document.querySelector('.title-field');
    let bodyToErase = document.querySelector('.text-field');
    titleToErase.value = '';
    bodyToErase.value = '';
  } 

  return (
    <MainButton btnText={props.btnText} functionReceived={handleNew}/>
  );
}

export default NewNote;
