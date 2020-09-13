import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <Header />

      <About />
     
      <Products />

      <Testimonials />
     
      <Contacts />
  
      <Footer />
      {/* <script src="src\kasturighar.js"></script> */}
    </div>
  );
}

export default App;
