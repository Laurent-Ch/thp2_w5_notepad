import React from 'react';

const MainButton = (props) => {  
  return (
    <button className='main-btn' type='button' onClick={props.functionReceived}>{props.btnText}</button>
  );
}

export default MainButton;
