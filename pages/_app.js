import GlobalStyles from "../styles/globals";
import defaultLayout from "../jover";

import { LangProvider } from "../Context/LangContext";
import { AuthProvider } from "../Context/AuthContext";
import { CartLengthProvider } from "../Context/CartLengthContext";
import { ColorThemeProvider } from "../Context/ColorTheme";
import { LocationProvider } from "../Context/Location";
import { MenuProvider } from "../Context/Menu";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <LangProvider>
      <AuthProvider>
        <CartLengthProvider>
          <ColorThemeProvider>
            <LocationProvider>
              <MenuProvider>
                <ToastContainer />
                <GlobalStyles
                  colors={
                    process.env.NEXT_PUBLIC_REACT_APP_MMP_STATE === "true"
                      ? selectedMkt
                      : defaultLayout
                  }
                />

                <Component {...pageProps} />
              </MenuProvider>
            </LocationProvider>
          </ColorThemeProvider>
        </CartLengthProvider>
      </AuthProvider>
    </LangProvider>
  );
}

export default MyApp;
