import ExampleDiv from "@/components/image/ExampleDiv";
import { render, screen } from "@testing-library/react";
describe("test ExampleDiv", () => {
  test("When passing an image URL starting with https, it should be displayed.", () => {
    const imageUrl =
      "https://github.blog/wp-content/uploads/2023/05/1200.630-Community-wLogo.png";

    render(<ExampleDiv imageUrl={imageUrl} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("When passing a local image path, it should be displayed.", () => {
    const imagePath = "images/my-picture.jpg";

    render(<ExampleDiv imageUrl={imagePath} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
