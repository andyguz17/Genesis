import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<>Home</>} />
    </Routes>
  );
};

export default Navigation;
