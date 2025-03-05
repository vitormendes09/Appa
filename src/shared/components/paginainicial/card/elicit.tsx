import React, { useState } from "react";

import { Card, CardMedia, IconButton, Box, Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InfoIcon from "@mui/icons-material/Info";
import LinkIcon from "@mui/icons-material/Link";

export const Elicit: React.FC = () => {
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

		<Card sx={{ width: 300, height: "10rem" ,borderRadius: "8px", overflow: "hidden", boxShadow: 3 }}>
			{/* Parte superior (imagem) */}
			<CardMedia
				component="img"
				height="80%" // Ocupa 80% da altura do card
				image="/cards/Elicit_logo.png"
				alt="Logo Elicit"
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

				<IconButton
					sx={{ color: theme.palette.text.primary }} // Cor do ícone com base na cor primária do tema
					onClick={handleMenuClick}
					component="a"
                    href="https://elicit.com/?via=khoa&gad_source=1&gclid=CjwKCAiAiaC-BhBEEiwAjY99qDBa-2TAbEuLKV-kalHVnodrra_7r_EaxGToRnk3lEal_GoZGq0hiBoCZn4QAvD_BwE"
                    target="_blank"
                    rel="noopener noreferrer"
				>
					<LinkIcon />
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
								<p>IA voltada para pesquisa acadêmica, ajudando a encontrar artigos científicos relevantes. Resume papers, sugere referências e responde perguntas com base em fontes confiáveis. Útil para estudantes e pesquisadores que precisam de um assistente para revisão de literatura.</p>
			
							</Box>
			
						</Drawer>


		</Card>
	);
};