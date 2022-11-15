import React from 'react';
import AddLibGenerator from './components/AddLib/AddLib'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import HeaderInfo from './components/HeaderInfo/HeaderInfo'
import FoodThumnailHorizontal from './components/FoodThumnailHorizontal/FoodThumnailHorizontal'

import banner_1 from "./assets/images/banners/banner-1.png"
import banner_2 from "./assets/images/banners/banner-2.png"
import banner_3 from "./assets/images/banners/banner-3.png"

import sm_banner_1 from "./assets/images/banners/small-banner-1.png"
import sm_banner_2 from "./assets/images/banners/small-banner-2.png"
import sm_banner_3 from "./assets/images/banners/small-banner-3.png"
import sm_banner_4 from "./assets/images/banners/small-banner-4.png"

import f_thum_1 from "./assets/images/foods/FoodThumnail/bun.png"
import f_thum_2 from "./assets/images/foods/FoodThumnail/pho.png"
import f_thum_3 from "./assets/images/foods/FoodThumnail/com.png"
import f_thum_4 from "./assets/images/foods/FoodThumnail/doannhanh.png"
import f_thum_5 from "./assets/images/foods/FoodThumnail/dohan.png"
import f_thum_6 from "./assets/images/foods/FoodThumnail/donhat.png"
import f_thum_7 from "./assets/images/foods/FoodThumnail/donuong.png"
import f_thum_8 from "./assets/images/foods/FoodThumnail/lau.png"

function App() {
    AddLibGenerator('https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js');
    AddLibGenerator('https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js');

    let large_banner = {
        "BNER001": {img: banner_1, link: "banner1.com"},
        "BNER002": {img: banner_2, link: "banner2.com"},
        "BNER003": {img: banner_3, link: "banner3.com"}
    }

    let small_banners_1 = {
        "SMBNER001": {img: sm_banner_1, link: "sm_banner1.com"},
        "SMBNER003": {img: sm_banner_3, link: "sm_banner3.com"}
    }

    let small_banners_2 = {
        "SMBNER002": {img: sm_banner_2, link: "sm_banner2.com"},
        "SMBNER004": {img: sm_banner_4, link: "sm_banner4.com"}
    }

    let food_thumnails = {
        "FTNIL00001": {img: f_thum_1, name: "Bún", link: "thum_1.com"},
        "FTNIL00002": {img: f_thum_2, name: "Phở", link: "thum_2.com"},
        "FTNIL00003": {img: f_thum_3, name: "Cơm", link: "thum_3.com"},
        "FTNIL00004": {img: f_thum_4, name: "Đồ ăn nhanh", link: "thum_4.com"},
        "FTNIL00005": {img: f_thum_5, name: "Đồ Hàn", link: "thum_5.com"},
        "FTNIL00006": {img: f_thum_6, name: "Đồ Nhật", link: "thum_6.com"},
        "FTNIL00007": {img: f_thum_7, name: "Đồ nướng", link: "thum_7.com"},
        "FTNIL00008": {img: f_thum_8, name: "Lẩu", link: "thum_8.com"}
    }

    return (
        <div className='body-bg'>
            <header className="header" id="header">
                <Navbar/>
                <HeaderInfo/>
            </header>
            <div className="container pt-4">
                <section>
                    <div className='row'>
                        <div className='col-8'>
                            <Banner banners={large_banner}/>
                        </div>
                        <div className='col-4'>
                            <div className='row'>
                                <Banner banners={small_banners_1}/>
                            </div>
                            <div className='row pt-2'>
                                <Banner banners={small_banners_2}/>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-3 bg-white">
                    <p className='menu-large-font'>Bạn muốn ăn gì?</p>
                    <FoodThumnailHorizontal thumnails={food_thumnails}/>
                </div>
                <div className="mt-3 bg-white">
                    <p className='menu-large-font'>Gợi ý hôm nay!</p>
                    <FoodThumnailHorizontal thumnails={food_thumnails}/>
                    <FoodThumnailHorizontal thumnails={food_thumnails}/>
                </div>
            </div>
            <footer className='bg-dark mt-4'>
                <div className="container border-bottom border-secondary border-opacity-50">
                    <div className="row pt-5 pb-5">
                        <div className="col-3 d-flex">
                            <i className="bi bi-geo-alt footer-icon"></i>
                            <div>
                                <h4 className='footer-font-bold'>Address</h4>
                                <p className='footer-font'>
                                1264 Kha Van Can Street <br/>
                                Ho Chi Minh, Viet Nam<br/>
                                </p>
                            </div>
                        </div>

                        <div className="col-3 d-flex">
                            <i className="bi bi-telephone footer-icon"></i>
                            <div>
                                <h4 className='footer-font-bold'>Reservations</h4>
                                <p className='footer-font'>
                                    <strong>Phone:</strong> +84 0337839146<br/>
                                    <strong>Email:</strong> phucdat4102@gmail.com<br/>
                                </p>
                            </div>
                        </div>

                        <div className="col-3 d-flex">
                            <i className="bi bi-clock footer-icon"></i>
                            <div>
                                <h4 className='footer-font-bold'>Opening Hours</h4>
                                <p className='footer-font'>
                                <strong>Open 24/24</strong> from<br/>
                                Monday to Sunday
                                </p>
                            </div>
                        </div>

                        <div className="col-3 ps-4">
                            <h4 className='footer-font-bold'>Follow Us</h4>
                            <div className="d-flex">
                                <a href="#" className="erase-underline"><i className="bi bi-twitter footer-social-icon"></i></a>
                                <a href="#" className="erase-underline"><i className="bi bi-facebook footer-social-icon"></i></a>
                                <a href="#" className="erase-underline"><i className="bi bi-instagram footer-social-icon"></i></a>
                                <a href="#" className="erase-underline"><i className="bi bi-linkedin footer-social-icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-5 pb-5">
                    <div className="footer-font text-center">
                        &copy; Copyright <strong><span>Sunrise</span></strong>. All Rights Reserved
                    </div>
                    <div className="footer-font text-center">
                        Designed by <a href="#" className="footer-link">Sunrise Company</a>
                    </div>
                </div>
            </footer>
        </div>

    );
}


export default App;
