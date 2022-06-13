import 'bootstrap/dist/css/bootstrap.css';

const App = ({ Component, pageProps }) => {
  // whenever we try to go to distinct page in next-js, next will import the component from one of the different files of pages, then next js wraps it up with its own custom component before displaying it
  return <Component {...pageProps} />;
};

export default App;
