import React from 'react';
import styled from 'styled-components';

const TitleStles = styled.h2`
  color: ${({ theme }) => theme.colors.Primary};
  > span {
    color: ${({ theme }) => theme.colors.White};
    padding-left: 25px;
  }
`;

type TitleProps = {
  T1: string;
  T2?: string;
};

export const Title = ({ T1, T2 }: TitleProps) => {
  return (
    <TitleStles className="h1">
      {T1} <br /> <span>{T2}</span>
    </TitleStles>
  );
};
