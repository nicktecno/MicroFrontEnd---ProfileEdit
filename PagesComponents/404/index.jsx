import React, { useState, useEffect } from "react";
import { useLang } from "../../Context/LangContext";

import NotFoundComponent from "./404";

const NotFoundPage = () => {
  const { routeTranslations } = useLang();

  const appAlgoliaId = process.env.NEXT_PUBLIC_REACT_APP_ALGOLIA_APP_ID;
  const appAlgoliaApiKey =
    process.env.NEXT_PUBLIC_REACT_APP_ALGOLIA_SEARCH_API_KEY;
  const appAlgoliaIndexSearch =
    process.env.NEXT_PUBLIC_REACT_APP_ALGOLIA_INDEX_SEARCH;
  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;
  const appImagesUrl = process.env.NEXT_PUBLIC_REACT_APP_IMAGES_URL;

  return (
    <>
      <NotFoundComponent
        appAlgoliaId={appAlgoliaId}
        appAlgoliaApiKey={appAlgoliaApiKey}
        appAlgoliaIndexSearch={appAlgoliaIndexSearch}
        mktName={mktName}
        appImagesUrl={appImagesUrl}
        routeTranslations={routeTranslations}
      />
    </>
  );
};
export default NotFoundPage;
