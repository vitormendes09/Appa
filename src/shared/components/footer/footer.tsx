import { Box, Typography, useTheme } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        padding: "1.5rem 0",
        textAlign: "center",
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        borderTop: `1px solid ${theme.palette.secondary.dark}`,
        marginTop: "2.5rem"
      }}
    >
      <Typography variant="body2" fontWeight="bold">
        © {new Date().getFullYear()} Todos os direitos atribuídos a Vitor Mendes.
      </Typography>
    </Box>
  );
};
