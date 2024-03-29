
const submitOrder = () => {
    const p_name = document.querySelector(`#p_name`);
    const p_mobile = document.querySelector(`#p_mobile`)
    const p_streetaddress = document.querySelector(`#p_streetaddress`);
    const p_city = document.querySelector(`#p_city`);
    const weight = document.querySelector(`#weight`);
    const quantity = document.querySelector(`#quantity`)
    const declared_value = document.querySelector(`#declared_value`);
    const cashondelivery = document.querySelector(`#cashondelivery`);
    if (cashondelivery.checked) {
        cashondelivery.value = 1;
    }
    /*************************** */
    const c_name = document.querySelector(`#c_name`)
    const c_mobile = document.querySelector(`#c_mobile`)
    const c_streetaddress = document.querySelector(`#c_streetaddress`)
    const c_city = document.querySelector(`#c_city`)
    /*********************** */
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
    fetch("/saee/create", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data.msg == "تم اضافة الشحنة ") {
                alert(data.msg)
                location.reload();
            }
            alert(data.msg)
        })
        .catch(err => {
            console.log(err)
            alert('خطاء!!')
        })
}



function onlyNumberKey(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

const validateInputs = (co) => {
    const inputs = document.getElementById(co).getElementsByTagName('input');
    inputs.forEach(i => {
        if (!i.value) {
            alert('يجب مليء كل الحقول')
            return false
        }
    });
    return true
}
/********************** */