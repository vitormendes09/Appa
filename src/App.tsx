import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { MenuSuperior } from "./shared/components";
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


