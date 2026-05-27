import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
