import Document, { Html, Head, Main, NextScript } from "next/document";
import i18nextConfig from "../next-i18next.config";

export default class Doc extends Document {
  render() {
    const currentLocale =
      (this.props.__NEXT_DATA__.query.locale as string) ||
      i18nextConfig.i18n.defaultLocale ||
      "";
    return (
      <Html lang={currentLocale}>
        {/* prettier-ignore */}
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
