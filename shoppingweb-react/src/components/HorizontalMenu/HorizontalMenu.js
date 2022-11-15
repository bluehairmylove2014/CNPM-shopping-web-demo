import "./HorizontalMenu.css"

function HorizontalMenu(props) {
    const items = props.items;
    // {}
    // map: ["com", "pho", ...] -> [<a>, <a> ]
    const menu = Object.keys(items).map((el, i) => {
        return <a href={items[el]} className="nav-menu-font" key={i}>{el}</a>
    });
    return (
        <div className="mt-2">
            {menu}
        </div>
    )
}

export default HorizontalMenu;