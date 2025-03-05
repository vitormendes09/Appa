
import { useTheme, Theme } from "@mui/material/styles"
import { Box, Card, CardMedia, Drawer, IconButton, Typography } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import LinkIcon from '@mui/icons-material/Link';
export const Adobe = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const theme = useTheme()
    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                display: "flex",
                paddingLeft: "10px"
            }}
        >
            <Card sx={{ width: 300, height: "20rem", borderRadius: "8px", overflow: "hidden", boxShadow: 3, textAlign: "center" }}>
                <CardMedia
                    component="img"
                    height="80%" // Ocupa 80% da altura do card
                    image="/templetes/adobe_logo.png"
                    alt="Logo Adobe"
                    sx={{
                        borderBottom: "1px solid #ccc", // Borda inferior da imagem
                    }}
                />

                <Typography
                    sx={{

                    }}
                    variant="h5"
                    color="text.primary"
                    paddingTop="1rem"

                >
                    Adobe Firefly
                </Typography>


            </Card>
            <Box
                sx={{
                    height: "20%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
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
                    component="a"
                    href="https://www.adobe.com/br/products/firefly.html?sdid=JM4FW6VL&mv=search&mv2=paidsearch&ef_id=CjwKCAiAiaC-BhBEEiwAjY99qKsx6JSQXa2bFtsJBpkznOhHOotnTelEMlhccEYZjHhpNTfMwAAXzRoCQ6IQAvD_BwE:G:s&s_kwcid=AL!3085!3!732930139175!e!!g!!adobe%20firefly!20372408557!150845642869&gad_source=1&gclid=CjwKCAiAiaC-BhBEEiwAjY99qKsx6JSQXa2bFtsJBpkznOhHOotnTelEMlhccEYZjHhpNTfMwAAXzRoCQ6IQAvD_BwE"
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
                    <p> IA da Adobe para criação e edição de imagens com comandos de texto.</p>

                </Box>

            </Drawer>



        </Box>
    )
}