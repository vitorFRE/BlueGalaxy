import React from 'react';
import styled from 'styled-components';

interface Props {
  source: string;
  alt: string;
}

export const Image = ({ alt, source, ...props }: Props) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function carregou(event: React.SyntheticEvent<HTMLElement>) {
    const target = event.target as HTMLElement;
    setSkeleton(false);
    target.style.opacity = String(1);
  }

  return (
    <Container>
      {skeleton && <Skeleton></Skeleton>}
      <img onLoad={carregou} src={source} alt={alt} {...props} />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  img {
    grid-area: 1/1;
    transition: 0.2s;
    opacity: 0;
  }
`;

const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    #fff 0px,
    ${({ theme }) => theme.colors.Grey} 50%,
    #fff 100%
  );
  background-color: #eee;
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;
  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;
