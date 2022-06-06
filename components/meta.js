import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* <html lang="en" /> */}
      {/* <-- Primary Meta Tags --> */}
      <title>MEGA IMPRESSION</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="theme-color" content="#001223" />
      <meta name="description" content="MEGA IMPRESSION" />

      {/* <-- Open Graph / Facebook --> */}
      <meta property="og:title" content="MEGA IMPRESSION" />
      <meta property="og:description" content="MEGA IMPRESSION" />
      <meta property="og:image" itemProp="image" content="MEGA IMPRESSION" />
      <meta property="og:url" content="https://mi-landing-page.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jelly card " />

      {/* <-- Twitter --> */}
      <meta
        property="twitter:url"
        content="https://mi-landing-page.vercel.app/"
      />
      <meta
        property="twitter:card"
        content="https://mi-landing-page.vercel.app/images/mi-logo.png"
      />
      <meta property="twitter:title" content="Mega Impression" />
      <meta property="twitter:description" content="Mega Impression" />

      <meta
        name="thumbnail"
        content="https://mi-landing-page.vercel.app/images/mi-logo.png"
      />

      <meta
        property="twitter:image"
        content="https://mi-landing-page.vercel.app/images/mi-logo.png"
      />
    </Head>
  );
}
