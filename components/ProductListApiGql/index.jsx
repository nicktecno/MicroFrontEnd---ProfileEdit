import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductListApiGqlComponent from "./ProductListApiGql";

const Hits = ({ hits, page, slider, mktName, appImagesUrl }) => {
  return (
    <>
      <ProductListApiGqlComponent
        hits={hits}
        page={page}
        slider={slider}
        mktName={mktName}
        appImagesUrl={appImagesUrl}
      />
    </>
  );
};

const ProductListApiGql = Hits;

export default ProductListApiGql;
