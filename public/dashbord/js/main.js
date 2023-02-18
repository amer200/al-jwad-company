const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validNumberRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
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