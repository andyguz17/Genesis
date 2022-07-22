import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './routes/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
};

export default App;
