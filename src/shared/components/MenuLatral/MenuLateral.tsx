import React from "react";
import { Drawer, Box } from "@mui/material";
import { useAppThemeContext } from "../../contexts";

interface MenuLateralProps {
  open: boolean;
  onClose: () => void;
}

export const MenuLateral: React.FC<MenuLateralProps> = ({ open, onClose }) => {
  const { themeName } = useAppThemeContext();
  
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "30vw", // 20% da largura da tela
          backgroundColor: themeName === "dark" ? "#121212" : "#FFFFFF",
          color: themeName === "dark" ? "#E0E0E0" : "#000000",
        },
      }}
    >
      <Box p={2}> {/* Conteúdo do menu lateral */}
        <p>Opção 1</p>
        <p>Opção 2</p>
        <p>Opção 3</p>
      </Box>
    </Drawer>
  );
};