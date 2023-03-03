const clints = [];
const packsBox = document.getElementById('searchResultPac');
const createSearchResultPac = (id, title) => {
    const myLi = document.createElement('li');
    myLi.classList.add('list-group-item');
    myLi.id = `c${id}`;
    const content = `${title}<div class="btn-group" role="group" aria-label="Basic example" id=""><button class="btn btn-primary" onClick="addClint('${id}', '${title}',this)">اضافة</button></div>`
    myLi.innerHTML = content
    packsBox.appendChild(myLi)
}
const sendSerchPac = (e) => {
    if (e.value !== '') {
        fetch('/get-search-client-result', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ payload: e.value })
        }).then(res => {
            return res.json()
        }).then(data => {
            let payload = data.payload;
            packsBox.innerHTML = ' ';
            payload.forEach(p => {
                createSearchResultPac(p._id, p.name);
            });
        }).catch(err => {
            console.log(err)
        })
    } else {
        packsBox.innerHTML = ' ';
    }
}
const clintsBox = document.getElementById('clints');
const addClint = (id, name, t) => {
    clints.push(id);
    alert('تم اضافة العميل')
    document.getElementById(`c${id}`).remove();
    /**** */
    const myLi = document.createElement('li');
    myLi.classList.add('list-group-item');
    myLi.id = `clint${id}`;
    const content = `${name}<div class="btn-group" role="group" aria-label="Basic example" id=""><button class="btn btn-danger" onClick="addClint('${id}', '${name}',this)">حذف</button></div>`
    myLi.innerHTML = content
    clintsBox.appendChild(myLi)
}
const submitpack = () => {
    const w = document.getElementById('weight').value;
    const q = document.getElementById('quantity').value;
    const d = document.getElementById('desc').value;
    if (w.value == '' || q.value == '' || d.value == '') {
        return alert('كل الحقول مطلوبة')
    }
    if (!clints[0]) {
        return alert('يجب اضافة عملاء')
    }
    const data = {
        weight: w,
        quantity: q,
        desc: d,
        clints: clints
    }
    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            alert('ok')
        })
        .catch(err => {
            alert(err)
        })
}