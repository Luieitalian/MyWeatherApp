import React, { createContext, useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Details from '../components/Details';
import { apiKeyContext } from '../contexts/apiKeyContext';
import { API_KEY } from '@env';
import Geolocation from '@react-native-community/geolocation';

export const coordsContext = createContext('');
let coordinates: string;
Geolocation.getCurrentPosition(info => {
  coordinates = info.coords.latitude + ',' + info.coords.longitude
});

function Home({ navigation }: any) {
  const [coords, setCoords] = useState<string>(coordinates);
  return (
    <apiKeyContext.Provider value={API_KEY}>
      <coordsContext.Provider value={coords}>
        <Layout>
          <Header navigation={navigation} />
          <Details />
        </Layout>
      </coordsContext.Provider>
    </apiKeyContext.Provider>
  );
}

export default Home;
