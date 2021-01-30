import { createGlobalStyle, ThemeProvider } from "styled-components";
import db from "../db.json";
<<<<<<< HEAD
import Head from "next/head";
=======
<<<<<<< HEAD
<<<<<<< HEAD
import Head from "next/head";
=======
>>>>>>> a0613381c6645c9fabe6cdb09f9f6ee0d640eb98
=======
>>>>>>> a0613381c6645c9fabe6cdb09f9f6ee0d640eb98
>>>>>>> 5aa430a1e959765969232a7254a92fa66c9a0be4

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 5aa430a1e959765969232a7254a92fa66c9a0be4
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        {/* <meta property="og:site_name" content="CannaQuiz" />
        <meta
          property="og:description"
          content="O que você sabe sobre a Cultura Canábica? Venha quebrar seus preconceitos."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1597266028999-5ee5dbb30b3c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" /> */}
      </Head>
<<<<<<< HEAD

=======
=======
>>>>>>> a0613381c6645c9fabe6cdb09f9f6ee0d640eb98
=======
>>>>>>> a0613381c6645c9fabe6cdb09f9f6ee0d640eb98
>>>>>>> 5aa430a1e959765969232a7254a92fa66c9a0be4
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
