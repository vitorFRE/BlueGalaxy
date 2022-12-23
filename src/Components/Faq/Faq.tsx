import React, { useState } from 'react';
import styled from 'styled-components';
import { Title } from '../Utils/Title';
import Data from '../Helper/Data.json';
import menos from '../../assets/menos.svg';
import mais from '../../assets/mais.svg';

export const Faq = () => {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (i: number) => {
    if (active == i) {
      return setActive(null);
    }

    setActive(i);
  };

  return (
    <Container>
      <Title T1="Perguntas" T2="frequentes" />
      <Accordion>
        {Data.perguntas_frequentes.map((item, i) => (
          <AccordionItem key={item.id}>
            <AccordionPergunta onClick={() => toggle(i)}>
              <h2 className={`${active === i ? 'title_active' : ''} h4`}>
                {item.pergunta}
              </h2>
              <span>
                {active === i ? (
                  <img src={menos} alt="icon -" />
                ) : (
                  <img src={mais} alt="icon +" />
                )}
              </span>
            </AccordionPergunta>
            <AccordionResposta
              className={`${active === i ? 'Res_active' : 'Res'} b`}
            >
              {item.resposta}
            </AccordionResposta>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

const Container = styled.section`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  margin-top: 50px;
`;

const Accordion = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const AccordionItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.Primary};
  border-radius: 5px;
  padding: 35px 35px 20px 35px;
  margin-bottom: 20px;
`;

const AccordionPergunta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h2.title_active {
    color: ${({ theme }) => theme.colors.Primary};
  }
`;

const AccordionResposta = styled.div`
  &.Res {
    max-height: 0;
    overflow: hidden;
    margin-top: 15px;
    transition: all 0.6s cubic-bezier(0, 1, 0, 1);
  }

  &.Res_active {
    height: auto;
    max-height: 999px;
    overflow: hidden;
    margin-top: 15px;
    transition: all 0.6s cubic-bezier(1, 0, 1, 0);
  }
`;
