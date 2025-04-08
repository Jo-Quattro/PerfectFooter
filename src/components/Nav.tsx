import Contact from "./Contact.tsx";


function Nav(){


    return (
        <nav className="nav">
            <ul>
                <li>Home</li>
                <li>Gallery</li>
                <li>About</li>
                <li onClick={<Contact />}>Contact</li>
            </ul>
        </nav>

    )
}

export default Nav;