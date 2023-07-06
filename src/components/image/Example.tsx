import { FC } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ExampleDivProps {
  imageUrl: string;
}

const Example: FC<ExampleDivProps> = (props: ExampleDivProps) => {
  const { imageUrl } = props;

  return (
    <Zoom>
      <div
        role="img"
        style={{
          maxWidth: "100%",
          width: "300px",
          height: "300px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${imageUrl})`,
        }}
      />
    </Zoom>
  );
};

export default Example;
