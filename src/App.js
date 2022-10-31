import './App.css';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Home from './components/modules/home';
import About from './components/modules/about';
import Catering from './components/modules/catering';
import Contact from './components/modules/contact';
import Gallery from './components/modules/gallery';

import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './components/modules/details';






function App() {
  return (
    <>
      <BrowserRouter basename='/reactapp'>
      {/* <BrowserRouter> */}
        <Header />
        {/* <Home />  */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/caterings/:slug" element={<Details />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
        <Footer />
      </BrowserRouter>
      

    </>

  );
}

export default App;
