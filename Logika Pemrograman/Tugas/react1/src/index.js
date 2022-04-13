import React from 'react';
import ReactDOM from 'react-dom';
import Soal1 from './Soal1';
import Soal2 from './Soal2';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Soal1 />
      <hr />
      <Soal2 />
      <hr />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);