import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';




const App = () => {
    return (
    <div className='page-container'>
      <div className='navbar-left'>Test1</div>
      <div className='main-right'>Test2</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));