import { Box, Typography, useTheme } from "@mui/material";

export const WelcomeMessage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: "left", 
        padding: "50px 20px",
        paddingTop: "150px",
        backgroundImage: "url('/AI_1.jpg')",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: "5px"
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        color="textPrimary"
        sx={{ marginBottom: 1 }}
      >
        {" "}

      </Typography>
      
      <Typography
        sx = {{
            fontFamily: "'Dancing Script', sans-serif ",
        }}
        variant="h5"
        color="text.primary"
        
      >
        Seu guia pelo mundo das IAs
      </Typography>
    </Box>
  );
};
