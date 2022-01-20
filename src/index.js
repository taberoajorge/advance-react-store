/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDom from 'react-dom';
import App from './routes/App';
import ThemeContext from './context/ThemeContext';

ReactDom.render(
  <React.StrictMode>
    <ThemeContext.Provider value="red">
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
