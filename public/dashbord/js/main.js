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
const submitForm = () => {
    const myForm = document.getElementById('myForm');
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const street = document.getElementById('street').value;
    const location = document.getElementById('location').value;
    if (password1 == null || password1 == "", password2 == null || password2 == "", name == null || name == "",
        number == null || number == "", email == null || email == "", street == null || street == "", location == null || location == "") {
        alert("كل الحقول مطلوبة")
    } else {
        if (password1 != password2) {
            alert('كلمة المرور غير مطتابقة!');
            password1.style.borderColor = 'red';
            password2.style.borderColor = 'red';
        } else {
            myForm.submit();
        }
    }
}
/* end signup page */
/* login page */
const submitLoginForm = () => {
    const myForm = document.getElementById('myForm');
    const password1 = document.getElementById('password1').value;
    const email = document.getElementById('email').value;
    if (password1 == null || password1 == "", email == null || email == "") {
        alert("كل الحقول مطلوبة")
    } else {
        myForm.submit();
    }
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