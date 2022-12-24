import React from 'react';
import styled from 'styled-components';
import { device } from '../Styles/BreakPoints';
import { Image } from '../Utils/Image';
import { motion } from 'framer-motion';

export const Banner = () => {
  return (
    <Container id="inicio">
      <BannerText
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: 'linear', duration: 0.8 }}
      >
        <h1 className="h1">Blue Galaxy</h1>
        <p className="b">
          Limpeza de piscinas residenciais e comerciais. Equipe altamente
          treinada. Serviços de qualidade. Entre em contato para mais
          informações.
        </p>
        <a href="#contato">
          <button className="h6">FALE COM A GENTE</button>
        </a>
      </BannerText>
      <BannerImg
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: 'linear', duration: 1 }}
      >
        <Image
          source="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          alt="Foto de uma piscina"
        />

        <Image
          source="https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80"
          alt="Foto de uma mulher sentada na beira de uma piscina"
        />
      </BannerImg>
    </Container>
  );
};

const Container = styled.main`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  margin-top: 100px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${device.sm} {
    margin-top: 50px;
  }
`;

const BannerText = styled(motion.div)`
  p {
    color: ${({ theme }) => theme.colors.Grey};
    margin-bottom: 30px;

    @media ${device.sm} {
      margin-top: 15px;
      margin-bottom: 20px;
    }
  }

  button {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.White};
    padding: 10px;
    border: none;
    background: #ffa07a;
    border-radius: 5px;
    &:hover {
      background: #eb865e;
    }
  }
`;

const BannerImg = styled(motion.div)`
  display: flex;
  gap: 35px;
  justify-content: flex-end;

  div:first-child {
    img {
      margin-top: -64px;
    }
    @media ${device.lg} {
      display: none;
    }
  }

  img {
    max-width: 258px;
    width: 100%;
    height: 429px;
    border-radius: 5px;

    @media ${device.lg} {
      height: auto;
    }
  }
`;
