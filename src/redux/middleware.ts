import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';

/**
 * Logs a warning and shows a toast
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // eslint-disable-next-line no-console
    console.warn('We got a rejected action! Check Network');
    toast.error('Action was not completed');
  }

  return next(action);
};
