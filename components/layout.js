import NavBar from "./navbar";
import Footer from "./footer";

export default function layouts({children}){
return(

    <>
    <NavBar/>
    {children}
    <Footer/>
    </>

)

}