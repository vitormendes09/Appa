import { createTheme} from '@mui/material'

export const LightTheme = createTheme({
    palette: {
        primary:{
            main: '#9AA6AF',
            dark: '#7F8A94',
            light: '#BDC4CB',
            contrastText: '#384452',
        },
        secondary: {
            main: '#DDE1E6',
            dark: '#C8CDD4',
            light: '#EFF1F5',
            contrastText: '#2E3742'
        },

        background: {
            paper: '#FFFFFF',    
            default: '#F4F5F7'   
        },
        text: {
            primary: '#2E3742',  
            secondary: '#5C677D',  
            disabled: '#A1A6B2'   
        }
    }
});