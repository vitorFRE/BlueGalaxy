import React from 'react';
import styled from 'styled-components';
import { device } from '../Styles/BreakPoints';
import { Title } from '../Utils/Title';

export const Sobre = () => {
  return (
    <Container id="sobre">
      <Title T1="Um pouco" T2="Sobre-Nós" />
      <Content>
        <div>
          <img src="https://images.unsplash.com/photo-1591285713698-598d587de63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80" />
          <p className="b">
            Nossa empresa se destaca por oferecer serviços de qualidade e
            atendimento personalizado aos nossos clientes. Contamos com uma
            equipe altamente treinada e experiente, que está sempre atualizada
            com as melhores práticas e técnicas de limpeza e manutenção de
            piscinas. Além disso, trabalhamos com produtos de alta qualidade e
            utilizamos equipamentos modernos e eficientes para garantir
            resultados excepcionais. Escolha a nossa empresa e tenha a
            tranquilidade de saber que sua piscina está em boas mãos.
          </p>
        </div>
        <div>
          <p className="b">
            Transforme o seu quintal em um oásis de lazer e descanso. Com a
            nossa ajuda, você pode ter a piscina dos seus sonhos e desfrutar de
            momentos de relaxamento e diversão com a família e amigos. Nossos
            serviços de limpeza e manutenção garantem que sua piscina esteja
            sempre em ótimas condições e pronta para o uso. Além disso,
            oferecemos opções de personalização e design para deixar sua piscina
            ainda mais incrível. Não perca mais tempo e entre em contato conosco
            para saber mais.
          </p>

          <img src="https://images.unsplash.com/photo-1518633639997-bb443620d547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1369&q=80" />
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  margin-top: 50px;
`;

const Content = styled.div`
  margin-top: 30px;
  img {
    width: 100%;
    height: 365px;
    object-fit: cover;
    border-radius: 5px;
  }

  div {
    display: grid;
    align-items: center;
    gap: 30px;
    &:first-child {
      grid-template-columns: 1.3fr 1fr;
      margin-bottom: 60px;

      @media ${device.sm} {
        margin-bottom: 30px;
        grid-template-columns: 1fr;
      }
    }
    &:last-child {
      grid-template-columns: 1fr 1.3fr;
      @media ${device.sm} {
        p {
          color: ${({ theme }) => theme.colors.Grey};
        }
      }
    }

    @media ${device.sm} {
      align-items: top;
    }
  }
`;
