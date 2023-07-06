import { screen, render } from "@testing-library/react";
import { TextDecoder, TextEncoder } from "util";
import Example from "../Example";
import "@testing-library/jest-dom";

global.TextEncoder = TextEncoder;
// @ts-expect-error for Test
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

describe("test ExampleMocked", () => {
  test("When passing a local image mocked path, it should be displayed.", () => {
    const imageUrl =
      "https://github.blog/wp-content/uploads/2023/05/1200.630-Community-wLogo.png";

    render(<Example imageUrl={imageUrl} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
