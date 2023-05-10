import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as S from "./styles";

import {
  Configure,
  RefinementList,
  InstantSearch,
} from "react-instantsearch-dom";

import algoliasearch from "algoliasearch";
import ProductList from "../../components/ProductList";

function NotFoundComponent({
  appAlgoliaId,
  appAlgoliaApiKey,
  appAlgoliaIndexSearch,
  mktName,
  appImagesUrl,
  routeTranslations,
}) {
  const router = useRouter();
  const [order, setOrder] = useState("_asc");
  const [buscaSite, setBuscaSite] = useState("");

  const handleBusca = (e) => {
    e.preventDefault();

    if (buscaSite.length === 0) {
      document.body.style.overflow = "auto";
      router.push(`/search/`);
    } else {
      document.body.style.overflow = "auto";

      setBuscaSite("");
      router.push("/search/" + buscaSite.replace(/\s/g, "+"));
    }
  };

  const searchClient = algoliasearch(appAlgoliaId, appAlgoliaApiKey);

  return (
    <S.ContainerGeneral>
      <InstantSearch
        indexName={appAlgoliaIndexSearch + order}
        searchClient={searchClient}
      >
        <S.Container>
          <h2>Ops, página não encontrada</h2>
        </S.Container>

        <S.SearchContainer onSubmit={handleBusca}>
          <S.SearchBox>
            <S.SearchBar>
              <label htmlFor="search">
                Que tal procurar um produto no marketplace?
                <S.ContainerInput>
                  <S.ContainerIcon>
                    <S.BuscaIcon onClick={handleBusca} />
                  </S.ContainerIcon>
                  <input
                    id="search"
                    type="text"
                    value={buscaSite}
                    onChange={(e) => setBuscaSite(e.target.value)}
                  />
                </S.ContainerInput>
              </label>
              <button className="searchButton positiveButton">Pesquisar</button>
            </S.SearchBar>
          </S.SearchBox>
        </S.SearchContainer>

        <S.ContainerBottom>
          <h2 className="labelShowCase">Produto populares</h2>
          <Configure hitsPerPage={12} />
          <S.HideElement>
            <RefinementList attribute="son_featured" defaultRefinement="Sim" />
          </S.HideElement>

          <ProductList
            slider="noSlider"
            attribute="son_featured"
            category="Recomendados"
            page="home"
            mktName={mktName}
            appImagesUrl={appImagesUrl}
          />
        </S.ContainerBottom>
      </InstantSearch>
    </S.ContainerGeneral>
  );
}
export default NotFoundComponent;
