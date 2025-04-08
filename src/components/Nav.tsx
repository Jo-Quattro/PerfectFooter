import Contact from "./Contact.tsx";


function Nav(){

    const openMailApp = () => {
        window.location.href = "mailto:contact@example.com"; // Remplace par l'adresse e-mail souhaitée
    };
    return (
        <nav className="nav">
            <ul>
                <li>Home</li>
                <li>Gallery</li>
                <li>About</li>
                <li onClick={openMailApp}>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav;