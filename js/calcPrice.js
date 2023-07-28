function calcPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const priceElements = cartWrapper.querySelectorAll('.price__currency')
    const priceResult = document.querySelector('.total-price')
    const deliveryWrapper = document.querySelector('[data-delivery]')
    const deliveryElement = deliveryWrapper.querySelector('.delivery-cost')
    const priceDelivery = 150

    console.log(priceResult);

    let totalPrice = 0

    priceElements.forEach((item) => {
        const amount = item.closest('.cart-item').querySelector('[data-counter]');
        const currencyPrice = parseInt(amount.innerText) * parseInt(item.innerText)
        totalPrice += currencyPrice
    })

    priceResult.innerText = totalPrice

    if(totalPrice + priceDelivery < 1000) {
       deliveryElement.classList.remove('free')
       deliveryElement.innerText = `${priceDelivery} ₽`
       priceResult.innerText = totalPrice + priceDelivery
    } else {
        deliveryElement.innerText = 'бесплатно'
        deliveryElement.classList.add('free')
    }
}