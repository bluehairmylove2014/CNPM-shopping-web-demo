import SunriseFoodsLogo from '../../assets/SF.png'

function Logo() {
    return (
        <a class="navbar-brand" href="#">
            <figure class="figure">
                <img src={SunriseFoodsLogo} class="figure-img img-fluid rounded" alt="SF logo" id='logo'/>
                <figcaption class="figure-caption text-center text-logo">Sunrise Foods</figcaption>
            </figure>
        </a>
    );
}

export default Logo;