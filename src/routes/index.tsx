import { Button } from "@mui/material";
import {  Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";
import { PaginaInicial } from "../pages/inicial/paginalinical";
import { PaginaDesing } from "../pages/desing/desingpg";
import { PaginaAutomacao } from "../pages/automacao/paginaAutomacao";
import { PaginaDados } from "../pages/dados/dados";
import { PaginaEducacao } from "../pages/educacao/educacaopagina";
import { PaginaConteudo } from "../pages/conteudo/paginaConteudo";

export const AppRoutes = () => {
    
    return(
        <Routes>
            <Route path="/pagina-inicial" element ={<PaginaInicial/>} />
            <Route path="/pagina-automacao" element ={<PaginaAutomacao/>}/>
            <Route path="/pagina-desing" element = {<PaginaDesing/>}/>
            <Route path="/pagina-dados" element = {<PaginaDados/>}/>
            <Route path="/pagina-educacao" element = {<PaginaEducacao/>}/>
            <Route path="/pagina-conteudo" element = {<PaginaConteudo/>}/>
            
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    );
};