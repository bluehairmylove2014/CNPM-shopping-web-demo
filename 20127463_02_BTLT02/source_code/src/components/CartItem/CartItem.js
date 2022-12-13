

function CartItem(props) {
    const items = props.items;
    let itemList = items.map((item) => {
        return  <div className="row">
                    <div className="col-3 d-flex align-items-center">
                        <div className="form-check d-flex align-items-center sellectItem">
                            <input className="form-check-input" type="checkbox" id={item.key}/>
                        </div>
                        <a href={item.link}>
                            <img src={item.img} className="img-fluid"/>
                        </a>
                    </div>
                    <div className="col-7 ctdetail-itemdetail">
                        <a href={item.link} className="ctdetail-item-title erase-underline text-black">{item.name}</a>
                        <p className="ctdetail-item-sm-detail text-green"><b>{item.status}</b></p>
                        <p className="ctdetail-item-sm-detail">Delivered from and sold by {item.brand}</p>
                        <p className="ctdetail-item-me-detail"><b>Your option: </b>{item.notice}</p>
                        
                        <div className="row mt-2 mb-2">
                            <div className="col form-group">
                                <label for={item.key}>Quantity: </label>
                                <span className="d-inline-block">
                                    <input type="number" className="form-control small-img" id={item.key} value={1} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="row h-50">
                            <p className="d-flex justify-content-start align-items-center cart-item-price"><b>{item.price}.000VNĐ</b></p>
                        </div>
                        <div className="row h-50">
                            <div className="d-flex justify-content-end align-items-end">
                                <button className="btn ctdetail-delete-button">Delete</button>
                            </div>
                        </div>
                    </div>
                    <hr className="m-2"/>
                </div>
    });

    return (
        <>
            {itemList}
        </>
    );
}

export default CartItem;