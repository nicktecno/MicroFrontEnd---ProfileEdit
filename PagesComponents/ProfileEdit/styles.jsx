import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import { LeftArrow } from "@styled-icons/boxicons-solid/LeftArrow";
const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

export const ArrowIcon = styled(LeftArrow)`
  height: 10px;
  width: 10px;
  margin-bottom: 2px;
  margin-right: 3px;
  color: var(--default-color);
`;

export const caminho = styled.div`
  width: 100%;
  height: 65px;

  position: relative;
  background-color: #ffffff;
  padding-top: 40px;

  span {
    font-weight: bold;
  }
  a {
    color: #292728;
    transition: 0.3s;
  }
  ${customMedia.lessThan("tablet")`
    
    p{
      padding-bottom: 10px;
    }
  `}
`;

export const Button = styled.div`
  width: 100%;
  button {
    margin-left: 15%;
    font-size: 16px;
    font-weight: bold;
    border: none;
    background-color: #ffffff;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  ${customMedia.lessThan("tablet")`
            margin-bottom:100px;
        `}
`;

export const nome = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${customMedia.lessThan("500px")`
      flex-direction: column-reverse;
        `};
  button {
    position: relative;
    left: -200px;
    border: none;
    font-size: 16px;
    background-color: #ffffff;
    font-weight: 700;
    ${customMedia.lessThan("tablet")`
         left: -140px;
        `}
    ${customMedia.lessThan("mobile")`
         left: -80px;
        `};
    ${customMedia.lessThan("500px")`
       position: unset;
        `};
  }

  .containerTitle {
    max-width: 100%;
    padding: 10px;
    max-width: 560px;
  }

  margin-bottom: 30px;
  h2 {
    align-self: flex-start;
    text-align: center;
    margin-top: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #191919;
  }
  h3 {
    font-size: 16px;
  }

  .containerImagem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imagem {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 120px;
    height: 120px;
    border-radius: 100px;
    margin-bottom: 10px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .alterar {
    position: absolute;
    height: 120px;
    border-radius: 100px;
    border: 3px solid black;
    background: transparent;
    cursor: pointer;
    width: 120px;
    display: visible;
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: transparent;

    svg {
      width: 20px;
      color: transparent;
    }

    :hover {
      color: #292728;
      svg {
        color: #292728;
      }
    }
  }
`;

export const topicos = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  select {
    display: flex;
    width: 100%;
    background-color: #ffffff;
    border: 2px solid transparent;
    max-height: 100%;
    transition: 0.3s;
  }
  select .select-selected,
  .select-items {
    background-color: #cccccc;
  }
  input {
    display: flex;
    width: 100%;
    margin: 10px 0px 2px 0px;
    padding: 0px 0px 0px 10px;
    background-color: #ffffff;
    border: 2px solid transparent;
    font-size: 16px;
    line-height: 18px;
    transition: 0.3s;
  }

  .cinza {
    /* background-color: #b9cb96c8; */
    margin: 20px 0px;

    &.alerta {
      text-align: center;

      font-weight: 700;
      height: initial;
    }
    p {
      /* padding: 30px 0px 30px 10px;
      border-top: solid 1px black;
      border-bottom: solid 1px black; */
    }
  }
  ${customMedia.lessThan("tablet")`
    bottom: 20px;    
    `}
`;

export const edit = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  background-color: #ffffff;
  padding: 5px 5px 5px 10px;
  margin-bottom: 18px;
  ${customMedia.lessThan("tablet")`
    padding: 5px 20px 5px 20px;
    `}

  p {
    flex: 1 1;
    font-size: 18px;
    font-weight: 700;
    color: #292728;
    padding: 0px;
    margin: 0px;
  }
  span {
    font-size: 12px;
    color: #292728;
    border-bottom: solid 2px var(--input-border-color);
    width: 100%;
    text-align: end;
    :hover {
      border-bottom: solid 2px var(--input-border-color-hover);
    }
  }
  select {
    margin: 10px 0px 2px 0px;
    padding: 0px 0px 0px 10px;
    font-size: 16px !important;
  }
`;

export const ContainerBotoes = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 25px;
  margin-top: 30px;
  ${customMedia.lessThan("tablet")`
   flex-direction:column;
   width:100%;
   padding:20px;
   `}

  .botaoNao {
    width: 250px;
    padding: 12px 50px 12px 50px;

    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    border: 0px;

    ${customMedia.lessThan("tablet")`
   width:100%;
  `}
  }

  .botaoSim {
    width: 250px;
    padding: 12px 50px 12px 50px;

    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    border: 0px;
    ${customMedia.lessThan("tablet")`
   width:100%;
   `}
  }
`;

export const Transparente = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
export const ModalAdicionarFoto = styled.div`
  @supports (backdrop-filter: opacity(1)) {
    .no-support {
      display: none;
    }
  }
  width: 100%;
  height: 100%;

  backdrop-filter: blur(6px) contrast(0.8) !important ;

  position: fixed;

  left: 0;
  top: 0;
  z-index: 99;
  display: none;

  &.ativo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const centroAdicionarFoto = styled.div`
  display: flex;
  width: 500px;
  height: 350px;
  background: #ffffff;
  text-align: center;
  color: #292728;
  flex-direction: column;
  position: absolute;

  ${customMedia.lessThan("tablet")`
    width:300px;
    height:450px;
    
    
  `}

  .cabecalho {
    display: flex;
    font-weight: 600;
    font-size: 20px;
    width: 100%;
    height: 50px;
    background: #dbc79a;
    align-items: center;
    justify-content: center;

    ${customMedia.lessThan("tablet")`
    padding:20px;
    
  `}
  }

  .title {
    width: 100%;
    padding: 40px;
    margin-bottom: 40px;
  }

  h3 {
    font-weight: 600;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;

    ${customMedia.lessThan("tablet")`
    font-size: 18px;
    
  `}
  }

  .botaoUpload {
    width: 100%;
    text-align: center;
    justify-content: center;
    padding: 12px 50px 12px 50px;
    background: #dbc79a;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    margin-top: 20px;

    :hover {
      background: #cca8a8;
    }
  }

  .containerBotoes {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    ${customMedia.lessThan("tablet")`
    flex-direction:column;
    
  `}

    .botaoNao {
      width: 200px;
      padding: 12px 50px 12px 50px;
      color: #ffffff;
      background: #292728;
      cursor: pointer;
      transition: 0.3s;

      :hover {
        /* background: #b9cb96; */
      }
    }

    .botaoSim {
      width: 200px;
      padding: 10px 50px 10px 50px;
      background: #dbc79a;
      cursor: pointer;
      transition: 0.3s;

      :hover {
        background: #cca8a8;
      }
    }
  }
`;
