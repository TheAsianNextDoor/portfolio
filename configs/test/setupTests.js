import '@testing-library/jest-dom';
import 'dotenv/config';

import { TextDecoder, TextEncoder } from 'util';

import fetch, { Headers, Request, Response } from 'node-fetch';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { server } from '../../src/test/server';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.AbortController = AbortController;
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

/* Mock Okta due to lack of mock provider comp */
vi.mock('@okta/okta-react', () => ({
  useOktaAuth: () => ({
    authState: { isAuthenticated: true, accessToken: { accessToken: 'validToken' } },
    authService: { handleAuthentication: vi.fn() },
  }),
  LoginCallback: () => ({
    errorComponent: vi.fn(),
    onAuthResume: vi.fn(),
    loadingElement: vi.fn(),
  }),
}));

// Enable API mocking before tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());
// Disable API mocking after the tests are done.
afterAll(() => server.close());
