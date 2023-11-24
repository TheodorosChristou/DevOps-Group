import Head from "next/head";

export default function Heading() {
  return (
    <div>
      <Head>
        <title>Mongeese Map</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/img/mongoose.ico" />
        <style>{`
          /* Add a custom style to make the title smaller */
          h1 {
            font-size: 1rem; /* Adjust the font size as needed */
          }
        `}</style>
      </Head>
    </div>
  );
}
