import React from 'react';
import Showdown from 'showdown';

const NoteDisplay = (props) => {  
  // First step: initialize converter and convert input into html via Showdown.
  // Source: https://github.com/showdownjs/showdown
  const converter = new Showdown.Converter(props);
  const showDownConversion = converter.makeHtml(props.userInputToDisplay);

  // Second step: convert the result of the html conversion once more so that dangerouslyInnerHTML accepts it.
  // Source: https://fr.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
  const DangerousHtmlConversion = {__html: showDownConversion};

  return (
    <div className={props.cssTarget} dangerouslySetInnerHTML={DangerousHtmlConversion} />
  );
}
export default NoteDisplay;
