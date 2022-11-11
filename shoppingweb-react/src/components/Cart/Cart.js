import "./Cart.css"

function Cart(cartLink) {
    return (
        <a href={cartLink}>
            <i className="bi bi-cart" id="cart-icon"></i>
        </a>
    );
}

export default Cart;