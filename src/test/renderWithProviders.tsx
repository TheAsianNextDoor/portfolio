import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { mockState } from './mockState';
import { RouteContainer } from 'containers';
import { setupStore } from 'store';

import type { PreloadedState } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import type { MemoryRouterProps } from 'react-router-dom';
import type { AppStore, RootState } from 'store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

/**
 *
 * @param ui React Component to render
 * @param param1
 * @param param2
 * @returns
 */
export const renderWithProviders = (
  ui: React.ReactElement,
  { ...memoryRouterProps }: MemoryRouterProps = {},
  { preloadedState = mockState, store = setupStore(preloadedState), ...renderOptions }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }): JSX.Element => (
    <MemoryRouter {...memoryRouterProps}>
      <Provider store={store}>
        {/* @ts-ignore Provide routes to children, ignore error because container doesn't accepts params */}
        <RouteContainer>{children}</RouteContainer>
      </Provider>
    </MemoryRouter>
  );
  return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
};
