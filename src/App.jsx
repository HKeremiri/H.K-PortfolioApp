import { useState } from 'react'
import './App.css'
import MainPage from './pages/MainPage'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from './components/Header';
import * as dataTR from "./components/data";
import * as dataEN from "./components/data-en";

function App() {
const [navcolor, setnavColor] = useState("gray");
const [language, setLanguage] = useState('tr');
  const data = language === "tr" ? dataTR : dataEN;
  const theme = createTheme({
    typography: {
      fontFamily: "'Chakra Petch', sans-serif",
    },
  });

 
  return (
    <ThemeProvider  theme={theme}>
        <CssBaseline />
       
  <div className="app-background">
  <Header navcolor={navcolor} setnavColor={setnavColor} setLanguage = {setLanguage} language={language} data={data}/>

   <MainPage navcolor={navcolor} setnavColor={setnavColor} language={language} data={data}>


   </MainPage>
    </div>
    
    </ThemeProvider>

  )
}

export default App
