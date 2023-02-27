import { connectInfiniteHits } from "react-instantsearch-dom";
import * as S from "./styles";
import ProductCard from "../ProductCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Hits = ({
  mktName,
  appImagesUrl,
  hits,
  hasMore,
  refineNext,
  ...rest
}) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <S.BoxNextArrow>
        <div
          className={className}
          style={{
            ...style,
            display: "flex",
            position: "absolute",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            width: "30px",
            zIndex: "1",

            right: "0px",
          }}
          onClick={onClick}
        />
      </S.BoxNextArrow>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <S.BoxPrevArrow>
        <div
          className={className}
          style={{
            ...style,
            display: "flex",
            position: "absolute",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            width: "30px",
            zIndex: "1",

            left: "0px",
          }}
          onClick={onClick}
        />
      </S.BoxPrevArrow>
    );
  }

  const settingsProducts = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    variableWidth: true,
    slidesToShow: hits.length > 7 ? 7.3 : hits.length,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 2220,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: hits.length > 7 ? 6 : hits.length,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1840,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 5.8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1640,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 5.3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1480,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 4.8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1310,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 4.3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 3.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 980,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 840,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 2.8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 630,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 2.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 1.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 370,
        settings: {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const history = useRouter();
  const [dataLayerState, setDataLayerState] = useState(false);

  useEffect(() => {
    if (window.dataLayer !== undefined) {
      if (hits.length > 0) {
        dataLayerTrigger();
      }
    } else {
      setDataLayerState(true);
    }
  }, [dataLayerState]);

  async function dataLayerTrigger() {
    if (rest.page === "home") {
      const DadosProdutos = hits.map((produto, i) => ({
        name: produto.son_name,
        id: String(produto.id),
        price:
          produto.son_offers !== undefined &&
          produto.son_offers !== null &&
          produto.son_offers.length > 0
            ? produto?.son_offers[0].price.toFixed(2).toString()
            : "Indisponível",
        brand: produto.brand,

        category:
          produto.categories.lvl0 !== undefined
            ? produto.categories.lvl0
            : "Sem categoria",
        position: i + 1,
      }));

      window.dataLayer.push({
        event: "impressions",
        userId:
          localStorage.getItem(`${mktName}_userId`) !== undefined &&
          localStorage.getItem(`${mktName}_userId`) !== null
            ? parseInt(localStorage.getItem(`${mktName}_userId`))
            : "Sem Login",
        pageCategory: rest.page,
        pageTitle: rest.page,
        ecommerce: {
          currencyCode: "BRL",
          impressions: DadosProdutos,
        },
      });
    } else if (rest.page === "search") {
      const DadosProdutos = hits.map((produto) => ({
        name: produto.name,
        id: String(produto.id),
        price:
          produto.son_offers !== undefined && produto.son_offers !== null
            ? produto?.son_offers[0].price.toFixed(2).toString()
            : "Indisponível",
        brand: produto.brand,
        variant: produto.son_sku,
        category:
          produto.categories.lvl0 !== undefined
            ? produto.categories.lvl0.length === undefined
              ? produto.categories.lvl0
              : produto.categories.lvl0[1]
            : "Sem categoria",
      }));

      window.dataLayer.push({
        event: "internalSiteSearchView",
        userId:
          localStorage.getItem(`${mktName}_userId`) !== undefined &&
          localStorage.getItem(`${mktName}_userId`) !== null
            ? parseInt(localStorage.getItem(`${mktName}_userId`))
            : "Sem Login",
        pageCategory: rest.page,
        pageTitle: "Result search page",

        impressions: DadosProdutos,
      });
    }
  }

  console.log(rest);

  return (
    <>
      {hits !== undefined &&
        hits !== null &&
        hits !== [] &&
        hits.length > 0 && (
          <>
            {rest.slider === "slider" ? (
              <Slider {...settingsProducts}>
                {hits.map((hit, index) => (
                  <ProductCard
                    key={index}
                    hit={hit}
                    slider={rest.slider}
                    page={rest.page}
                    appImagesUrl={appImagesUrl}
                  />
                ))}
              </Slider>
            ) : (
              <S.ProductsContainer page={rest.page}>
                {hits.map((hit, index) => (
                  <ProductCard
                    key={index}
                    hit={hit}
                    slider={rest.slider}
                    page={rest.page}
                    appImagesUrl={appImagesUrl}
                  />
                ))}
              </S.ProductsContainer>
            )}

            {hasMore && rest.page === "search" && (
              <S.ContainerSeeMoreAlgolia>
                {hasMore && (
                  <button
                    className="positiveButton"
                    disabled={!hasMore}
                    onClick={refineNext}
                  >
                    VER MAIS
                  </button>
                )}
              </S.ContainerSeeMoreAlgolia>
            )}
            {rest.page === "home" && (
              <S.SearchButton>
                <button
                  className="positiveButton"
                  onClick={() =>
                    history.push(`/seemore/${rest.category}/${rest.attribute}`)
                  }
                >
                  VER MAIS
                </button>{" "}
              </S.SearchButton>
            )}
          </>
        )}
    </>
  );
};

const ProductList = connectInfiniteHits(Hits);

export default ProductList;
