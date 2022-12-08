
import $ from 'jquery'; 

import CartItem from '../CartItem/CartItem'
import RightTab from '../RightTab/RightTab'

import foodThum1 from '../../assets/images/FoodThumnail/bun.png'
import foodThum2 from '../../assets/images/FoodThumnail/pho.png'
import foodThum3 from '../../assets/images/FoodThumnail/doannhanh.png'
import foodThum4 from '../../assets/images/FoodThumnail/dohan.png'
import foodThum5 from '../../assets/images/FoodThumnail/lau.png'
import foodThum6 from '../../assets/images/FoodThumnail/donhat.png'

const items = [
    {key:"bbt001", img:foodThum5, link:"/item", name:"Bò Bít Tết Hoàng Gia", status: "Còn hàng", brand: "Sunrise Foods", notice: "Raw meet and clean decoration", price: 369},
    {key:"ggt001", img:foodThum2, link:"/item", name:"Gỏi Gia Truyền Truyền Từ Thời Ông Cố Nội", status: "Còn hàng", brand: "Sunrise Foods", notice: "Raw meet and clean decoration", price: 171}
]

const recommend = [
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", fstar: 5, hstar: 0, nstar: 0, rvcount: 163.523, price: 999},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", fstar: 3, hstar: 1, nstar: 1, rvcount: 1.286, price: 56},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", fstar: 4, hstar: 0, nstar: 1, rvcount: 15.927, price: 102},
    {img: foodThum1, name: "Cơm Chay Chỉ Thiên", link: "/item", fstar: 3, hstar: 0, nstar: 2, rvcount: 26.546, price: 89}
]

function sellectAllClick(e) {
    if (e.currentTarget.checked) {
        $('.sellectItem').find('input[type="checkbox"]').prop('checked', true);
    } else {    
        $('.sellectItem').find('input[type="checkbox"]').prop('checked', false);
    }
}

const CartDetail = () => {

    return (
        <div className="container mt-5">
            <div className="row pb-5">
                {/* {{!-- Main content --}} */}
                <div className="col-12 col-xl-9">
                    <div className="bg-white ctdetail">
                        <p className="ctdetail-xxlg-title">Shopping Cart</p>
                        <div>
                            <div className="form-check align-left">
                                <input className="form-check-input sellectItem" type="checkbox" id="sellectAll" onChange={sellectAllClick}/>
                                <label className="form-check-label" for="sellectAll">Sellect All</label>
                            </div>
                            <p className="align-right">Price</p>
                        </div>
                        <br/><hr/>

                        {/* {{!-- Items --}} */}
                        <CartItem items={items}/>

                        <div className="row" id="subtotal-main">
                            <span><p className="me-title align-right wrap-text">Subtotal (2 items): <b>540.000VNĐ</b></p></span>
                            <a href="/buy"><button className="btn btn-outline-dark rtab-detail-button align-right" id="checkout-btn-main">Checkout</button></a>
                        </div>
                    </div>
                    {/* {{!-- End page expand --}} */}
                    <div id="endpage-expand">
                        <div className="bg-white ctdetail mb-2"><br/></div>
                        <p className="ctdetail-smler-text">The price and availability of items at Sunrise.sg are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price. Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
                    </div>
                </div>
                {/* {{!-- Right site bar --}} */}
                <div className="col-12 col-xl-3">
                    <div className="bg-white rtab mb-4" id="subtotal-rtab">
                        <i className="bi bi-credit-card-2-front-fill"><span className="lg-title"> Payment</span></i>
                        <div className="text-center">
                            <p className="lg-title mt-2 wrap-text" id="cart-subtotal">Subtotal (2 items): <b>540.000VNĐ</b></p>
                            <a href="/buy"><button className="rtab-buying-button" id="checkout-btn-rtab">Checkout</button></a>
                        </div>
                    </div>
                    <RightTab items={recommend}/>
                    {/* {{!-- second end page expand --}} */}
                    <div id="scnd-endpage-expand">
                        <div className="bg-white ctdetail mt-4 mb-2"><br/></div>
                        <p className="ctdetail-smler-text">The price and availability of items at Sunrise.sg are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price. Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetail;
