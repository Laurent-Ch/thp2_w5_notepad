import React from 'react';

const MarkdownInput = (props) => {  
  const onChange = (event) => {
    props.updateUserInput(event.target.value);
  }

  return (
    <textarea className={props.cssTarget} onChange={onChange} value={props.value} type='text' size='100%' placeholder={props.placeholder} wrap='wrap' rows={props.rows} /> 
  );
}
export default MarkdownInput;
