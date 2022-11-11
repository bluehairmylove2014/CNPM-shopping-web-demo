import Logo from '../Logo/Logo'
import Cart from '../Cart/Cart'
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu'
import Searchbox from '../Searchbox/Searchbox'
import Dropdown from '../NavbarDropdown/NavbarDropdown'
import NavLink from '../NavLink/NavLink'

import logo_img from '../../assets/images/logo/SF.png'


function Navbar() {
    let menu_items = {
        "Cơm": "#com", 
        "Phở": "#pho", 
        "Đồ ăn vặt": "#doanvat", 
        "Trà sữa": "#trasua", 
        "Bún đậu mắm tôm": "#bundaumamtom"
    };
    let languages = {
        "Tiếng Việt": "#webtiengviet", 
        "Tiếng Anh": "#webtienganh"
    };
    let leftPartLink = {
        "Trở thành người bán hàng": ["link", "#ttnbh"],
        "vl_1": ["text", "verticalLinear"],
        "Hỗ trợ": ["link", "#ht"],
        "vl_2": ["text", "verticalLinear"],
        "fb-icon": ["icon", "facebook.com/MinMinPD2211", "facebook"],
        "tt-icon": ["icon", "twitter.com/PHAN_DUONG_MINH", "twitter"]
    };
    let rightPartLink_1 = {
        "Thông báo": ["link", "#tb", "bell"]
    };

    let rightPartLink_2 = {
        "Đăng ký": ["link", "#dk"],
        "vl_3": ["text", "verticalLinear"],
        "Đăng nhập": ["link", "#dn"]
    };

    return (
        <div className='bg-dark'>
            <div className="navbar navbar-expand-lg pt-4 navbar-dark">
                <div className="container">
                    {/* Col-12 to fix page style (2 rows in this col) */}
                    <div className="col-12"> 
                        {/* Row 1 include link*/}
                        <div className="row w-100 m-0">
                            <div className="collapse navbar-collapse">
                                {/* Left link nav */}
                                <NavLink links={leftPartLink}/>
                                {/* Right link nav combination of ul (inside another ul to config row) */}
                                <ul className="navbar-nav ml-0">
                                    <NavLink links={rightPartLink_1}/>
                                    <Dropdown languageList={languages}/>
                                    <NavLink links={rightPartLink_2}/>
                                </ul>
                            </div>
                        </div>
                        {/* Row 2 include logo, searchbox, horimenu, cart */}
                        <div className="row w-100 m-0 pt-4">
                            <div className="collapse navbar-collapse">
                                <div className="col-3 d-flex">
                                    <Logo img={logo_img}/>
                                </div>
                                <div className="col-8">
                                    <Searchbox/>
                                    <HorizontalMenu items={menu_items}/>
                                </div>
                                <div className="col d-flex justify-content-end pb-4 mb-3">
                                    <Cart cartLink/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;