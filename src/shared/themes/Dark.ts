import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#1E1E1E',   // Preto suave para menor agressividade visual
            light: '#2A2A2A',  // Tom intermediário para transições
            contrastText: '#FFFFFF' // Texto branco para contraste
        },
        secondary: {
            main: '#383B40',  // Cinza escuro para manter a identidade do tema claro
            dark: '#2E3136',  // Cinza mais fechado
            light: '#4A4D53', // Cinza mais suave para detalhes
            contrastText: '#E0E0E0' // Texto claro para boa leitura
        },
        background: {
            paper: '#121212',  // Preto real para um dark theme verdadeiro
            default: '#181A1B' // Preto suavizado para conforto visual
        },
        text: {
            primary: '#E0E0E0', // Branco quebrado para menos fadiga ocular
            secondary: '#B0B3B8', // Cinza claro para menor destaque
            disabled: '#6D6E72'  // Cinza mais opaco para elementos desativados
        }
    }
});
