import userEvent from "@testing-library/user-event";
import ExampleDiv from "@/components/image/ExampleDiv";
import { render, screen } from "@testing-library/react";
import image from "public/images/my-picture.jpg";
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

describe("test ExampleDiv", () => {
  test("When passing an image URL starting with https, it should be displayed.", async () => {
    const imageUrl =
      "https://github.blog/wp-content/uploads/2023/05/1200.630-Community-wLogo.png";

    render(<ExampleDiv imageUrl={imageUrl} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument;

    userEvent.click(img);
    const minimizeButton = await screen.findByRole("button");
    expect(minimizeButton).toBeInTheDocument;
  });

  test("When passing a local image address, it should be displayed.", () => {
    const imagePath = "images/my-picture.jpg";

    render(<ExampleDiv imageUrl={imagePath} />);
    expect(screen.getByRole("img")).not.toBeInTheDocument;
  });

  test("When passing a local image mocked path, it should be displayed.", () => {
    const imagePath = image;

    render(<ExampleDiv imageUrl={imagePath} />);
    expect(screen.getByRole("img")).toBeInTheDocument;
  });
});
