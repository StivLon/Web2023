import styled from "styled-components";
import React from "react";
export default class Inicio extends React.Component {
  render() {
    return (
      <div>
        <Titulo>Hola Mundo</Titulo>
        <Button>Iniciar</Button>
      </div>
    );
  }
}

const Titulo = styled.h1`
  font-size: 2em;
  text-align: center;
  color: blue;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 2px;
`;
