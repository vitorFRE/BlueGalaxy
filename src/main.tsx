import React from 'react';
import ReactDOM from 'react-dom/client';
import Global from './Components/Styles/Global';
import Theme from './Components/Styles/Theme';
import { Home } from './Pages/Home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <Global />
      <Home />
    </Theme>
  </React.StrictMode>,
);
