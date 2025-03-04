import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#000000',   // Preto para forte contraste
            dark: '#1A1A1A',  // Preto suavizado para hover e interações
            light: '#333333', // Cinza escuro para botões e detalhes
            contrastText: '#FFFFFF', // Texto branco para botões escuros
        },
        secondary: {
            main: '#EAEAEA',  // Cinza bem claro para destacar sem ser branco puro
            dark: '#D6D6D6',  // Cinza médio para áreas interativas
            light: '#F7F7F7', // Quase branco, para sutileza
            contrastText: '#000000' // Preto para legibilidade
        },
        background: {
            paper: '#FFFFFF',  // Branco puro para máxima clareza
            default: '#FCFCFC' // Branco levemente suavizado para conforto visual
        },
        text: {
            primary: '#000000',  // Preto puro para máxima legibilidade
            secondary: '#3A3A3A', // Cinza escuro para subtítulos e menos destaque
            disabled: '#A0A0A0'  // Cinza médio para elementos desativados
        }
    }
});
