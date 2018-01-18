import Document, { Head, Main, NextScript } from "next/document";
import styled, { injectGlobal, ServerStyleSheet } from "styled-components";

injectGlobal`
  * {
    font-family:  "Opensans Regular", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif
  }
  body {
    background: #0575E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #021B79, #0575E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #021B79, #0575E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    margin: 0;
    padding: 0;
    color: white;
  }
  table {
    padding: 0;
    border-collapse: collapse;
    min-width: 50vh;
  }
  table th {
    padding: 3px;
    border: 1px solid silver;
    background: #eee;
  }
  table td {
    padding: 3px;
    border: 1px solid silver;
  }

  .container {
    max-width: 95%;
    margin: 0 auto;
    padding: 0;
    @media screen and (min-width: 1200px) {
      max-width: 1200px;
    }
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>F.A.Q. Code du travail</title>
          <link rel="shortcut icon" type="image/x-icon" href="/faq-code-du-travail/static/assets/favicon.ico" />
          {this.props.styleTags}
        </Head>
        <body>
          <div className="container">
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}
