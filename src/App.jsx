import { useState } from 'react'
import './App.css'
import MainPage from './pages/MainPage'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from './components/Header';


function App() {
const[navcolor,setnavColor] = useState("gray");

  const theme = createTheme({
    typography: {
      fontFamily: "'Chakra Petch', sans-serif",
    },
  });

 
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
       
  <div className="app-background">
  <Header navcolor={navcolor} setnavColor={setnavColor} />

   <MainPage navcolor={navcolor} setnavColor={setnavColor}>


   </MainPage>
    </div>
    
    </ThemeProvider>

  )
}

export default App
