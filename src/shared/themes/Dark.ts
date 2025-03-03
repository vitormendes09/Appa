import { createTheme } from '@mui/material'

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#9AA6AF',       
            light: '#7F8A94',      
            contrastText: '#FFFFFF' 
        },
        secondary: {
            main: '#5C677D',      
            dark: '#4A5264',       
            light: '#7D8A9E',      
            contrastText: '#F4F5F7'
        },
        background: {
            paper: '#181B1F',     
            default: '#121417'    
        },
        text: {
            primary: '#E2E6EA',   
            secondary: '#AEB5BF',  
            disabled: '#7D848D'    
        }
    }
});
