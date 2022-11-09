import Logo from '../Logo/Logo'
import Cart from '../Cart/Cart'
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu'
import Searchbox from '../Searchbox/Searchbox'


function Navbar() {
    let menu_items = {
        "Cơm": "#com", 
        "Phở": "#pho", 
        "Đồ ăn vặt": "#doanvat", 
        "Trà sữa": "#trasua", 
        "Bún đậu mắm tôm": "#bundaumamtom"
    };
    return (
        <div className="navbar navbar-expand-lg pt-4 navbar-dark bg-dark">
            <div className="container">
                <div className="col-12">
                    <div className="row w-100 m-0">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" id="navbar-font-link" href="#">Trở thành người bán hàng</a>
                                </li>

                                <li className="nav-item"><p className="nav-link disabled" id="navbar-font-link">|</p></li>

                                <li className="nav-item">
                                    <a className="nav-link active" id="navbar-font-link" href="#">Hỗ trợ</a>
                                </li>

                                <li className="nav-item"><p className="nav-link disabled" id="navbar-font-link">|</p></li>
                                
                                <li clas="nav-item">
                                    <a href="www.facebook.com/MinMinPD2211">
                                        <i className="bi bi-facebook nav-link active" id="navbar-font-link"></i>
                                    </a>
                                </li>
                                <li clas="nav-item">
                                    <a href="www.facebook.com/MinMinPD2211">
                                        <i className="bi bi-twitter nav-link active" id="navbar-font-link"></i>
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-0">
                                <li className="nav-item">
                                    <a className="nav-link active" id="navbar-font-link" href="#">
                                        <i className="bi bi-bell"></i> Thông báo
                                    </a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbar-font-link" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Ngôn ngữ </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Tiếng Việt</a></li>
                                        <li><a className="dropdown-item" href="#">Tiếng Anh</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" id="navbar-font-link" href="#">Đăng ký</a>
                                </li>

                                <li className="nav-item"><p className="nav-link disabled" id="navbar-font-link">|</p></li>

                                <li className="nav-item">
                                    <a className="nav-link active" id="navbar-font-link" href="#">Đăng nhập</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row w-100 m-0 pt-4">
                        <div className="collapse navbar-collapse">
                            <div className="col-3 d-flex">
                                <Logo/>
                            </div>
                            <div className="col-8">
                                <Searchbox/>
                                <HorizontalMenu menu_items/>
                            </div>
                            <div className="col d-flex justify-content-end pb-4 mb-3">
                                <Cart cartLink/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;