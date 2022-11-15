import "./Banner.css"

function Banner(prop) {
    let banners = prop.banners;

    let objLength = Object.keys(banners).length;
    const initBann = Math.floor(Math.random() * (objLength));
    const banner_slide_id = Object.keys(banners)[0];
    const banner_slide_idcode = "#" + banner_slide_id;

    const banner_tags = Object.keys(banners).map((k, i) => {
        if(i == initBann) 
            return  <a className="carousel-item active" href={banners[k].link}>
                        <img className="d-block w-100" src={banners[k].img} keys={k} alt="banner"/>
                    </a>
        else
            return  <a className="carousel-item" href={banners[k].link}>
                        <img className="d-block w-100" src={banners[k].img} keys={k} alt="banner"/>
                    </a> 
    });
    const carou_ind_tags = Object.keys(banners).map((k, i) => {
        if(i == initBann) 
            return  <button type="button" data-bs-target={banner_slide_idcode} data-bs-slide-to={i} class="active" aria-current="true"></button>
        else
            return  <button type="button" data-bs-target={banner_slide_idcode} data-bs-slide-to={i}></button>
    });
    return(
        <div id={banner_slide_id} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {carou_ind_tags}
            </div>
            <div className="carousel-inner">
                {banner_tags}
            </div>
        </div>
    );
}

export default Banner;