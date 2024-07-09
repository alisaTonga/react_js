import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';
import Lesson01 from './lessons/lesson_01/Lesson01';
import Homework02 from './homework/Homework02';
import Lesson2 from './lessons/lesson2/Lesson2';
import Counter from './components/counter/Counter';
import Homework04 from './homework/homework04/Homework04';
import Lesson_04 from './lessons/lesson_04/Lesson_o4';
import Card from './components/cards/card';
import Homework5 from './homework/homework05/homework5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    {/* <Lesson01 />  */}
    {/* <Homework02 /> */}
    {/* <Lesson2 /> */}
    {/* <Homework04 /> */}
    {/* <Lesson_04 /> */}
      <Homework5 />
  </>
);
