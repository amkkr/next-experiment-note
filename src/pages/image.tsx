import ExampleDiv from "@/components/image/ExampleDiv";
import Head from "next/head";

const Image = () => {
  const httpImageUrl =
    "https://github.blog/wp-content/uploads/2023/05/1200.630-Community-wLogo.png?resize=1200%2C630";

  const localImageUrl = "images/my-picture.jpg";

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>Images</h1>

      <h2>online</h2>
      <ExampleDiv imageUrl={httpImageUrl} />

      <h2>local</h2>
      <ExampleDiv imageUrl={localImageUrl} />
    </>
  );
};

export default Image;
