import { TextDecoder, TextEncoder } from "util";

global.TextEncoder = TextEncoder;
// @ts-ignore
global.TextDecoder = TextDecoder;

beforeAll(() => {
  Object.defineProperty(window, "scroll", {
    value: () => undefined,
    writable: true,
  });

  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));

  Object.defineProperty(global.Image.prototype, "decode", {
    get() {
      return () => Promise.resolve();
    },
  });
});
