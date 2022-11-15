import "./Cart.css"

function Cart(cartLink) {
    return (
        <a href={cartLink}>
            <i className="bi bi-cart cart-icon"></i>
        </a>
    );
}

export default Cart;