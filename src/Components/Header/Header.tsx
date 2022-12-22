import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/Logo.svg';
import { device } from '../Styles/BreakPoints';
import ButtonHeader from '../Utils/ButtonHeader';

export const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Container>
      <HeaderLogo>
        <a href="/">
          <img src={Logo} alt="Header Logo" />
        </a>
      </HeaderLogo>
      <Nav>
        <ButtonHeader onClick={() => setMenu(!menu)} open={menu} />

        <ul style={{ display: menu ? 'flex' : '' }} className="b">
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="/">Clientes</a>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

const Container = styled.header`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.div`
  cursor: pointer;
`;

const Nav = styled.nav`
  button {
    display: none;
    z-index: 999;
    position: relative;
    @media ${device.sm} {
      display: block;
    }
  }

  ul {
    display: flex;
    gap: 44px;

    @media ${device.sm} {
      margin-top: 0px;
      position: absolute;
      width: 30%;
      top: 0px;
      right: 0px;
      height: 50%;
      flex-direction: column;
      gap: 20px;
      padding-top: 60px;
      display: none;
      z-index: 800;

      li {
        padding-bottom: 5px;
        border-bottom: 3px solid ${({ theme }) => theme.colors.Primary};
      }
    }
    li {
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.colors.Grey};
      }
      &:first-child {
        border-bottom: 3px solid ${({ theme }) => theme.colors.Primary};
      }
    }
  }
`;
