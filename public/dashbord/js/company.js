const submitOrder = () => {
    const p_name = document.getElementById('p_name');
    const p_mobile = document.getElementById('p_mobile');
    const p_streetaddress = document.getElementById('p_streetaddress');
    const p_city = document.getElementById('p_city');
    const weight = document.getElementById('weight');
    const quantity = document.getElementById('quantity');
    const cashondelivery = document.getElementById('cashondelivery');
    if (cashondelivery.checked) {
        cashondelivery.value = 1;
    }
    /*************************** */
    const c_name = document.getElementById('c_name');
    const c_mobile = document.getElementById('c_mobile');
    const c_streetaddress = document.getElementById('c_streetaddress');
    const c_city = document.getElementById('c_city');
    if (!p_name.value) {
        return p_name.classList.add('err-border');
    }
    if (!p_mobile.value) {
        return p_mobile.classList.add('err-border');
    } if (!p_streetaddress.value) {
        return p_streetaddress.classList.add('err-border');
    } if (!p_city.value) {
        return p_city.classList.add('err-border');
    } if (!weight.value) {
        return weight.classList.add('err-border');
    } if (!quantity.value) {
        return quantity.classList.add('err-border');
    }
    /********************** */
    if (!c_name.value) {
        return c_name.classList.add('err-border');
    } if (!c_mobile.value) {
        return c_mobile.classList.add('err-border');
    } if (!c_city.value) {
        return c_city.classList.add('err-border');
    } if (!c_streetaddress.value) {
        return c_streetaddress.classList.add('err-border');
    }
    fetch('')
}