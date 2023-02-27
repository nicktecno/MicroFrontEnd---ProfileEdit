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
  color: #292929;
  height: 32px;
  width: 32px;
  margin-right: 0px;
  ${customMedia.lessThan("mobile")`
    width: 27px;
    height: 27px;
    `}
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  ${customMedia.lessThan("notebook")`
      margin-top:0px;
    `}
  ${customMedia.lessThan("tablet")`
      margin-top:10px;
    `}
`;

export const ImageBannerWeb = styled.img`
  width: 100%;
  max-width: 1920px;
  height: auto;
`;
export const ImageBannerMobile = styled.img`
  width: 100%;
  height: auto;
`;

export const sliderBrowser = styled.div`
  max-width: 1920px;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
export const sliderMobile = styled.div`
  @media only screen and (min-width: 699px) {
    display: none;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
  max-width: 1920px;
`;

export const produtos = styled.div`
  position: relative;
  width: 95%;
  display: flex;
  justify-content: center;
  align-self: center;

  flex-direction: column;

  margin: 0 auto;
  max-width: 1920px;

  button {
    width: 100px;
    align-self: center;
    padding: 10px;
    border: 0px;
    color: #fff;
    background: #cc1f1f71;
    transition: 0.3s;

    :hover {
      background: #cc1f1f;
    }
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const SearchBox = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${customMedia.lessThan("mobile")`
      flex-direction:column;
      gap:10px;

    `}
`;

export const SearchBar = styled.div`
  width: 95%;
  align-self: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;

  label {
    width: 100%;

    font-size: 24px;
    line-height: 25px;
    color: black;
    margin: 0px 0px 15px 0px;
    position: relative;
    ${customMedia.lessThan("tablet")`
      font-size: 18px;
    `}
    ${customMedia.lessThan("mobile")`
    text-align:center;

    `}
  }

  button.searchButton {
    width: 25%;
    margin-left: 10px;
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    background-color: var(--default-color);

    border: none;

    transition: 0.3s;
    :hover {
      background-color: var(--default-color-hover);
    }

    ${customMedia.lessThan("mobile")`
     width:90%;
     margin:0px;

    `}
  }
`;

export const ContainerSvg = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 70%;
  border: 1px solid black;

  cursor: pointer;

  transition: 0.3s;

  svg {
    color: black;
    transition: 0.3s;
    :hover {
      color: var(--default-color-hover);
    }
  }

  ${customMedia.lessThan("mobile")`
     width:90%;

    `}

  input {
    width: 100%;
    border-radius: 10px;
    border: 0px;
    font-size: 16px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;

  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SeeMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  width: 120px;
  height: 40px;
  cursor: pointer;
  background: var(--bt-positive-color);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--bt-positive-text-color);
  font-weight: bold;
  transition: 0.3s;

  :hover {
    background: var(--bt-positive-color-hover);
    color: var(--bt-positive-text-color-hover);
  }
`;
