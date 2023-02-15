/** index page*/
const clintBox = document.getElementById('clint-box');
const packageBox = document.getElementById('package-box');
const boxes = [clintBox, packageBox];

const showBox = (boxId) => {
    const box = document.getElementById(`${boxId}`);
    boxes.forEach(b => {
        b.classList.add('d-none');
    })
    box.classList.remove('d-none');
}
/**end indexe page */
/* signup page */
const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validNumberRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
const submitForm = () => {
    const myForm = document.getElementById('myForm');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const name = document.getElementById('name');
    const number = document.getElementById('number');
    const email = document.getElementById('email');
    const street = document.getElementById('street');
    const location = document.getElementById('location');
    if (password1.value == null || password1.value == "", password2.value == null || password2.value == "", name.value == null || name.value == "",
        number.value == null || number.value == "", email.value == null || email.value == "", street.value == null || street.value == "", location.value == null || location.value == "") {
        alert("كل الحقول مطلوبة")
        password1.style.border = '2px solid red';
        password2.style.border = '2px solid red';
        name.style.border = '2px solid red';
        number.style.border = '2px solid red';
        email.style.border = '2px solid red';
        street.style.border = '2px solid red';
        location.style.border = '2px solid red';
        return false
    }
    if (name.value.length < 4) {
        alert('اسم المتجر يجب ان يكون اكبر من 4 حروف')
        name.style.border = '2px solid red';
        return false
    }
    if (!email.value.match(validEmailRegex)) {
        alert('يجب كتابة بريد الكتروني صحيح')
        email.style.border = '2px solid red';
        return false
    }
    if (password1.value != password2.value) {
        alert('كلمة المرور غير مطتابقة!');
        password1.style.border = '2px solid red';
        password2.style.border = '2px solid red';
        return false;
    }
    if (password1.value.length < 8) {
        alert('كلمة المرور قصيرة !');
        password1.style.border = '2px solid red';
        return false
    }
    if (number.value.length != 12) {
        alert('يجب كتابة رقم جوال صحيح');
        number.style.border = '2px solid red';
        return false
    }
    if (street.value.length < 10) {
        alert('العنوان قصير جدا!')
        street.style.border = '2px solid red';
        return false
    }
    if (location.value.length < 10) {
        alert('الموقع قصير جدا!')
        location.style.border = '2px solid red';
        return false
    }
    myForm.submit();
}
/* end signup page */
/* login page */
const submitLoginForm = () => {
    const myForm = document.getElementById('myForm');
    const password1 = document.getElementById('password1').value;
    const email = document.getElementById('email').value;
    if (password1 == null || password1 == "", email == null || email == "") {
        alert("كل الحقول مطلوبة")
        return false
    }
    if (!email.match(validEmailRegex)) {
        alert('يجب كتابة بريد الكتروني صحيح')
        return false
    }
    myForm.submit();
}
/* end login page */
/* client  page */
const removeClient = (id, name) => {
    if (confirm(`سيتم حذف بينات العميل : ${name} نهائيا`)) {
        fetch(`/remove-client/${id}`)
            .then(res => {
                location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }
}
const resultBox = document.getElementById('searchResult');
const createSearchResult = (id, title) => {
    const myLi = document.createElement('li');
    myLi.classList.add('list-group-item');
    const content = `${title}<div class="btn-group" role="group" aria-label="Basic example"><button type="button" class="btn btn-primary" data-bs-toggle="modal"data-bs-target="#edit-clint-modal${id}">عرض/تعديل</button><button type="button" class="btn btn-danger"onclick="removeClient('${id}', '${title}')">حذف</button></div>`
    myLi.innerHTML = content
    resultBox.appendChild(myLi)
}
const sendSerch = (e) => {
    if (e.value !== '') {
        fetch('/get-search-client-result', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ payload: e.value })
        }).then(res => {
            return res.json()
        }).then(data => {
            let payload = data.payload;
            resultBox.innerHTML = ' ';
            payload.forEach(p => {
                createSearchResult(p._id, p.name);
            });
        }).catch(err => {
            console.log(err)
        })
    } else {
        resultBox.innerHTML = ' ';
    }
}
/* end client page */