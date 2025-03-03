import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#1E1E1E',   
            light: '#2A2A2A', 
            contrastText: '#FFFFFF' 
        },
        secondary: {
            main: '#383B40',  
            dark: '#2E3136',  
            light: '#4A4D53',
            contrastText: '#E0E0E0' 
        },
        background: {
            paper: '#121212',  
            default: '#181A1B' 
        },
        text: {
            primary: '#E0E0E0', 
            secondary: '#B0B3B8', 
            disabled: '#6D6E72'  
        }
    }
});
