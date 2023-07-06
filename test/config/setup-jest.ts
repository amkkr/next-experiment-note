import { TextDecoder, TextEncoder } from "util";

global.TextEncoder = TextEncoder;
// @ts-expect-error for Test
global.TextDecoder = TextDecoder;

beforeAll(() => {
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
  }));

  Object.defineProperty(global.Image.prototype, "decode", {
    get() {
      return () => Promise.resolve();
    },
  });
});
