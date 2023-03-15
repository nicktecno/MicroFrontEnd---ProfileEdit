import React from "react";

import CurrencyFormat from "../../services/currencyFormat";

// Css do componente
import * as S from "./styles";

const ProductCardComponent = ({ hit, slider, page, appImagesUrl }) => {
  const dataLayerTrigger = function () {
    if (page !== "home" && page !== "search") {
      window.dataLayer.push({
        event: "productClick",
        ecommerce: {
          click: {
            actionField: { list: hit.name },
            products: [
              {
                name: hit.name,
                id:
                  hit.offers !== undefined &&
                  hit.offers !== null &&
                  hit.offers.length > 0
                    ? hit?.offers[0].id.toString()
                    : "Indisponível",
                price:
                  hit.offers !== undefined && hit.offers !== null
                    ? hit?.offers[0].price.toFixed(2).toString()
                    : "Indisponível",
                brand: hit.brand,
              },
            ],
          },
        },
      });
    } else {
      window.dataLayer.push({
        event: "productClick",
        ecommerce: {
          click: {
            actionField: { list: hit.son_name },
            products: [
              {
                name: hit.son_name,
                id:
                  hit.son_offers !== undefined &&
                  hit.son_offers !== null &&
                  hit.son_offers.length > 0
                    ? hit?.son_offers[0].id.toString()
                    : "Indisponível",
                price:
                  hit.son_offers !== undefined &&
                  hit.son_offers !== null &&
                  hit.son_offers.length > 0
                    ? hit?.son_offers[0].price.toFixed(2).toString()
                    : "Indisponível",
                brand: hit.brand,
                variant: hit.son_sku,
                category:
                  hit.categories.lvl0 !== undefined
                    ? hit.categories.lvl0
                    : "Sem categoria",
              },
            ],
          },
        },
      });
    }
  };

  function invertColor(hex, bw) {
    if (hex.indexOf("#") === 0) {
      hex = hex.slice(1);
    }

    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error("Invalid HEX color.");
    }
    var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
      return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
    }
  }

  return (
    <S.CaixaProduto
      page={page}
      slider={slider}
      onClick={dataLayerTrigger}
      href={
        page === "seller"
          ? `/sellerproduct/${hit.offers[0].marketplace_seller_id}/${hit.url_key}`
          : page !== "home" && page !== "search"
          ? `/product/${hit.url_key}`
          : `/product/${hit.son_url_key}`
      }
    >
      <>
        <S.ProdutoImg>
          <img
            alt={page !== "search" && page !== "home" ? hit.name : hit.son_name}
            src={
              page !== "search" && page !== "home"
                ? hit.images !== null && hit.images.length > 0
                  ? `${appImagesUrl}/${hit.images[0].path}`
                  : "/images/produto-marcacao.png"
                : hit.son_images !== null && hit.son_images.length > 0
                ? hit.son_images[0].medium_image_url
                : hit.images !== null
                ? hit.images[0].medium_image_url
                : "/images/produto-marcacao.png"
            }
          />

          {page !== "search" && page !== "home" ? (
            page === "product" ? (
              <>
                {hit.stamps[0] !== null && hit.stamps[0].code === "stamp1" && (
                  <div
                    style={{
                      color:
                        hit.stamps[0].color === undefined
                          ? invertColor("#690000", true)
                          : hit.stamps[0].color === ""
                          ? invertColor("#690000", true)
                          : invertColor(hit.stamps[0].color, true),

                      backgroundColor:
                        hit.stamps[0].color === undefined
                          ? "#690000"
                          : hit.stamps[0].color === ""
                          ? "#690000"
                          : hit.stamps[0].color,
                    }}
                    className="stamp1"
                  >
                    {hit.stamps[0].value !== undefined
                      ? hit.stamps[0].value
                      : hit.stamps[0].value}
                  </div>
                )}
              </>
            ) : (
              <>
                {hit.stamp1 !== undefined &&
                  hit.stamp1 !== null &&
                  hit.stamp1 !== 0 && (
                    <div
                      style={{
                        color:
                          hit.stamp1.swatch === undefined
                            ? invertColor("#690000", true)
                            : hit.stamp1.swatch === ""
                            ? invertColor("#690000", true)
                            : invertColor(hit.stamp1.swatch, true),

                        backgroundColor:
                          hit.stamp1.swatch === undefined
                            ? "#690000"
                            : hit.stamp1.swatch === ""
                            ? "#690000"
                            : hit.stamp1.swatch,
                      }}
                      className="stamp1"
                    >
                      {hit.stamp1.label !== undefined
                        ? hit.stamp1.label
                        : hit.stamp1}
                    </div>
                  )}
              </>
            )
          ) : (
            <>
              {hit.son_stamp1 !== 0 &&
                hit.son_stamp1 !== null &&
                hit.son_stamp1 !== undefined &&
                typeof hit.son_stamp1 !== "string" && (
                  <div
                    className="stamp1"
                    style={{
                      color:
                        hit.son_stamp1.color === ""
                          ? invertColor("#690000", true)
                          : invertColor(hit.son_stamp1.color, true),
                      backgroundColor:
                        hit.son_stamp1.color === ""
                          ? "#690000"
                          : hit.son_stamp1.color,
                    }}
                  >
                    {hit.son_stamp1.value}
                  </div>
                )}
            </>
          )}
        </S.ProdutoImg>

        <S.Texto>
          <h3>
            {page !== "search" && page !== "home" ? hit.name : hit.son_name}
          </h3>

          {page !== "search" && page !== "home" ? (
            page === "product" ? (
              <>
                {hit.stamps[1] !== null && hit.stamps[1].code === "stamp2" ? (
                  <div
                    style={{
                      color:
                        hit.stamps[1].color === undefined
                          ? invertColor("#690000", true)
                          : hit.stamps[1].color === ""
                          ? invertColor("#690000", true)
                          : invertColor(hit.stamps[1].color, true),

                      backgroundColor:
                        hit.stamps[1].color === undefined
                          ? "#690000"
                          : hit.stamps[1].color === ""
                          ? "#690000"
                          : hit.stamps[1].color,
                    }}
                    className="stamp2"
                  >
                    {hit.stamps[1].value !== undefined
                      ? hit.stamps[1].value
                      : hit.stamps[1].value}
                  </div>
                ) : (
                  <div className="stamp2 noOffer" />
                )}
              </>
            ) : (
              <>
                {hit.stamp2 !== undefined &&
                hit.stamp2 !== null &&
                hit.stamp2 !== 0 ? (
                  <div
                    style={{
                      color:
                        hit.stamp2.swatch === undefined
                          ? invertColor("#690000", true)
                          : hit.stamp2.swatch === ""
                          ? invertColor("#690000", true)
                          : invertColor(hit.stamp2.swatch, true),

                      backgroundColor:
                        hit.stamp2.swatch === undefined
                          ? "#690000"
                          : hit.stamp2.swatch === ""
                          ? "#690000"
                          : hit.stamp2.swatch,
                    }}
                    className="stamp2"
                  >
                    {hit.stamp2.label !== undefined
                      ? hit.stamp2.label
                      : hit.stamp2}
                  </div>
                ) : (
                  <div className="stamp2 noOffer" />
                )}
              </>
            )
          ) : (
            <>
              {hit.son_stamp2 !== 0 &&
              hit.son_stamp2 !== null &&
              hit.son_stamp2 !== undefined &&
              typeof hit.son_stamp2 !== "string" ? (
                <div
                  className="stamp2"
                  style={{
                    color:
                      hit.son_stamp2.color === ""
                        ? invertColor("#690000", true)
                        : invertColor(hit.son_stamp2.color, true),
                    backgroundColor:
                      hit.son_stamp2.color === ""
                        ? "#690000"
                        : hit.son_stamp2.color,
                  }}
                >
                  {hit.son_stamp2.value}
                </div>
              ) : (
                <div className="stamp2 noOffer" />
              )}
            </>
          )}

          {page !== "search" && page !== "home" ? (
            <>
              {hit.offers !== null &&
              hit.offers !== undefined &&
              hit.offers.length !== 0 &&
              hit.offers[0].price !== 0 ? (
                <div className="price">
                  <span className="priceBefore">
                    {hit.offers[0].of_to_view === true && (
                      <div className="value">
                        {CurrencyFormat(hit.offers[0].price)}
                      </div>
                    )}
                    {hit.offers[0].of_to_view && (
                      <div className="percentage">
                        -{hit.offers[0].promotional_percentage}%
                      </div>
                    )}
                  </span>
                  <div className="containerAfterPrice">
                    <span className="priceAfter">
                      {hit.offers[0].of_to_view === true
                        ? `${CurrencyFormat(hit.offers[0].promotional_price)}`
                        : `${CurrencyFormat(hit.offers[0].price)}`}
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  {hit.offer !== null &&
                  hit.offer !== undefined &&
                  hit.offer.length !== 0 &&
                  hit.offer.price !== 0 ? (
                    <div className="price">
                      <span className="priceBefore">
                        {hit.offer.of_to_view === true &&
                          `${CurrencyFormat(hit.offer.price)}`}
                      </span>
                      <div className="containerAfterPrice">
                        <span className="priceAfter">
                          {hit.offer.of_to_view === true
                            ? `${CurrencyFormat(hit.offer.promotional_price)}`
                            : `${CurrencyFormat(hit.offer.price)}`}
                        </span>
                        {hit.offer.of_to_view && (
                          <div className="percentage">
                            -{hit.offer.promotional_percentage}%
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="price">
                      <span className="unavailable">Produto indisponível</span>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {hit.son_offers !== null &&
              hit.son_offers.length !== 0 &&
              hit.son_offers[0] !== undefined &&
              hit.son_offers[0].price !== 0 ? (
                <div className="price">
                  <span className="priceBefore">
                    {hit.son_offers[0].of_to_view === true &&
                      `${CurrencyFormat(hit.son_offers[0].price)}`}
                  </span>
                  <div className="containerAfterPrice">
                    <span className="priceAfter">
                      {hit.son_offers[0].of_to_view === true
                        ? `${CurrencyFormat(
                            hit.son_offers[0].promotional_price
                          )}`
                        : `${CurrencyFormat(hit.son_offers[0].price)}`}
                    </span>

                    {hit.son_offers[0].of_to_view && (
                      <div className="percentage">
                        -{hit.son_offers[0].promotional_percentage}%
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="price">
                  <span className="unavailable">Produto indisponível</span>
                </div>
              )}
            </>
          )}

          {page !== "search" && page !== "home" ? (
            <>
              {hit.offers !== undefined && hit.offers[0] !== null ? (
                <S.PortionsContainer
                  className={hit.offers[0]?.interest_status && "interest"}
                >
                  Em até {hit.offers[0]?.installment?.installment_number}x{" "}
                  {CurrencyFormat(
                    hit.offers[0]?.installment?.installment_value
                  )}{" "}
                  {hit.offers[0]?.interest_status ? "com juros" : "sem juros"}
                </S.PortionsContainer>
              ) : (
                <>
                  {hit.offer !== undefined && hit.offer !== null && (
                    <S.PortionsContainer
                      className={hit.offer?.interest_status && "interest"}
                    >
                      Em até {hit.offer?.installment?.installment_number}x R${" "}
                      {CurrencyFormat(
                        hit.offer?.installment?.installment_value
                      )}{" "}
                      {hit.offer?.interest_status ? "com juros" : "sem juros"}
                    </S.PortionsContainer>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {hit.son_offers[0] !== undefined &&
                hit.son_offers[0] !== null && (
                  <S.PortionsContainer
                    className={hit.son_offers[0]?.interest_status && "interest"}
                  >
                    Em até {hit.son_offers[0]?.installment?.installment_number}x
                    R${" "}
                    {CurrencyFormat(
                      hit.son_offers[0]?.installment?.installment_value
                    )}{" "}
                    {hit.son_offers[0]?.interest_status
                      ? "com juros"
                      : "sem juros"}
                  </S.PortionsContainer>
                )}
            </>
          )}

          {page !== "search" && page !== "home" ? (
            page === "product" ? (
              <>
                {hit.stamps[2] !== null && hit.stamps[2].code === "stamp3" && (
                  <div
                    style={{
                      color:
                        hit.stamps[2].color === undefined
                          ? invertColor("#690000", true)
                          : hit.stamps[2].color === ""
                          ? invertColor("#690000", true)
                          : invertColor(hit.stamps[2].color, true),

                      backgroundColor:
                        hit.stamps[2].color === undefined
                          ? "#690000"
                          : hit.stamps[2].color === ""
                          ? "#690000"
                          : hit.stamps[2].color,
                    }}
                    className="stamp3"
                  >
                    {hit.stamps[2].value !== undefined
                      ? hit.stamps[2].value
                      : hit.stamps[2].value}
                  </div>
                )}
              </>
            ) : (
              <>
                {hit.stamp3 !== undefined &&
                  hit.stamp3 !== null &&
                  hit.stamp3 !== 0 && (
                    <div
                      style={{
                        color:
                          hit.stamp3.swatch === undefined
                            ? invertColor("#690000", true)
                            : hit.stamp3.swatch === ""
                            ? invertColor("#690000", true)
                            : invertColor(hit.stamp3.swatch, true),

                        backgroundColor:
                          hit.stamp3.swatch === undefined
                            ? "#690000"
                            : hit.stamp3.swatch === ""
                            ? "#690000"
                            : hit.stamp3.swatch,
                      }}
                      className="stamp3"
                    >
                      {hit.stamp3.label !== undefined
                        ? hit.stamp3.label
                        : hit.stamp3}
                    </div>
                  )}
              </>
            )
          ) : (
            <>
              {hit.son_stamp3 !== 0 &&
                hit.son_stamp3 !== null &&
                hit.son_stamp3 !== undefined &&
                typeof hit.son_stamp3 !== "string" && (
                  <div
                    className="stamp3"
                    style={{
                      color:
                        hit.son_stamp3.color === ""
                          ? invertColor("#690000", true)
                          : invertColor(hit.son_stamp3.color, true),
                      backgroundColor:
                        hit.son_stamp3.color === ""
                          ? "#690000"
                          : hit.son_stamp3.color,
                    }}
                  >
                    {hit.son_stamp3.value}
                  </div>
                )}
            </>
          )}
        </S.Texto>
      </>
    </S.CaixaProduto>
  );
};

export default ProductCardComponent;
