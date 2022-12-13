
import BrandMenu from '../BrandMenu/BrandMenu'
import FoodList from '../FoodList/FoodList'

import foodThum1 from '../../assets/images/FoodThumnail/bun.png'
import foodThum2 from '../../assets/images/FoodThumnail/pho.png'
import foodThum3 from '../../assets/images/FoodThumnail/doannhanh.png'
import foodThum4 from '../../assets/images/FoodThumnail/dohan.png'
import foodThum5 from '../../assets/images/FoodThumnail/lau.png'
import foodThum6 from '../../assets/images/FoodThumnail/donhat.png'

import sunrise_logo from '../../assets/images/logo/SunriseFoods-logo.png'
import flavorofindia_logo from '../../assets/images/logo/FlavourOfIndia-logo.png'
import panzerhot_logo from '../../assets/images/logo/PanzerHot-logo.png'
import friggitoria from '../../assets/images/logo/Friggitoria-logo.png'

const foods = [
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", fstar: 4, hstar: 0, nstar: 1, rvcount: 12.567, price: 89},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", fstar: 3, hstar: 1, nstar: 1, rvcount: 8.291, price: 25},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", fstar: 5, hstar: 0, nstar: 0, rvcount: 163.523, price: 999},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", fstar: 3, hstar: 1, nstar: 1, rvcount: 1.286, price: 56},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", fstar: 4, hstar: 0, nstar: 1, rvcount: 15.927, price: 102},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", fstar: 3, hstar: 0, nstar: 2, rvcount: 26.546, price: 89},
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", fstar: 4, hstar: 0, nstar: 1, rvcount: 12.567, price: 89},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", fstar: 3, hstar: 1, nstar: 1, rvcount: 8.291, price: 25},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", fstar: 5, hstar: 0, nstar: 0, rvcount: 163.523, price: 999},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", fstar: 3, hstar: 1, nstar: 1, rvcount: 1.286, price: 56},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", fstar: 4, hstar: 0, nstar: 1, rvcount: 15.927, price: 102},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", fstar: 3, hstar: 0, nstar: 2, rvcount: 26.546, price: 89}
];

const restaurant_logo = [
    {img: sunrise_logo, name: "Sunrise Foods", link: "/list"},
    {img: flavorofindia_logo, name: "Flavour of India", link: "/list"},
    {img: panzerhot_logo, name: "Panzer Hot", link: "/list"},
    {img: friggitoria, name: "Friggitoria", link: "/list"}
];

const ListItemDetail = () => {
    return (
        <div class="bg-white">
            <div class="container pt-5">
                <p class="xlg-title mb-0">RESULTS</p>
                <p class="me-title opacity-75">Price and other details may vary based on product size and colour.</p>
                <hr/>
                <div class="row mt-3">
                    <div class="col-12 col-md-4">
                        <i class="bi bi-sliders2-vertical me-title">&nbsp; Bộ lọc</i>
                        <div class="row mt-4">
                            <p class="lger-title pb-2">Khoảng giá</p>
                            <div class="col-6">
                                <form class="form-floating">
                                    <input type="number" class="form-control" id="minprice-filter" placeholder="Từ (.000 VNĐ)" min="0"/>
                                    <label for="minprice-filter">Từ (.000 VNĐ)</label>
                                </form>
                            </div>
                            <div class="col-6">
                                <form class="form-floating">
                                    <input type="number" class="form-control" id="maxprice-filter" placeholder="Từ (.000 VNĐ)" min="0"/>
                                    <label for="maxprice-filter">Đến (.000 VNĐ)</label>
                                </form>
                            </div>
                        </div>

                        <div class="row mt-4">
                            <p class="lger-title pb-2">Sắp xếp theo</p>
                            <div class="col-6">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="highrate-radios" checked/>
                                    <label class="form-check-label" for="highrate-radios">
                                        Đánh giá cao nhất
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="bestseller-radios"/>
                                    <label class="form-check-label" for="bestseller-radios">
                                        Bán chạy nhất
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="lowprice-radios"/>
                                    <label class="form-check-label" for="lowprice-radios">
                                        Giá thấp <i class="bi bi-arrow-right m-auto"></i> cao
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="highprice-radios"/>
                                    <label class="form-check-label" for="highprice-radios">
                                        Giá cao <i class="bi bi-arrow-right"></i> thấp 
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <p class="lger-title pb-2">Thương hiệu</p>
                            <BrandMenu logos={restaurant_logo}/>
                        </div>
                        <hr class="list-splitline mb-5"/>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="row">
                            <FoodList foods={foods}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItemDetail;