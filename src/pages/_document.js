import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <link rel="icon" href="../../assets/favicon.png" />
      <link
        rel="stylesheet preload prefetch"
        href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
        as="style"
      ></link>
      <noscript>
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
        />
      </noscript>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
