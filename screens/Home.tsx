import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Details from '../components/Details';

function Home() {
  return (
    <Layout>
      <Header />
      <Details />
    </Layout>
  );
}

export default Home;
