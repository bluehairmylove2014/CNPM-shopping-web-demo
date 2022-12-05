
import PaymentMethodsMenu from '../PaymentMethodsMenu/PaymentMethodsMenu'
import ItemInPurchase from '../ItemInPurchase/ItemInPurchase'

import food from '../../assets/images/FoodThumnail/lau.png'

import momo_icon from '../../assets/images/icons/momo.png'
import banking_icon from '../../assets/images/icons/debit-card.png'
import cod_icon from '../../assets/images/icons/cod.png'
import visa_icon from '../../assets/images/icons/visa.png'

const items = [
    {key:"bbt001", img:food, link:"/item", name:"Bò Bít Tết Hoàng Gia", status: "Còn hàng", brand: "Sunrise Foods", quantity: 1, price: 369},
];

const payment_methods = [
    {key:"momo-method", img: momo_icon, label: "Thanh toán Online bằng Momo (Có mã ưu đãi)"},
    {key:"banking-method", img: banking_icon, label: "Chuyển khoản ngân hàng (Miễn phí phí chuyển)"},
    {key:"cod-method", img: cod_icon, label: "Thanh toán khi nhận hàng (COD)"},
    {key:"visa-method", img: visa_icon, label: "Thanh toán Online bằng Visa, Master, JCB (Miễn phí phí chuyển)"}
];

const BuyDetail = () => {
    return(
        <div class="container pt-5">
            <div class="row pb-4">
                <div class="col-12 col-lg-8">
                    <div class="bg-white">
                        {/* {{!-- Infor fullfill --}} */}
                        <div class="p-4 pt-3">
                            <p class="itdetail-lg-title">Để đặt hàng, vui lòng điền thông tin dưới đây.</p>
                            <div class="row pt-3">   
                                <div class="col-6">
                                    <input type="text" class="form-control" placeholder="Họ và tên"/>
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" placeholder="Số điện thoại"/>
                                </div>
                            </div>
                            <div class="pt-3">
                                <input type="text" class="form-control" placeholder="Địa chỉ"/>
                            </div>

                            <div class="row">
                                <div class="col-12 col-lg-4 pt-3">
                                    <select class="form-select" name="ls_province"></select>
                                </div>
                                <div class="col-12 col-lg-4 pt-3">
                                    <select class="form-select" name="ls_district"></select>
                                </div>
                                <div class="col-12 col-lg-4 pt-3">
                                    <select class="form-select" name="ls_ward"></select>
                                </div>
                            </div>

                            <div class="pt-3">
                                <input type="text" class="form-control" placeholder="Lời nhắn cho nhà hàng"/>
                            </div>
                        </div>
                        {/* {{!-- End infor fullfill --}} */}
                    </div>

                    <div class="col mb-3">
                        <div class="bg-white mt-3 p-4 pt-3">
                            {/* {{!-- Payment methods select --}} */}
                            <p class="itdetail-lg-title pb-4">Hãy chọn phương thức thanh toán.</p>

                            <PaymentMethodsMenu methods={payment_methods}/>
                            {/* {{!-- End payment methods select --}}    */}
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="bg-white h-100">
                        <div class="rtab">
                            <i class="bi bi-credit-card-2-front-fill"><span class="lg-title"> Payment</span></i>

                            <ItemInPurchase items={items}/>
                            <div class="row p-4 pt-0 pb-3">
                                <hr/>
                                <div class="col-8 p-0">
                                    <input type="text" class="form-control" id="coupon-input" placeholder="Mã giảm giá"/>
                                </div>
                                <div class="col-4 pe-0">
                                    <button class="smooth-square-button">Áp dụng</button>
                                </div>
                            </div>
                            <div class="row p-4 pt-0 pb-3">
                                <hr/>
                                <div class="d-flex">
                                    <p class="me-title m-auto ms-0">Tạm tính:</p>
                                    <p class="me-title">49.000 VNĐ</p>
                                </div>
                                <div class="d-flex">
                                    <p class="me-title m-auto ms-0">Phí vận chuyển:</p>
                                    <p class="me-title">20.000 VNĐ</p>
                                </div>
                            </div>
                            <div class="row p-4 pt-0">
                                <hr/>
                                <div class="d-flex">
                                    <p class="lg-title m-auto ms-0">Tổng cộng</p>
                                    <p class="lg-title">69.000 VNĐ</p>
                                </div>
                            </div>
                            <div class="row p-4 pt-0">
                                <div class="d-flex justify-content-end p-0">
                                    <button class="rtab-buying-button"><p class="me-title">Đặt hàng</p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyDetail;