

function BrandMenu(props) {
    const logos = props.logos;
    const logoMenu = logos.map((logo) => {
        return <div class="col-6 mt-2 mb-2">
                    <div class=" brand-hover">
                        <a href={logo.link} class="erase-underline">
                            <div class="row">
                                <div class="col-12 col-lg-4 ps-0 d-flex align-items-center justify-content-center">
                                    <img src={logo.img} class="itdetail-icon"/>
                                </div>
                                <div class="col-12 col-lg-8 ps-0 d-flex align-items-center justify-content-center">
                                    <span class="me-title text-black text-center">{logo.name}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
    });

    return (
        <>
            {logoMenu}
        </>
    );
}

export default BrandMenu;