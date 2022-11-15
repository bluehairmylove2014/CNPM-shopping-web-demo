import "./NavbarDropdown.css"

function NavbarDropdown(props) {
    const languages = props.languageList;
    const langTag = Object.keys(languages).map((lang) => {
        return <li><a className="dropdown-item" href={languages[lang]} key={Math.random()}>{lang}</a></li>
    });
    
    return (
        <li className="nav-item dropdown">
            <a className="nav-link active dropdown-toggle nav-dropdown-font" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Ngôn ngữ </a>
            <ul className="dropdown-menu dropdown-menu-end">
                {langTag}
            </ul>
        </li>
    );
            
}

export default NavbarDropdown;