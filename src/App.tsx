import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { MenuSuperior } from "./shared/components";
import { WelcomeMessage } from "./shared/components/welcomeMessage/WelcomeMessage";
import { Box } from "@mui/material";
import MaisUsados from "./shared/components/category/maisUsados";
import ParaRedesSociais from "./shared/components/category/paraRedesSociais";
import TrafegoPago from "./shared/components/category/trafegoPago"
import Estudos from "./shared/components/category/estudos";
import { Footer } from "./shared/components/footer/footer";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuSuperior/>
        <WelcomeMessage /> 
       <MaisUsados/>
       <ParaRedesSociais/>
       <TrafegoPago/>
       <Estudos/>
       <Footer/>
      </BrowserRouter>
    </AppThemeProvider>
  );
}


