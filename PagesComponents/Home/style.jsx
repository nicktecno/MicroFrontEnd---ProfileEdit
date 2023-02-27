import styled from "styled-components";

import { generateMedia } from "styled-media-query";
import { CartCheckFill } from "@styled-icons/bootstrap/CartCheckFill";
import { CartXFill } from "@styled-icons/bootstrap/CartXFill";
import { Youtube } from "@styled-icons/bootstrap/Youtube";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { Pinterest } from "@styled-icons/entypo-social/Pinterest";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
  irico: "414px",
  ipobre: "375px",
  pobre: "330px",
});

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

export const BannerContainer = styled.div`
  max-width: 1920px;
  width: 100%;

  .slick-dots {
    li {
      button:before {
        font-size: 20px !important;
      }
    }
  }
`;
export const ImageBannerWeb = styled.img`
  width: 100%;
  height: auto;
`;
export const ImageBannerMobile = styled.img`
  width: 100%;
  height: auto;
`;

export const sliderBrowser = styled.div`
  align-self: center;
  align-items: center;
  max-width: 1920px;
  width: 100%;

  a {
    display: flex !important;
    width: 100% !important;
  }

  ${customMedia.lessThan("tablet")`
   display:none;
        `}
`;
export const sliderMobile = styled.div`
  margin-bottom: 50px;
  .carousel-control-prev {
    transition: 0.3s;

    height: 100%;
    width: 40px;
  }
  .carousel-control-prev-icon {
    height: 20px;
    width: 20px;
  }

  .carousel-control-next {
    transition: 0.3s;

    height: 100%;
    width: 40px;
  }
  .carousel-control-next-icon {
    height: 20px;
    width: 20px;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const slider = styled.div`
  position: relative;
  margin: 0 5%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  .container {
    width: 100%;
  }

  box-sizing: border-box;

  .container {
    margin: 0;
    max-width: 100%;
    width: 100%;
    text-align: start;
    ${customMedia.lessThan("mobile")`
    margin:0;
       
          max-width: 100%;
          width: 100%;
          overflow: visible;
          max-height: 300px;
          padding: 0;
        `}
  }

  .slick-slider {
    width: 97%;
  }
  .slick-slide {
    margin: 15px 0;
  }

  .slick-list {
    padding: 0px 0px 0px 5px;

    width: 100%;
  }

  .slick-prev {
    left: 18px !important;
    color: var(--font-color);

    height: 30px;
    width: 30px;
    margin-right: 20px;
    margin-bottom: 30px;
    z-index: 99;
    :before {
      display: flex;
      width: 20px;
      height: 20px;
      background-image: url("images/leftArrow.png");
      background-size: 20px 20px;
      content: "";
    }
  }
  .slick-next {
    right: 7px !important;
    color: var(--font-color);

    height: 30px;
    width: 30px;
    margin-left: 20px;
    z-index: 99;
    :before {
      display: flex;
      width: 20px;
      height: 20px;
      background-image: url("images/rightArrow.png");
      background-size: 20px 20px;
      content: "";
    }
  }

  .produtos-txt {
    font-size: 40px;
    font-weight: 700;
    color: var(--title-color);
    margin-bottom: 15px !important;

    ${customMedia.lessThan("1920px")`
   margin-left: 2%;
        `}
    ${customMedia.lessThan("desktop")`
    font-size: 32px;
        `}
            ${customMedia.lessThan("tablet")`
    font-size: 28px;
        `}
    ${customMedia.lessThan("mobile")`
        margin-left: 12px !important;
        margin-bottom: 0px !important;
        font-size: 23px;
        `}
  }

  a {
    margin-top: 10px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100% !important;
    cursor: pointer;
  }
  #imgDiv {
    background-size: contain !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
  }
  img {
    width: auto;
    max-width: 100%;
    margin: 0;
    padding: 0 5px;
  }
  .slick-initialized .slick-slide {
    margin-top: 0px;
    div {
      width: 100%;
      height: 0;
      padding-bottom: 100% !important;
    }
  }

  h2 {
    align-self: start;
  }

  h3 {
    position: relative;
    font-size: 18px;
    font-weight: 700;
    margin: 5px;
    display: block;
    text-align: center;
    width: 100%;

    ${customMedia.lessThan("tablet")`
            font-size: 14px;
        `}
  }

  ${customMedia.lessThan("mobile")` 
	max-width: 100%;
	margin:0;

	.slick-list{
		padding:0;
	}
	`}
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
    .slick-prev:before {
      display: flex;
      width: 20px;
      height: 20px;
      background-image: url("images/leftArrow.png");
      background-size: 20px 20px;
      content: "";
    }
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
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-left: 0px;
  padding-right: 0px;
  ${customMedia.lessThan("tablet")`
            margin-bottom:20px;
        `}
`;

export const SecondaryBanner = styled.div`
  width: 90%;
  max-width: 1900px;
  height: auto;
  margin: 60px auto;
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
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const BoxNextArrow = styled.div`
  display: flex;

  .slick-next:before {
    display: flex;
    width: 20px;
    height: 20px;
    background-image: url("images/rightArrow.png");
    background-size: 20px 20px;
    content: "";
  }
`;

export const BoxPrevArrow = styled.div`
  display: flex;

  .slick-prev:before {
    display: flex;
    width: 20px;
    height: 20px;
    background-image: url("images/leftArrow.png");
    background-size: 20px 20px;
    content: "";
  }
`;
