import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import Data from './Data'

ReactDOM.render(
  <React.StrictMode>
    <Card 
      imgsrc= {Data[0].imglink}
      titles = {Data[0].title}
    />
    <Card
      imgsrc={Data[1].imglink}
      titles = {Data[1].title}
    />
    <Card
      imgsrc={Data[2].imglink}
      titles = {Data[2].title}
    />
    <Card
      imgsrc={Data[3].imglink}
      titles = {Data[3].title}
    />
    <Card
      imgsrc={Data[4].imglink}
      titles = {Data[4].title}
    />
    <Card
      imgsrc={Data[5].imglink}
      titles = {Data[5].title}
    />
    
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
