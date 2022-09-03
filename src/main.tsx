import React, { useContext, useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';

import { Amplify, I18n } from 'aws-amplify';
import {
  AmplifyProvider,
  defaultDarkModeOverride,
  translations,
} from '@aws-amplify/ui-react';
// import awsconfig from './aws-exports';

import App from './App';
import { AppProvider, AppContext } from './contexts/AppContext';

import './index.css';
import '@aws-amplify/ui-react/styles.css';

// Amplify.configure(awsconfig);
I18n.putVocabularies(translations);

const theme = {
  name: 'my-theme',
  overrides: [defaultDarkModeOverride],
};

const AppWrapper = () => {
  const appCtx = useContext(AppContext);

  return (
    <AmplifyProvider theme={theme} colorMode="dark">
      <App key={appCtx.language} />
    </AmplifyProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  </React.StrictMode>,
);
