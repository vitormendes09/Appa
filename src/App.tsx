import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { MenuSuperior } from "./shared/components";
export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuSuperior/>
        
      </BrowserRouter>
    </AppThemeProvider>
  );
}


