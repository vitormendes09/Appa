import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { MenuSuperior } from "./shared/components";
import { WelcomeMessage } from "./shared/components/paginainicial/welcomeMessage/WelcomeMessage";
import { Box } from "@mui/material";
import MaisUsados from "./shared/components/paginainicial/category/maisUsados";
import ParaRedesSociais from "./shared/components/paginainicial/category/paraRedesSociais";
import TrafegoPago from "./shared/components/paginainicial/category/trafegoPago"
import Estudos from "./shared/components/paginainicial/category/estudos";
import { Footer } from "./shared/components/footer/footer";
import useFavicon from "./shared/hooks";
export const App = () => {

  useFavicon("/favicon_transparent.png")
  return (

    <AppThemeProvider>
      <BrowserRouter>
        <MenuSuperior />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </AppThemeProvider>
  );
}


