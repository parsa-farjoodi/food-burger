import React from 'react';
import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import SecondBanner from './components/SecondBanner/SecondBanner';
import Foods from './components/Foods/Foods';
import Delivery from './components/Delivery/Delivery';
import Contacts from './components/Contacts/Contacts';
import Location from './components/Location/Location';

function App() {
  return (
    <>
      <Menu />
      <Banner />
      <About />
      <SecondBanner />
      <Foods />
      <Delivery />
      <Contacts />
      <Location />
    </>
  );
}

export default App;
