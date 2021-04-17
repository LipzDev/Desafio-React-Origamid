import React from 'react';
import Header from './Header';
import Produtos from '../Produtos/Produtos';

const { pathname } = window.location;

const Home = () => {
  return (
    <React.Fragment>
      <Header />

      <div>
        <h1 style={{ color: 'green' }}>
          {pathname !== '/produtos' ? 'Home' : 'Produtos'}
        </h1>
        <p>
          {pathname !== '/produtos' ? 'Essa é a home do site' : <Produtos />}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Home;
