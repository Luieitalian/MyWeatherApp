import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Details from '../components/Details';
import { apiKeyContext } from '../contexts/apiKeyContext';
import { API_KEY } from '@env';


function Home({ navigation }: any) {
  return (
    <apiKeyContext.Provider value={API_KEY}>
      <Layout>
        <Header navigation={navigation} />
        <Details />
      </Layout>
    </apiKeyContext.Provider>
  );
}

export default Home;
