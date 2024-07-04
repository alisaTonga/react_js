import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';
import Lesson01 from './lessons/lesson_01/Lesson01';
import Homework02 from './homework/Homework02';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Lesson01 />
    <Homework02 />
  </>
);
