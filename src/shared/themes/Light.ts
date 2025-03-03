import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#000000',   
            dark: '#1A1A1A',  
            light: '#333333', 
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#EAEAEA',  
            dark: '#D6D6D6',  
            light: '#F7F7F7', 
            contrastText: '#000000' 
        },
        background: {
            paper: '#FFFFFF',  
            default: '#FFFF' 
        },
        text: {
            primary: '#000000',  
            secondary: '#3A3A3A', 
            disabled: '#A0A0A0'  
        }
    }
});
