import React, { useEffect } from 'react';
import Watchlist from '../../Pages/Watchlist';
import Header from '../Header';

const Layout = () => {
  useEffect(() => {
    console.log('Inside Layout.js!');
  }, []);
  return (
    <div id='layout'>
      <Header />
      <Watchlist />
    </div>
  );
};

export default Layout;
