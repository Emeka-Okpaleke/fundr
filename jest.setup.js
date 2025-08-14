// Jest setup file
import '@testing-library/jest-dom';
import { server } from './lib/mocks/server';

// Mock fetch for API calls
global.fetch = jest.fn();

// Mock TextEncoder/TextDecoder for Node.js environment
if (typeof TextEncoder === 'undefined') {
  global.TextEncoder = require('util').TextEncoder;
}
if (typeof TextDecoder === 'undefined') {
  global.TextDecoder = require('util').TextDecoder;
}

// Establish API mocking before all tests
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  jest.clearAllMocks();
})

// Clean up after the tests are finished.
afterAll(() => server.close())
