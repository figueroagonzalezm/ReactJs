// Test setup file: Runs before all tests
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// afterEach: Cleanup function runs after every test
// Removes rendered components to prevent memory leaks and test interference
afterEach(() => {
  cleanup();
});
