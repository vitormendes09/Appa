
import { useTheme, Theme } from "@mui/material/styles"
import { Box, Card, CardMedia, Drawer, IconButton, Typography } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
import LinkIcon from '@mui/icons-material/Link';
import { useState } from "react";
export const Microsoft = () => {

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
                paddingLeft: "10px",
                marginTop: "0.5rem"
            }}
        >
            <Card sx={{ width: 300, height: "18rem", borderRadius: "8px", overflow: "hidden", boxShadow: 3, textAlign: "center" }}>
                <CardMedia
                    component="img"
                    height="70%" // Ocupa 80% da altura do card
                    image={`${process.env.PUBLIC_URL}/templetes/Microsoft_logo.jpg`}
                    alt="Logo Microsoft"
                    sx={{
                        borderBottom: "1px solid #ccc", // Borda inferior da imagem
                    }}
                />

                <Typography
                    sx={{
                        
                    }}
                    variant="h5"
                    color="text.primary"
                    marginTop="1rem"

                >
                    Azure Machine Learning
                </Typography>


            </Card>
            <Box
                sx={{
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: `${theme.palette.secondary.main}99`,
                    padding: "0 16px",
                    borderRadius: "8px",
                    flexDirection:"column"
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
                    href="https://azure.microsoft.com/pt-br/pricing/purchase-options/azure-account/search?icid=free-search&ef_id=_k_CjwKCAiAiaC-BhBEEiwAjY99qMqD25E4B7EQmLxcFbGkUxa9wqniTohSA3TjrMOBXibymIpYVBd2wRoCyXAQAvD_BwE_k_&OCID=AIDcmmzmnb0182_SEM__k_CjwKCAiAiaC-BhBEEiwAjY99qMqD25E4B7EQmLxcFbGkUxa9wqniTohSA3TjrMOBXibymIpYVBd2wRoCyXAQAvD_BwE_k_&gad_source=1&gclid=CjwKCAiAiaC-BhBEEiwAjY99qMqD25E4B7EQmLxcFbGkUxa9wqniTohSA3TjrMOBXibymIpYVBd2wRoCyXAQAvD_BwE"
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
                    <p> Plataforma da Microsoft para desenvolvimento e gerenciamento de modelos de machine learning. Possui recursos avançados de análise preditiva e automação de insights.</p>

                </Box>

            </Drawer>



        </Box>
    )
}