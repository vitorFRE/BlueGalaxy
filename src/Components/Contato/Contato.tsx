import React from 'react';
import styled from 'styled-components';
import { device } from '../Styles/BreakPoints';
import { Image } from '../Utils/Image';
import { Title } from '../Utils/Title';

export const Contato = () => {
  return (
    <Container id="contato">
      <Title T1="Fale" T2="conosco" />

      <ContatoContainer>
        <ImgContainer>
          <Image
            source="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80"
            alt="Boia em formato de um flamingo em uma piscina"
          />
        </ImgContainer>
        <FormContainer>
          <h3 className="h3">Entre em contato</h3>
          <p className="b">
            Não hesite em nos contatar para mais informações ou para agendar um
            serviço.
          </p>
          <form>
            <input className="b" type="text" placeholder="Nome" />
            <input className="b" type="text" placeholder="Sobrenome" />
            <input className="b" id="tell" type="text" placeholder="Telefone" />
            <input className="b" id="email" type="email" placeholder="Email" />
            <textarea
              className="b"
              placeholder="Opa, Qual sua mensagem ?"
              name="mensagem"
              id="textarea"
              cols={30}
              rows={5}
            ></textarea>
          </form>

          <button>Enviar</button>
        </FormContainer>
      </ContatoContainer>
    </Container>
  );
};

const Container = styled.section`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
`;

const ContatoContainer = styled.div`
  display: grid;
  grid-template-columns: 368px auto;

  border-radius: 5px;

  margin: 30px 0 50px 0;

  @media ${device.md} {
    grid-template-columns: 1fr;
  }
`;

const ImgContainer = styled.div`
  div {
    height: 100%;
  }
  img {
    border-radius: 5px 0 0 5px;
    height: 100%;

    @media ${device.md} {
      display: none;
    }
  }
`;

const FormContainer = styled.div`
  background: rgba(217, 217, 217, 0.1);
  border-radius: 0 5px 5px 0;
  padding: 50px 40px;

  p {
    color: ${({ theme }) => theme.colors.Grey};
    max-width: 40ch;
    margin-bottom: 30px;
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    max-width: 600px;

    #tell,
    #email,
    #textarea {
      grid-column: span 2;
    }

    input[type='text'],
    input[type='email'],
    textarea {
      border: 2px solid ${({ theme }) => theme.colors.Primary};
      border-radius: 5px;
      padding: 12px;
      width: 100%;
      box-sizing: border-box;
      color: white;
      background: transparent;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.Primary};
        caret-color: ${({ theme }) => theme.colors.Primary};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.Grey};
      }
      ::placeholder {
        color: white;
      }
    }
  }

  button {
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #ffa07a;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    max-width: 600px;
    width: 100%;

    &:hover {
      background: #eb865e;
    }
  }

  @media ${device.md} {
    padding: 20px 15px;
  }

  @media ${device.sm} {
    form {
      grid-template-columns: 1fr;
      input[type='text'] {
        grid-column: span 2;
      }
    }
  }
`;
