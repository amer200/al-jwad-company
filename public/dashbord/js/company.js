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
        console.log("pname")
        return p_name.classList.add('err-border');
    }
    if (!p_mobile.value) {
        console.log("pmobile")
        return p_mobile.classList.add('err-border');
    } if (!p_streetaddress.value) {
        console.log("pstr")
        return p_streetaddress.classList.add('err-border');
    } if (!p_city.value) {
        console.log("p_city")
        return p_city.classList.add('err-border');
    }
    /********************** */
    if (!c_name.value) {
        console.log("cname")
        return c_name.classList.add('err-border');
    } if (!c_mobile.value) {
        console.log("cmob")
        return c_mobile.classList.add('err-border');
    } if (!c_city.value) {
        console.log("ccity")
        return c_city.classList.add('err-border');
    } if (!c_streetaddress.value) {
        console.log("cstr")
        return c_streetaddress.classList.add('err-border');
    }
    if (!weight.value) {
        console.log("w")
        return weight.classList.add('err-border');
    } if (!quantity.value) {
        console.log("q")
        return quantity.classList.add('err-border');
    }
    const data = {
        p_name: p_name.value,
        p_city: p_city.value,
        p_mobile: p_mobile.value,
        p_streetaddress: p_streetaddress.value,
        cashondelivery: cashondelivery.value,
        weight: weight.value,
        quantity: quantity.value,
        c_name: c_name.value,
        c_city: c_city.value,
        c_streetaddress: c_streetaddress.value,
        c_mobile: c_mobile.value

    }
    fetch('/saee/add-new-order', {
        method: "post",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}



function onlyNumberKey(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}