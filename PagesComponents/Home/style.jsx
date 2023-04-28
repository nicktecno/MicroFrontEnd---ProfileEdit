import styled from "styled-components";

import { generateMedia } from "styled-media-query";
import { CartCheckFill } from "@styled-icons/bootstrap/CartCheckFill";
import { CartXFill } from "@styled-icons/bootstrap/CartXFill";
import { Youtube } from "@styled-icons/bootstrap/Youtube";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { Pinterest } from "@styled-icons/entypo-social/Pinterest";
import { Search } from "@styled-icons/boxicons-regular/Search";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
  irico: "414px",
  ipobre: "375px",
  pobre: "330px",
});

export const BuscaIcon = styled(Search)`
  color: var(--default-color);
  height: 32px;
  width: 32px;
  margin-right: 0px;
  z-index: 10;
`;

export const FacebookIcon = styled(Facebook)`
  color: #fff;
  height: 28px;
  width: 28px;
`;

export const YoutubeIcon = styled(Youtube)`
  color: #fff;
  height: 28px;
  width: 28px;
`;

export const InstagramIcon = styled(Instagram)`
  color: #fff;
  height: 28px;
  width: 28px;
`;

export const PinterestIcon = styled(Pinterest)`
  color: #fff;
  height: 28px;
  width: 28px;
`;

export const CheckIcon = styled(CartCheckFill)`
  color: #fff;
  height: 54px;
  width: 54px;
  margin-bottom: 20px;
`;

export const RemoveIcon = styled(CartXFill)`
  color: #fff;
  height: 54px;
  width: 54px;
  margin-bottom: 20px;
`;

export const CorrectCheck = styled.div`
  background-color: #82ce34;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ErrorCheck = styled.div`
  background-color: #ce171f;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const SliderPromotions = styled.div`
  max-width: 1920px;

  width: 100%;
  position: relative;

  .slick-slide {
    margin: 5px 3px;

    width: 16.2% !important;

    ${customMedia.lessThan("1700px")`
      width:16.1% !important;
        `}
    ${customMedia.lessThan("1400px")`
      width:16% !important;
        `}
         ${customMedia.lessThan("1200px")`
      width:15.9% !important;
        `}
         ${customMedia.lessThan("1050px")`
      width:15.8% !important;
        `}

    ${customMedia.lessThan("notebook")`
      width:25% !important;
        `}
    ${customMedia.lessThan("mobile")`
      width:25% !important;
        `}
          ${customMedia.lessThan("irico")`
      width:25% !important;
        `}
  }

  .slick-list {
    justify-content: center;
    padding: 0px;
  }

  .slick-track {
    display: flex;
    justify-content: ${(props) =>
      props.lengthPromotions >= 6 ? "flex-start" : "center"};
  }
`;

export const PromotionContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  border-radius: 5px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export const CaixaProduto = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin: 15px auto;
  display: block;
  max-width: 219px;
  padding: 20px 0px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-weight: 300;

  strong {
    font-weight: 700;
  }

  img {
    max-width: 90%;
    height: auto;
    margin: 15px auto;
  }

  &:hover,
  &.active {
    .color {
      span {
        display: initial;
      }
    }
  }
`;

export const BannerContainer = styled.div`
  max-width: 1920px;
  width: 100%;
`;
export const ImageBannerWeb = styled.img`
  width: 100%;
  height: auto;
`;
export const ImageBannerMobile = styled.img`
  width: 100%;
  height: auto;
`;

export const SliderDesktop = styled.div`
  width: 100%;
  padding: 0px;
  margin-bottom: 30px;

  ${customMedia.lessThan("tablet")`
    display: none;
    `}

  a {
    display: flex;
    width: 100%;
    height: 100% !important;
  }

  .slick-prev {
    background-color: transparent;
    transition: 0.3s;

    :hover {
      background-color: #fec0149e;
    }
  }
  .slick-next {
    background-color: transparent;
    transition: 0.3s;

    :hover {
      background-color: #fec0149e;
    }
  }

  .slick-list {
    width: 100%;

    padding: 0px;
  }

  .slick-slide {
    margin: 0px;
  }
`;

export const SliderMobile = styled.div`
  width: 100%;
  padding: 0px;
  margin-bottom: 30px;

  ${customMedia.greaterThan("tablet")`
    display: none;
    `}
  a {
    display: flex;
    width: 100%;
    height: 100% !important;
  }

  .slick-prev {
    background-color: transparent;
    transition: 0.3s;

    :hover {
      background-color: #fec0149e;
    }
  }
  .slick-next {
    background-color: transparent;
    transition: 0.3s;

    :hover {
      background-color: #fec0149e;
    }
  }

  .slick-list {
    width: 100%;

    padding: 0px;
  }

  .slick-slide {
    margin: 0px;
  }
`;

export const SliderCategory = styled.div`
  display: block;

  width: 100%;
  position: relative;
  max-width: 1920px;

  .slick-list {
    padding: 0px;
  }

  .slick-slide {
    margin: 0px;
    margin-bottom: 20px;
  }

  .category {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    width: 180px;
    height: 220px;

    margin-right: 14px;
    justify-content: center;
    align-items: center;

    font-weight: bold;

    ${customMedia.lessThan("notebook")`
      width:170px;
      height:170px;
    `}
    ${customMedia.lessThan("tablet")`
      width:150px;
      height:150px;`}

${customMedia.lessThan("irico")`
      width:115px;
      height:115px;`}

  img {
      width: 100%;
      height: 200px;
      margin: 0px;
      object-fit: contain;
    }

    .nameSeller {
      width: 100%;
      margin-top: 5px;
      display: flex;
      text-align: center;
      justify-content: center;
      text-align: center;
      min-height: 35px;
      height: 35px;
      max-height: 35px;
      padding: 0px 5px;
      display: -webkit-box;
      line-height: 16px;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      ${customMedia.lessThan("mobile")`
     
     font-size:12px;
     `}
    }
  }
`;

export const SellerContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  width: 200px;
  height: 200px;
  padding: 5px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: var(--box-shadow);
  font-weight: bold;

  &.search {
    margin-right: 0px;
  }

  ${customMedia.lessThan("notebook")`
      width:170px;
      height:170px;
    `}
  ${customMedia.lessThan("tablet")`
      width:150px;
      height:150px;
     
      `}
   

  img {
    width: 100px;
    height: 100px;
    margin: 0px;
    object-fit: contain;
  }

  .nameSeller {
    text-align: center;
    min-height: 35px;
    height: 35px;
    max-height: 35px;
    padding: 0px 5px;
    overflow: hidden;
    display: -webkit-box;
    line-height: 16px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    ${customMedia.lessThan("tablet")`
     
     font-size:12px;
     `}
  }
`;

export const SearchSellersContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SearchBox = styled.div`
  width: 50%;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: flex-end;

  ${customMedia.lessThan("notebook")`
      flex-direction:column;
      gap:5px;
      align-items:flex-start;
    `}

  label {
    width: 100%;
    max-width: 740px;
    line-height: 25px;
    font-size: 18px;

    font-weight: bold;
    color: #000;
    margin: 0px 10px 0px 0px;
    position: relative;

    ${customMedia.lessThan("mobile")`
     font-size:14px;
    `}

    svg {
      cursor: pointer;
      position: absolute;
      bottom: 8px;
      left: 10px;
      z-index: 10;
      color: var(--default-color);

      transition: 0.3s;
      :hover {
        color: var(--default-color-hover);
      }
    }

    input {
      width: 100%;
      height: 50px;
      margin-top: 10px;
      padding: 0px 10px 0px 50px;
      background-color: #f4f4f5;
      border: 0px;
      border-radius: 2px;
      font-size: 16px;
      ${customMedia.lessThan("mobile")`
     font-size:12px;
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
    transition: 0.3s;

    ${customMedia.lessThan("mobile")`
     font-size:12px;
    `}

    :hover {
      background-color: var(--default-color-hover);
    }

    ${customMedia.lessThan("notebook")`
      width:100%;
    `}
  }
`;

export const SearchButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 1920px;
  button {
    width: 200px;
    height: 40px;
    font-weight: 600;
    border: none;
  }
`;

export const sliderProduct = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1920px;
  .container {
    margin: 0 5%;
    max-width: 1920px;
    ${customMedia.lessThan("mobile")`
      margin:0;
      margin-bottom: 50px ;
      max-width: 100%;
      width: 100%;
      overflow: visible;
      padding: 0;
    `}
  }

  .slick-list {
    padding: 0px 0px;
    margin-left: 5px;
    ${customMedia.lessThan("mobile")`
		  margin-left: 0px;
      max-height: 330px; 
    `}
  }

  .slick-prev {
    color: var(--default-color);
    border-left: 2px solid var(--default-color);
    border-top: 2px solid var(--default-color);
    height: 30px;
    width: 30px;
    margin-right: 20px;
    ${customMedia.lessThan("mobile")`
      display: none !important;
    `}
  }
  .slick-next {
    color: var(--default-color);
    border-left: 2px solid var(--default-color);
    border-top: 2px solid var(--default-color);
    height: 30px;
    width: 30px;
    margin-left: 20px;
    ${customMedia.lessThan("mobile")`
      display: none !important;
    `}
  }

  .produtos-txt {
    font-size: 40px;
    font-weight: 700;
    color: var(--title-color);

    margin-top: 40px;
    margin-bottom: 15px !important;

    ${customMedia.lessThan("1920px")`
      margin-left: 2%;
    `}
    ${customMedia.lessThan("desktop")`
    font-size: 32px;
        `}
            ${customMedia.lessThan("tablet")`
    font-size: 28px;
    margin-top: 10px;
        `}
    ${customMedia.lessThan("mobile")`
      font-size: 23px;
      margin-left: 12px;
    `}
  }
`;

export const HideElement = styled.div`
  display: none;
`;

export const BlocoExplore = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  padding-bottom: 5px;
  cursor: pointer;
  background: var(--explore-block-color);

  box-shadow: rgb(231 231 231) 1px 2px 16px;
  span {
    color: var(--explore-block-text-color);
  }
  :hover {
    transition: 0.3s;
    background: var(--explore-block-color-hover);

    span {
      color: var(--explore-block-text-color-hover);
    }
  }

  ${customMedia.lessThan("mobile")`
    padding-bottom: 0px;
  `}

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .blocoImage {
    max-height: 300px;
    width: 100%;
  }
  span {
    padding: 10px;
    height: 36px;
    font-weight: 600;
    font-size: 20px;
    text-align: center;

    ${customMedia.lessThan("tablet")`
        font-size: 16px;
      `}
    ${customMedia.lessThan("tablet")`
        font-size: 14px;
      `}
    ${customMedia.lessThan("420px")`
          font-size: 11px; 
      `}
  }
`;

export const BlocoConheca1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 50%;
  height: 260px;
  transition: 0.5s;
  cursor: pointer;
  background-image: url("/images/Home/conheca02.jpg");
  background-repeat: no-repeat;
  background-size: 100%;

  ${customMedia.lessThan("tablet")`
    width:100%;
  `}

  .backgroundGradiente {
    background: transparent
      radial-gradient(farthest-corner at 40px 40px, #464646 0%, #1a1a1a42 100%);
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .backgroundGradiente2 {
    background: transparent
      radial-gradient(farthest-corner at 40px 40px, #c9c9c9 0%, #1a1a1a42 50%);
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  img {
    margin: 40px;
    width: 100px;
  }

  span {
    margin-left: 50px;
    margin-top: 40px;
    padding: 10px;
    height: 36px;
    font-weight: 600;
    font-size: 24px;
    color: #cccccc;
    line-height: 25px;
    font-weight: 500;
    ${customMedia.lessThan("notebook")`
            font-size:18px;
        `}
    ${customMedia.lessThan("tablet")`
            font-size:24px;
        `}
        ${customMedia.lessThan("mobile")`
            font-size:16px;
        `}
  }
`;

export const BlocoConheca2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 50%;
  height: 260px;
  ${customMedia.lessThan("tablet")`
            width:100%;
        `}

  transition: 0.5s;

  cursor: pointer;

  background-image: url("/images/Home/conheca01.jpg");
  background-repeat: no-repeat;
  background-size: 120%;

  .backgroundGradiente {
    background: transparent
      radial-gradient(farthest-corner at 40px 40px, #eebf58 0%, #a1823c5a 100%);
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .backgroundGradiente2 {
    background: transparent
      radial-gradient(farthest-corner at 40px 40px, #eebf58 0%, #a1823c5a 50%);
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  img {
    margin: 40px 40px 10px 40px;
    width: 100px;
  }

  span {
    margin-left: 50px;
    padding: 10px;
    height: 36px;
    font-weight: 500;
    font-size: 24px;
    line-height: 25px;

    ${customMedia.lessThan("notebook")`
      font-size:18px;
    `}
    ${customMedia.lessThan("tablet")`
      font-size:24px;
    `}
    ${customMedia.lessThan("mobile")`
      font-size:16px;
    `}
  }

  .segundaFrase {
    font-weight: 500;
  }
`;
export const ConjuntoMid = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  width: 90%;
  max-width: 1920px;
  margin: 0px auto;
  ${customMedia.lessThan("notebook")` 
    flex-direction: column;
  `}
  ${customMedia.lessThan("ipobre")`
     gap:10px;
  `}
`;

export const ConjuntoBottom = styled.div`
  display: flex;
  gap: 20px;

  ${customMedia.lessThan("tablet")`
    flex-direction:column;
    margin-bottom:200px;
  `}
`;

export const ContainerBottom = styled.div`
  display: block;

  width: 100%;
  position: relative;
  max-width: 1920px;

  .slick-list {
    padding: 0px;
  }

  .slick-slide {
    margin-top: 5px;
  }
`;

export const SecondaryBanner = styled.div`
  width: 100%;
  max-width: 1920px;
  height: auto;
  margin: 30px 0px 0px 0px;
`;

export const BannerDesktop = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const BannerMobile = styled.div`
  width: 100%;
  height: auto;
  @media only screen and (min-width: 699px) {
    display: none;
  }
`;

export const ContainerGeneral = styled.div`
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  padding: 0px 12%;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${customMedia.lessThan("1366px")`
    padding: 0px 5%;
  `}

  ${customMedia.lessThan("tablet")`
    padding:0px 10px;
  `}

  .labelShowCase {
    align-self: flex-start;
    position: relative;
    margin-bottom: 10px;
    margin-top: 20px;
    font-size: 25px;
    font-weight: bold;
    max-width: 1920px;
    ${customMedia.lessThan("tablet")`
   font-size: 20px;
  `}
    &.noSlider {
      margin-bottom: 5px;
    }
  }
`;
export const BoxNextArrow = styled.div`
  display: flex;

  .slick-next:before {
    display: flex;
    width: 20px;
    height: 20px;
    color: var(--font-color);
    background-size: 20px 20px;
  }
`;

export const BoxPrevArrow = styled.div`
  display: flex;

  .slick-prev:before {
    display: flex;
    width: 20px;
    height: 20px;
    color: var(--font-color);
    background-size: 20px 20px;
  }
`;
