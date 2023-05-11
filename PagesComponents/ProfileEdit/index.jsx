import React from "react";

import api from "../../services/api";

import ProfileEditComponent from "./profileEditPage";

import { useCart } from "../../Context/CartLengthContext";
import { useLang } from "../../Context/LangContext";

function ProfileEditPage() {
  const { setCartLength } = useCart();
  const { routeTranslations } = useLang();
  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;

  return (
    <>
      <ProfileEditComponent
        mktName={mktName}
        setCartLength={setCartLength}
        api={api}
        routeTranslations={routeTranslations}
      />
    </>
  );
}

export default ProfileEditPage;
