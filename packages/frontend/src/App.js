import { Suspense ,useState} from 'react';
import {useTranslation } from'react-i18next';
import './App.css';
import { ErrorBoundary } from '@sentry/react';
import Screen from './component/mainscreen';

function App() {
 // throw new Error('Testing Sentry integration');
 
 
 const { t ,i18n } = useTranslation();
  return (
    // <ErrorBoundary fallback={() => <h1>Something went wrong!</h1>}>
    <Screen/>
    // </ErrorBoundary>
  );
}

// export default App;
export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}