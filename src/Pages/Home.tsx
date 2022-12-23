import React from 'react';
import { Banner } from '../Components/Banner/Banner';
import { Faq } from '../Components/Faq/Faq';
import { Header } from '../Components/Header/Header';
import { Sobre } from '../Components/Sobre/Sobre';

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Sobre />
      <Faq />
    </>
  );
};
