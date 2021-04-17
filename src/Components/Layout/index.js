import React from 'react';
import Watchlist from '../../Pages/Watchlist';
import Header from '../Header';

const Layout = () => {
  return (
    <div id='layout' data-testid="layout">
      <Header />
      <Watchlist />
    </div>
  );
};

export default Layout;
