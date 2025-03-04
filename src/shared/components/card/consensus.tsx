import React, { useState } from "react";

import { Card, CardMedia, IconButton, Box, Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InfoIcon from "@mui/icons-material/Info";

export const Consensus: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const theme = useTheme(); // Acessa o tema atual (claro ou escuro)

	const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
		setMenuOpen(true);
	};

	const handleMenuClose = () => {
		setMenuOpen(false);
		setAnchorEl(null);
	};

	return (

		<Card sx={{ width: 345, height: "10rem" ,borderRadius: "8px", overflow: "hidden", boxShadow: 3 }}>
			{/* Parte superior (imagem) */}
			<CardMedia
				component="img"
				height="80%" // Ocupa 80% da altura do card
				image="/cards/Consensus_logo.avif"
				alt="Logo Consensus"
				sx={{
					borderBottom: "1px solid #ccc", // Borda inferior da imagem
				}}
			/>


			{/* Parte Inferior (ícone) */}

			<Box
				sx={{
					height: "20%",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					backgroundColor: `${theme.palette.secondary.main}99`,
					padding: "0 16px",
					borderRadius: "8px",
				}}
			>

				<IconButton
					sx={{ color: theme.palette.text.primary }} // Cor do ícone com base na cor primária do tema
					onClick={handleMenuClick}
				>
					<InfoIcon />
				</IconButton>


			</Box>

			{/*Menu inderior */}

			<Drawer
							anchor="bottom"
							open={menuOpen}
							onClose={handleMenuClose}
							PaperProps={{
								sx: {
									alignContent: "center",
									width: "90vw", // 80% da largura da tela
									backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#FFFFFF",
									color: theme.palette.mode === "dark" ? "#E0E0E0" : "#000000",
									borderRadius: "10px"
								},
							}}
						>
							<Box p={2}> {/* Conteúdo do menu lateral */}
								<p>Motor de busca baseado em IA que responde perguntas com base em artigos científicos. Utiliza NLP para entender e interpretar pesquisas acadêmicas. Ideal para verificar evidências científicas sobre um determinado tema.
                                </p>
			
							</Box>
			
						</Drawer>


		</Card>
	);
};