

function ItemInPurchase(props) {
    const items = props.items;
    const item_list = items.map((item) => {
        return  <div class="row p-4">
                    <div class="col-4 p-0">
                        <img src={item.img} class="img-fluid small-img smooth-border"/>
                    </div>
                    <div class="col-8 p-0">
                        <p class="sm-title wrap-text mb-0">{item.name}</p>
                        <p class="sm-title text-indigo mb-0">Thương Hiệu: {item.brand}</p>
                        <p class="sm-title mb-0">Tình trạng: <span class="text-green">{item.status}</span></p>
                        <div class="sm-title mb-0">
                            <i class="fa-solid fa-location-dot "></i>
                            <span>&#160 Giao hàng tại Việt Nam</span>
                        </div>
                        <p class="sm-title"><i class="bi bi-box-seam-fill"></i>&nbsp; Số lượng: {item.quantity}</p>
                    </div>
                </div>
    });
    return(
        <>
            {item_list}
        </>
    );
}

export default ItemInPurchase;