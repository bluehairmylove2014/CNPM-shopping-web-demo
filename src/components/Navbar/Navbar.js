
import Dropdown from '../NavbarDropdown/NavbarDropdown'
import NavLink from '../NavLink/NavLink'
import "./Navbar.css"


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
        "Thông báo": ["link", "#tb", "bell"],
    };

    let rightPartLink_2 = {
        "Đăng ký": ["link", "#dk"],
        "vl_3": ["text", "verticalLinear"],
        "Đăng nhập": ["link", "#dn"]
    };

    return (
        <nav>
            <div className="navbar navbar-expand-lg pt-0 pb-0 header-bar-color">
                <div className="container p-0">
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
            </div>
        </nav>
    );
}

export default Navbar;