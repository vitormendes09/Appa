import { MenuSuperior } from "../../shared/components";
import { WelcomeMessage } from "../../shared/components/paginainicial/welcomeMessage/WelcomeMessage";
import MaisUsados from "../../shared/components/paginainicial/category/maisUsados";
import ParaRedesSociais from "../../shared/components/paginainicial/category/paraRedesSociais";
import TrafegoPago from "../../shared/components/paginainicial/category/trafegoPago";
import Estudos from "../../shared/components/paginainicial/category/estudos";
import { Footer } from "../../shared/components/footer/footer";
import { Box } from "@mui/material";

export const PaginaInicial = () => {

    return (
        <>
            <Box
            sx={{
                width: "100vw",
                height: "200vh"
            }}
            >
            
            <WelcomeMessage />
            <MaisUsados />
            <ParaRedesSociais />
            <TrafegoPago />
            <Estudos />
            </Box>
            
        </>
    )
}