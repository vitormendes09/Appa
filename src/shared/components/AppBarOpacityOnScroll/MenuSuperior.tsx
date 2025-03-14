import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, InputBase, Box, Drawer, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Search, Menu, LightMode, DarkMode } from "@mui/icons-material";
import { useAppThemeContext } from "../../contexts";
import { MenuLateral } from "../MenuLatral/MenuLateral";

// Estilos personalizados
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.5)", // Transparente respeitando o tema
  borderBottom: `2px solid ${theme.palette.primary.main}`, // Borda sólida
  backdropFilter: "blur(10px)", // Efeito de vidro fosco
}));

const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "20px",
  padding: "4px 10px",
  width: "40%",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
}));

const StyledInputBase = styled(InputBase)({
  flex: 1,
  marginLeft: 8,
});

export const MenuSuperior: React.FC = () => {
  const { toggleTheme, themeName } = useAppThemeContext();
  const [darkMode, setDarkMode] = useState(themeName === "dark");
  const [menuAberto, setMenuAberto] = useState(false);

  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
    toggleTheme();
  };

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ fontWeight: "bold", fontSize: "1.5rem", cursor: "pointer" }}>
            <img
              src={`${process.env.PUBLIC_URL}/logofundoremovido.png`}
              alt="Logo"
              style={{ height: "100%", maxHeight: "60px", objectFit: "contain" }}
            />

          </Box>

          {/* Barra de Pesquisa */}
          <Box>
            <Typography
              component="span"
              variant="h2"
              fontWeight="bold"
              sx={{
                fontFamily: "'Lora', sans-serif ",
                fontSize: "2.5rem",
                color: "text.primary", // Cor diferente para APPA
                paddingLeft: "2rem"
              }}
            >
              APPA
            </Typography>
          </Box>

          {/* Botões da direita */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {/* Botão de alternância de tema */}
            <IconButton onClick={handleToggleTheme} sx={{ border: "1px solid", borderRadius: "50%" }}>
              {darkMode ? <DarkMode /> : <LightMode />}
            </IconButton>

            {/* Botão para abrir menu lateral */}
            <IconButton sx={{ border: "1px solid", borderRadius: "50%" }}
              onClick={() => setMenuAberto(true)}  >
              <Menu />

            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>

      {/* Menu Lateral */}

      <MenuLateral open={menuAberto} onClose={() => setMenuAberto(false)} />

    </>
  );
};

