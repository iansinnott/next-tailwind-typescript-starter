import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div data-cy="App">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
