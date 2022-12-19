

function PaymentMethodsMenu(props) {
    const payment_methods = props.methods;
    const payment_methods_menu = payment_methods.map((method) => {
        return <div class="row pt-2">
                    <div class="col-auto d-flex align-items-center">
                        <input class="form-check-input mt-auto mb-auto me-2" type="checkbox" id={method.key}/>
                    </div>
                    <div class="col-auto d-flex align-items-center">
                        <img src={method.img} class="itdetail-icon"/>
                    </div>
                    <div class="col-auto d-flex align-items-center">
                        <label class="form-check-label" for="momo-method">
                            {method.label}
                        </label>
                    </div>
                </div>
    });

    return (
        <>
            {payment_methods_menu}
        </>
    );
}

export default PaymentMethodsMenu;