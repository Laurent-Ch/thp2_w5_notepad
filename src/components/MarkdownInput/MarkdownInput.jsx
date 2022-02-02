import React from 'react';

const MarkdownInput = (props) => {  
  const onChange = (event) => {
    let currentInput = event.target.value;
    props.updateUserInput(currentInput);
  }

  return (
    <textarea className={props.cssTarget} onChange={onChange} type='text' size='100%' placeholder={props.placeholder} wrap='wrap' rows={props.rows} /> 
  );
}

export default MarkdownInput;
