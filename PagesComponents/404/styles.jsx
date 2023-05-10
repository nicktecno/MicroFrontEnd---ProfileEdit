import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import { Search } from "@styled-icons/boxicons-regular/Search";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

export const BuscaIcon = styled(Search)`
  color: var(--default-color);
  height: 32px;
  width: 32px;
  margin: 0px;

  position: relative;
  z-index: 10;
  cursor: pointer;
  ${customMedia.lessThan("mobile")`
    width: 27px;
    height: 27px;
    `}
  margin: 0px !important;
`;

export const ContainerBottom = styled.div`
  display: block;

  width: 100%;
  position: relative;
  max-width: 1920px;

  .slick-list {
    padding: 0px;
  }
`;

export const ContainerGeneral = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 100%;
  max-width: 1920px;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;

  ${customMedia.lessThan("mobile")`
  padding:0 20px;`}
`;

export const productsContainer = styled.div`
  max-width: 1920px;
  .slick-list {
    padding: 0;
  }
  ${customMedia.lessThan("450px")`
  .col{
    padding:0;
    margin:0;
  }
  
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 110px;
  margin-bottom: 50px;
  ${customMedia.lessThan("mobile")`
    margin-top: 60px;
  `}

  h2 {
    font-size: 40px;
    font-weight: 500;
    color: var(--default-color-hover);
    font-family: var(--title-font);
    ${customMedia.lessThan("tablet")`
      font-size: 30px;
    `}
    ${customMedia.lessThan("mobile")`
      font-size: 36px;
      text-align: center;
    `}
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  background-color: #f4f4f5;
  height: 50px;
  margin-top: 10px;
  border: 0px;
  border-radius: 2px;
  align-items: center;
  padding: 0 5px;
`;

export const ContainerIcon = styled.div`
  width: 50px;
`;

export const SearchContainer = styled.form`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 130px;
  margin-top: -100px;
  ${customMedia.lessThan("tablet")`
      margin-bottom: 100px;
    `}
  ${customMedia.lessThan("mobile")`
      margin-bottom: 80px;
  `}
`;

export const SearchBox = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 80px;
  ${customMedia.lessThan("tablet")`
      margin-top: 60px;
    `}
`;

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  label {
    width: 100%;
    max-width: 740px;
    font-size: 24px;
    line-height: 30px;
    color: #000;
    margin: 0px 10px 0px 0px;
    position: relative;
    ${customMedia.lessThan("tablet")`
      font-size: 18px;
    `}
    ${customMedia.lessThan("400px")`
    font-size: 16px;
  `}

  

    input {
      width: 90%;
      border-radius: 2px;
      height: 50px;
      border: 0px;

      background-color: #f4f4f5;

      font-size: 16px;
      ${customMedia.lessThan("tablet")`
      padding: 0px 0px 0px 40px;
    `}
      ${customMedia.lessThan("tablet")`
      height: 40px;
    `}
    }
  }

  button.searchButton {
    width: 150px;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    border: 0;
    border-radius: 2px;
    background-color: var(--default-color);
    :hover {
      background-color: var(--default-color-hover);
    }
    ${customMedia.lessThan("tablet")`
      height: 40px;
    `}
  }
`;

export const HideElement = styled.div`
  display: none;
`;

export const FeaturedProducts = styled.h1`
  font-size: 40px;
  font-weight: 700;

  color: #292728;
  ${customMedia.lessThan("tablet")`
      font-size: 30px;
  `}
  ${customMedia.lessThan("tablet")`
      font-size: 26px;
  `}
`;
