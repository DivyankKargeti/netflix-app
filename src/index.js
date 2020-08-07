import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Card 
      imgsrc="https://wallpapercave.com/wp/wp6892093.jpg"
       titles = "Breaking Bad"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp6892093.jpg"
       titles = "Stranger Things"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp6892093.jpg"
       titles = "Rock Bottom"
    />
    
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
