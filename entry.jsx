import React from 'react';
import ReactDOM from 'react-dom';
import Matrix from './components/matrix';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let context = new (window.AudioContext || window.webkitAudioContext)();
  ReactDOM.render(<Matrix context={context}/>,root);
});
