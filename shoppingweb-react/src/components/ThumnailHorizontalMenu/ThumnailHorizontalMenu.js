import './ThumnailHorizontalMenu.css'

function ThumnailHorizontalMenu(props) {
    const img_src = props.imgs;
    const imgTags = Object.keys(img_src).map((k) => {
        return  <div class="carousel-item active">
                    <img src={img_src[k]} keys={k} className="d-block w-100"></img>
                </div>
    });
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    {imgTags}
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default ThumnailHorizontalMenu;