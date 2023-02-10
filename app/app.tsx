import React from 'react';
import {StatusBar} from 'react-native';
import Router from './routes/routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
