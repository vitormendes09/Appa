import { Box, Typography, useTheme } from "@mui/material"
export const MessageConteudo =  () => {
    const theme = useTheme();
    return(
        <Box
            marginTop="4.2rem"
            padding="10px"
            fontFamily= "'Lora', sans-serif "
            
            sx={{
                color: theme.palette.text.primary,
                
            
            }}
            >
                <Typography variant="body2" fontWeight="bold" fontSize="1.5rem">
                    IAs mais famosas voltadas para Criação de conteúdo no mercado!
                </Typography>


                
            </Box>
    )
}