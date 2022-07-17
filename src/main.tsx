import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { setupStore } from 'store';

render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root') as HTMLElement,
);
