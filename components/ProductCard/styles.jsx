import styled from "styled-components";

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  netbook: "830px",
  tablet: "768px",
  mobile: "576px",
  irico: "414px",
  ipobre: "375px",
  pobre: "330px",
});

export const Texto = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 2px;

  h3 {
    font-size: 14px;
    font-weight: 400;

    height: 50px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .price {
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
    .priceBefore {
      display: flex;
      min-height: 18px;
      .value {
        font-size: 12px;
        text-decoration: line-through;

        color: #797979;
        ${customMedia.lessThan("340px")`
        font-size:10px;
        `};
      }

      .percentage {
        background-color: var(--default-color);
        text-decoration: none !important;
        color: var(--font-color);
        padding: 2px 5px;
        height: 15px;
        margin-left: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        max-height: 15px;
        width: max-content;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        ${customMedia.lessThan("340px")`
        font-size:10px;
        `};
      }
    }

    .containerAfterPrice {
      display: flex;

      flex-direction: column;
    }

    .priceAfter {
      font-size: 17px;
      font-weight: bold;

      ${customMedia.lessThan("340px")`
	font-size: ${(props) => (props.slider === "slider" ? "17px" : "15px")};
`}
    }

    .unavailable {
      margin-top: 20px;
      font-size: 17px;
    }
  }

  .stamp2 {
    font-weight: bold;

    position: relative;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;

    padding: 2px 10px;
    width: max-content;
    font-size: 13px;
    border-radius: 3px;
    &.noOffer {
      background: transparent;
      margin-bottom: 20px;
    }
    ${customMedia.lessThan("mobile")`
    padding: 0px 10px;
    font-size:13px;
     font-weight: 550;
     text-align:center;
     justify-self:center;
     justify-content:center;

    `}
    ${customMedia.lessThan("365px")`
     margin-left: 5px;
    `}
  }

  .stamp3 {
    font-weight: bold;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    font-size: 13px;

    width: max-content;
    padding: 2px 10px;
    border-radius: 3px;
  }
`;

export const ProdutoImg = styled.div`
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  min-height: 50%;
  max-height: 50%;
  position: relative;
  img {
    width: 100%;
    object-fit: contain;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 2px 2px 0px 0px;
  }

  .stamp1 {
    position: absolute;
    top: 0px;
    border-radius: 1px 1px 5px 5px;
    display: flex;

    flex-wrap: wrap;
    max-width: 100%;
    width: max-content;
    padding: 2px 5px;
    font-weight: bold;
    left: 0px;
    ${customMedia.lessThan("mobile")`
       font-weight: 550;
    font-size: 13px;
    overflow: hidden;
    display: -webkit-box;
    line-height: 13px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    `}
  }

  ${customMedia.lessThan("mobile")`
	height: 50%;
`}

  ${customMedia.lessThan("450px")`
	margin-bottom: 5px;
`}
`;

export const CaixaProduto = styled.a`
  width: ${(props) =>
    props.slider === "slider"
      ? "220px"
      : props.page === "search"
      ? "200px"
      : "200px"};
  height: 400px;
  display: flex;
  margin-right: ${(props) => (props.slider === "slider" ? "14px" : "0px")};

  flex-direction: column;
  background-color: var(--card-background);
  transition: 0.5s;
  box-shadow: rgb(231 231 231) 1px 2px 16px;
  color: var(--card-color-details) !important;
  border-radius: 2px;

  :hover {
    background-color: var(--card-background-hover);

    color: var(--card-color-details-hover) !important;
  }
  ${customMedia.lessThan("1920px")`
	width: ${(props) =>
    props.slider === "slider"
      ? "200px"
      : props.page === "search"
      ? "200px"
      : "15.69%"};
`}

  ${customMedia.lessThan("1700px")`
	width: ${(props) =>
    props.slider === "slider"
      ? "200px"
      : props.page === "search"
      ? "15.29%"
      : "15.49%"};
`}
  ${customMedia.lessThan("1400px")`
	width: ${(props) =>
    props.slider === "slider"
      ? "200px"
      : props.page === "search"
      ? "23.5%"
      : "23.7%"};
`}

${customMedia.lessThan("1366px")`
	width: ${(props) =>
    props.slider === "slider"
      ? "200px"
      : props.page === "search"
      ? "23.5%"
      : "18.8%"};
`}
 ${customMedia.lessThan("1180px")`
	width: ${(props) =>
    props.slider === "slider"
      ? "200px"
      : props.page === "search"
      ? "23.3%"
      : "23.6%"};
`}
${customMedia.lessThan("980px")`
	width: ${(props) =>
    props.slider === "slider"
      ? "200px"
      : props.page === "search"
      ? "31.3%"
      : "23.3%"};
`}
${customMedia.lessThan("768px")`
	width: ${(props) => (props.slider === "slider" ? "200px" : "30.5%")};
`}

${customMedia.lessThan("576px")`
	width: ${(props) => (props.slider === "slider" ? "200px" : "46%")};
`}
`;

export const PortionsContainer = styled.div`
  display: flex;
  font-size: 12px;
  margin: 3px 0px 5px 0px;
  color: var(--bt-purchase-color);
  min-height: 40px;
  margin-bottom: 0px;

  &.interest {
    color: var(--font-color);
  }
`;
