import "./Logo.css"

function Logo(props) {
    return (
        <a className="navbar-brand pb-0" href="#">
            <figure className="figure mb-0">
                <img src={props.img} className="figure-img img-fluid rounded" alt="SF logo" id='logo'/>
            </figure>
        </a>
    );
}

export default Logo;