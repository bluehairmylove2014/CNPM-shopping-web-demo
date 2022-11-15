import './HeaderInfo.css'

import Logo from '../Logo/Logo'
import Cart from '../Cart/Cart'
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu'
import Searchbox from '../Searchbox/Searchbox'

import logo_img from '../../assets/images/logo/SUNRISE.png'

function HeaderInfo() {
    let menu_items = {
        "Cơm": "#com", 
        "Phở": "#pho", 
        "Đồ ăn vặt": "#doanvat", 
        "Trà sữa": "#trasua", 
        "Bún đậu mắm tôm": "#bundaumamtom"
    };

    return (
        <div className="navbar navbar-expand-lg p-0 bg-white">
            <div className='container pt-4'>
                <div className='row w-100 m-0'>
                    <div className="collapse navbar-collapse">
                        <div className="col-3">
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
    );
}

export default HeaderInfo;