import Logo from "./Logo";
import '../styles/header.css'
import ResponsiveAppBar from "./ResponsiveAppBar";
export default function Header({navcolor,setnavColor }){
    return(
       <ResponsiveAppBar navcolor={navcolor} setnavColor={setnavColor} ></ResponsiveAppBar>
    );
}