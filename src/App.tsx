import 'react-toastify/dist/ReactToastify.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ToastContainer } from 'react-toastify';

import { RouteContainer } from 'containers';

export const App = () => {
  return (
    <>
      <ToastContainer position='top-right' autoClose={5000} theme='light' />
      <RouteContainer />
    </>
  );
};
