import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/Logo.svg';
import { device } from '../Styles/BreakPoints';
import Theme from '../Styles/Theme';

export const Footer = () => {
  return (
    <ContainerBg>
      <Container>
        <FooterLogo>
          <img src={Logo} alt="Logo do site" />
          <p className="b">
            Confie na Blue Galaxy para deixar a sua piscina sempre limpa e
            pronta para o uso.
          </p>
        </FooterLogo>
        <FooterNav className="b">
          <ul>
            <li>Links</li>
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#faq">FAQs</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
          <ul>
            <li>Redes</li>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Youtube</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </ul>
          <ul>
            <li>Contatos</li>
            <li>+55 99 9999-9999</li>
            <li>BlueGalaxy@Galaxy.com</li>
            <li>Rua orbita do Sol, 03</li>
            <li>Via Láctea, Terra</li>
          </ul>
        </FooterNav>
      </Container>
    </ContainerBg>
  );
};

const ContainerBg = styled.footer`
  background-color: ${({ theme }) => theme.colors.Bg};
`;

const Container = styled.footer`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  padding-top: 100px;
  padding-bottom: 50px;

  display: flex;
  justify-content: space-between;

  @media ${device.sm} {
    padding-top: 60px;
    padding-bottom: 30px;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const FooterLogo = styled.footer`
  p {
    max-width: 30ch;
    margin-top: 10px;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 40px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    li {
      color: ${({ theme }) => theme.colors.Grey};
      &:first-child {
        color: white;
        font-size: 1rem;
      }
      &:hover {
        color: white;
      }
    }
  }

  @media ${device.sm} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
