import Logo from "./Logo";
import '../styles/header.css'
import ResponsiveAppBar from "./ResponsiveAppBar";
export default function Header({navcolor,setnavColor, language, setLanguage,data }){
    return(
       <ResponsiveAppBar navcolor={navcolor} setnavColor={setnavColor} language={language} setLanguage={setLanguage} data={data} ></ResponsiveAppBar>
    );
}