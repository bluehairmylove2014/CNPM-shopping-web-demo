
function HorizontalMenu(items_and_links) {
    var main_menu = document.getElementById("horizontal-menu");

    for(const k in items_and_links) {
        let ial_a = document.createElement("a");
        ial_a.href = items_and_links[k];
        ial_a.title = k;
        // main_menu.append(ial_a);
    }

    return(
        <div id="horizontal-menu" className="mt-2">
            <a href="#">bug!!!</a>
        </div>
    );
}

export default HorizontalMenu;