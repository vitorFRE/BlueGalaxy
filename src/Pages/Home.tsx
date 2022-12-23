import React from 'react';
import { Banner } from '../Components/Banner/Banner';
import { Contato } from '../Components/Contato/Contato';
import { Faq } from '../Components/Faq/Faq';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { Sobre } from '../Components/Sobre/Sobre';

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Sobre />
      <Faq />
      <Contato />
      <Footer />
    </>
  );
};
