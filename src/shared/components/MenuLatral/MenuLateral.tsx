import React from "react";
import { Drawer, Box, Button } from "@mui/material";
import { useAppThemeContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
interface MenuLateralProps {
  open: boolean;
  onClose: () => void;
}

export const MenuLateral: React.FC<MenuLateralProps> = ({ open, onClose }) => {
  const { themeName } = useAppThemeContext();
  const navigate = useNavigate();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "50vw", // 20% da largura da tela
          backgroundColor: themeName === "dark" ? "#121212" : "#FFFFFF",
          color: themeName === "dark" ? "#E0E0E0" : "#000000",
        },
      }}
    >
      <Box p={2}> {/* Conteúdo do menu lateral */}

        <Button sx={{
          width: "9rem",
          height: "2.5rem"
        }}
          variant="contained" onClick={() => { navigate("/pagina-desing"); onClose() }}
        >
          Desing
        </Button>
        <Button
          variant="contained" onClick={() => { navigate("/pagina-automacao"); onClose() }}
          sx={{
            marginTop: "1rem",
            width: "9rem",
            height: "2.5rem"

          }}

        >
          Produtividade
        </Button>
        <Button variant="contained" color="primary" onClick={() => { navigate("/pagina-dados"); onClose() }}
          sx={{
            marginTop: "1rem",
            width: "9rem",
            height: "2.5rem"
          }}
        >
          Dados
        </Button>
        <Button variant="contained" color="primary" onClick={() => { navigate("/pagina-educacao"); onClose() }}
          sx={{
            marginTop: "1rem",
            width: "9rem",
            height: "2.5rem"
          }}
        >
          Educação
        </Button>
        <Button variant="contained" color="primary" onClick={() => { navigate("/pagina-conteudo"); onClose() }}
          sx={{
            marginTop: "1rem",
            width: "9rem",
            height: "2.5rem"
          }}
        >
          conteudo
        </Button>
        <Button variant="contained" color="primary" onClick={() => { navigate("/pagina-inicial"); onClose() }}
          sx={{
            marginTop: "1rem",
            width: "9rem",
            height: "2.5rem"
          }}
        >
          Página Inicial
        </Button>
      </Box>
    </Drawer>
  );
};