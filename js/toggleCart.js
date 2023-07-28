function toggleCartStatus() {
    const cartEmpty = document.querySelector('[data-cart-empty]')
    const cartWrapper = document.querySelector('.cart-wrapper')
    const order = document.querySelector('#order-form')

    if(cartWrapper.children.length > 0) {
        cartEmpty.classList.add('none')
        order.classList.remove('none')
    } else {
        cartEmpty.classList.remove('none')
        order.classList.add('none')
    }
}