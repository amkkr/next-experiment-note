import { screen, render } from "@testing-library/react";
import Example from "../Example";

describe("test ExampleMocked", () => {
  test("When passing a local image mocked path, it should be displayed.", () => {
    const imageUrl =
      "https://github.blog/wp-content/uploads/2023/05/1200.630-Community-wLogo.png";

    render(<Example imageUrl={imageUrl} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
