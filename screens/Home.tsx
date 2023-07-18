import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Details from '../components/Details';
import { apiKeyContext } from '../contexts/apiKeyContext';
import { API_KEY } from '@env';
import Geolocation from '@react-native-community/geolocation';


function Home() {

  const getLocation = async (latitude: number, longitude: number) => {
    const res = await fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`);
    const data = await res.json();
    setLocation(data.address.province);
  }
  const [location, setLocation] = useState<string>('');
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude);
      setLongitude(info.coords.longitude);
    });
    getLocation(latitude, longitude);
  }, [latitude, longitude])

  return (
    <apiKeyContext.Provider value={API_KEY}>
      <Layout>
        <Header location={location} />
        <Details />
      </Layout>
    </apiKeyContext.Provider>
  );
}

export default Home;
