import React from "react";

import ProductCardComponent from "./ProductCard";

// Css do componente

const ProductCard = ({ hit, slider, page, appImagesUrl }) => {
  return (
    <>
      <ProductCardComponent
        hit={hit}
        slider={slider}
        page={page}
        appImagesUrl={appImagesUrl}
      />
    </>
  );
};

export default ProductCard;
