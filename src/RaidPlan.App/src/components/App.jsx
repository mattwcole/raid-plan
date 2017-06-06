import React from 'react';
import { Button } from 'react-toolbox/lib/button';
import AppBar from './AppBar';

const App = () => (
  <div>
    <AppBar />
    <h2> Hello World! </h2>
    <Button label="I don't do anything!" primary />
  </div>
);

export default App;
