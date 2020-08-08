import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import Data from './Data';

function nflix(val){
  return(
    <Card
      imgsrc = {val.imglink}
      titles = {val.title}
      desc = {val.desc}
    />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <h1 style = {{color:"#fff",textAlign:"center"}}>Top Netflix Series</h1>
      {Data.map(nflix)}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
