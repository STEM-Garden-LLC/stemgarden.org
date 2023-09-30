import { React } from 'react'

// import { FormspreeProvider } from '@formspree/react';
import { BrowserRouter } from "react-router-dom"


// My Components
import { Navbar } from './components/navigation';
import MainRouter from './MainRouter'


// THEME & Layout Context
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles';
import { AppContextProvider } from './AppContext';
import { Box, CssBaseline } from '@mui/material';



export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppContextProvider >
          {/* <FormspreeProvider project="1960964562039602920" > */}
          {/* <FormspreeProvider project={process.env.REACT_APP_FORMSPREE_PROJECT_ID} > */}
            <Box 
              id='App' 
              bgcolor='primary.main'
              height='100vh'
              width='100vw'
              // overflowX='hidden'
              // overflowY='scroll'
            >
              <BrowserRouter>
                <Navbar /> 
                <MainRouter />
              </BrowserRouter>
            </Box>
          {/* </FormspreeProvider> */}
        </AppContextProvider>
      </ThemeProvider>
    </>
  )
}


