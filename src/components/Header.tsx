import Nav from "./Nav.tsx";




function Header(){
const imgLogo="public/vite.svg"
    return (
        <>
            <img src={imgLogo} className="imgLogo" alt="logo"/>
            <Nav />
        </>
    )
}


export default Header
