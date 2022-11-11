function Searchbox() {
    function searchProcess() {
        alert("Search for " + document.getElementById("search-box").value);
    }

    let placeholder_text = "Cùng tìm kiếm vài món ăn ngon nào!";

    return(
        <div className="input-group">
            <input type="text" className="form-control" id="search-box" placeholder={placeholder_text}/>
            <button type="button" className="btn btn-primary" onClick={searchProcess}>
                <i className="bi bi-search"></i>
            </button>
        </div>
    );
}

export default Searchbox