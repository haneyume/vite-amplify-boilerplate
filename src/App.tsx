import { useContext, useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { withAuthenticator } from '@aws-amplify/ui-react';

import { CustomAuthComponnts } from './components/CustomAuthComponnts';
import { NotFound } from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/account" element={<div />} />
        <Route path="/project/:id" element={<div />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default withAuthenticator(App, {
  components: CustomAuthComponnts,
  className: 'dark-bg',
});
