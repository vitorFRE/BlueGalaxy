import React from 'react';
import styled from 'styled-components';
import M from '../../assets/M.svg';
import M_close from '../../assets/M_close.svg';

const ButtonStyles = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  &.open {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.colors.Primary};
  }

  &.open::before {
    content: 'Fechar';
  }

  &.closed {
  }
`;

type ButtonHeaderProps = {
  onClick: () => void;
  open: boolean;
};

const ButtonHeader = ({ onClick, open }: ButtonHeaderProps) => (
  <ButtonStyles onClick={onClick} className={open ? 'open' : 'closed'}>
    {open ? (
      <img src={M_close} alt="Menu aberto" />
    ) : (
      <img src={M} alt="Menu fechado" />
    )}
  </ButtonStyles>
);

export default ButtonHeader;
