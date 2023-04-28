import styled from "styled-components";

import { generateMedia } from "styled-media-query";
const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
  irico: "414px",
  ipobre: "375px",
  pobre: "330px",
});

export const ProductsContainer = styled.div`
  max-width: ${(props) => (props.page !== "home" ? "100%" : "1920px")};
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-start;
  margin-bottom: 20px;

  ${customMedia.lessThan("tablet")`
    margin-left:20px;

    `}

  #NoProductsDiv {
    font-size: 27px;
    color: var(--default-color-hover);
    min-height: 200px;
    margin-top: 30px;
  }

  ${customMedia.lessThan("1370px")`
//  justify-content: space-evenly;

    `}
`;

export const SearchButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 1920px;
  border-radius: 2px;
  button {
    width: 200px;
    height: 40px;
    font-weight: 600;
    border: none;
  }
`;

export const BoxNextArrow = styled.div`
  display: flex;

  .slick-next:before {
    display: flex;
    width: 20px;
    height: 20px;

    background-size: 20px 20px;
    color: var(--font-color);
  }
`;

export const BoxPrevArrow = styled.div`
  display: flex;

  .slick-prev:before {
    display: flex;
    width: 20px;
    height: 20px;

    background-size: 20px 20px;
    color: var(--font-color);
  }
`;

export const ContainerSeeMoreAlgolia = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 45px;

  ${customMedia.lessThan("899px")`
  margin-top: 40px;
  margin-bottom: 80px;
  
  `}

  button {
    border: 0px;
    padding: 10px 50px;
    transition: 0.3s;
  }
`;
