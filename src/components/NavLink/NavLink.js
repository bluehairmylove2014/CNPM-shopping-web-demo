import "./NavLink.css"

var menu = {
    "verticalLinear": "|",
    "horizontalLinear": "-"
}

var icon = {
    "bell": "bi bi-bell",
    "facebook": "bi bi-facebook",
    "twitter": "bi bi-twitter"
}

function NavLink(props) {
    const links = props.links;
    const linkTags = Object.keys(links).map((linkTag, index) => {
        if(links[linkTag][0] == "text") {
            return <li className="nav-item"><p className="nav-link disabled navbar-font-link pb-2 m-0">{menu[links[linkTag][1]]}</p></li>
        }
        else if(links[linkTag][0] == "icon") {
            return  <li className="nav-item">
                        <a href={links[linkTag][1]} className="nav-link active navbar-icon  pb-2 m-0">
                            <i className={icon[links[linkTag][2]]}></i>
                        </a>
                    </li>
        }
        else if(links[linkTag][0] == "link") {
            if(links[linkTag].length == 2)
                return <li className="nav-item"><a className="nav-link active navbar-font-link pb-2 m-0" href={links[linkTag][1]}>{linkTag}</a></li>
            else
                return  <li className="nav-item"><a className="nav-link active navbar-font-link pb-2 m-0" href={links[linkTag][0]}>
                            <i className={icon[links[linkTag][2]]} id="navbar-icon-with-text"></i>{linkTag}
                        </a></li>
        }
        else {
            return <div><p>Error: Invalid input</p></div>
        }
    });
    return (
        <ul className="navbar-nav me-auto">{linkTags}</ul>
    );
}

export default NavLink;