import React from 'react';
  
export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}

function App() {
  return (

    <div className="bg-dark">
        {AddLibrary('https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js')}
        {AddLibrary('https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js')}
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
                                <a className="navbar-brand" href="#">
                                    <div className="col">
                                        <img src="./image/SF.png" alt="SF" id="logo" />
                                        <p className="text-logo">Sunrise Foods</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-8">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="search-box" placeholder="Cùng tìm kiếm vài món ăn ngon nào!" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <button type="button" className="btn btn-primary" onclick="searchProcess()">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                                <div className="mt-2">
                                    <a href="#" className="font-link">Cơm</a>
                                    <a href="#" className="font-link">Phở</a>
                                    <a href="#" className="font-link">Đồ ăn vặt</a>
                                    <a href="#" className="font-link">Trà sữa</a>
                                    <a href="#" className="font-link">Bún đậu mắm tôm</a>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-end pb-4 mb-3">
                                <a href="#">
                                    <i className="bi bi-cart" id="cart-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

function searchProcess() {
    let key = document.getElementById("search-box").value;
    window.alert("Search for " + key);
}

export default App;
