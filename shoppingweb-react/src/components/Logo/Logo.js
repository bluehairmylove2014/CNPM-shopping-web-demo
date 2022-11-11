import "./Logo.css"

function Logo(props) {
    return (
        <a className="navbar-brand" href="#">
            <figure className="figure">
                <img src={props.img} className="figure-img img-fluid rounded" alt="SF logo" id='logo'/>
                <figcaption className="figure-caption text-center text-logo">Sunrise Foods</figcaption>
            </figure>
        </a>
    );
}

export default Logo;