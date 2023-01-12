import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import ListHomeProducts from "../../components/ListHomeProducts";

import * as S from "./style";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Configure,
  InstantSearch,
  RefinementList,
} from "react-instantsearch-dom";
import Slider from "react-slick";
import { useRouter } from "next/router";

function HomePage(props) {
  const history = useRouter();
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
            width: "60px",
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
            width: "60px",
            zIndex: "1",

            left: "0px",
          }}
          onClick={onClick}
        />
      </S.BoxPrevArrow>
    );
  }

  const settings1 = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  let settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1500,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: props?.menu?.length > 7 ? 7 : props?.menu?.length,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          infinite: true,
          arrows: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          dots: false,
          infinite: true,
          arrows: true,
          speed: 1500,
          autoplaySpeed: 2000,
          slidesToShow: props?.menu?.length > 7 ? 7 : props?.menu?.length,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          infinite: true,
          arrows: true,
          speed: 1500,
          autoplaySpeed: 2000,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          dots: false,
          infinite: true,
          arrows: true,
          speed: 1500,
          autoplaySpeed: 2000,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 830,
        settings: {
          dots: false,
          infinite: true,
          arrows: true,
          speed: 1500,
          autoplay: false,
          autoplaySpeed: 2000,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  useEffect(() => {
    const promotions = props.banners.web.map((banner, key) => ({
      id: banner.alt,
      name: banner.title,
      creative: banner.img,
      position: `Position ${key} of the Slider`, // Pode ser desde uma área do site ou até mesmo uma posição em um slider
    }));
    window.dataLayer &&
      window.dataLayer.push({
        event: "promoView",
        ecommerce: {
          promoView: {
            promotions,
          },
        },
      });
  }, []);

  function redirect(url) {
    window.location.href = url;
  }

  return (
    <S.ContainerGeneral>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_REACT_APP_DESCRIPTION}
        />
        <title>{process.env.NEXT_PUBLIC_REACT_APP_TITLE}</title>
      </Helmet>
      <S.BannerContainer>
        <S.sliderBrowser>
          <Slider {...settings1}>
            {props.banners !== false &&
            props.banners !== undefined &&
            props.banners.web.length > 0
              ? props.banners.web.map((item, index) => (
                  <a
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window?.dataLayer &&
                        window?.dataLayer.push({
                          event: "promotionClick",
                          ecommerce: {
                            promoClick: {
                              promotions: [
                                {
                                  id: item.alt,
                                  name: item.title,
                                  creative: item.img,
                                  position: index,
                                },
                              ],
                            },
                          },
                        }),
                        item.url !== "" && redirect(item.url);
                    }}
                  >
                    <S.ImageBannerWeb
                      alt={item.alt}
                      title={item.title}
                      src={item.img}
                    />
                  </a>
                ))
              : ""}
          </Slider>
        </S.sliderBrowser>
        <S.sliderMobile>
          <Slider {...settings1}>
            {props.banners !== false &&
            props.banners !== undefined &&
            props.banners.mobile.length > 0
              ? props.banners.mobile.map((item, index) => (
                  <a
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window?.dataLayer &&
                        window.dataLayer.push({
                          event: "promotionClick",
                          ecommerce: {
                            promoClick: {
                              promotions: [
                                {
                                  id: item.alt,
                                  name: item.title,
                                  creative: item.img,
                                  position: index,
                                },
                              ],
                            },
                          },
                        }),
                        item.url !== "" && redirect(item.url);
                    }}
                  >
                    <S.ImageBannerMobile
                      alt={item.alt}
                      title={item.title}
                      src={item.img}
                    />
                  </a>
                ))
              : ""}
          </Slider>
        </S.sliderMobile>
      </S.BannerContainer>

      <S.slider>
        <h2 className="produtos-txt first">Categorias</h2>

        <Slider {...settings}>
          {props?.menu?.map((attr, index) => (
            <a key={attr.id} className="containerCategorias">
              <div
                onClick={() => redirect(`/category/${attr.name}`)}
                id="imgDiv"
                style={{ background: `url(${attr.image_detail})` }}
              ></div>
            </a>
          ))}
        </Slider>
      </S.slider>

      <S.sliderProduct>
        <h2 className="produtos-txt">Lançamentos</h2>
        <InstantSearch {...props}>
          <S.ContainerBottom>
            <Configure hitsPerPage={12} />
            <S.HideElement>
              <RefinementList attribute="son_new" defaultRefinement={["Sim"]} />
            </S.HideElement>

            <ListHomeProducts attribute="son_new" category="Lancamentos" />
          </S.ContainerBottom>{" "}
        </InstantSearch>
      </S.sliderProduct>

      <S.SecondaryBanner>
        <S.BannerDesktop>
          {props.banners !== false &&
          props.banners !== undefined &&
          props.banners["web-secondary"] !== undefined ? (
            <a
              style={{ cursor: "pointer" }}
              onClick={() => redirect(props.banners["web-secondary"][0].url)}
            >
              <S.ImageBannerWeb
                alt={props.banners["web-secondary"][0].alt}
                title={props.banners["web-secondary"][0].title}
                src={props.banners["web-secondary"][0].img}
              />
            </a>
          ) : (
            ""
          )}
        </S.BannerDesktop>

        <S.BannerMobile>
          {props.banners !== false &&
          props.banners !== undefined &&
          props.banners["mobile-secondary"] !== undefined ? (
            <a
              style={{ cursor: "pointer" }}
              onClick={() => redirect(props.banners["mobile-secondary"][0].url)}
            >
              <S.ImageBannerMobile
                alt={props.banners["mobile-secondary"][0].alt}
                title={props.banners["mobile-secondary"][0].title}
                src={props.banners["mobile-secondary"][0].img}
              />
            </a>
          ) : (
            ""
          )}
        </S.BannerMobile>
      </S.SecondaryBanner>
      {process.env.NEXT_PUBLIC_REACT_APP_PHOTOBOOK_MODULE_ACTIVE === "true" && (
        <S.ConjuntoMid>
          <S.BlocoExplore onClick={() => history.push("/inspire")}>
            <div className="blocoImage">
              <img
                src="/images/fotooo.jpg"
                loading="lazy"
                alt="Sala com sofá azul no centro"
              />
            </div>
            <span>Inspire-se</span>
          </S.BlocoExplore>
          <S.BlocoExplore onClick={() => history.push("/findpromoters")}>
            <div className="blocoImage">
              <img
                loading="lazy"
                src="/images/encontre.jpg"
                alt="Arquiteto desenhando"
              />
            </div>
            <span>Encontre profissionais</span>
          </S.BlocoExplore>
        </S.ConjuntoMid>
      )}

      <S.sliderProduct>
        <h2 className="produtos-txt">Recomendados</h2>
        <InstantSearch {...props}>
          <S.ContainerBottom>
            <Configure hitsPerPage={12} />
            <S.HideElement>
              <RefinementList
                attribute="son_featured"
                defaultRefinement={["Sim"]}
              />
            </S.HideElement>

            <ListHomeProducts
              attribute="son_featured"
              category="Recomendados"
            />
          </S.ContainerBottom>
        </InstantSearch>
      </S.sliderProduct>
    </S.ContainerGeneral>
  );
}

export default HomePage;
